import React from 'react';
import { connect } from "react-redux";

const stateProgressBar = (state,propsProgressBar) => {
    
    return { stateProps: propsProgressBar };
  };
const ProgressBarConnect =({stateProps}) => {

        return (
            <div className="progress md-progress" >
                <div className="progress-bar"
                    style={{ width: (stateProps.pv * 100 / stateProps.pvMax) + "%" }}
                     aria-valuenow={stateProps.pv}
                     aria-valuemin="0"
                     aria-valuemax={stateProps.pvMax}
                     role="progressbar" 
                    >
                    <i className={` fas ${stateProps.faType} ${stateProps.bgType} icon-text`}> {stateProps.pv} {stateProps.barName} </i>
                </div>
            </div >
        )

}
const ProgressBar = connect(stateProgressBar)(ProgressBarConnect) 

export default ProgressBar;