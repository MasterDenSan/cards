import {ADD_LEADER, END_GAME, SET_GAME_TIME, START_GAME} from '../actions/cardGameActions';


const initialState = {
    cards: [
        {id: 1, name: 'beaver'},
        {id: 2, name: 'bull'},
        {id: 3, name: 'cat'},
        {id: 4, name: 'duck'},
        {id: 5, name: 'elk'},
        {id: 6, name: 'giraffe'},
        {id: 7, name: 'hoors'},
        {id: 8, name: 'monky'},
        {id: 9, name: 'snake'},
        {id: 10, name: 'fox'},
        {id: 11, name: 'bear'},
        {id: 12, name: 'cow'},
        {id: 13, name: 'pig'},
        {id: 14, name: 'caterpillar'},
        {id: 15, name: 'ship'},
        {id: 16, name: 'leo'},
        {id: 17, name: 'dog'},
        {id: 18, name: 'goat'},


    ],
    leaders: [
        {id: 1, name: 'Den', time: '00:12:16'},
        {id: 2, name: 'Jon', time: '00:07:16'},
        {id: 3, name: 'Liza', time: '00:28:16'},
        {id: 4, name: 'Ivan', time: '00:10:18'},
        {id: 5, name: 'Ron', time: '00:05:16'},
        {id: 6, name: 'Jack', time: '00:18:16'},
        {id: 7, name: 'Vasia', time: '00:10:16'},
        {id: 8, name: 'Anton', time: '01:07:16'},
        {id: 9, name: 'Bob', time: '00:08:16'},

    ],
    isStartGame: false,
    name: null,
    roundTime: '00:00:00',
};


const cardsGameReduser = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                isStartGame: true,
            };
        case END_GAME:
            return {
                ...state,
                isStartGame: false,
            };
        case SET_GAME_TIME:
            return {
                ...state,
                roundTime: action.roundTime,
            };
        case ADD_LEADER:
            return {
                ...state,
                leaders: [...state.leaders, {id: state.leaders.length + 1, name: action.name, time: state.roundTime}],
            };
        default:
            return state;
    }
};


export default cardsGameReduser;