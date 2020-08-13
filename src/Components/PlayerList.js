import React from 'react';
import PlayerCard from './PlayerCard';
import { Store } from "redux";
import { connect } from "react-redux";
import { resetTour } from "../action/index";

const dispatchPlayerList =(dispatch) =>{
  return {
    resetTours: () => { dispatch(resetTour()) }
    }
 };

const statePlayerList = (state) => {
  return { PlayersList: state.players };
};

const PlayerListConnect = ({PlayersList,resetTours}) => {
  let playingCount = null
  Object.keys(PlayersList).map(key => {
    if (PlayersList[key].played === 1) {
      playingCount++
      if (playingCount === 4) {
        return (resetTours())
        
      }
    }
  }
  );
  const displayPlayers = () => {
    return Object.keys(PlayersList).map(key => (
      <PlayerCard key={PlayersList[key].id} player={PlayersList[key]} />
    ));
  }

    return (
      <div className='row'>
        {displayPlayers()}
      </div>
    );
  

}
const PlayerList = connect(statePlayerList,dispatchPlayerList)(PlayerListConnect) 

export default PlayerList;