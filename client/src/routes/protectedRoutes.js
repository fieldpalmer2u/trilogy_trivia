import React from "react";
import Game from "../components/Game/Game";

const protectedRoutes = [
    {
        name: "reports",
        exact: true,
        path: "/game",
        main: props => <Game {...props} />,
        public: false
    }
];

export default protectedRoutes;
