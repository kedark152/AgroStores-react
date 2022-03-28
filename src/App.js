import "./App.css";
import "./styles/utilities/variables.css"
import {PageRoutes} from "./routes/PageRoutes"


function App() {
  console.log("Running App.Js Successfully");
  return (
    <div className="App">
        <PageRoutes/>
    </div>
  );
}

export default App;
