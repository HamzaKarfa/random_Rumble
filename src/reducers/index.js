import React from 'react'

const initialState = {
    //TODO : complete players {} and monster{}
    players: {
        1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
    },
    monster: {pvMax : 1000, pv:1000}
  };
   
function rootReducer(state = initialState, action) {
    console.log(action.payload)
    let newState = null
    switch (action.type) {
        case 'HIT_MONSTER':
             newState = { 
                ...state,
                monster : {
                    ...state.monster,
                    pv: state.monster.pv -50
                }
            }
            return newState
        case 'HIT_BACK':
            newState = { 
                ...state,
                players : {
                    ...state.players,
                    [action.payload]:{

                        ...state.players[action.payload],
                        pv: state.players[action.payload].pv -10
                    }
                    
                }  
            }
            return newState
            
        default: 
            return state
    
    }
      
  };

  
   
  export default rootReducer;
  