import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

import Slider from 'antd/lib/slider';
import 'antd/lib/slider/style/css';

import { updateTerm } from '../../../actions/mortgageInputs';

class Term extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onbtnClickF = this.onbtnClickF.bind(this);
    this.onbtnClickR = this.onbtnClickR.bind(this); 
  }

  onChange(value) {
    const { onUpdateTerm } = this.props;

    onUpdateTerm(value);
  }

  onbtnClickF()
  {
    const { term } = this.props;
    
    if(term < 35)
    {
    var valc = term + 1;
    this.onChange(valc);
    }
  }

  onbtnClickR()
  {
    const { term } = this.props;
    
    if(term > 5)
    {
    var valc = term - 1;
    this.onChange(valc);
    }
    else{
      
    }
  }

  render() {
    const { term } = this.props;

    return (
      <div className="MortgageSection-term u-formInput">
        <div className="Subslabel">
        <span>Term </span>     
        </div>
        <div className="Subscont">
        <button className={`Subs-btn ${term <= 5 ? 'gored' : ''}`} onClick={this.onbtnClickR}>-</button>
        Y<input readOnly className="Subsval" value={term}/>
        <button className={`Subs-btn ${term >= 35 ? 'gored' : ''}`} onClick={this.onbtnClickF}>+</button>        
        </div> 
      </div>
    );
  }
}

Term.propTypes = {
  term: PropTypes.number,
};

const mapStateToProps = (state) => ({
  term: state.mortgageInputs.term,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateTerm(term) {
    dispatch(updateTerm(term));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Term);
