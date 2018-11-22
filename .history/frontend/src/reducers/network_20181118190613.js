import GET_RECOMMENDATIONS from "../Const/index";

export default function(state, action) {
  debugger;
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload
      };
  }
}
