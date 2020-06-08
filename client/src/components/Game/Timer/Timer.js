import React from 'react';
import {
  Button,
  InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

export default class Timer extends React.Component {
    state = {
        dropdownOpen: false,
        splitButtonOpen: false,
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
                alert("Countdown Ended");
            }
        }, 10);
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };
    
    resetTimer = () => {
        if (this.state.timerOn === false) {
          this.setState({
            timerTime: this.state.timerStart
          });
        }
    };

    toggleDropDown = () => {
        this.setState({
        dropdownOpen: !this.state.dropdownOpen
        });
    };

    toggleSplit = () => {
        this.setState({
        splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    render() {
        const { timerOn, timerStart, timerTime } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    
        return (
        <div>
            <InputGroup>
                <InputGroupButtonDropdown addonType="prepend" className="mr-3" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                    <Button color="success" onClick={this.startTimer}>start</Button>
                )}

                {timerOn === true && timerTime >= 1000 && (
                    <Button color="danger" onClick={this.stopTimer}>stop</Button>
                )}

                {timerOn === false &&
                    (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                    <Button color="success" onClick={this.startTimer}>resume</Button>
                )}

                {(timerOn === false || timerTime < 1000) &&
                    (timerStart !== timerTime && timerStart > 0) && (
                    <Button color="info" onClick={this.resetTimer}>reset</Button>
                )}
                    <DropdownToggle split outline />
                    <DropdownMenu>
                        <DropdownItem onClick={() => this.setState({timerTime: 3000})}>3 seconds</DropdownItem>
                        <DropdownItem onClick={() => this.setState({timerTime: 60000})}>1 minute</DropdownItem>
                        <DropdownItem onClick={() => this.setState({timerTime: 180000})}>3 minute</DropdownItem>
                        <DropdownItem onClick={() => this.setState({timerTime: 300000})}>5 minute</DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
                <h4>{minutes} : {seconds}</h4>
            </InputGroup>
        </div>
        );
    }
}