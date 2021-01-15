import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import ProductCard from "./components/ProductCard";

function AppTitle() {
  return (
    <>
      <h1 className="font-medium text-3xl text-center text-green-800 leading-loose my-3 w-full">
        your future plants
      </h1>
      <h2 className="font-normal text-2xl text-center text-grey-600 leading-loose my-3 w-full">
        powered by{" "}
        <a
          className="text-green-800 underline "
          href="https://hasura.io/"
          target="_blank"
          rel="noreferrer"
        >
          Hasura
        </a>
      </h2>
    </>
  );
}

const ADD_WISHLIST = gql`
  mutation ADD_WISHLIST(
    $email: String!
    $plant: String!
    $suggestion: String!
  ) {
    insert_users_wishlist(
      objects: { email: $email, plant: $plant, suggestion: $suggestion }
    ) {
      affected_rows
    }
  }
`;

function App() {
  const [userEmail, SetEmail] = useState("");
  const [userPlant, SetPlant] = useState({ name: "", category: "" });
  const [appStep, SetStep] = useState(1);

  const [addToWishlistMutation, { data: addedWish }] = useMutation(
    ADD_WISHLIST
  );

  useEffect(() => {
    if(addedWish)
    alert(
      "Your item has been added to your wishlist check your email in 15 minutes!"
    );
    SetEmail("")
    SetPlant({ name: "", category: "" })
  }, [addedWish]);

  const opacityStep = (currentAppStep, desiredStep) => {
    if (currentAppStep === desiredStep) {
      return "opacity-100";
    }
    return "opacity-20 pointer-events-none";
  };

  const saveEmail = (evt) => {
    evt.preventDefault();
    SetStep(2);
  };

  const savePlant = (plant) => {
    SetPlant({ name: plant.name, category: plant.category });
    SetStep(3);
  };

  useEffect(() => {
    if (appStep === 3 && userEmail !== "") {
      addToWishlistMutation({
        variables: {
          email: userEmail,
          plant: userPlant.name,
          suggestion: userPlant.category,
        },
      });
    }
  }, [appStep, userEmail, userPlant, addToWishlistMutation]);

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
    /*{
      name: "grassy bush",
      category: "outdoor",
      image: "./images/type5.png",
    },
    {
      name: "evergreen",
      category: "outdoor",
      image: "./images/type6.png",
    },*/
  ];
  return (
    <div className="App p-4">
      {AppTitle()}

      <div className={"text-center py-4 " + opacityStep(appStep, 1)}>
        <h3 className="font-normal text-xl text-grey-800 leading-loose my-3 max-w-xl mx-auto">
          1. Leave us your email, will be used only for the demo.
        </h3>
        <div className="w-full text-center">
          <form onSubmit={saveEmail}>
            <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
              <input
                id="email"
                type="email"
                value={userEmail}
                onChange={(evt) => {
                  SetEmail(evt.target.value);
                }}
                placeholder="yourmail@example.com"
                className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-green-800 p-3"
              >
                Get notifcation!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={"text-center py-4 " + opacityStep(appStep, 2)}>
        <h3 className="font-normal text-xl text-grey-800 leading-loose my-3 max-w-xl mx-auto">
          2. Add one plant to your virtal cart by clicking on one of them!{" "}
        </h3>
      </div>

      <div
        className={
          "py-4 px-8 flex flex-wrap items-center justify-center " +
          opacityStep(appStep, 2)
        }
      >
        {plants.map((plant) => (
          <ProductCard {...plant} onAddWishlist={savePlant} key={plant.name} />
        ))}
      </div>

      <div className={"text-center py-4 " + opacityStep(appStep, 3)}>
        <h3 className="font-normal text-xl text-grey-800 leading-loose my-3 max-w-xl mx-auto">
          3. In 15 minutes you will get an email with that specifc plant
          name, all triggered by an Hasura event!
        </h3>
      </div>
    </div>
  );
}

export default App;
