const Home = () => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center p-4">
      <main>
        <h1 className="code mb-8 font-mono text-xl text-theme-white">
          Welcome to <span className="text-purple-700">Nextjs</span>,{" "}
          <span className="text-indigo-700">TailwindCSS</span> and{" "}
          <span className="text-gray-500">TypeScript</span>.
        </h1>
      </main>
    </div>
  );
};

export default Home;
