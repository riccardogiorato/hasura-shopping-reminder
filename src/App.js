import ProductCard from "./components/ProductCard";

function App() {
  const plants = [
    {
      name: "peace lily",
      category: "indoor",
      image:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      name: "palm",
      category: "outdoor",
      image:
        "https://i.pinimg.com/originals/e6/42/8c/e6428cbfecda46744a3e27a6cf803d9e.png",
    },
    {
      name: "palm",
      category: "outdoor",
      image:
        "https://i.pinimg.com/originals/e6/42/8c/e6428cbfecda46744a3e27a6cf803d9e.png",
    },
    {
      name: "palm",
      category: "outdoor",
      image:
        "https://i.pinimg.com/originals/e6/42/8c/e6428cbfecda46744a3e27a6cf803d9e.png",
    },
  ];
  return (
    <div className="App">
      <div class="p-24 flex flex-wrap items-center justify-center">
        {plants.map((plant) => (
          <ProductCard {...plant} />
        ))}
      </div>
    </div>
  );
}

export default App;
