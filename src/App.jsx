import React from "react";
import './styles/style.scss'
import store from "./store/reduxStore"
import {Provider} from "react-redux";
import MainContent from "./components/MainContent/MainContent";

const App = (props) => {
    return (
        <Provider store={store}>
            <MainContent/>
        </Provider>
    )

}

export default App;