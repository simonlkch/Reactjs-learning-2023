import { useState } from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Result({ userInput }) {
  // let [inputObj, setInputObj] = useState({
  //     initialInvestment: 10000,
  //     annualInvestment: 10,
  //     expectedReturn: 10010,
  //     duration: 10
  // })

  let calcResults = calculateInvestmentResults(userInput)
  console.log(calcResults)
  const initialInvestment = calcResults[0].valueEndOfYear - calcResults[0].interest - calcResults[0].annualInvestment;
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>investment (Year)</th>
          <th>Total Interest</th>
          <th>Invested Captial</th>
        </tr>
      </thead>
      <tbody>

        {/* {calcResults.map((result, index) =>
          <tr key={index}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )} */}

        {calcResults.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;

          const totalAmountInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )

        })}

      </tbody>
    </table>
  )
}