import React from 'react';
import ButtonAttack from './Button/ButtonAttack.js';
import ButtonMana from './Button/ButtonMana.js';
import ButtonHeal from './Button/ButtonHeal.js';
import ProgressBar from './ProgressBar';
import { connect } from "react-redux";

const statePlayerCard = (state,propsPlayerCard) => {
    return { stateProps: propsPlayerCard , playerTurn : state.playerTurn, };
  };
const PlayerCardConnect=({stateProps, playerTurn})=> {

    const displayPlayer = () => {
        if (playerTurn.length !== 0 && playerTurn.includes(stateProps.player.id)) {
            return   'col-sm-2 m-2 card center bg-secondary justify-content-center'
        }else{
            return 'col-sm-2 m-2 card center justify-content-center'
        }
    }
    return (
        <div key={stateProps.player.id} className={displayPlayer()} id={`joueur${stateProps.player.id}`}>
            <div className="card-body text-center ">
                <h5 className="card-title">{stateProps.player.name}</h5>
                <ProgressBar pv={stateProps.player.pv} pvMax={stateProps.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={stateProps.player.mana} pvMax={stateProps.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    <div >
                        <ButtonAttack player={stateProps.player} countPlayer = {stateProps.countPlayer} playerList = {stateProps.playerList}/>
                        <ButtonAttack player={stateProps.player} countPlayer = {stateProps.countPlayer} playerList = {stateProps.playerList}/>
                        <ButtonMana player={stateProps.player} countPlayer = {stateProps.countPlayer} playerList = {stateProps.playerList}/>
                        <ButtonHeal player={stateProps.player} countPlayer = {stateProps.countPlayer} playerList = {stateProps.playerList}/>
                    </div>
                </div >
            </div >
        </div >
    )
}

const PlayerCard = connect(statePlayerCard)(PlayerCardConnect) 

export default PlayerCard;