import React from 'react'


export  function hitMonster(payload) {
    return { type: "HIT_MONSTER", payload }
  };
export  function hitBack(payload) {
console.log(payload)
  return { type: "HIT_BACK", payload }
};
