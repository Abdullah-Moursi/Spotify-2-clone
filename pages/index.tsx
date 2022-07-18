import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main>
        <Sidebar />
        {/* center */}
      </main>

      <div>{/* player */}</div>
    </div>
  );
};

export default Home;
