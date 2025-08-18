import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      Home <Link to="/about">About</Link>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
}

export default Home;
