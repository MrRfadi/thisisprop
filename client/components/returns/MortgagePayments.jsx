import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

function MortgagePayments ({ calculations, headerClicked }) {
  const {
    brokerFee,
    deposit,
    interestRate,
    loanType,
    term,
    loanAmount,
    depositPaid,
    monthlyMortgagePayment,
    interestAndAmortisation,
    interestPaid,
    amortisationPaid,
    bankCosts,
  } = calculations;

  const capitalize = string => [...string].map(
    (char, index) => index ? char : char.toUpperCase()
  ).join('');

  return (
    <section className="ReturnsContainer-section">
      <header className="ReturnsContainer-header" onClick={headerClicked}>
        <h3>Mortgage Payments</h3>
        <Icon type="caret-right" className="u-floatRight"/>
      </header>
      <div className="ReturnsContainer-values">
        <ul>
          <li className="ReturnsContainer-loanAmount">
            <span>Mortgage Amount: </span>
            <span className="u-floatRight">{formatCurrency(loanAmount)}</span>
          </li>
          <li className="ReturnsContainer-deposit">
            <span>Deposit ({deposit}%): </span>
            <span className="u-floatRight">{formatCurrency(depositPaid)}</span>
          </li>
          <li className="ReturnsContainer-term">
            <span>Mortgage term: </span>
            <span className="u-floatRight">{term} years</span>
          </li>
          <li className="ReturnsContainer-mortbroker">
            <span>Broker fee: </span>
            <span className="u-floatRight">{formatCurrency(brokerFee)}</span>
          </li>         
          <li className="ReturnsContainer-interestRate">
            <span>Interest rate: </span>
            <span className="u-floatRight">{interestRate}%</span>
          </li>
          <li className="ReturnsContainer-mortgageType">
            <span>Mortgage type: </span>
            <span className="u-floatRight">{capitalize(loanType)}</span>
          </li> 
        </ul>
        <ul>         
          <li className="ReturnsContainer-monthlyPayments">
            <span>Monthly payments: </span>
            <span className="u-floatRight">{formatCurrency(monthlyMortgagePayment)}</span>
          </li>
          <li className="ReturnsContainer-annualPayments">
            <span>Annual payments: </span>
            <span className="u-floatRight">{formatCurrency(monthlyMortgagePayment * 12)}</span>
          </li>  
          <li className="ReturnsContainer-incomemultiplier">
            <span>Income Multiplier </span>
            <span className="u-floatRight">3.5 X</span>
          </li>   
          <li className="ReturnsContainer-bankPayments">
            <span>Loan Payments: </span>
            <span className="u-floatRight">{formatCurrency(bankCosts)}</span>
          </li>    
          <li className="ReturnsContainer-interestPaid2">
            <span>Interest: </span>
            <span className="u-floatRight">{formatCurrency(interestPaid)}</span>
          </li>
          <li className="ReturnsContainer-amortisationPaid">
            <span>Amortisation: </span>
            <span className="u-floatRight">{formatCurrency(amortisationPaid)}</span>
          </li>                   
        </ul>

        <div className="ChartContainer-Mortgge">
        
            <ResponsiveContainer height={300}>
              <LineChart
                width={730}
                height={250}
                data={interestAndAmortisation}
                margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
              >
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="interest"
                  stroke="rgb(255, 127, 80)"
                  isAnimationActive={true}
                />
                <Line
                  type="monotone"
                  dataKey="amortisation"
                  stroke="rgba(70, 147, 140, 0.7)"
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
      </div>
      
    </section>
  );
}

MortgagePayments.propTypes = {
  calculations: PropTypes.object,
  headerClicked: PropTypes.func.isRequired,
};

export default MortgagePayments;
