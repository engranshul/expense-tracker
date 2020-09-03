export default (state, action) => {
  
  console.log("in reducer..state is",state)
  console.log("in reducer..action is", action);  

  /*  from dispatching in GlobalState.js we get type and payload in
  action object..state is automatically initialized..*/
  switch (action.type) {

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
