import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { bool, any, object } from "prop-types";

const ProtectedRouteHOC = ({ component: Component, isLoggedIn, ...rest }) => {
    if (isLoggedIn || rest.public) {
        return (
            <Route 
                { ...rest }
                render={props => {
                    return <Component { ...props } />
                }}
            />
        )
    } else {
        return <Redirect to={{ pathname: "/"}} />
    }
};

ProtectedRouteHOC.propTypes = {
    component: any,
    isLoggedIn: bool,
    rest: object,
    props: object
};

export default withRouter(ProtectedRouteHOC);