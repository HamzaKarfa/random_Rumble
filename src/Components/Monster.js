import React from 'react';
import { connect } from "react-redux";
import ProgressBar from './ProgressBar';
import  "./Monster.css";


const stateMonster = (state) => {

  return { monster: state.monster };
  
};
const MonsterConnect=({ monster }) => {
  const displayMonster = () =>{
    if (monster.pv === 0) {
      console.log('DEAD')
      alert('VOUS AVEZ TUER LE MONSTRE')
      return 'img-fluid monsterDead'
    }else {
      return 'img-fluid' 
    }
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="card-monstre col-sm-12">
            <div id="monsterCard">
              <div className="text-center">
                <div className="row justify-content-center">
                  <div className="col-sm-2">
                    <span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
                    <img className={displayMonster()} src="http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png" alt='monster' />
                  </div>

                  <div id="comboOnMonster" className="col-sm-6">

                  </div>
                </div>
              </div>
            </div>
              <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=': pv'/>
          </div>
        </div>
      </div>
    </section >
  )
}
  

const Monster = connect(stateMonster)(MonsterConnect) 

export default Monster;