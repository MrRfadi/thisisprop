import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import TweenMax from 'gsap';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import SurveyFees from './inputs/purchase/SurveyFees';
import PurchaseLegalFees from './inputs/purchase/PurchaseLegalFees';
import PurchaseAgentFees from './inputs/purchase/PurchaseAgentFees';
import SaleLegalFees from './inputs/purchase/SaleLegalFees';
import SaleAgentFees from './inputs/purchase/SaleAgentFees';
//import RentalIncome from './inputs/purchase/RentalIncome';

export default class FeesIncomeContainer extends Component {
  constructor() {
    super();

    this.headerClicked = this.headerClicked.bind(this);
  }

  componentDidMount() {
    const inputSection = findDOMNode(this).querySelector('.FeesIncomeContainer-fees');

    TweenMax.set(inputSection, { height: 0 });
  }

  headerClicked(event) {
    const target = event.currentTarget.parentElement.querySelector('.FeesIncomeContainer-fees');

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
      <div className="FeesIncomeContainer">
         <header className="FeesIncomeContainer-header" onClick={this.headerClicked}>
          <h3>PURCHASE AND SALE FEES</h3>
          <Icon type="caret-right" className="u-floatRight"/>
        </header>
        <div className="FeesIncomeContainer-fees">
          <div className="FeesIncomeContainer-inputs">            
            <PurchaseLegalFees />
            <SaleLegalFees />
            <SurveyFees />
            <SaleAgentFees />
            <PurchaseAgentFees />  
          </div>
        </div>               
      </div>
    );
  }
}