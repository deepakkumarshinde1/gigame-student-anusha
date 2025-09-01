import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/counter.slice";
import { getProductList } from "./redux/service/product.service";

function App() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counter);
  let { list } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList());
  }, []);
  return (
    <>
      <h1>React + Redux</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
      <p>{list.length}</p>
    </>
  );
}

export default App;
