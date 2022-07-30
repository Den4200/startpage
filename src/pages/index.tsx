import Searchbar from "@/components/Searchbar";

const Home = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div className="w-full">
        <h1 className="mb-8 text-center text-6xl text-theme-beige">
          &gt; cd ~/
          <span className="animate-blink">_</span>
        </h1>

        <Searchbar />
      </div>
    </main>
  );
};

export default Home;
