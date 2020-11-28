//Action Types

const GOOD_MORNING = "GOOD_MORNING";
const GOOD_AFTERNOON = "GOOD_AFTERNOON";
const GOOD_EVENING = "GOOD_EVENING";

//Actions

export let sayGoodMorning = () => {
  return {
    type: GOOD_MORNING,
    payload: "wishing Good Morning"
  };
};

export let sayGoodAfternoon = () => {
  return {
    type: GOOD_AFTERNOON,
    payload: "wishing Good Afternoon"
  };
};

export let sayGoodEvening = () => {
  return {
    type: GOOD_EVENING,
    payload: "wishing Good Evening"
  };
};

//Reducer

let initialState = {
  message: "Hello from Reducer"
};

export let messageCardReducer = (state = initialState, event) => {
  switch (event.type) {
    case "GOOD_MORNING":
      return { message: "Good Morning from Reducer" };
    case "GOOD_AFTERNOON":
      return { message: "Good AfterNoon from Reducer" };
    case "GOOD_EVENING":
      return { message: "Good Evening from Reducer" };
    default:
      return state;
  }
};
