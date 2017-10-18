import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

function DayOnePayment ({ calculations, headerClicked }) {
  const {
    buyToLet,
    purchaseLegalFees,
    surveyFees,
    brokerFee,
    stampDuty,
    dayOnePayment,
    depositPaid,
    stampDutyPaid,
    allInBorrowerCosts,
    bankCosts,
    interestPaid,
    amortisationPaid,
  } = calculations;

  const data = [
    { name: 'Day 1 payment', value: dayOnePayment, color: 'rgb(255, 127, 80)' },
    { name: 'Deposit', value: depositPaid, color: 'rgb(255, 145, 109)' },
    { name: 'Stamp duty', value: stampDutyPaid, color: 'rgb(255, 145, 109)' },
    { name: 'Legal Fees', value: purchaseLegalFees, color: 'rgb(252, 158, 132)' },
    { name: 'Survey Fees', value: surveyFees, color: 'rgb(252, 158, 132)' }, 

    { name: 'Loan costs', value: bankCosts, color: 'rgba(70, 147, 140, 0.7)' },
    { name: 'Interest', value: interestPaid, color: 'rgba(70, 147, 140, 0.6)' },
    { name: 'Loan amortisation', value: amortisationPaid, color: 'rgba(70, 147, 140, 0.6)' },
    { name: 'Broker Fee', value: brokerFee, color: 'rgba(70, 147, 140, 0.5)' },   
    
  ];

  return (
    <section className="ReturnsContainer-section">
      <header className="ReturnsContainer-header" onClick={headerClicked}>
        <h3>Day One Payment</h3>
        <Icon type="caret-right" className="u-floatRight"/>
      </header>
      <div className="ReturnsContainer-values">
        <ul>
          <li className="ReturnsContainer-allInCosts">
            <span>All in cost </span>
            <span className="u-floatRight">{formatCurrency(allInBorrowerCosts)}</span>
          </li>
          <li className="ReturnsContainer-total">
            <span>Day 1 payment: </span>
            <span className="u-floatRight">{formatCurrency(dayOnePayment)}</span>
          </li>
          <li className="ReturnsContainer-depositPaid">
            <span>Deposit paid: </span>
            <span className="u-floatRight">{formatCurrency(depositPaid)}</span>
          </li>
          <li className="ReturnsContainer-stamDutyPaid">
            <span>Stamp duty ({`${stampDuty}%`}): </span>
            <span className="u-floatRight">{formatCurrency(stampDutyPaid)}</span>
          </li>         
          <li className="ReturnsContainer-legalFees">
            <span>Legal Fees: </span>
            <span className="u-floatRight">{formatCurrency(purchaseLegalFees)}</span>
          </li>         
          <li className="ReturnsContainer-surveyFees">
            <span>Survey Fees: </span>
            <span className="u-floatRight">{formatCurrency(surveyFees)}</span>
          </li>          
        </ul>
        <ul>
          <li className="ReturnsContainer-allInCosts1">
            <span className="uihidden">All in costs: </span>
            <span className="u-floatRight uihidden">{formatCurrency(allInBorrowerCosts)}</span>
          </li>         
         
          <li className="ReturnsContainer-bankCosts">
            <span>Loan costs: </span>
            <span className="u-floatRight">{formatCurrency(bankCosts)}</span>
          </li>
          <li className="ReturnsContainer-interestPaid">
            <span>Interest: </span>
            <span className="u-floatRight">{formatCurrency(interestPaid)}</span>
          </li>
          <li className="ReturnsContainer-amortisation">
            <span>Loan amortisation: </span>
            <span className="u-floatRight">{formatCurrency(amortisationPaid)}</span>
          </li>
          <li className="ReturnsContainer-brokerFee">
            <span>Broker Fee: </span>
            <span className="u-floatRight">{formatCurrency(brokerFee)}</span>
          </li> 
          <li className="ReturnsContainer-brokerFee">
            <span>Help to Buy Interest: </span>
            <span className="u-floatRight">£0</span>
          </li>                     
        </ul>

        <div className="ChartContainer-Mortgge">
            <ResponsiveContainer height={300}>
              <PieChart width={250} height={250}>
                <Pie
                  data={data}
                  isAnimationActive={true}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#82ca9d"
                  label={({name, value})=>`${name}`}
                  >
                  {
                    data.map((entry, index) => <Cell key={index} fill={entry.color}/>)
                  } 
                </Pie>                 
              </PieChart>
            </ResponsiveContainer>
          </div>
      </div>
    </section>
  );
}


DayOnePayment.propTypes = {
  calculations: PropTypes.object.isRequired,
  headerClicked: PropTypes.func.isRequired,
};

export default DayOnePayment;
