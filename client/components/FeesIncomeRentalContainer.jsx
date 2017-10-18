import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import TweenMax from 'gsap';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import RentalIncome from './inputs/purchase/RentalIncome';

export default class FeesIncomeRentalContainer extends Component {
  constructor() {
    super();

    this.headerClicked = this.headerClicked.bind(this);
  }

  componentDidMount() {
    const inputSection = findDOMNode(this).querySelector('.FeesIncomeContainer-income');

    TweenMax.set(inputSection, { height: 0 });
  }

  headerClicked(event) {
    const target = event.currentTarget.parentElement.querySelector('.FeesIncomeContainer-income');

    event.currentTarget.parentElement.classList.toggle('is-active');

    if (!event.currentTarget.parentElement.classList.contains('is-active')) {
      TweenMax.to(target, 0.5, {
        height: 0,
        ease: Power3.easeOut,
      });      
    } else {
      TweenMax.set(target, { height: 'auto' });
      TweenMax.from(target, 0.5, {
        height: 0,
        ease: Power3.easeOut,
      });
    }
  }  

  render() {
    return (
      <div className="FeesIncomeRentalContainer">
         <header className="FeesIncomeContainer-header" onClick={this.headerClicked}>
          <h3>INCOME</h3>
          <Icon type="caret-right" className="u-floatRight"/>
        </header>             
        <div className="FeesIncomeContainer-income">
          <div className="FeesIncomeContainer-inputs">
            <RentalIncome />
          </div>
        </div>
      </div>
    );
  }
}