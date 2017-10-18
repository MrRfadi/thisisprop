import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

import { BED_VALUES } from '../../../constants/formValues';

import { updateMinBeds } from '../../../actions/propertyInputs';

class Beds extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);    
  }

  onChange(value) {
    this.props.onUpdateMinBeds(parseInt(value));
  }

  onbtnClickF()
  {
    const { minBeds } = this.props;
    
    if(minBeds < 6)
    {
    var valc = minBeds + 1;
    this.onChange(valc);
    }
  }

  onbtnClickR()
  {
    const { minBeds } = this.props;
  
    if(minBeds > 0)
    {
    var valc = minBeds - 1;
    this.onChange(valc);
    }
    else{
      
    }
  }

  get selectOptions() {
    return BED_VALUES.map(item => (
      <Select.Option key={item}>{item === 0 ? 'No min' : `${item}+`}</Select.Option>
    ));
  }

  render() {
    const { minBeds } = this.props;

    return (
      <div className="PropertySection-beds u-formInput">
        <div className="Subslabel">
        <span>Bedrooms </span>     
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${minBeds <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        <input readOnly className="Subsval" value={minBeds}/>
        <button className={`Subs-btn ${minBeds >= 6 ? 'gored' : ''}`} onClick={this.onbtnClickF}>+</button>        
        </div> 
        
      </div>
    );
  }
}

Beds.propTypes = {
  minBeds: PropTypes.number,
};

const mapStateToProps = (state) => ({
  minBeds: state.propertyInputs.minBeds,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateMinBeds(amount) {
    dispatch(updateMinBeds(amount));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beds);
