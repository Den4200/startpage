import Bookmarks from "@/components/Bookmarks";
import Searchbar from "@/components/Searchbar";

const Home = () => {
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
    </main>
  );
};

export default Home;
