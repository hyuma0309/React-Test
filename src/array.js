const engineers = [
  { type: "Frontend" },
  { type: "Backend" },
  { type: "Backend" },
  { type: "Frontend" },
  { type: "Frontend" },
  { type: "Backend" },
  { type: "Backend" },
];
const test2 = { Frontend: 0, Backend: 0 };

const test = engineers.forEach((element) => {
  if (element.type === "Frontend") {
    test2.Frontend++;
  } else {
    test2.Backend++;
  }
  console.log("test2");
  return test2;
});
