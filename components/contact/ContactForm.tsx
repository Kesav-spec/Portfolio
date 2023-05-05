"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import Spinner from "../common/Spinner";

export default function ContactForm() {
	const [success, setSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},

		validationSchema: Yup.object({
			name: Yup.string().required("Please enter your name"),
			email: Yup.string().email("Invalid email address").required("Please enter your email"),
			subject: Yup.string().required("Please enter a subject"),
			message: Yup.string().required("Please enter a message"),
		}),

		onSubmit: async (values) => {
			axios({
				method: "POST",
				url: "https://formbold.com/s/9Exr6",
				data: values,
			})
				.then((r) => {
					setSuccess(true);
				})
				.catch((r) => {
					setError("There seems to be a problem. Please try again.");
				});
		},

		validateOnChange: false,
		validateOnBlur: true,
	});

	useEffect(() => {
		if (success) {
			setTimeout(() => {
				setSuccess(false);
			}, 5000);
		}
		if (error) {
			setTimeout(() => {
				setError(null);
			}, 5000);
		}
	}, [success, error]);

	return (
		<>
			{success && (
				<span className="w-full rounded-md p-4 text-center text-sm font-semibold text-[#80ff80]">
					Your message has been submitted successfully.
				</span>
			)}
			{error && (
				<span className="w-full rounded-md p-4 text-center text-sm font-semibold text-[#ff8080]">
					Failed to submit your message. Try again later.
				</span>
			)}
			<form
				className="flex w-3/4 flex-col gap-4"
				method="post"
				onSubmit={formik.handleSubmit}
				noValidate>
				<div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
					<InputField
						type="text"
						name="name"
						label="Full name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.name ? formik.errors.name : undefined}
					/>
					<InputField
						type="text"
						name="email"
						label="Email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.email ? formik.errors.email : undefined}
					/>
				</div>
				<InputField
					type="text"
					name="subject"
					label="Subject"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.subject ? formik.errors.subject : undefined}
				/>
				<InputField
					type="textarea"
					name="message"
					label="Message"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.message ? formik.errors.message : undefined}
				/>
				<div className="my-12 text-center md:my-8 md:text-end">
					<button
						type="submit"
						className="rounded border border-white bg-transparent px-12 py-4 text-xl font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-black md:px-6 md:py-3 md:text-base">
						{formik.isSubmitting && <Spinner />}
						{formik.isSubmitting ? "Submitting..." : "Submit"}
					</button>
				</div>
			</form>
		</>
	);
}
