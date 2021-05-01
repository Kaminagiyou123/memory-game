const reducer = (state, action) => {
  if (action.type === "START_NEW") {
    return {
      ...state,
      moves: 0,
      pairsFound: 0,
      cardOne: null,
      cardTwo: null,
      cardsStatus: new Array(12).fill(0),
      cardsPaired: new Array(12).fill(0),
    };
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
      cardsStatus: new Array(12).fill(0),
      cardOne: null,
      cardTwo: null,
      moves: state.moves + 1,
    };
  }
  if (action.type === "SAME_NUMBER") {
    let newArr = [...state.cardsStatus];
    return {
      ...state,
      cardsStatus: new Array(12).fill(0),
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
