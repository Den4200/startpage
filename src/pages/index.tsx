import Searchbar from "@/components/Searchbar";

const Home = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-theme-white">
      <h1 className="mb-8 text-6xl text-theme-beige">
        &gt; cd ~/
        <span className="animate-blink">_</span>
      </h1>

      <div className="w-11/12">
        <Searchbar />
      </div>
    </main>
  );
};

export default Home;
