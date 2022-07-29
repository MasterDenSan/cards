import "./styles/style.scss";
import { Provider } from "react-redux";
import store from "./store/reduxStore";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
};

export default App;
