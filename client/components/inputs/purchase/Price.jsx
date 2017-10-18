import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import { updatePrice } from '../../../actions/purchaseInputs';

class Price extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);
  }

  onChange(value) {
    const { onUpdatePrice, governmentLoan } = this.props;

    if (governmentLoan > 0 && value >= 600000) {
      Modal.error({
        title: 'Help to Buy Equity Loan',
        content: 'Help to buy Equity loans are only granted on properties purchased for lower than £600k.',
        okText: 'OK',
        maskClosable: true,
      });
    } else {
      onUpdatePrice(value);
    }
  }

  onbtnClickF()
  {
    const { price } = this.props;
    var valc = price + 1;
    this.onChange(valc);
  }

  onbtnClickR()
  {
    const { price } = this.props;
    if(price > 0)
    {
    var valc = price - 1;
    this.onChange(valc);
    }
  }

  render() {
    const { price } = this.props;

    return (
      <div className="PurchaseSection-price u-formInput">
        <div className="Subslabel">
        <span>Price </span>        
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${price <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        £<input readOnly className="Subsval" value={price}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>       
      </div>
    );
  }
}

Price.propTypes = {
  price: PropTypes.number,
  governmentLoan: PropTypes.number,
};

const mapStateToProps = (state) => ({
  price: state.purchaseInputs.price,
  governmentLoan: state.mortgageInputs.governmentLoan,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdatePrice(price) {
    dispatch(updatePrice(price));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Price);
