import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updateInterestRate } from '../../../actions/mortgageInputs';

class InterestRate extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this); 
  }

  onChange(value) {
    const { onUpdateInterestRate } = this.props;

    onUpdateInterestRate(value);
  }

  onbtnClickF()
  {
    const { interestRate } = this.props;    
    var valc = interestRate + 0.1;
    this.onChange(Math.round(valc * 100) / 100);    
  }

  onbtnClickR()
  {
    const { interestRate } = this.props;
    
    if(interestRate > 0)
    {
    var valc = interestRate - 0.1;
    this.onChange(Math.round(valc * 100) / 100);
    }
  }

  render() {
    const { interestRate } = this.props;

    return (
      <div className="MortgageSection-interestRate u-formInput">
        <div className="Subslabel">
        <span>Interest rate </span>  
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${interestRate <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        %<input readOnly className="Subsval" value={interestRate}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>
      </div>
    );
  }
}

InterestRate.propTypes = {
  interestRate: PropTypes.number,
};

const mapStateToProps = (state) => ({
  interestRate: state.mortgageInputs.interestRate,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateInterestRate(interestRate) {
    dispatch(updateInterestRate(interestRate));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterestRate);
