## REDUCERS

How app states changes in response to action stata
Accepts state and argument

- (previousState, action) => newState

function reducer(state =, action) {
  if (action.type === '') {
    return [
        ...state,
        {
           description: action.payload.description,
           resolved:false,
        }
    ]
  }
}