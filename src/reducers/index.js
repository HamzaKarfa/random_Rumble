import React from 'react'

const initialState = {
    //TODO : complete players {} and monster{}
    players: {
        1: { name: "Jul", pv: 10, pvMax: 100, mana: 50, manaMax: 50, id: 1 },
        2: { name: "Booba", pv: 100, pvMax: 100, mana: 50, manaMax: 50, id: 2 },
        3: { name: "Sofiane", pv: 100, pvMax: 100, mana: 50, manaMax: 50, id: 3 },
        4: { name: "Heuss l'enfoiré", pv: 100, pvMax: 100, mana: 5, manaMax: 50, id: 4 }
    },
    monster: {pvMax : 1000, pv:1000},
    playerTurn: []
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
                },
                players : {
                    ...state.players,
                    [action.payload]:{
                        ...state.players[action.payload],
                        mana: state.players[action.payload].mana -5,
                        
                    }
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
                    }
                }  
            }
            return newState
        case 'ADD_PLAYER_TURN':
            newState = { 
                ...state,
                playerTurn : state.playerTurn.concat(action.payload.id)
            }
            return newState     
        case 'RESET_TOUR':
            newState = { 
                ...state,
                playerTurn : []
            }
            return newState
        case 'HEAL_PLAYER':
            newState = { 
                ...state,
                players : {
                    ...state.players,
                    [action.payload]:{
                        ...state.players[action.payload],
                        pv: state.players[action.payload].pv +5,
                        mana: state.players[action.payload].mana -5
                    }
                }  
            }
            return newState     
        case 'MANA_PLAYER':
            newState = { 
                ...state,
                players : {
                    ...state.players,
                    [action.payload]:{
                        ...state.players[action.payload],
                        pv: state.players[action.payload].pv -5,
                        mana: state.players[action.payload].mana +5
                    }
                }  
            }
            return newState        
        case 'PLAYER_DEAD':
            newState = { 
                ...state,
                players: delete state.players[action.payload],
                players : {
                    ...state.players,
                },
                playerTurn : []

            }
            console.log(newState)
            return newState   
        default: 
            return state
    
    }
      
  };

  export default rootReducer;
  