import { createSlice } from '@reduxjs/toolkit'

const calculator = createSlice({
  name: 'calculator',
  initialState: { input: '', output: '' },
  reducers: {
    update: (state, action) => {
      const val = action.payload

      if (typeof val === 'number' || val === '.') {
        state.input += val
      } else if (val === '←') {
        if (state.input.charAt(state.input.length - 1) === ' ') {
          state.input = state.input.slice(0, -3)
        } else {
          state.input = state.input.slice(0, -1)
        }
      } else if (val === 'AC') {
        state.input = ''
        state.output = ''
      } else if (val !== '=') {
        state.input += ` ${val} `
      }
      try {
        let exp = state.input
          .replaceAll(' ', '')
          .replaceAll('✕', '*')
          .replaceAll('÷', '/')
        state.output = eval(exp.replace(/(\d+)!/g, (m, n) => fact(+n)))
      } catch (error) {
        state.output = ''
        if (val === '=') state.input = ''
      }
    },
  },
})

const fact = (num) => {
  if (num <= 1) return 1
  else return num * fact(num - 1)
}

export const { update } = calculator.actions
export default calculator.reducer
