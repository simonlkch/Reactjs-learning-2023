export default function UserInput() {
    return (
        <div id="user-input">
            <div className="input-group">
                <div id="user-input">
                    <label>Initial Investment</label>
                    <input type="number"></input>
                </div>
                <div id="user-input">
                    <label>Annual Investment</label>
                    <input type="number"></input>
                </div>

            </div>
            <div className="input-group">
                <div id="user-input">
                    <label>Expected Return</label>
                    <input type="number"></input>
                </div>
                <div id="user-input">
                    <label>Duration</label>
                    <input type="number"></input>
                </div>
            </div>
        </div>
    )
}