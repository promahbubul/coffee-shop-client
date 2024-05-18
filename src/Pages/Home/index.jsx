/* eslint-disable react/no-unescaped-entities */

import { useLoaderData } from "react-router-dom";
import AllCoffee from "../../components/Home/AllCoffee";
import Category from "../../components/Home/Category";
import Hero from "../../components/Home/Hero";
import { useState } from "react";

const Home = () => {
  const [coffeeList, setCoffeeList] = useState(useLoaderData());

  console.log(coffeeList);
  return (
    <div>
      {/* hero */}
      <Hero />
      {/* category */}
      <Category />
      {/* All Coffee */}
      <AllCoffee coffeeList={coffeeList} setCoffeeList={setCoffeeList} />
    </div>
  );
};

export default Home;
