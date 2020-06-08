import React from "react";
import Landing from "../components/Landing/Landing"
// import Game from "../components/Game/Game";

const routes = [
  { name: "Landing", path: "/", exact: true, main: () => <Landing /> }
];

export default routes;