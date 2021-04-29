export const ADD_LEADER = "ADD_LEADER";
export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const SET_GAME_TIME = "SET_GAME_TIME";
export const SET_USER_NAME = "SET_USER_NAME";


//ActionCreators
export const startGameActionCreator = () => ({type: START_GAME})
export const endGameActionCreator = () => ({type: END_GAME})
export const addLeaderActionCreator = (name) => ({type: ADD_LEADER, name})
export const setGameTime = (roundTime) => ({type: SET_GAME_TIME, roundTime})
