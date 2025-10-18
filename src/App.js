import React, { useState } from "react";

function App() {
  const [toppings, setToppings] = useState(["Cheese"]);
  const [isPepperoniChecked, setIsPepperoniChecked] = useState(false);

  function handleCheckboxChange() {
    setIsPepperoniChecked(!isPepperoniChecked);

    setToppings((prevToppings) => {
      if (isPepperoniChecked) {
        // If it was checked before, remove pepperoni
        return prevToppings.filter((topping) => topping !== "Pepperoni");
      } else {
        // If it was unchecked before, add pepperoni
        return [...prevToppings, "Pepperoni"];
      }
    });
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isPepperoniChecked}
          onChange={handleCheckboxChange}
          aria-label="Add Pepperoni"
        />
        Add Pepperoni
      </label>

      <ul>
        {toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
