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
        <title>Home | Portfolio</title>
        <meta name="description" content="My very own Porfolio" />
      </Head>
      <>
        <HeroHome />
        <section>
          <div
            id="projects"
            style={{ position: "absolute", marginTop: "-50px" }}
          ></div>
          <ItemGrid title={"Werk projecten"} items={projects} />
          <ItemGrid title={"Onderzoeks projecten"} items={research} />
          <ItemGrid title={"Persoonlijke projecten"} items={personal} />
        
        </section>
      </>
    </>
  );
};

export default Home;
