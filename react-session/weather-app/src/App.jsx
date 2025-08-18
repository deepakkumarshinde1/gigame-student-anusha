// import { Component } from "react";

// function
import { NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import OfficeOne from "./components/Contatcts/OfficeOne";
import OfficeTwo from "./components/Contatcts/OfficeTwo";
import BlogsDetails from "./components/BlogsDetails";

function App() {
  let [blogs] = useState([
    {
      id: 1,
      title: "Understanding Closures in JavaScript",
      slug: "understanding-closures-in-javascript",
      author: "Code Drift",
      date: "2025-07-26",
      tags: ["javascript", "closures", "functions"],
      excerpt:
        "Closures are a powerful feature in JavaScript that allow functions to access variables from an outer scope even after the outer function has finished executing.",
      content:
        "In JavaScript, a closure is created when an inner function retains access to variables from its outer function scope. This is useful for data encapsulation and function factories. Example: function outer() { let count = 0; return function() { count++; console.log(count); }; } const increment = outer(); increment(); increment();",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features You Must Know",
      slug: "javascript-es6-features-you-must-know",
      author: "Code Drift",
      date: "2025-07-26",
      tags: ["javascript", "es6", "modern-js"],
      excerpt:
        "ES6 introduced powerful new syntax and features that make writing JavaScript more efficient and readable.",
      content:
        "Some must-know ES6 features include let & const, arrow functions, template literals, destructuring, rest/spread operators, and promises. For example, const greet = name => `Hello, ${name}!`;",
    },
    {
      id: 3,
      title: "Debouncing and Throttling in JavaScript",
      slug: "debouncing-and-throttling-in-javascript",
      author: "Code Drift",
      date: "2025-07-26",
      tags: ["javascript", "performance", "events"],
      excerpt:
        "Improve performance in high-frequency event handling using debouncing and throttling techniques.",
      content:
        "Debouncing delays the execution of a function until after a specified time has passed since the last event. Throttling limits how often a function executes over time. For example, window.addEventListener('resize', debounce(handleResize, 300));",
    },
    {
      id: 4,
      title: "Working with JavaScript Arrays Like a Pro",
      slug: "working-with-javascript-arrays-like-a-pro",
      author: "Code Drift",
      date: "2025-07-26",
      tags: ["javascript", "arrays", "data-structures"],
      excerpt:
        "Arrays are fundamental in JavaScript. Learn advanced methods to manipulate them effectively.",
      content:
        "Useful methods include map(), filter(), reduce(), find(), some(), and every(). Example: const total = prices.reduce((acc, curr) => acc + curr, 0);",
    },
    {
      id: 5,
      title: "Async/Await Made Simple in JavaScript",
      slug: "async-await-made-simple-in-javascript",
      author: "Code Drift",
      date: "2025-07-26",
      tags: ["javascript", "async", "promises"],
      excerpt:
        "Async/Await simplifies asynchronous programming by making code look synchronous and easy to read.",
      content:
        "Example: async function fetchData() { try { const res = await fetch('https://api.example.com/data'); const data = await res.json(); console.log(data); } catch (err) { console.error(err); } }",
    },
  ]);
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
      {/* {users.map((user, index) => {
        return <Header key={index} user={user} />;
      })} */}

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
          <ul>
            <li>
              <NavLink to="/contact/office-one">Office One</NavLink>
            </li>
            <li>
              <NavLink to="/contact/office-two">Office Two</NavLink>
            </li>
          </ul>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="office-one" element={<OfficeOne />} />
          <Route path="office-two" element={<OfficeTwo />} />
        </Route>
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route path="/blog/:id" element={<BlogsDetails blogs={blogs} />} />
      </Routes>
    </>
  );
}

export default App;
