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

const wineBeer = [
    {
        title: "Chapel Hill Shiraz",
        price: "56",
        tags: ["AU", "Bottle"],
    },
    {
        title: "Catena Malbec",
        price: "59",
        tags: ["AR", "Bottle"],
    },
    {
        title: "La Vieille Rosé",
        price: "44",
        tags: ["FR", "750 ml"],
    },
    {
        title: "Rhino Pale Ale",
        price: "31",
        tags: ["CA", "750 ml"],
    },
    {
        title: "Irish Guinness",
        price: "26",
        tags: ["IE", "750 ml"],
    },
];

const cocktails = [
    {
        title: "Aperol Spritz",
        price: "20",
        tags: ["Aperol", "Villa Marchesi prosecco", "soda", "30ml"],
    },
    {
        title: "Dark 'N' Stormy",
        price: "16",
        tags: ["Dark rum", "Ginger beer", "Slice of lime"],
    },
    {
        title: "Daiquiri",
        price: "10",
        tags: ["Rum", "Citrus juice", "Sugar"],
    },
    {
        title: "Old Fashioned",
        price: "31",
        tags: ["Bourbon", "Brown sugar", "Angostura Bitters"],
    },
    {
        title: "Negroni",
        price: "26",
        tags: ["Gin", "Sweet Vermouth", "Campari", "Orange garnish"],
    },
];

const { awardsImages } = images;
const laurels = [
    {
        imgUrl: awardsImages.award01,
        title: "Bib Gourmond",
        subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        imgUrl: awardsImages.award02,
        title: "Rising Star",
        subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        imgUrl: awardsImages.award03,
        title: "AA Hospitality",
        subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
        imgUrl: awardsImages.award04,
        title: "Outstanding Chef",
        subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    },
];

const { sliderImages } = images;
const gallerySlides = [
    {
        image: sliderImages.slider01,
        alt: "Fried fillet",
        link: "FriedFillet",
    },
    {
        image: sliderImages.slider02,
        alt: "Scrambled eggs",
        Link: "ScrambledEggs",
    },
    {
        image: sliderImages.slider03,
        alt: "Sandwich",
        Link: "Sandwich",
    },
    {
        image: sliderImages.slider04,
        alt: "Sandwich egg",
        Link: "SandwichEgg",
    },
    {
        image: sliderImages.slider05,
        alt: "Sandwich Meat",
        Link: "SandwichMeat",
    },
];

export default { mainScreenSlides, wineBeer, cocktails, laurels, gallerySlides };
