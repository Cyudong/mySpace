let initState = {};
// let initState = {
//     data: [
//       {
//         name: 'test name 1',
//         id: 1
//       },
//       {
//         name: 'test name 2',
//         id: 2
//       }
//     ]
//   }
export default function test(state = initState, action) {
  console.log('_test reducer called with state ', state , ' and action ', action);

  switch (action.type) {    
      case 'GET_TEST_SUCCESS':
        return {
            ...state,
            success: true
        }; 
    case 'GET_TEST_FAILURE':
      // we could add an error message here, to be printed somewhere in our application
      return {
        ...state,
        success: false,
        error: true
      }
    default:
      return state
  }
}
