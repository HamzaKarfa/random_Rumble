import React from 'react';
import PlayerCard from './PlayerCard';
import { connect } from "react-redux";
import { resetTour } from "../action/index";

const dispatchPlayerList =(dispatch) =>{
    return {
        resetTours: () => { dispatch(resetTour()) }
    }
};

const statePlayerList = (state) => {
  return { PlayersList: state.players, playerTurn : state.playerTurn  };
};

const PlayerListConnect = ({PlayersList,resetTours,playerTurn}) => {

    let countPlayer = 0
    for (var element in PlayersList) {
       countPlayer++
    }

    const displayPlayers = () => {
        return Object.keys(PlayersList).map(key => (
            <PlayerCard key={PlayersList[key].id} player={PlayersList[key]} />
        ));
        }
        if (playerTurn.length === countPlayer) {
            return (resetTours(),displayPlayers())
        }
    return (
        <div className='row'>
            {displayPlayers()}
        </div>
    );
  
}
const PlayerList = connect(statePlayerList,dispatchPlayerList)(PlayerListConnect) 

export default PlayerList;