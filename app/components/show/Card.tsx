export default function Card() {
	return (
		<div>
			<div className="border-2 border-red-700 absolute z-50 top-[3vh] left-[calc(50vw-200px)] h-[800px] w-full">
				<div className="card">
					<div className="card-side front">
						<div>Front Side</div>
					</div>
					<div className="card-side back">
						<div>Back Side</div>
					</div>
				</div>
			</div>
		</div>
	);
}
