import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => {

  const handleClick = (e) => {
    props.dispatch(removeExpense({id: props.expense.id}))
    props.history.push('/')
  }

  return (
  <div>
    <ExpenseForm 
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense))
        props.history.push('/')
      }}
    />
    <button onClick={handleClick}>Remove</button>

  </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);