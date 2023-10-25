const LoadingSpinner = ({ color, innerColor }) => (
	<div className="relative h-9 w-9 ">
		<div
			className={`animate-loadspin rounded-full border-4 border-r-transparent border-b-transparent ${
				color || "border-black"
			} border-solid h-12 w-12 absolute `}
		/>

		<div
			className={` rounded-full border-4  ${
				innerColor || "border-black/20"
			} border-solid h-12 w-12`}
		/>
	</div>
);

export default LoadingSpinner;
