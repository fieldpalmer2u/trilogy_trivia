import React, { useState, useContext } from 'react';
import { Button } from "reactstrap";
import * as firebase from "firebase";
import { AuthContext } from "../../../App";
import { withRouter } from "react-router";

const Logout = ({ history }) => {
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    
    const handleSignOut = () => {
        firebase.auth().signOut().then(result => {
            console.log(result)
            history.push('/game')
            Auth.setLoggedIn(false)
          })
          .catch(e => setErrors(e.message))
    }

    return (
        <div>
            <Button color="danger" onClick={() => handleSignOut()}>logout</Button>
            <span>{error}</span>

        </div>
    );
}

export default withRouter(Logout);
