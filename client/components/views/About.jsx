import React from 'react';
import { Meteor } from 'meteor/meteor';

export default function About() {
  return (
    <div className="About">
      <p>Thisisproperty brings peace of mind to first time buyers and homeowners alike. The property and mortgage calculator lays out all the financial information needed to buy and own a property, simplifying the process for the buyer. By inputting the price, hold period, costs, fees and mortgage information, one can quickly identify how much profit they are likely to make, how much cash they need to fund the upfront payments including deposit and stamp duty, and how much their mortgage will cost on a monthly or annual basis. As well as giving information about the individual property, the tool can provide wider information about the location they are interested in. The Location analysis allows comparison of the property growth over the last 10 years in two places of choice.</p>
      <h2>Stamp Duty Calculator</h2>
      <p>You pay Stamp Duty Land Tax (SDLT) in England and Wales on increasing portions of the property price above £125,000 when you buy a residential property. The scale is as follows:</p>
      <table>
        <tr>
        <th>Property or lease premium or transfer value</th>
        <th>SDLT Rate</th>
        </tr>

        <tr>
          <td>Up to£125,000</td>
          <td>Zero</td>
        </tr>

        <tr>
          <td>£125,001 to £250,000</td>
          <td>2%</td>
        </tr>

        <tr>
          <td>£250,001 to £925,000</td>
          <td>5%</td>
        </tr>

        <tr>
          <td>£925,001 to £1.5 million</td>
          <td>10%</td>
        </tr>

        <tr>
          <td>Above £1.5 million</td>
          <td>12%</td>
        </tr>
      </table>

      <p>In Scotland, Land and Buildings Transactions Tax (LBTT) applies. It is similar to the application in England and Wales, but the rates are applied to different prices along the scale as follows:</p>

      <table>
        <tr>
        <th>Property or lease premium or transfer value</th>
        <th>SDLT Rate</th>
        </tr>

        <tr>
          <td>Up to £145,000</td>
          <td>Zero</td>
        </tr>

        <tr>
          <td>£145,001 to £250,000</td>
          <td>2%</td>
        </tr>

        <tr>
          <td>£250,001 to £325,000</td>
          <td>5%</td>
        </tr>

        <tr>
          <td>£325,001 to £750,000</td>
          <td>10%</td>
        </tr>

        <tr>
          <td>Above £750,000</td>
          <td>12%</td>
        </tr>
      </table>
<p></p>
      <h2>Buy to let stamp duty</h2>
      <p>If you are buying an additional property to your primary residence, you are liable to pay an extra 3% stamp duty on the purchase price. This includes buyers purchasing a holiday home or a house for investment purposes. If you are moving home, and buy a new home before selling the old one - you will have to pay the higher rate. Although you can claim this back after the sale of the old house.</p>

      <h2>Property growth</h2>
      <p>The value of property can go up or down depending on a number of factors. Generally the most dominant force is the condition of the market and the general condition of the economy. If the price of your home decreases below the value of your mortgage then you would be in negative equity.</p>

      <h2>Help to buy equity loan</h2>
<p>With a Help to Buy: Equity Loan, the government loans you up to 40% of the purchase price inside Greater London and up to 20% outside Greater London. The buyer can then reduce their deposit to as low as 5%. The government will then take an equity share in your home equal to the percentage amount loaned on acquisition.</p>

<p>Let’s say you buy a home for £200,000, and the government lends you 20% of the purchase price - or £40,000. A number of years later you sell the home for £210,000. The government’s stake in your home is still 20%, so you pay them back £42,000.</p>

<p>No interest is charged on the loan for the first five years. After that the interest is 1.75% per annum. The maximum you can borrow from Help to Buy in England is £120,000 and up to £240,000 for London.</p>


<h2>Amortising v interest only loan</h2>
<p>An amortizing loan is a loan where the principal of the loan is paid down over the life of the loan. If the interest rate is fixed, each payment will be equal, made up of principal and interest - the proportion of which depends on how much of the loan has been paid off, the term, and the interest rate.</p>

<p>An interest only loan is one where no principal is paid off for the full term. The full amount of the loan is repaid when the borrower either refinances the loan or sells their home. Interest only loans are seen by lenders as more risky than amortising loans, thus will usually require a higher interest rate to be paid. The main drawback of an interest only loan is that when it comes to repay the loan, no equity has been gained through repayments. One would usually take out an interest only loan of they were speculation a strong rise in property prices.</p>

<h2>Income Multiplier</h2>
<p>The income multiplier is the size of your mortgage as a multiple of your household income. For example, if you borrow £200,000 and your annual income is £50,000, your income multiplier will be 4 times. Depending on the borrower and lending conditions, each lender will apply a different multiple on a case by case basis. However in general, banks will lend up to 3.5 to 4 time annual household income. The calculator provided here should only be used as a guide and is not to be relied upon when applying for a loan.</p>






    </div>
  );
}