import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fertilizers",
    description:"a natural or chemical substance that is put on land or soil to make plants grow better",
    imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390941/fertilizers1_hdthei.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Pesticides",
    description:
      "a chemical substance that is used for killing bugs especially insects, that eat food crops",
      imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390940/pesticides1_pveijq.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Farming Tools",
    description:
      "Agricultural tools are instruments that are used in the fields to aid in the agricultural process.",
      imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390940/tools_emqkuu.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Seeds",
    description:
      "Vegetables & Fruits Seeds",
      imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648390941/seeds_tqx9ub.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Safety Wearables",
    description: "Safety Wearables such as shoes, gloves etc",
     imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648395553/farmer-spraying-rice_720x480_p9nhyb.webp",
  },
  {
    _id: uuid(),
    categoryName: "Electronic Devices",
    description:"Sensors, testers, torch & gadgets for farming",
     imgSrc:"https://res.cloudinary.com/dvuh4fz9d/image/upload/v1648397135/probeInSoil_1_cropped_s81abe.jpg",
  },
];
