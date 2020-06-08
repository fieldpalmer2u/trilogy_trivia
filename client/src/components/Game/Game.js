import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Scoreboard from './Scoreboard/Scoreboard';
import Timer from './Timer/Timer';
import Logout from '../Auth/Logout/Logout';
import trilogyLogo from "../../images/trilogy-logo.png";
import './Game.css'

class Game extends Component {
  constructor(props) {
    super();
    this.state = {
      score: 0
    }
  }

  scoreQuestion = (val) => {
    let currentScore = this.state.score;
    this.setState({
      score: currentScore + val
    })
  }
  
  render() {
    
    return (
      <div>
        <Container className="gameBoard mb-5">
          <Row className="mb-5">
              <Col>
                <img className="navbar-brand" id="headerLogo" src={trilogyLogo} alt="trilogy logo" />
              </Col>
              <Col>
                <Timer />
              </Col>
              <Col>
                <Scoreboard score={this.state.score}/>
              </Col>
              <Col>
                <Logout />
              </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h4>FSF</h4>
              <Card body className="gameCards" color="secondary">
                <CardTitle className="gameCardScore">100</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="secondary">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="primary">
                <CardTitle className="gameCardScore">200</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="primary">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="success">
                <CardTitle className="gameCardScore">300</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="success">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="danger">
                <CardTitle className="gameCardScore">400</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="danger">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="warning">
                <CardTitle className="gameCardScore">500</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="warning">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
            </Col>
            <Col>
              <h4>Data</h4>
              <Card body className="gameCards" color="secondary">
                <CardTitle className="gameCardScore">100</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="secondary">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="primary">
                <CardTitle className="gameCardScore">200</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="primary">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="success">
                <CardTitle className="gameCardScore">300</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="success">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="danger">
                <CardTitle className="gameCardScore">400</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="danger">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="warning">
                <CardTitle className="gameCardScore">500</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="warning">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
            </Col>
            <Col>
              <h4>Cyber</h4>
              <Card body className="gameCards" color="secondary">
                <CardTitle className="gameCardScore">100</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="secondary">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="primary">
                <CardTitle className="gameCardScore">200</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="primary">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="success">
                <CardTitle className="gameCardScore">300</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="success">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="danger">
                <CardTitle className="gameCardScore">400</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="danger">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
              <Card body className="gameCards" color="warning">
                <CardTitle className="gameCardScore">500</CardTitle>
                <Button className="getQuestionBtn" onClick={() => this.scoreQuestion(100)} color="warning">
                  <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Game;