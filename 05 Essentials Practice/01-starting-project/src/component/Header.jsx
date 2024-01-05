import LOGO from '../assets/investment-calculator-logo.png'

export default function Header(){
    return(
        <div id="header">
            <img src={LOGO}></img>
            <h1>Investment Calclator</h1>
        </div>
    )
}