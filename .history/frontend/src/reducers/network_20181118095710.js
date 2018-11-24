import GET_RECOMMENDATIONS from "../Const/index";

export default function(state, action) {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return {
        data: action.payload
      };
  }
}
