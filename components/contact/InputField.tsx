interface InputFieldProps {
	name: string;
	type: string;
	label: string;
	error?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function InputField({
	name,
	type,
	label,
	error,
	onChange,
	onBlur,
}: InputFieldProps) {
	return (
		<div className="relative mt-6 flex flex-col-reverse pt-6">
			{error && (
				<span
					className={`absolute mt-1 text-sm font-medium text-[#FF8080] ${
						type !== "textarea" ? "top-16" : "top-40"
					}`}>
					{error}
				</span>
			)}
			{type !== "textarea" ? (
				<input
					type={type}
					name={name}
					id={name}
					className={`form__field z-10 border-0 border-b bg-transparent py-1 text-[#fff] ${
						error
							? "border-[#FF8080]"
							: "focus::border-[#fff] border-[#aaa] valid:border-[#fff]"
					}`}
					autoComplete="off"
					onChange={onChange}
					onBlur={onBlur}
					required
				/>
			) : (
				<textarea
					className={`form__field z-10 resize-none border-0 border-b bg-transparent py-1 text-[#fff] ${
						error
							? "border-[#FF8080]"
							: "border-[#aaa] valid:border-[#fff] focus:border-[#fff]"
					}`}
					name={name}
					id={name}
					rows={5}
					onChange={onChange}
					onBlur={onBlur}
					autoComplete="off"
					required></textarea>
			)}
			<label
				htmlFor={name}
				className={`form__label absolute top-6 font-bold uppercase transition-all duration-300 ${
					error ? "!text-[#FF8080]" : "text-[#aaa] "
				}`}>
				{label}
			</label>
		</div>
	);
}
