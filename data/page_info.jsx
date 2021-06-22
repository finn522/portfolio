import DNZB from "../public/images/dnzb.jpg";
import MVL from "../public/images/mvl.jpg";
import Concreeto from "../public/images/concreeto.jpg";
import Evanthia from "../public/images/evanthia.jpg";
import Unit14 from "../public/images/unit14.jpg";

export function getData(page) {
  console.log("in functio", page);
  switch (page) {
    case "evanthia":
      return evanthiaData;
    case "unit14":
      return "unit14";
    case "mvl":
      return "mvl";
    case "concreeto":
      return "concreeto";
    case "dnzb":
      return "dnzb";
    case "ketyask":
      return "ketyask";
    case "next&node":
      return "next&node";
    case "php":
      return "php_crud";
    default:
      return false;
  }
}

const evanthiaData = {
  seo: {
    title: "Evanthia | Portfolio",
    description: "SEO beschrijving",
  },
  hero: {
    title: "Evanthia: Nieuwe techniek, nieuwe kansen",
    image: Evanthia,
  },
  block: [
    {
      type: "text",
      content: { title: "Test", description: "Dit is een beschrijving" },
    },
    {
      type: "text",
      content: { title: "Test", description: "Dit is een beschrijving" },
    },
  ],
};
