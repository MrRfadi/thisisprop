import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
 
import SearchContainer from '../SearchContainer';
import PurchaseContainer from '../PurchaseContainer';
import PurchaseBasicContainer from '../PurchaseBasicContainer';
import FeesIncomeContainer from '../FeesIncomeContainer';
import FeesIncomeRentalContainer from '../FeesIncomeRentalContainer';
import MortgageContainer from '../MortgageContainer';
import ReturnsContainer from '../ReturnsContainer';
import ListingsContainer from '../ListingsContainer';

function dispoff1()
{
  document.getElementById("SB1").className = "SelctBtn ActBtn";
  document.getElementById("SB2").className = "SelctBtn";
  document.getElementById("SAL").className = "SearchAndListings Invisble";
  document.getElementById("MAR").className = "MortgageAndReturns";  
}

function dispoff2()
{
  document.getElementById("SB2").className = "SelctBtn ActBtn";
  document.getElementById("SB1").className = "SelctBtn";
  document.getElementById("SAL").className = "SearchAndListings";
  document.getElementById("MAR").className = "MortgageAndReturns Invisble";
}

export default function Home() {
  return (
    <div className="Home">
      <div className="AppBtn">
          <button id="SB1" className="SelctBtn ActBtn" onClick={dispoff2}>Find your Property</button>
          <button id="SB2" className="SelctBtn" onClick={dispoff1}>Calculate your Profit</button>
      </div>
      <div id="SAL" className="SearchAndListings">
        <SearchContainer />
        <ListingsContainer />
      </div>
      <div id="MAR" className="MortgageAndReturns">
        <PurchaseBasicContainer />        
        <FeesIncomeContainer />        
        <FeesIncomeRentalContainer />        
        <MortgageContainer />        
        <ReturnsContainer />
      </div>
    </div>
  );
}