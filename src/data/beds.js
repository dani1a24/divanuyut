const bedNames = ["COSY 002", "COSY 009", "COSY 034", "COSY 065", "COSY 132"];

export const beds = bedNames.map((name) => {
  const folder = `/images/beds/${name}`;

  return {
    id: name.toLowerCase().replace(/\s+/g, "-"),
    category: "bed",
    name: `Кровать ${name}`,
    type: "Кровать",

    image: `${folder}/base.png`,

    images: [
      `${folder}/base.png`,
      `${folder}/main.png`,
      `${folder}/detail.png`,
    ],

    description: "",
    characteristics: {},
  };
});
