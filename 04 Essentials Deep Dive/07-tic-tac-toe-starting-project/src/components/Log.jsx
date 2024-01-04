export default function Log({ turns }) {
	return (
		<div id="log">
			{/* {turns.map((turn) => {
				(
					<li key={`${turn.square.row}${turn.square.col}`}>
						{turn.player} Click {turn.square.row},{turn.square.col}
					</li>
				)
			})} */}
			{turns.map((turn) =>
				(
					<li key={`${turn.square.row}${turn.square.col}`}>
						{turn.player} Click {turn.square.row}, {turn.square.col}
					</li>
				)
			)}
		</div>
	)
}