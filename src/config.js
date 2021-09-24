const { MODE } = require("./blendMode.js");
const description =
  "Degenerate Bananas!";
//const baseUri = "ipfs://QmNfPMWLPTEbFpBtPFy4wkYEHRVWcz8dzjziTcPbebzF53";
const baseUri = "../images";

const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "00 Base Image" },
      { name: "01 Fruit Pop" },
      { name: "02 Zombie Fruit Overlay" },
      { name: "03 Gold Fruit" },
      { name: "04 Peels" },
      { name: "05 Zombie Peel Overlay" },
      { name: "07 Golden Peel" },
      { name: "08 Shirts" },
      { name: "09 Necklaces" },
      { name: "10 Stickers" },
      { name: "11 Arms" },
      { name: "12 Drips" },
      { name: "13 Mouths Masks" },
      { name: "14 Eyes" },
      { name: "15 Beanies" },
      { name: "16 Glasses" },
      { name: "17 Bites Explosions" },
      { name: "18 Shadow Always On" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
};
