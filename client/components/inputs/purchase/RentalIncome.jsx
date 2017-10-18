import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updateRentalIncome } from '../../../actions/purchaseInputs';

class RentalIncome extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);
  }

  onChange(value) {
    const { onUpdateRentalIncome } = this.props;

    onUpdateRentalIncome(value);
  }

  onbtnClickF()
  {
    const { rentalIncome } = this.props;
    var valc = rentalIncome + 25;
    this.onChange(valc);
  }

  onbtnClickR()
  {
    const { rentalIncome } = this.props;
    if(rentalIncome > 0)
    {
    var valc = rentalIncome - 25;
    this.onChange(valc);
    }
  }

  render() {
    const { rentalIncome } = this.props;

    return (
      <div className="PurchaseSection-rentalIncome u-formInput">
        <div className="Subslabel">
        <span>Rental income (£ per month)</span>        
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${rentalIncome <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        £<input readOnly className="Subsval" value={rentalIncome}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>               
      </div>
    );
  }
}

RentalIncome.propTypes = {
  rentalIncome: PropTypes.number,
};

const mapStateToProps = (state) => ({
  rentalIncome: state.purchaseInputs.rentalIncome,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateRentalIncome(rentalIncome) {
    dispatch(updateRentalIncome(rentalIncome));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentalIncome);
