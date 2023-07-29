import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../utils/actions'

const portfolio_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSideBar_Open: true,
    }
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSideBar_Open: false }
  }

  return state
  // eslint-disable-next-line no-unreachable
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default portfolio_reducer
