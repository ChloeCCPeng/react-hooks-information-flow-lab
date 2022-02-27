import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // function handleDarkModeClick() {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header />
        <h2>Shopster</h2>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
