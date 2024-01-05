import { calculateInvestmentResults } from '../util/investment.js'

export default function Result() {
    let calcResults = calculateInvestmentResults({
        initialInvestment: 10000,
        annualInvestment: 10,
        expectedReturn: 10010,
        duration: 10
    })
    console.log(calcResults)
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
                <tr>
                    <td>
                        td1
                    </td>
                    <td>
                        td2
                    </td>
                    <td>
                        td3
                    </td>
                    <td>
                        td4
                    </td>
                    <td>
                        td5
                    </td>
                </tr>
            </tbody>
        </table>
    )
}