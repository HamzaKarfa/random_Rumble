import React from 'react'

const initialState = {
    //TODO : complete players {} and monster{}
    players: {
        1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1  , played:0 },
        2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2  , played:0 },
        3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 , played:0 },
        4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 , played:0 }
    },
    monster: {pvMax : 1000, pv:1000},
    playerTurn: {}
  };
   
function rootReducer(state = initialState, action) {
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
                        pv: state.players[action.payload].pv -10,
                        played: state.players[action.payload].played = 1
                    }
                    
                }  
            }
            return newState
        case 'RESET_TOUR':
            // for (let index = 0; index < 4; index++) {
            //     console.log(state.players[index])
            // }
            newState = { 
                ...state,
                players : {
                    ...state.players,
                     1:{
                         ...state.players[1],
                          played: 0
                     },
                     2:{
                        ...state.players[2],
                         played: 0
                    },
                    3:{
                        ...state.players[3],
                         played: 0
                    },
                    4:{
                        ...state.players[4],
                         played: 0
                    }
                }  
            }
            console.log(newState)
            return newState
                
        default: 
            return state
    
    }
      
  };

  
   
  export default rootReducer;
  