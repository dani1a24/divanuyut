const sofaNames = [
  "COMFORT 005",
  "COMFORT 007",
  "COMFORT 008",
  "COMFORT 009",
  "COMFORT 018",
  "COMFORT 077",
  "COMFORT 091",
  "COMFORT 118",
  "COMFORT 120",
  "COMFORT 147",
  "COMFORT 177",
  "COMFORT 187",
  "COMFORT 241",
];

export const sofas = sofaNames.map((name) => {
  const folder = `/images/sofas/${name}`;

  return {
    id: name.toLowerCase().replace(/\s+/g, "-"),
    category: "sofa",
    name: `Диван ${name}`,
    type: "Прямой диван",

    image: `${folder}/main.png`,

    images: [`${folder}/main.png`, `${folder}/front.png`, `${folder}/side.png`],

    description: "",
    characteristics: {},
  };
});
