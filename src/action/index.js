import React from 'react'


export  function hitMonster(payload) {
    return { type: "HIT_MONSTER", payload }
  };
export  function hitBack(payload) {

  return { type: "HIT_BACK", payload }
};
export  function resetTour(payload) {
  console.log(payload)
    return { type: "RESET_TOUR", payload }
  };
  