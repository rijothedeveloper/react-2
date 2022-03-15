import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import FoodItem from "./FoodItem";
import AddFood from "./AddFood";
import PageNotFound from './PageNotFound'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getFoods() {
      let snacks = await SnackOrBoozeApi.getFoods();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getFoods();
  }, []);

  const addFood = (food) => {
    food = {
      ...food,
      "id": food.name
    }
    if (food.foodType==="food") {
      let newFood = foods;
      newFood.push(food)
      setSnacks(newFood)
    } else {
      let newDrinks = drinks;
      newDrinks.push(food)
      setDrinks(newDrinks)
    }
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={foods} />
            </Route>
            <Route exact path="/snacks">
              <Menu food={foods} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu food={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={foods} cantFind="/snacks" />
            </Route>
            <Route path="/addfood" >
              <AddFood  onHandle={addFood} />
            </Route>
            <Route >
              <PageNotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
