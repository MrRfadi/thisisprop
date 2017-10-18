import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import Slider from 'antd/lib/slider';
import 'antd/lib/slider/style/css';

import { updateDeposit } from '../../../actions/mortgageInputs';

class Deposit extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);    
  }

  onChange(value) {
    const { onUpdateDeposit } = this.props;

    onUpdateDeposit(value);
  }

  onbtnClickF()
  {
    const { deposit, governmentLoan } = this.props;
    if(deposit <= (100 - governmentLoan))
    {
    var valc = deposit + 1;
    this.onChange(valc);
    }
  }

  onbtnClickR()
  {
    const { deposit } = this.props;
    if(deposit > 0)
    {
    var valc = deposit - 1;
    this.onChange(valc);
    }
    else{
      
    }
  }

  render() {
    const { deposit, governmentLoan } = this.props;

    return (
      <div className="MortgageSection-deposit u-formInput">
        <div className="Subslabel">
        <span>Deposit </span>       
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${deposit <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        %<input readOnly className="Subsval" value={deposit}/>
        <button className={`Subs-btn ${deposit >= (100 - governmentLoan) ? 'gored' : ''}`} onClick={this.onbtnClickF}>+</button>        
        </div> 
      </div>
    );
  }
}

Deposit.propTypes = {
  deposit: PropTypes.number,
  governmentLoan: PropTypes.number,
};

const mapStateToProps = (state) => ({
  deposit: state.mortgageInputs.deposit,
  governmentLoan: state.mortgageInputs.governmentLoan,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateDeposit(deposit) {
    dispatch(updateDeposit(deposit));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deposit);
