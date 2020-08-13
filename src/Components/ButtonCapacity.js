import React from 'react';
import { connect } from 'react-redux';
import { hitMonster } from "../action/index";
import { hitBack } from "../action/index";
import { addPlayerTurn } from "../action/index";
import { healPlayer } from "../action/index";
import { getMana } from "../action/index";

const dispatchButtonCapacity =(dispatch,stateProps) =>{
    return {
        hitMonsters: () => { dispatch(hitMonster(stateProps.player.id)) },
        hitBack: () => { dispatch(hitBack(stateProps.player.id)) },
        addPlayerTurns: () => { dispatch(addPlayerTurn(stateProps.player)) },
        healPlayers: () => { dispatch(healPlayer(stateProps.player.id)) },
        getManas: () => { dispatch(getMana(stateProps.player.id)) },
      }
   };

const stateButtonCapacity = (state,propsButtonCapacity) => {
    return { stateProps: propsButtonCapacity };
};

const ButtonCapacityConnect =({hitMonsters,hitBack,stateProps,addPlayerTurns,healPlayers,getManas})=> {

        const combat = () => {
            return( hitMonsters(), hitBack(),addPlayerTurns())
        }
        const heal = () => {
            console.log (stateProps.player.mana)
            if (stateProps.player.pv !== stateProps.player.pvMax && stateProps.player.mana >= 5 ) {
                
                return( healPlayers(),addPlayerTurns())
            }
        }
        const mana = () => {
            console.log (stateProps.player.mana)
            if (stateProps.player.pv !== stateProps.player.pvMax && stateProps.player.mana >= 5 ) {
                
                return( getManas(),addPlayerTurns())
            }
        }
        if (stateProps.played) {
            return (
                <>
                    <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main" disabled>
                        hit
                        <i className="fas fa-bomb"></i> 5
                        <i className="fas fa-fire-alt"></i> - 5
                    </button>
                    <button type="button" onClick={() => heal()} className="btn btn-success material-tooltip-main" disabled>
                        heal
                        <i className="fas fa-heart"></i> 5
                        <i className="fas fa-fire-alt"></i> - 5
                    </button>
                    <button type="button" onClick={() => mana()} className="btn btn-success material-tooltip-main" disabled>
                        moula
                        <i className="fas fa-heart"></i> -5
                        <i className="fas fa-fire-alt"></i> 5
                    </button>
                </>
            )
        }else{
            if (stateProps.player.mana <5) {
                return (
                    <>
                        <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
                            hit
                            <i className="fas fa-bomb"></i> 5
                            <i className="fas fa-fire-alt"></i> - 5
                        </button>
                        <button type="button" onClick={() => heal()} className="btn btn-success material-tooltip-main" >
                            heal
                            <i className="fas fa-heart"></i> 5
                            <i className="fas fa-fire-alt"></i> - 5
                        </button>
                        
                        <button type="button" onClick={() => mana()} className="btn btn-primary material-tooltip-main" disabled>
                            moula
                            <i className="fas fa-heart"></i> -5
                            <i className="fas fa-fire-alt"></i>  5
                        </button>
                    </>
                )
            }else{
                return (
                    <>
                        <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
                            hit
                            <i className="fas fa-bomb"></i> 5
                            <i className="fas fa-fire-alt"></i> - 5
                        </button>
                        <button type="button" onClick={() => heal()} className="btn btn-success material-tooltip-main" >
                            heal
                            <i className="fas fa-heart"></i> 5
                            <i className="fas fa-fire-alt"></i> - 5
                        </button>
                        
                        <button type="button" onClick={() => mana()} className="btn btn-success material-tooltip-main">
                            moula
                            <i className="fas fa-heart"></i> -5
                            <i className="fas fa-fire-alt"></i>  5
                        </button>
                    </>
                )
            }
            
        }
}

const ButtonCapacity = connect(stateButtonCapacity,dispatchButtonCapacity)(ButtonCapacityConnect)


export default ButtonCapacity;