export function _test(state = {}, action) {
  console.log('_test reducer-test called with state ', state , ' and action ', action);

  switch (action.type) {
    case 'CREATE_STORE':
      return {
        ...state,
        test: true
      }
    case 'CREATE_STORE_SUCCESS':
      return {
        ...state,
        des: "SUCCESS",
        test: true
      }
    case 'CREATE_STORE_FAILURE':
      // we could add an error message here, to be printed somewhere in our application
      return {
          ...state,
        des: "ERROR",  
        test: false
      }
    default:
      return state
  }
}
