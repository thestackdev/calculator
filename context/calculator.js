import { createContext, useReducer } from 'react'

const initialState = { input: '', output: '' }
const Actions = {
  EXPRESSION: 'EXPRESSION',
  CLEAR: 'CLEAR',
  DELETE: 'DELETE',
  EQUALS: 'EQUALS',
}

const resolveSymbols = (unresolved) => {
  const chars = { '÷': '/', '✕': '*' }
  return unresolved.replace(/[÷✕]/g, (ur) => chars[ur])
}

const factorial = (num) => {
  if (num <= 1) return 1
  else return num * factorial(num - 1)
}

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.EXPRESSION:
      try {
        state.input = state.input += action.payload
        state.output = eval(
          resolveSymbols(
            state.input.replace(/(\d+)!/g, (m, n) => factorial(+n))
          )
        )
        return { ...state }
      } catch (error) {
        return { ...state }
      }
    case Actions.DELETE:
      if (state.input.length) {
        state.input = state.input.substr(0, state.input.length - 1)
        try {
          state.output = eval(
            resolveSymbols(
              state.input.replace(/(\d+)!/g, (m, n) => factorial(+n))
            )
          )
          return { ...state }
        } catch (error) {
          return { ...state }
        }
      } else return { ...state }
    case Actions.EQUALS:
      return { input: state.output, output: '' }
    case Actions.CLEAR:
      return { input: '', output: '' }
    default:
      return state
  }
}

const Context = createContext(initialState)
const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  )
}

export { Context, Actions, Provider }
