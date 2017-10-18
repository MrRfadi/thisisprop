import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import TweenMax from 'gsap';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import Price from './inputs/purchase/Price';
import StampDuty from './inputs/purchase/StampDuty';
import BuyToLet from './inputs/purchase/BuyToLet';
import HoldPeriod from './inputs/purchase/HoldPeriod';
import Growth from './inputs/purchase/Growth';

export default class PurchaseBasicContainer extends Component {
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
      <div className="PurchaseBasicContainer">
         <header className="FeesIncomeContainer-header" onClick={this.headerClicked}>
          <h3>The Basics</h3>
          <Icon type="caret-right" className="u-floatRight"/>
        </header>
        <div className="FeesIncomeContainer-fees">
          <div className="FeesIncomeContainer-inputs"> 
          <Price />           
          <HoldPeriod />
          <Growth />
          <StampDuty /> 
          <div className="Subslabel">
          <span>Buy to Let </span>        
          </div>
          <div className="Subscont">          
          <BuyToLet />                  
          </div>
           
          </div>
        </div>               
      </div>
    );
  }
}