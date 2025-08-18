export let initialStateUsers = {
  list: [],
  username: "Deepakkumar",
};
export function userReducer(state = initialStateUsers, action) {
  let { type, payload } = action;
  switch (type) {
    case "UPDATE_LIST":
      return { ...state, list: payload };

    case "CLEAR_LIST":
      return { ...state, list: [] };

    default:
      return { ...state };
  }
}
