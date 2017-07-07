// use any promise lib you want.
import Promise from 'bluebird'

// this value to verify that the delay correctly impacts our UI.
export function getTime(delay) {
  return {
    types: ['GET_TIME_REQUEST', 'GET_TIME_SUCCESS', 'GET_TIME_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        // Just simulating an async request to a server via a setTimeout
        setTimeout(() => {
          const d = new Date()
          const ms = ('000' + d.getMilliseconds()).slice(-3)
          resolve({
            time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`
          })
        }, delay)
      })
    }
  }
}

// this value to verify that the delay correctly impacts our UI.
export function getTest() {
  return {
    types: ['GET_TEST_SUCCESS', 'GET_TEST_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        resolve({
          data: [
            {
              name: 'test name 1',
              id: 1
            },
            {
              name: 'test name 2',
              id: 2
            }
          ]
        })
      })
    }
  }
}
