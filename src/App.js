import { Button, Rating } from "@mui/material";
import "./App.css";
import Newspaper from "./components/Newspaper/Newspaper";

function App() {
  return (
    <div className="App">
      <Button variant="contained">Contained Button</Button>
      <Rating name="read-only" value={4} readOnly />
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
