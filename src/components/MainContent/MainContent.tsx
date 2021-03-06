import { FC, useCallback } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  addLeaderActionCreator,
  endGameActionCreator,
  startGameActionCreator,
} from "../../store/actions/cardGameActions";
import "./MainContent.scss";
import GameTable from "../GameTable";
import LeadersTable from "../LeadersTable";
import TimerContainer from "../Timer";

const MainContent: FC = () => {
  const cards = useSelector((state: RootStateOrAny) => state.cardsGame.cards);
  const isStartGame = useSelector(
    (state: RootStateOrAny) => state.cardsGame.isStartGame,
  );
  const leaders = useSelector(
    (state: RootStateOrAny) => state.cardsGame.leaders,
  );
  const dispatch = useDispatch();

  const onStartGame = useCallback(() => {
    dispatch(startGameActionCreator());
  }, []);
  const onEndGame = useCallback(() => {
    dispatch(endGameActionCreator());
  }, []);
  const onAddLeaderActionCreator = useCallback((name) => {
    dispatch(addLeaderActionCreator(name));
  }, []);

  return (
    <div>
      {isStartGame ? (
        <div>
          <TimerContainer />
          <GameTable
            className={"game-page__table"}
            cards={cards}
            onEndGame={onEndGame}
            onAddLeaderActionCreator={onAddLeaderActionCreator}
          />
        </div>
      ) : (
        <div className={"start-page"}>
          <LeadersTable leaders={leaders} />
          <button className={"start-page__btn"} onClick={onStartGame}>
            Начать игру
          </button>
        </div>
      )}
    </div>
  );
};

export default MainContent;
