import ProductCard from "./components/ProductCard";

function AppTitle() {
  return (
    <h1 className="font-normal text-3xl text-center text-grey-800 font-medium leading-loose my-3 w-full">
      your future plants
    </h1>
  );
}

function App() {
  const plants = [
    {
      name: "peace lily",
      category: "indoor",
      image: "./images/type1.png",
    },
    {
      name: "hawthorn",
      category: "outdoor",
      image: "./images/type2.png",
    },
    {
      name: "green shrub",
      category: "outdoor",
      image: "./images/type3.png",
    },
    {
      name: "dense grass",
      category: "outdoor",
      image: "./images/type4.png",
    },
    {
      name: "grassy bush",
      category: "outdoor",
      image: "./images/type5.png",
    },
    {
      name: "evergreen",
      category: "outdoor",
      image: "./images/type6.png",
    },
  ];
  return (
    <div className="App p-4">
      {AppTitle()}

      <div class="text-center py-4">
        <h2 class="font-normal text-xl text-grey-800 leading-loose my-3 max-w-xl mx-auto">
          1. Leave us your email, will be used only for the demo.
        </h2>
        <div class="w-full text-center">
          <form action="#">
            <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
              <input
                id="email"
                type="email"
                placeholder="yourmail@example.com"
                class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
              />
              <button
                type="submit"
                class="bg-green-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-green-800 p-3"
              >
                Get notifcation!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="text-center py-4">
        <h2 class="font-normal text-xl text-grey-800 leading-loose my-3 max-w-xl mx-auto">
          2. Add one plant to your virtal cart by clicking on one of them!{" "}
        </h2>
      </div>

      <div class=" py-4 px-16 flex flex-wrap items-center justify-center">
        {plants.map((plant) => (
          <ProductCard {...plant} />
        ))}
      </div>

      <div class="text-center py-4">
        <h2 class="font-normal text-xl text-grey-800 leading-loose my-3 max-w-xl mx-auto">
          3. After 15 minutes you will get an email with that specifc plant
          name, all triggered by an Hasura event!
        </h2>
      </div>

    </div>
  );
}

export default App;
