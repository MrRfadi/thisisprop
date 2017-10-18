import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updateBrokerFee } from '../../../actions/mortgageInputs';

class BrokerFee extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this); 
  }

  onChange(value) {
    const { onUpdateBrokerFee } = this.props;

    onUpdateBrokerFee(value);
  }

  onbtnClickF()
  {
    const { brokerFee } = this.props;   
    
    var valc = brokerFee + 25;
    this.onChange(valc);    
  }

  onbtnClickR()
  {
    const { brokerFee } = this.props;
    
    if(brokerFee > 0)
    {
    var valc = brokerFee - 25;
    this.onChange(valc);
    }
    else{
      
    }
  }

  render() {
    const { brokerFee } = this.props;

    return (
      <div className="MortgageSection-brokerFee u-formInput">
         <div className="Subslabel">
         <span>Broker fee </span>     
         </div>
        <div className="Subscont">
        <button className={`Subs-btn ${brokerFee <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        £<input readOnly className="Subsval" value={brokerFee}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div> 
      </div>
    );
  }
}

BrokerFee.propTypes = {
  brokerFee: PropTypes.number,
};

const mapStateToProps = (state) => ({
  brokerFee: state.mortgageInputs.brokerFee,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateBrokerFee(brokerFee) {
    dispatch(updateBrokerFee(brokerFee));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrokerFee);
