import './styles/style.scss'
import store from "./store/reduxStore"
import {Provider} from "react-redux";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
    return (
        <Provider store={store}>
            <MainContent/>
        </Provider>
    )

}

export default App;