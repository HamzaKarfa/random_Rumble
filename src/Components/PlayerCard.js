import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import { connect } from "react-redux";

const statePlayerCard = (state,propsPlayerCard) => {
    
    return { stateProps: propsPlayerCard };
  };
const PlayerCardConnect=({stateProps})=> {
   
        return (
            <div key={stateProps.player.id} className="col-sm-3 card center" id={`joueur${stateProps.player.id}`}>

                <div className="card-body text-center">
                    <h5 className="card-title">{stateProps.player.name}</h5>
                    <ProgressBar pv={stateProps.player.pv} pvMax={stateProps.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={stateProps.player.mana} pvMax={stateProps.player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                    <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                    <div className="row ">
                        <div >
                            <ButtonCapacity player={stateProps.player} />
                            <ButtonCapacity player={stateProps.player} />
                            <ButtonCapacity player={stateProps.player} />
                            <ButtonCapacity player={stateProps.player} />

                        </div>
                    </div >
                </div >

            </div >
        )
    
}

const PlayerCard = connect(statePlayerCard)(PlayerCardConnect) 

export default PlayerCard;