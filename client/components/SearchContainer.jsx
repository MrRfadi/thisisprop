import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import TweenMax from 'gsap';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import PriceRange from './inputs/property/Price';
import Beds from './inputs/property/Beds';
import Location from './inputs/property/Location';
import Radius from './inputs/property/Radius';
import Type from './inputs/property/Type';
import OrderBy from './inputs/property/OrderBy';
import GetListings from './inputs/property/GetListings';

export default class PropertyForm extends Component {
  constructor() {
    super();

    this.state = {
      activeInput: null,
    };

    this.inputHeaderClicked = this.inputHeaderClicked.bind(this);
    this.headerClicked = this.headerClicked.bind(this);
  }
  

  inputHeaderClicked(event) {
    const type = event.currentTarget.getAttribute('data-type');

    this.setState({ activeInput: type });
  }

  componentDidMount() {
    const inputSection = findDOMNode(this).querySelector('.SearchContainer-Disp');

    TweenMax.set(inputSection, { height: 0 });
  }

  headerClicked(event) {
    const target = event.currentTarget.parentElement.querySelector('.SearchContainer-Disp');

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
    const { activeInput } = this.state;

    return (
      <div className="SearchContainer">        

        <div className="SearchContainer-location"><Location /></div>

        <button className="Filtrbtn" onClick={this.headerClicked}>Filters <img src="images/Filter-128.png" width="20" height="20"/></button>
        <img className="SearchContainer-zooplaLogo" src="images/zoopla_logo.jpg"/>

    <div className="SearchContainer-Disp">  
        <hr/>
        <div className="SearchContainer-inputs">
          <span>Price Range</span>
          <div className="SearchContainer-priceRange active"><PriceRange /></div>
          <div className="SearchContainer-beds active"><Beds /></div>
          <div className="SearchContainer-type active"><Type /></div>
          <div className="SearchContainer-radius active"><Radius /></div>
          <div className="SearchContainer-orderBy active"><OrderBy /></div>
        </div>
    </div>
       
        

      </div>
    );
  }
}