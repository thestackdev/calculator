import { configureStore } from '@reduxjs/toolkit'
import calculator from 'redux/calculator'

export default configureStore({
  reducer: calculator,
})
