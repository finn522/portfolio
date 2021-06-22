import Head from "next/head";
import { projects } from "data/projects";
import { personal } from "data/personal";
import { research } from "data/research";
import HeroHome from "components/hero_home";
import ItemGrid from "components/item_grid";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My very own Porfolio" />
      </Head>
      <div>
        <HeroHome />
        <ItemGrid title={"Werk projecten"} items={projects} />
        <ItemGrid title={"Persoonlijke projecten"} items={personal} />
        <ItemGrid title={"Onderzoeks projecten"} items={research} />
      </div>
    </>
  );
};

export default Home;
