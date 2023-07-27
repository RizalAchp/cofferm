/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.css";
import App from "./App";
import { Router } from "@solidjs/router"; // 👈 Import the router

render(() => <Router> <App /> </Router>, document.getElementById("app_root") as HTMLElement);
