import React, { useState, useContext } from "react";
import { withRouter } from "react-router";

import * as firebase from "firebase"

import { AuthContext } from "../../../App";

const Login = ({ history }) => {
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => { 
          firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log(result)
            history.push('/game')
            Auth.setLoggedIn(true)
          })
          .catch(e => setErrors(e.message))
        })
      }

      return(
          <div className="Auth">
              <button onClick={() => signInWithGoogle()} className="googleBtn" type="button">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="logo"
                />
                Login With Google
              </button>
              <span>{error}</span>
          </div>
      )
}


export default withRouter(Login);