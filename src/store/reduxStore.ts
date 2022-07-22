import { combineReducers, createStore } from "redux"
import cardsGameReduser from "./reducers/cardsGameReduser"


let reducers = combineReducers({
    cardsGame: cardsGameReduser
})

const store = createStore(reducers)

window['__store__'] = store.getState()

export default store