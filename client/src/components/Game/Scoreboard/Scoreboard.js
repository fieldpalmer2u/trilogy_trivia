import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';

class Scoreboard extends Component {

    render() { 
        return ( 
            <h3>Score: {this.props.score}</h3>
         );
    }
}
 
export default Scoreboard;