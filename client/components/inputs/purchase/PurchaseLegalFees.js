import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updatePurchaseLegalFees } from '../../../actions/purchaseInputs';

class PurchaseLegalFees extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);
  }

  onChange(value) {
    const { onUpdatePurchaseLegalFees } = this.props;

    onUpdatePurchaseLegalFees(value);
  }

  onbtnClickF()
  {
    const { purchaseLegalFees } = this.props;
    var valc = purchaseLegalFees + 25;
    this.onChange(valc);
  }

  onbtnClickR()
  {
    const { purchaseLegalFees } = this.props;
    if(purchaseLegalFees > 0)
    {
    var valc = purchaseLegalFees - 25;
    this.onChange(valc);
    }
  }

  render() {
    const { purchaseLegalFees } = this.props;

    return (
      <div className="PurchaseSection-purchaseLegalFees u-formInput">
        <div className="Subslabel">
        <span>Purchase Legal fees </span>        
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${purchaseLegalFees <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        £<input readOnly className="Subsval" value={purchaseLegalFees}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>
      </div>
    );
  }
}

PurchaseLegalFees.propTypes = {
  purchaseLegalFees: PropTypes.number,
};

const mapStateToProps = (state) => ({
  purchaseLegalFees: state.purchaseInputs.purchaseLegalFees,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdatePurchaseLegalFees(purchaseLegalFees) {
    dispatch(updatePurchaseLegalFees(purchaseLegalFees));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseLegalFees);
