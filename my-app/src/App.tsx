import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/sort">Sorting</Link> |{" "}
        <Link to="/greedy">Greedy</Link>
      </nav>
    </div>
  );
}
