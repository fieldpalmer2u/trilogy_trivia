import React, { useContext } from 'react';
import Game from "../Game/Game";
import Login from "../Auth/Login/Login"
import "./Landing.css"

import { AuthContext } from "../../App";

function Landing() {
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <div>
            {
                isLoggedIn 
                    ? <Game />
                    : (
                        <div>
                            <div className="landing"> 
                                <h4>Welcome to Teachback Trivia!</h4>
                                <hr />
                                <p className="lead">Login with Google</p>
                                <Login /> 
                                <p className="my-4">Don't forget to select your 2U account</p>
                            </div>
                        </div>
                    )
            }
        </div>            
    );
}

export default Landing;
