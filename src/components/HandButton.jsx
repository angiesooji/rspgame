import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import { ROCK, SCISSORS, RSP } from "../constant";
import "./gameBoard.css";

@inject("game", "setup")
@observer
class HandButton extends Component {

  handleClick = (hand) => {
    const {game, setup} = this.props;
    if(setup.isTimerOn) {
      game.pickComputerHand(RSP[hand]);
    } else alert("게임 시작 버튼을 눌러주세요!"); 
  }
  
  render() {
    const { hand, renderHand } = this.props;
      return (
        <>
          <button className="rsp" onClick={() => this.handleClick(hand)}>
            <span role="img" aria-label={hand === SCISSORS ? "Victory Hands" : hand === ROCK ? "Raised Fist" : "Raised Back of Hand"}>
              {hand === SCISSORS ? '✌️' : hand === ROCK ? '✊' : '🤚'}
           </span>
            {" "}{renderHand(hand)}
          </button>
        </>
      );
    }
}

HandButton.wrappedComponent.propTypes = {
  game : PropTypes.object.isRequired, 
  setup : PropTypes.object.isRequired,
}

export default HandButton;