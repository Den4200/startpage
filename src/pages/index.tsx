import { useEffect, useState } from "react";
import Bookmarks from "@/components/Bookmarks";
import Searchbar from "@/components/Searchbar";
import BookmarkPalette from "@/components/BookmarkPalette";

const Home = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div className="w-full">
        <div className="space-y-8">
          <h1 className="text-center text-6xl text-theme-beige">
            &gt; cd ~/
            <span className="animate-blink">_</span>
          </h1>

          <Searchbar />
          <Bookmarks bookmarks={BOOKMARKS} />
        </div>

        <BookmarkPalette bookmarks={BOOKMARKS} />
      </div>

      <p className="absolute bottom-3 right-3 hidden font-semibold text-theme-white sm:block">
        {date.toLocaleString()}
      </p>
    </main>
  );
};

const BOOKMARKS = [
  {
    name: "daily",
    hidden: false,
    links: [
      {
        name: "gmail",
        url: "https://mail.google.com/",
      },
      {
        name: "office",
        url: "https://www.office.com/",
      },
      {
        name: "notion",
        url: "https://www.notion.so/",
      },
    ],
  },
  {
    name: "school",
    hidden: false,
    links: [
      {
        name: "mypurdue",
        url: "https://mypurdue.purdue.edu/",
      },
      {
        name: "brightspace",
        url: "https://purdue.brightspace.com/",
      },
    ],
  },
  {
    name: "dev",
    hidden: false,
    links: [
      {
        name: "github",
        url: "https://github.com/",
      },
      {
        name: "cloudflare",
        url: "https://dash.cloudflare.com/",
      },
      {
        name: "tcpshield",
        url: "https://panel.tcpshield.com/",
      },
      {
        name: "webshare",
        url: "https://proxy.webshare.io/dashboard/",
      },
      {
        name: "discord",
        url: "https://discord.com/developers/",
      },
    ],
  },
  {
    name: "docs",
    hidden: false,
    links: [
      {
        name: "tailwind",
        url: "https://tailwindcss.com/",
      },
      {
        name: "heroicons",
        url: "https://heroicons.com/",
      },
      {
        name: "headlessui",
        url: "https://headlessui.com/",
      },
      {
        name: "kubernetes",
        url: "https://kubernetes.io/docs/home/",
      },
      {
        name: "mdn",
        url: "https://developer.mozilla.org/",
      },
    ],
  },
  {
    name: "fun",
    hidden: false,
    links: [
      {
        name: "aniplix",
        url: "https://aniplix.xyz/",
      },
      {
        name: "netflix",
        url: "https://www.netflix.com/",
      },
      {
        name: "youtube",
        url: "https://youtube.com/",
      },
    ],
  },
  {
    name: "github repositories",
    hidden: true,
    links: [
      {
        name: "Den4200/aniplix",
        url: "https://github.com/Den4200/aniplix",
      },
      {
        name: "Den4200/audreyasked",
        url: "https://github.com/Den4200/audreyasked",
      },
      {
        name: "Den4200/dennispham.me",
        url: "https://github.com/Den4200/dennispham.me",
      },
      {
        name: "Den4200/tinyy.io",
        url: "https://github.com/Den4200/tinyy.io",
      },
      {
        name: "Den4200/startpage",
        url: "https://github.com/Den4200/startpage",
      },
      {
        name: "Den4200/chip-8",
        url: "https://github.com/Den4200/chip-8",
      },
      {
        name: "Den4200/pathfinding-visualizer",
        url: "https://github.com/Den4200/pathfinding-visualizer",
      },
      {
        name: "Den4200/kubernetes",
        url: "https://github.com/Den4200/kubernetes",
      },
      {
        name: "Den4200/dotfiles",
        url: "https://github.com/Den4200/dotfiles",
      },
      {
        name: "Den4200/advent-of-code",
        url: "https://github.com/Den4200/advent-of-code",
      },
      {
        name: "python-discord/bot",
        url: "https://github.com/python-discord/bot",
      },
      {
        name: "python-discord/site",
        url: "https://github.com/python-discord/site",
      },
      {
        name: "python-discord/sir-lancebot",
        url: "https://github.com/python-discord/sir-lancebot",
      },
      {
        name: "python-discord/kubernetes",
        url: "https://github.com/python-discord/kubernetes",
      },
      {
        name: "python-discord/snekbox",
        url: "https://github.com/python-discord/snekbox",
      },
      {
        name: "python-discord/metricity",
        url: "https://github.com/python-discord/metricity",
      },
      {
        name: "python-discord/admin-tasks",
        url: "https://github.com/python-discord/admin-tasks",
      },
    ],
  },
];

export default Home;
