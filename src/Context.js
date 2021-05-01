import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const initialState = {
  moves: 0,
  pairsFound: 0,
  cardOne: null,
  cardTwo: null,
  bestRecord: null,
  cardsStatus: new Array(12).fill(0),
  cardsPaired: new Array(12).fill(0),
};
const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickCard = ({ index, item }) => {
    dispatch({ type: "CLICK_CARD", payload: { index, item } });
  };
  const sameNumber = () => {
    dispatch({ type: "SAME_NUMBER" });
  };
  const diffNumber = () => {
    dispatch({ type: "DIFF_NUMBER" });
  };
  const startNew = () => {
    dispatch({ type: "START_NEW" });
  };
  const setRecord = () => {
    dispatch({ type: "SET_RECORD" });
  };

  useEffect(() => {
    if (state.cardOne === state.cardTwo && state.cardTwo) {
      sameNumber();
    }
    if (state.cardOne !== state.cardTwo && state.cardTwo) {
      let id = setInterval(() => {
        diffNumber();
      }, 1000);
      return () => clearInterval(id);
    }
    if (!state.cardTwo) {
      return;
    }
  }, [state.cardTwo]);

  useEffect(() => {
    if (state.pairsFound === state.cardsStatus.length / 2) {
      if (!state.bestRecord || state.bestRecord > state.moves) {
        setRecord();
      }
      startNew();
    }
  }, [state.pairsFound]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        clickCard,
        sameNumber,
        diffNumber,
        startNew,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
