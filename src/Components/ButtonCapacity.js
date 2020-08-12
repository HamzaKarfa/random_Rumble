import React from 'react';
import { connect } from 'react-redux';
import { hitMonster } from "../action/index";
const dispatchButtonCapacity =(dispatch) =>{
    return {
        hitMonsters: () => { dispatch(hitMonster()) }
      }
   };

const ButtonCapacityConnect =({hitMonsters})=> {
        const combat = () => {
            console.log('aie')
            return hitMonsters()
        }

        return (
            <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
                hit
            <i className="fas fa-bomb"></i> 5
        <i className="fas fa-fire-alt"></i> - 5
    </button>
        )
    

}

const ButtonCapacity = connect(null,dispatchButtonCapacity)(ButtonCapacityConnect)


export default ButtonCapacity;