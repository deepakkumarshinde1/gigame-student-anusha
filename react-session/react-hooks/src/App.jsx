import { useEffect, useLayoutEffect, useReducer, useRef } from "react";
import { initialStateUsers, userReducer } from "./reducers/user.reducer";
import InputComp from "./components/InputComp";

function App() {
  let userName = useRef(null);
  let password = useRef(null);
  let [state, dispatch] = useReducer(userReducer, initialStateUsers);
  let getData = async () => {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "UPDATE_LIST", payload: data });
  };

  let clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };
  useEffect(() => {
    getData();
  }, []);
  useLayoutEffect(() => {}, []);

  getUserData = () => {
    userName.current.getValue();
    password.current.getValue();
  };
  return (
    <div>
      App
      <InputComp ref={userName} />
      <InputComp ref={password} />
    </div>
  );
}

export default App;
