import React from 'react';
import { connect } from "react-redux";
import ProgressBar from './ProgressBar';


const stateMonster = (state) => {

  return { monster: state.monster };
  
};
const MonsterConnect=({ monster }) => {

    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="card-monstre col-sm-12">
              <div id="monsterCard">
                <div className="text-center">
                  <div className="row">
                    <div className="col-sm-2 offset-sm-3">
                      <span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
                      <img className="img-fluid" src="http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png" alt='monster' />
                    </div>

                    <div id="comboOnMonster" className="col-sm-6">

                    </div>
                  </div>
                </div>
                {/* <ProgressBar pv='800' pvMax='800' bgType='bg-danger' faType='fa-heart' barName=' : pv' /> */}
                <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=': pv'/>
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  
}
const Monster = connect(stateMonster)(MonsterConnect) 

export default Monster;