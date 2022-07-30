import { useEffect, useState } from "react";
import Bookmarks from "@/components/Bookmarks";
import Searchbar from "@/components/Searchbar";

const Home = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div className="w-full space-y-8">
        <h1 className="text-center text-6xl text-theme-beige">
          &gt; cd ~/
          <span className="animate-blink">_</span>
        </h1>

        <Searchbar />
        <Bookmarks />
      </div>

      <p className="absolute bottom-3 right-3 hidden font-semibold text-theme-white sm:block">
        {date.toLocaleString()}
      </p>
    </main>
  );
};

export default Home;
