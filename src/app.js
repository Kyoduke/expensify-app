import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss'

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//   console.log(visibleExpenses);
// })


store.dispatch(addExpense({
  description: 'rent',
  note: '',
  amount: 5000,
  createdAt: 1
}))

store.dispatch(addExpense({
  description: 'water bill',
  note: '',
  amount: 5000,
  createdAt: 1343
}))

store.dispatch(addExpense({
  description: 'coffee',
  note: '',
  amount: 500,
  createdAt: 1
}))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
  

