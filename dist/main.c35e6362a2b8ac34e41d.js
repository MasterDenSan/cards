/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/Rendomizer/randomizer.js":
/*!*********************************************!*\
  !*** ./components/Rendomizer/randomizer.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getRandom = function getRandom(lo, hi, n) {
  var res = new Set();

  while (res.size < n) {
    res.add(Math.floor(Math.random() * (hi - lo + 1)) + lo);
  }

  return _toConsumableArray(res);
};

/* harmony default export */ __webpack_exports__["default"] = (getRandom);

/***/ }),

/***/ "./store/actions/cardGameActions.js":
/*!******************************************!*\
  !*** ./store/actions/cardGameActions.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_LEADER": function() { return /* binding */ ADD_LEADER; },
/* harmony export */   "START_GAME": function() { return /* binding */ START_GAME; },
/* harmony export */   "END_GAME": function() { return /* binding */ END_GAME; },
/* harmony export */   "SET_GAME_TIME": function() { return /* binding */ SET_GAME_TIME; },
/* harmony export */   "SET_USER_NAME": function() { return /* binding */ SET_USER_NAME; },
/* harmony export */   "startGameActionCreator": function() { return /* binding */ startGameActionCreator; },
/* harmony export */   "endGameActionCreator": function() { return /* binding */ endGameActionCreator; },
/* harmony export */   "addLeaderActionCreator": function() { return /* binding */ addLeaderActionCreator; },
/* harmony export */   "setGameTime": function() { return /* binding */ setGameTime; }
/* harmony export */ });
var ADD_LEADER = "ADD_LEADER";
var START_GAME = "START_GAME";
var END_GAME = "END_GAME";
var SET_GAME_TIME = "SET_GAME_TIME";
var SET_USER_NAME = "SET_USER_NAME"; //ActionCreators

var startGameActionCreator = function startGameActionCreator() {
  return {
    type: START_GAME
  };
};
var endGameActionCreator = function endGameActionCreator() {
  return {
    type: END_GAME
  };
};
var addLeaderActionCreator = function addLeaderActionCreator(name) {
  return {
    type: ADD_LEADER,
    name: name
  };
};
var setGameTime = function setGameTime(roundTime) {
  return {
    type: SET_GAME_TIME,
    roundTime: roundTime
  };
};

/***/ }),

/***/ "./store/reducers/cardsGameReduser.js":
/*!********************************************!*\
  !*** ./store/reducers/cardsGameReduser.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_cardGameActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cardGameActions */ "./store/actions/cardGameActions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  cards: [{
    id: 1,
    name: "beaver"
  }, {
    id: 2,
    name: "bull"
  }, {
    id: 3,
    name: "cat"
  }, {
    id: 4,
    name: "duck"
  }, {
    id: 5,
    name: "elk"
  }, {
    id: 6,
    name: "giraffe"
  }, {
    id: 7,
    name: "hoors"
  }, {
    id: 8,
    name: "monky"
  }, {
    id: 9,
    name: "snake"
  }, {
    id: 10,
    name: "fox"
  }, {
    id: 11,
    name: "bear"
  }, {
    id: 12,
    name: "cow"
  }, {
    id: 13,
    name: "pig"
  }, {
    id: 14,
    name: "caterpillar"
  }, {
    id: 15,
    name: "ship"
  }, {
    id: 16,
    name: "leo"
  }, {
    id: 17,
    name: "dog"
  }, {
    id: 18,
    name: "goat"
  }],
  leaders: [{
    id: 1,
    name: "Den",
    time: "00:12:16"
  }, {
    id: 2,
    name: "Jon",
    time: "00:07:16"
  }, {
    id: 3,
    name: "Liza",
    time: "00:28:16"
  }, {
    id: 4,
    name: "Ivan",
    time: "00:10:18"
  }, {
    id: 5,
    name: "Ron",
    time: "00:05:16"
  }, {
    id: 6,
    name: "Jack",
    time: "00:18:16"
  }, {
    id: 7,
    name: "Vasia",
    time: "00:10:16"
  }, {
    id: 8,
    name: "Anton",
    time: "01:07:16"
  }, {
    id: 9,
    name: "Bob",
    time: "00:08:16"
  }],
  isStartGame: false,
  name: null,
  roundTime: '00:00:00'
};

var cardsGameReduser = function cardsGameReduser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_cardGameActions__WEBPACK_IMPORTED_MODULE_0__.START_GAME:
      return _objectSpread(_objectSpread({}, state), {}, {
        isStartGame: true
      });

    case _actions_cardGameActions__WEBPACK_IMPORTED_MODULE_0__.END_GAME:
      return _objectSpread(_objectSpread({}, state), {}, {
        isStartGame: false
      });

    case _actions_cardGameActions__WEBPACK_IMPORTED_MODULE_0__.SET_GAME_TIME:
      return _objectSpread(_objectSpread({}, state), {}, {
        roundTime: action.roundTime
      });

    case _actions_cardGameActions__WEBPACK_IMPORTED_MODULE_0__.ADD_LEADER:
      return _objectSpread(_objectSpread({}, state), {}, {
        leaders: [].concat(_toConsumableArray(state.leaders), [{
          id: state.leaders.length + 1,
          name: action.name,
          time: state.roundTime
        }])
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cardsGameReduser);

/***/ }),

/***/ "./store/reduxStore.js":
/*!*****************************!*\
  !*** ./store/reduxStore.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_cardsGameReduser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/cardsGameReduser */ "./store/reducers/cardsGameReduser.js");


var reducers = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  cardsGame: _reducers_cardsGameReduser__WEBPACK_IMPORTED_MODULE_0__.default
});
var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducers);
window.__store__ = store;
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _store_reduxStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reduxStore */ "./store/reduxStore.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MainContent/MainContent */ "./components/MainContent/MainContent.jsx");






var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _store_reduxStore__WEBPACK_IMPORTED_MODULE_2__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_4__.default, null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/GameTable/GameTable.jsx":
/*!********************************************!*\
  !*** ./components/GameTable/GameTable.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card/Card */ "./components/Card/Card.tsx");
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GameTable_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameTable.scss */ "./components/GameTable/GameTable.scss");
/* harmony import */ var _Rendomizer_randomizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Rendomizer/randomizer */ "./components/Rendomizer/randomizer.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var GameTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function (_ref) {
  var cards = _ref.cards,
      onEndGame = _ref.onEndGame,
      onAddLeaderActionCreator = _ref.onAddLeaderActionCreator;
  var cardClone = JSON.parse(JSON.stringify(cards));
  var gameCards = [].concat(_toConsumableArray(cards), _toConsumableArray(cardClone));

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      openCards = _useState2[0],
      setOpenCards = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      round = _useState4[0],
      setRound = _useState4[1]; //Вносим в масив рандомную очередь


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var rendomArray = (0,_Rendomizer_randomizer__WEBPACK_IMPORTED_MODULE_3__.default)(1, 37, 37);
    gameCards.map(function (elem, index) {
      elem.order = rendomArray[index];
    });
  }, []);

  var hanleRoll = function hanleRoll(index) {
    if (openCards.length < 2) {
      setOpenCards(function (cards) {
        return [].concat(_toConsumableArray(cards), [index]);
      });
    }
  }; //Сверка найденых карт + временные тамауты для просмотра


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var firstCard = gameCards[openCards[0]];
    var secondCard = gameCards[openCards[1]];

    if (secondCard && firstCard.id === secondCard.id && openCards[0] !== openCards[1]) {
      round.every(function (val) {
        return val !== firstCard.id;
      }) && setRound(function (round) {
        return [].concat(_toConsumableArray(round), [firstCard.id]);
      });
    }

    if (openCards.length > 0 && openCards.length < 3) {
      var timerId = setTimeout(function () {
        return setOpenCards([]);
      }, 5000);

      if (openCards.length > 1 && openCards.length < 3) {
        clearTimeout(timerId);
        setTimeout(function () {
          return setOpenCards([]);
        }, 1500);
      }
    }
  }, [openCards]); //Условие конца игры

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (round.length === cards.length) {
      onEndGame();
    }
  }, [round]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      onAddLeaderActionCreator(prompt("Введите имя:", "Аноним"));
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "game-table"
  }, gameCards.map(function (card, index) {
    var isRoll = false;

    if (openCards.includes(index)) {
      isRoll = true;
    }

    if (round.includes(card.id)) {
      isRoll = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_Card_Card__WEBPACK_IMPORTED_MODULE_1___default()), {
      key: index + card.name,
      index: index,
      card: card.name,
      order: card.order,
      isRoll: isRoll,
      hanleRoll: hanleRoll
    });
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (GameTable);

/***/ }),

/***/ "./components/LeadersTable/LeadersTable.jsx":
/*!**************************************************!*\
  !*** ./components/LeadersTable/LeadersTable.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _LeadersTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeadersTable.scss */ "./components/LeadersTable/LeadersTable.scss");



var LeadersTable = function LeadersTable(_ref) {
  var leaders = _ref.leaders;

  var byField = function byField(field) {
    return function (a, b) {
      return a[field] > b[field] ? 1 : -1;
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "liader-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "liader-table__title"
  }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043B\u0438\u0434\u0435\u0440\u043E\u0432"), leaders.sort(byField("time")).slice(0, 5).map(function (val) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "liader-table__item",
      key: val.id + name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "liader-table__name"
    }, "\u0418\u043C\u044F: ".concat(val.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "liader-table__time"
    }, "\u0412\u0440\u0435\u043C\u044F: ".concat(val.time)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LeadersTable);

/***/ }),

/***/ "./components/MainContent/MainContent.jsx":
/*!************************************************!*\
  !*** ./components/MainContent/MainContent.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _GameTable_GameTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameTable/GameTable */ "./components/GameTable/GameTable.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_cardGameActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cardGameActions */ "./store/actions/cardGameActions.js");
/* harmony import */ var _LeadersTable_LeadersTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LeadersTable/LeadersTable */ "./components/LeadersTable/LeadersTable.jsx");
/* harmony import */ var _MainContent_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainContent.scss */ "./components/MainContent/MainContent.scss");
/* harmony import */ var _Timer_TimerContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Timer/TimerContainer */ "./components/Timer/TimerContainer.jsx");








var MainContent = function MainContent() {
  var cards = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.cardsGame.cards;
  });
  var isStartGame = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.cardsGame.isStartGame;
  });
  var leaders = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.cardsGame.leaders;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var onStartGame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    dispatch((0,_store_actions_cardGameActions__WEBPACK_IMPORTED_MODULE_3__.startGameActionCreator)());
  }, []);
  var onEndGame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    dispatch((0,_store_actions_cardGameActions__WEBPACK_IMPORTED_MODULE_3__.endGameActionCreator)());
  }, []);
  var onAddLeaderActionCreator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    dispatch((0,_store_actions_cardGameActions__WEBPACK_IMPORTED_MODULE_3__.addLeaderActionCreator)(name));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, isStartGame ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Timer_TimerContainer__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GameTable_GameTable__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: "game-page__table",
    cards: cards,
    onEndGame: onEndGame,
    onAddLeaderActionCreator: onAddLeaderActionCreator
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "start-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LeadersTable_LeadersTable__WEBPACK_IMPORTED_MODULE_4__.default, {
    leaders: leaders
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "start-page__btn",
    onClick: onStartGame
  }, "\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443")));
};

/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./components/Timer/Timer.jsx":
/*!************************************!*\
  !*** ./components/Timer/Timer.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function Timer(_ref) {
  var onSetGameTime = _ref.onSetGameTime;
  var secondStep = 0;
  var timer;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('00:'),
      _useState2 = _slicedToArray(_useState, 2),
      hours = _useState2[0],
      setHours = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('00:'),
      _useState4 = _slicedToArray(_useState3, 2),
      minutes = _useState4[0],
      setMinutes = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('00'),
      _useState6 = _slicedToArray(_useState5, 2),
      seconds = _useState6[0],
      setSeconds = _useState6[1];

  var startTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    timer = setInterval(function () {
      secondStep = secondStep + 1000;
      var dateTimer = new Date(secondStep);
      setHours(('0' + dateTimer.getUTCHours()).slice(-2) + ':');
      setMinutes(('0' + dateTimer.getUTCMinutes()).slice(-2) + ':');
      setSeconds(('0' + dateTimer.getUTCSeconds()).slice(-2));
    }, 1000);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    startTimer();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onSetGameTime(hours + minutes + seconds);
  }, [seconds]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, hours), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, minutes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, seconds)));
}));

/***/ }),

/***/ "./components/Timer/TimerContainer.jsx":
/*!*********************************************!*\
  !*** ./components/Timer/TimerContainer.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timer */ "./components/Timer/Timer.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_cardGameActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cardGameActions */ "./store/actions/cardGameActions.js");
/* harmony import */ var _TimerContainer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TimerContainer.scss */ "./components/Timer/TimerContainer.scss");





/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(function UserInfo() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var onSetGameTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (time) {
    dispatch((0,_store_actions_cardGameActions__WEBPACK_IMPORTED_MODULE_3__.setGameTime)(time));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "timer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Timer__WEBPACK_IMPORTED_MODULE_1__.default, {
    onSetGameTime: onSetGameTime
  }));
}));

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./App.jsx");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__.default, null), document.getElementById('root'));

/***/ }),

/***/ "./components/Card/Card.scss":
/*!***********************************!*\
  !*** ./components/Card/Card.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/GameTable/GameTable.scss":
/*!*********************************************!*\
  !*** ./components/GameTable/GameTable.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/LeadersTable/LeadersTable.scss":
/*!***************************************************!*\
  !*** ./components/LeadersTable/LeadersTable.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/MainContent/MainContent.scss":
/*!*************************************************!*\
  !*** ./components/MainContent/MainContent.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Timer/TimerContainer.scss":
/*!**********************************************!*\
  !*** ./components/Timer/TimerContainer.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Card/Card.tsx":
/*!**********************************!*\
  !*** ./components/Card/Card.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");
__webpack_require__(/*! ./Card.scss */ "./components/Card/Card.scss");
exports.default = (0, react_1.memo)(function Card(_a) {
    var card = _a.card, isRoll = _a.isRoll, index = _a.index, hanleRoll = _a.hanleRoll, order = _a.order;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: isRoll ? "card roll" : "card", onClick: function () { return hanleRoll(index); }, style: { order: order + index } }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "card__front", src: "./images/".concat(card, ".svg"), alt: "" }), (0, jsx_runtime_1.jsx)("img", { className: "card__back", src: "./images/back.svg", alt: "" })] })));
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-redux_es_index_js-node_mo-2962b9"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-redux_es_index_js-node_mo-2962b9"], function() { return __webpack_require__("./index.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;