import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilter extends React.Component {
  
  state = {
    calendarFocused: null
  }

  selectHandler = (e) => {
    if (e.target.value === 'date') {
      this.props.dispatch(sortByDate());
    } else if (e.target.value === 'amount') {
      this.props.dispatch(sortByAmount());
    }
  }

  onChangeHandler = (e) => {
    this.props.dispatch(setTextFilter(e.target.value))
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.onChangeHandler} value={this.props.filters.text}/>
        <select value={this.props.filters.sortBy} onChange={this.selectHandler}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
  
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          displayFormat="DD/MM/YYYY"
          numberOfMonths={1}
          isOutsideRange={()=>false}
          showClearDates={true}
        />
      </div>
    );
  }
  
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}



export default connect(mapStateToProps)(ExpenseListFilter);