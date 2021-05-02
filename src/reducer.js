import shuffle from "./components/home/Shuffle";

const reducer = (state, action) => {
  if (action.type === "START_NEW") {
    const array = Array.from(
      { length: state.numberOfBoxes / 2 },
      (_, i) => i + 1
    );
    let newArr = shuffle([...array, ...array]);

    return {
      ...state,
      cardsNumbers: [...newArr],
      moves: 0,
      pairsFound: 0,
      cardOne: null,
      cardTwo: null,
      cardsStatus: new Array(state.numberOfBoxes).fill(0),
      cardsPaired: new Array(state.numberOfBoxes).fill(0),
    };
  }
  if (action.type === "SET_LEVEL") {
    return { ...state, numberOfBoxes: action.payload };
  }
  if (action.type === "SET_RECORD") {
    return { ...state, bestRecord: state.moves };
  }
  if (action.type === "CLICK_CARD") {
    let newArr = [...state.cardsStatus];
    newArr[action.payload.index] = 1;
    if (!state.cardOne) {
      return { ...state, cardsStatus: newArr, cardOne: action.payload.item };
    } else {
      return { ...state, cardsStatus: newArr, cardTwo: action.payload.item };
    }
  }
  if (action.type === "DIFF_NUMBER") {
    return {
      ...state,
      cardsStatus: new Array(state.numberOfBoxes).fill(0),
      cardOne: null,
      cardTwo: null,
      moves: state.moves + 1,
    };
  }
  if (action.type === "SAME_NUMBER") {
    let newArr = [...state.cardsStatus];
    return {
      ...state,
      cardsStatus: new Array(state.numberOfBoxes).fill(0),
      cardOne: null,
      cardTwo: null,
      pairsFound: state.pairsFound + 1,
      moves: state.moves + 1,
      cardsPaired: state.cardsPaired.map((num, idx) => {
        return num + newArr[idx];
      }),
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
