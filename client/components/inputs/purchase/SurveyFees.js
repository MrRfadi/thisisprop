import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import InputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style/css';

import { updateSurveyFees } from '../../../actions/purchaseInputs';

class SurveyFees extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this);
  }

  onChange(value) {
    const { onUpdateSurveyFees } = this.props;

    onUpdateSurveyFees(value);
  }

  onbtnClickF()
  {
    const { surveyFees } = this.props;
    var valc = surveyFees + 25;
    this.onChange(valc);
  }

  onbtnClickR()
  {
    const { surveyFees } = this.props;
    if(surveyFees > 0)
    {
    var valc = surveyFees - 25;
    this.onChange(valc);
    }
  }

  render() {
    const { surveyFees } = this.props;

    return (
      <div className="PurchaseSection-surveyFees u-formInput">
        <div className="Subslabel">
        <span>Survey fees </span>        
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${surveyFees <= 0 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        £<input readOnly className="Subsval" value={surveyFees}/>
        <button className="Subs-btn" onClick={this.onbtnClickF}>+</button>        
        </div>
      </div>
    );
  }
}

SurveyFees.propTypes = {
  surveyFees: PropTypes.number,
};

const mapStateToProps = (state) => ({
  surveyFees: state.purchaseInputs.surveyFees,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateSurveyFees(surveyFees) {
    dispatch(updateSurveyFees(surveyFees));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyFees);
