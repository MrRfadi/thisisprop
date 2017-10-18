import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updateHoldPeriod } from '../../../actions/purchaseInputs';

class HoldPeriod extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);
  }

  onChange(value) {
    const { onUpdateHoldPeriod } = this.props;

    onUpdateHoldPeriod(value);
  }

  onbtnClickF()
  {
    const { holdPeriod } = this.props;
 
    var valc = holdPeriod + 1;
    this.onChange(valc);
    
  }

  onbtnClickR()
  {
    const { holdPeriod } = this.props;
    
    if(holdPeriod > 0)
    {
    var valc = holdPeriod - 1;
    this.onChange(valc);
    }
    else{
      
    }
  }

  render() {
    const { holdPeriod } = this.props;

    return (
      <div className="PurchaseSection-holdPeriod u-formInput">
        <div className="Subslabel">
        <span>Hold Period </span>     
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${holdPeriod <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        Y<input readOnly className="Subsval" value={holdPeriod}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>         
      </div>
    );
  }
}

HoldPeriod.propTypes = {
  holdPeriod: PropTypes.number,
};

const mapStateToProps = (state) => ({
  holdPeriod: state.purchaseInputs.holdPeriod,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateHoldPeriod(holdPeriod) {
    dispatch(updateHoldPeriod(holdPeriod));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoldPeriod);
