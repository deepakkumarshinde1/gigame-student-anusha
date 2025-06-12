// import { Component } from "react";

// function
import "./App.css";
import Header from "./components/Header";

function App() {
  let users = [
    {
      name: "Deepak",
      gender: "male",
    },
    {
      name: "Neha",
      gender: "female",
    },
    {
      name: "Anusha",
      gender: "female",
    },
    { name: "Suraj", gender: "male" },
    {
      name: "Arun",
      gender: "male",
    },
  ];
  return (
    <>
      {users.map((user, index) => {
        return <Header key={index} user={user} />;
      })}
    </>
  );
}

export default App;
