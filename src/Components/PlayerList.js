import React from 'react';
import PlayerCard from './PlayerCard';
import { Store } from "redux";
import { connect } from "react-redux";

const statePlayerList = (state) => {
    
  return { PlayersList: state.players };
};
const PlayerListConnect = ({PlayersList}) => {
  
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
const PlayerList = connect(statePlayerList)(PlayerListConnect) 

export default PlayerList;