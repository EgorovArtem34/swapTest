import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./store/index";
import { App } from "./App.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);