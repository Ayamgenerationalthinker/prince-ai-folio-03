import { NextRequest, NextResponse } from "next/server";

const BOT_USER_AGENTS = [
  "facebookexternalhit",
  "Facebot",
  "Twitterbot",
  "LinkedInBot",
  "WhatsApp",
  "Slackbot",
  "TelegramBot",
  "Discordbot",
  "Googlebot",
  "bingbot",
  "Baiduspider",
  "DuckDuckBot",
  "Embedly",
  "Pinterest",
  "vkShare",
  "redditbot",
  "Applebot",
  "SkypeUriPreview",
];

export const config = {
  matcher: "/blog/:id*",
};

export default function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  const isBot = BOT_USER_AGENTS.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (isBot) {
    // Extract the blog post ID from the URL
    const url = new URL(req.url);
    const pathParts = url.pathname.split("/");
    const id = pathParts[pathParts.length - 1];

    if (id && id !== "blog") {
      // Rewrite to the serverless function that serves OG meta tags
      return NextResponse.rewrite(new URL(`/api/og/${id}`, req.url));
    }
  }

  // For normal users, continue to the SPA
  return NextResponse.next();
}
