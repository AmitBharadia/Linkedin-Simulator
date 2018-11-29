const profile_initialstate = {
  status: "",
  msg: "",
  profile: {}
};

export default function(state = { status: "", msg: "", profile: {} }, action) {
  if (action.type === "PROFILE") {
    console.log("In reducer of profile");
    return {
      ...state,
      status: action.payload.status,
      msg: action.payload.msg,
      profile: action.payload
    };
  }

  return state;
}
