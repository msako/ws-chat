export const types = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  SEND_MESSAGE: 'SEND_MESSAGE',
  UPDATE_MESSAGE: 'UPDATE_MESSAGE',
  UPDATE_USERNAME: 'UPDATE_USERNAME',
  SET_ROOM: 'SET_ROOM'
}

export const initialState = {
  messages: [],
  message: '',
  username: '',
  room: ''
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_MESSAGE:
      return { ...state, message: '' }
    case types.ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] }
    case types.UPDATE_MESSAGE:
      return { ...state, message: action.payload }
    case types.UPDATE_USERNAME:
      return { ...state, username: action.payload }
    case types.SET_ROOM:
      return { ...state, room: action.payload }
    default:
      return state
  }
}

// Actions
export const actions = {
  addMessage: data => ({
    type: types.ADD_MESSAGE,
    payload: data
  }),
  sendMessage: data => ({
    type: types.SEND_MESSAGE
  }),
  updateMessage: value => ({
    type: types.UPDATE_MESSAGE,
    payload: value
  }),
  updateUsername: name => ({
    type: types.UPDATE_USERNAME,
    payload: name
  }),
  setRoom: room => ({
    type: types.SET_ROOM,
    payload: room
  })
}
