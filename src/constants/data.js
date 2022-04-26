import { format } from "date-fns/esm";
import images from "./images";

const { mainScreenImages } = images;
const mainScreenSlides = [
    {
        image: mainScreenImages.main01,
        alt: "Fried fillet",
    },
    {
        image: mainScreenImages.main02,
        alt: "Scrambled eggs",
    },
    {
        image: mainScreenImages.main03,
        alt: "Sandwich with an egg",
    },
];

export default { mainScreenSlides };
