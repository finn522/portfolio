import Head from "next/head";
import { useRouter } from "next/router";
import { getData } from "data/page_info.jsx";
//components
import Hero from "components/hero";
import TextBlock from "components/textblock";
import ImageBlock from "components/imageblock";
import ListBlock from "components/listblock";
import UrlBlock from "components/urlblock"
import Return from "components/return";

const Project = ({ data }) => {
  const router = useRouter();

  const renderSwitch = (contentType, content) => {
    switch (contentType) {
      case "text":
        return <TextBlock content={content} />;
      case "image":
        return <ImageBlock content={content} />;
      case "list":
        return <ListBlock content={content} />;
      case "url":
        return <UrlBlock content={content} />
      default:
        return null;
    }
  };
  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
      </Head>
      <div>
        <Hero content={data.hero} />
        {data.block &&
          data.block.map((block) => {
            return renderSwitch(block.type, block.content);
          })}
        <Return />

      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { project: "evanthia" } },
      { params: { project: "mvl" } },
      { params: { project: "unit14" } },
      { params: { project: "concreeto" } },
      { params: { project: "dnzb" } },
      { params: { project: "keytask" } },
      { params: { project: "next&node" } },
      { params: { project: "php" } },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const page = context.params.project;
  const data = getData(page);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Project;
