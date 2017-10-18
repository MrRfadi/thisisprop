import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updateGrowth } from '../../../actions/purchaseInputs';

class Growth extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);
  }

  onChange(value) {
    const { onUpdateGrowth } = this.props;

    onUpdateGrowth(value);
  }

  onbtnClickF()
  {
    const { growth } = this.props;
 
    var valc = growth + 1;
    this.onChange(valc);
    
  }

  onbtnClickR()
  {
    const { growth } = this.props;
    
  
    var valc = growth - 1;
    this.onChange(valc);

  }

  render() {
    const { growth } = this.props;

    return (
      <div className="PurchaseSection-growth u-formInput">
        <div className="Subslabel">
        <span>Growth </span>     
        </div>
        <div className="Subscont">
        <button className="Subs-btn" onClick={this.onbtnClickR}>-</button>
        %<input readOnly className="Subsval" value={growth}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>        
      </div>
    );
  }
}

Growth.propTypes = {
  growth: PropTypes.number,
};

const mapStateToProps = (state) => ({
  growth: state.purchaseInputs.growth,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateGrowth(growth) {
    dispatch(updateGrowth(growth));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Growth);
