import GET_RECOMMENDATIONS from "../Const/index";
var recommendation_initialstate = {
  status: "",
  msg: "",
  token: ""
};
export default function(state = recommendation_initialstate, action) {
  debugger;
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload
      };
  }
  return state;
}
