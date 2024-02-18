import SEARCH_ACTIONS from "context/constants/searchActions";
import { ISearchInitialState, Action } from "types/context";

const reducer = (
  state: ISearchInitialState,
  action: Action,
): ISearchInitialState => {
  switch (action.type) {
    case SEARCH_ACTIONS.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchList: action.payload,
      };
    case SEARCH_ACTIONS.UPDATE_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
