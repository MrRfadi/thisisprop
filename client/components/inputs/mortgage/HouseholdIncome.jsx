import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updateHouseholdIncome } from '../../../actions/mortgageInputs';

class HouseholdIncome extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this); 
  }

  onChange(value) {
    const { onUpdateHouseholdIncome } = this.props;

    onUpdateHouseholdIncome(value);
  }

  onbtnClickF()
  {
    const { householdIncome } = this.props;
    
    var valc = householdIncome + 1000;
    this.onChange(valc);
    
  }

  onbtnClickR()
  {
    const { householdIncome } = this.props;
    
    if(householdIncome > 0)
    {
    var valc = householdIncome - 1000;
    this.onChange(valc);
    }
    else{
      
    }
  }

  render() {
    const { householdIncome } = this.props;

    return (
      <div className="MortgageSection-HouseholdIncome u-formInput">
        <div className="Subslabel">
         <span>Annual Household income </span>     
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${householdIncome <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        £<input readOnly className="Subsval" value={householdIncome}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>
      </div>
    );
  }
}



HouseholdIncome.propTypes = {
  householdIncome: PropTypes.number,
};

const mapStateToProps = (state) => ({
  householdIncome: state.mortgageInputs.householdIncome,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateHouseholdIncome(householdIncome) {
    dispatch(updateHouseholdIncome(householdIncome));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseholdIncome);
