const BOT_USER_AGENTS = [
  "facebookexternalhit", "Facebot", "Twitterbot", "LinkedInBot",
  "WhatsApp", "Slackbot", "TelegramBot", "Discordbot", "Googlebot",
  "bingbot", "Baiduspider", "DuckDuckBot", "Embedly", "Pinterest",
  "vkShare", "redditbot", "Applebot", "SkypeUriPreview",
];

export const config = {
  matcher: "/blog/:path*",
};

export default function middleware(request: Request) {
  const userAgent = request.headers.get("user-agent") || "";
  const isBot = BOT_USER_AGENTS.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (isBot) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split("/");
    const id = pathParts[pathParts.length - 1];

    if (id && id !== "blog") {
      const apiUrl = new URL(`/api/og/${id}`, request.url);
      return fetch(apiUrl);
    }
  }

  // Non-bot users: continue to SPA (no rewrite needed)
  return undefined;
}
