import React from 'react';
import { connect } from 'react-redux';
import { hitMonster } from "../action/index";
import { hitBack } from "../action/index";
import { addPlayerTurn } from "../action/index";

const dispatchButtonCapacity =(dispatch,stateProps) =>{
    return {
        hitMonsters: () => { dispatch(hitMonster()) },
        hitBack: () => { dispatch(hitBack(stateProps.player.id)) },
        addPlayerTurns: () => { dispatch(addPlayerTurn(stateProps.player)) }
      }
   };

const stateButtonCapacity = (state,propsButtonCapacity) => {
    return { stateProps: propsButtonCapacity };
};

const ButtonCapacityConnect =({hitMonsters,hitBack,stateProps,addPlayerTurns})=> {

        const combat = () => {
            return( hitMonsters(), hitBack(stateProps.player.id),addPlayerTurns(stateProps.player))
        }
        if (stateProps.played) {
            return (
                <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main" disabled>
                    hit
                    <i className="fas fa-bomb"></i> 5
                    <i className="fas fa-fire-alt"></i> - 5
                </button>
            )
        }else{
            return (
                <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
                    hit
                    <i className="fas fa-bomb"></i> 5
                    <i className="fas fa-fire-alt"></i> - 5
                </button>
            )
        }
}

const ButtonCapacity = connect(stateButtonCapacity,dispatchButtonCapacity)(ButtonCapacityConnect)


export default ButtonCapacity;