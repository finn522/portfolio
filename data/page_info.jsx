import DNZB from "../public/images/dnzb.jpg";
import MVL from "../public/images/mvl.jpg";
import Concreeto from "../public/images/concreeto.jpg";
import Evanthia from "../public/images/evanthia.jpg";
import Unit14 from "../public/images/unit14.jpg";
import Keytask from "public/images/keytask.jpg";
import PhpCrud from "public/images/php_crud.jpg";
import ReactNode from "public/images/react_node.jpg";

export function getData(page) {
  switch (page) {
    case "evanthia":
      return evanthiaData;
    case "unit14":
      return unit14Data;
    case "mvl":
      return mvlData;
    case "concreeto":
      return concreetoData;
    case "dnzb":
      return dnzbData;
    case "keytask":
      return keytaskData;
    case "next&node":
      return nnData;
    case "php":
      return phpData;
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
    {
      type: "url",
      content: { url: "https://www.evanthia.nl" },
    },
  ],
};
const unit14Data = {
  seo: {
    title: "Unit 14 | Portfolio",
    description: "SEO beschrijving",
  },
  hero: {
    title: "Unit 14: De eerste verantwoordelijkheid",
    image: Unit14,
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
const mvlData = {
  seo: {
    title: "MVL| Portfolio",
    description: "SEO beschrijving",
  },
  hero: {
    title: "MVL: subtitle",
    image: MVL,
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
const concreetoData = {
  seo: {
    title: "Concreeto| Portfolio",
    description: "SEO beschrijving",
  },
  hero: {
    title: "Concreeto: ",
    image: Concreeto,
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
const dnzbData = {
  seo: {
    title: "DNZB| Portfolio",
    description: "SEO beschrijving",
  },
  hero: {
    title: "DNZB: De eerste van velen",
    image: DNZB,
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
const keytaskData = {
  seo: {
    title: "Keytask | Portfolio",
    description: "SEO beschrijving",
  },
  hero: {
    title: "Keytask: Mijn eigen idee",
    image: Keytask,
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
const nnData = {
  seo: {
    title: "Next & Node | Portfolio",
    description: "SEO beschrijving",
  },
  hero: {
    title: "Next & Node: Een simpele samenwerking",
    image: ReactNode,
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
const phpData = {
  seo: {
    title: "PHP Crud | Portfolio",
    description: "SEO beschrijving",
  },
  hero: {
    title: "PHP Crud: subtitle",
    image: ReactNode,
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
