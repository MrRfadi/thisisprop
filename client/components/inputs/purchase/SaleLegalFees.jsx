import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updateSaleLegalFees } from '../../../actions/purchaseInputs';

class SaleLegalFees extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);
  }

  onChange(value) {
    const { onUpdateSaleLegalFees } = this.props;

    onUpdateSaleLegalFees(value);
  }

  onbtnClickF()
  {
    const { saleLegalFees } = this.props;
    var valc = saleLegalFees + 25;
    this.onChange(valc);
  }

  onbtnClickR()
  {
    const { saleLegalFees } = this.props;
    if(saleLegalFees > 0)
    {
    var valc = saleLegalFees - 25;
    this.onChange(valc);
    }
  }

  render() {
    const { saleLegalFees } = this.props;

    return (
      <div className="PurchaseSection-saleLegalFees u-formInput">        
        <div className="Subslabel">
        <span>Sale legal fees </span>       
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${saleLegalFees <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        £<input readOnly className="Subsval" value={saleLegalFees}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>
      </div>
    );
  }
}

SaleLegalFees.propTypes = {
  saleLegalFees: PropTypes.number,
};

const mapStateToProps = (state) => ({
  saleLegalFees: state.purchaseInputs.saleLegalFees,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateSaleLegalFees(saleLegalFees) {
    dispatch(updateSaleLegalFees(saleLegalFees));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaleLegalFees);
