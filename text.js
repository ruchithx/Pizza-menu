// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   const [pizzaDetail, setPizzaDetail] = useState("");

//   pizzaData.map((el) => setPizzaDetail(el));

//   return (
//     <div>
//       <h1>Hello </h1>;
//       <Pizza pizza={pizzaDetail} />
//     </div>
//   );
// }

// function Pizza(props) {
//   console.log(props);

//   return (
//     <div>
//       {/* <img src="/pizzas/margherita.jpg" alt="pizza"></img> */}
//       <h1>{props.pizza.name}</h1>
//       <h1>{props.pizza.ingredients}</h1>
//     </div>
//   );
// }

// // V18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
