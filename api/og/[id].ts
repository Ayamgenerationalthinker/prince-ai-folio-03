import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUPABASE_URL = "https://jdlceymfolzxxkgkyhpt.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkbGNleW1mb2x6eHhrZ2t5aHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5MzY3MTQsImV4cCI6MjA4MzUxMjcxNH0.CaeITgNnOKUOrxXKcjhqs1gA1ZUqMAVUSb6AVdm2MBI";

const BOT_USER_AGENTS = [
  "facebookexternalhit", "Facebot", "Twitterbot", "LinkedInBot",
  "WhatsApp", "Slackbot", "TelegramBot", "Discordbot", "Googlebot",
  "bingbot", "Baiduspider", "DuckDuckBot", "Embedly", "Pinterest",
  "vkShare", "redditbot", "Applebot", "SkypeUriPreview",
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.redirect(302, "/blog");
  }

  // Check if request is from a bot
  const userAgent = req.headers["user-agent"] || "";
  const isBot = BOT_USER_AGENTS.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  const siteUrl = "https://prince-ai-folio-03.lovable.app";

  // If not a bot, serve the SPA index.html
  if (!isBot) {
    return res.redirect(302, `${siteUrl}/index.html#/blog/${id}`);
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?id=eq.${id}&published=eq.true&select=title,summary,image_url,created_at`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );

    const data = await response.json();
    const post = data?.[0];

    if (!post) {
      return res.redirect(302, "/blog");
    }

    const pageUrl = `${siteUrl}/blog/${id}`;
    const imageUrl = post.image_url?.startsWith("http")
      ? post.image_url
      : `${siteUrl}${post.image_url}`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(post.title)} | Prince Fiebor</title>
  <meta name="description" content="${escapeHtml(post.summary)}" />
  <meta name="author" content="Prince Ofosu Fiebor" />

  <meta property="og:title" content="${escapeHtml(post.title)}" />
  <meta property="og:description" content="${escapeHtml(post.summary)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Prince Fiebor" />
  <meta property="article:published_time" content="${post.created_at}" />
  <meta property="article:author" content="Prince Ofosu Fiebor" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(post.title)}" />
  <meta name="twitter:description" content="${escapeHtml(post.summary)}" />
  <meta name="twitter:image" content="${imageUrl}" />

  <link rel="canonical" href="${pageUrl}" />

  <!-- Redirect non-bot users to the SPA -->
  <meta http-equiv="refresh" content="0;url=${pageUrl}" />
</head>
<body>
  <h1>${escapeHtml(post.title)}</h1>
  <p>${escapeHtml(post.summary)}</p>
  <p><a href="${pageUrl}">Read full article</a></p>
</body>
</html>`;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).send(html);
  } catch (error) {
    return res.redirect(302, `/blog/${id}`);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
