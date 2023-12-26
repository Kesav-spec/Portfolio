export default function InputField(inputAttributes: Readonly<InputFieldProps>) {
	return (
		<div className="relative mt-6 flex flex-col-reverse pt-6">
			{inputAttributes.error && (
				<span
					className={`absolute mt-1 text-sm font-medium text-[#FF8080] ${
						inputAttributes.type !== "textarea" ? "top-16" : "top-40"
					}`}>
					{inputAttributes.error}
				</span>
			)}
			{inputAttributes.type !== "textarea" ? (
				<input
					type={inputAttributes.type}
					name={inputAttributes.name}
					id={inputAttributes.name}
					className={`form__field z-10 border-0 border-b bg-transparent py-1 text-[#fff] ${
						inputAttributes.error
							? "border-[#FF8080]"
							: "focus::border-[#fff] border-[#aaa] valid:border-[#fff]"
					}`}
					autoComplete="off"
					onChange={inputAttributes.onChange}
					onBlur={inputAttributes.onBlur}
					required
				/>
			) : (
				<textarea
					className={`form__field z-10 resize-none border-0 border-b bg-transparent py-1 text-[#fff] ${
						inputAttributes.error
							? "border-[#FF8080]"
							: "border-[#aaa] valid:border-[#fff] focus:border-[#fff]"
					}`}
					name={inputAttributes.name}
					id={inputAttributes.name}
					rows={5}
					onChange={inputAttributes.onChange}
					onBlur={inputAttributes.onBlur}
					autoComplete="off"
					required></textarea>
			)}
			<label
				htmlFor={inputAttributes.name}
				className={`form__label absolute top-6 font-bold uppercase transition-all duration-300 ${
					inputAttributes.error ? "!text-[#FF8080]" : "text-[#aaa] "
				}`}>
				{inputAttributes.label}
			</label>
		</div>
	);
}
