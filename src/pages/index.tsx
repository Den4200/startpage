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
    ],
  },
  {
    name: "fun",
    links: [
      {
        name: "aniplix",
        url: "https://aniplix.xyz/",
      },
      {
        name: "youtube",
        url: "https://youtube.com/",
      },
      {
        name: "netflix",
        url: "https://www.netflix.com/",
      },
    ],
  },
];

export default Home;
