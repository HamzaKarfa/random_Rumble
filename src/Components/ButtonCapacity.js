import React from 'react';
import { connect } from 'react-redux';
import { hitMonster } from "../action/index";
import { hitBack } from "../action/index";
import { addPlayerTurn } from "../action/index";
import { healPlayer } from "../action/index";
import { getMana } from "../action/index";
import { playerDead } from "../action/index";


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min +1)) + min;
    console.log(result)
    return result
  }
const stateButtonCapacity = (state,propsButtonCapacity) => {
    return { stateProps: propsButtonCapacity, players : state.players };
};
const dispatchButtonCapacity =(dispatch,stateProps) =>{
    return {
        hitMonsters: () => { dispatch(hitMonster(stateProps.player.id)) },
        hitBack: () => { dispatch(hitBack(getRandomIntInclusive(stateProps.playerList[Object.keys(stateProps.playerList)[0]].id, stateProps.countPlayer))) },
        addPlayerTurns: () => { dispatch(addPlayerTurn(stateProps.player)) },
        healPlayers: () => { dispatch(healPlayer(stateProps.player.id)) },
        getManas: () => { dispatch(getMana(stateProps.player.id)) },
        playerDeads: () => { dispatch(playerDead(stateProps.player.id)) },
      }
   };



const ButtonCapacityConnect =({hitMonsters,hitBack,stateProps,addPlayerTurns,healPlayers,getManas,playerDeads})=> {
        if (stateProps.player.pv <= 0) {
            addPlayerTurns()
            playerDeads()
        }
        const combat = () => {
            if (stateProps.player.pv > 0  && stateProps.player.mana >= 5 ) {
                
                return( hitMonsters(), hitBack(),addPlayerTurns())
            }
        }
        const heal = () => {
            if (stateProps.player.pv !== stateProps.player.pvMax && stateProps.player.mana >= 5 ) {
                
                return( hitBack(),healPlayers(),addPlayerTurns())
            }
        }
        const mana = () => {
            if (stateProps.player.pv !== stateProps.player.pvMax && stateProps.player.mana >= 5 ) {
                
                return( hitBack(),getManas(),addPlayerTurns())
            }
        }






        if (stateProps.played) {
            return (
                <>
                    <button type="button" onClick={() => heal()} className="btn btn-success material-tooltip-main" disabled>
                        heal
                        <i className="fas fa-heart"></i> 5
                        <i className="fas fa-fire-alt"></i> - 5
                    </button>
                </>
            )
        }else{
            if (stateProps.player.mana < 5) {
                return (
                    <>
                        <button type="button" onClick={() => heal()} className="btn btn-success material-tooltip-main" >
                            heal
                            <i className="fas fa-heart"></i> 5
                            <i className="fas fa-fire-alt"></i> - 5
                        </button>
                        
                    </>
                )
            }else{
                return (
                    <>
                        <button type="button" onClick={() => heal()} className="btn btn-success material-tooltip-main" >
                            heal
                            <i className="fas fa-heart"></i> 5
                            <i className="fas fa-fire-alt"></i> - 5
                        </button>
                    
                    </>
                )
            }
            
        }
}

const ButtonCapacity = connect(stateButtonCapacity,dispatchButtonCapacity)(ButtonCapacityConnect)


export default ButtonCapacity;