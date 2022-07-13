import "./App.css";
import "./styles/utilities/variables.css";
import { PageRoutes } from "./routes/PageRoutes";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1500} />
      <PageRoutes />
    </div>
  );
}

export default App;
