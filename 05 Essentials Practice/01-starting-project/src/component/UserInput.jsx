
export default function UserInput({handleInput, userInput}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div id="user-input">
          <label>Initial Investment</label>
          <input type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) => handleInput("initialInvestment", e.target.value)}
          />
          
        </div>
        <div id="user-input">
          <label>Annual Investment</label>
          <input type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) => handleInput("annualInvestment", e.target.value)}
          />
        </div>

      </div>
      <div className="input-group">
        <div id="user-input">
          <label>Expected Return</label>
          <input type="number"
            value={userInput.expectedReturn}
            required
            onChange={(e) => handleInput("expectedReturn", e.target.value)}
          />
        </div>
        <div id="user-input">
          <label>Duration</label>
          <input type="number"
            value={userInput.duration}
            required
            onChange={(e) => handleInput("duration", e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}