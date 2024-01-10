"use client";

import { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Spinner from "@/components/common/Spinner";
import InputField from "@/components/contact/InputField";

export default function ContactForm({ dict }: Readonly<{ dict: Dictionary }>) {
	const [success, setSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},

		validationSchema: Yup.object({
			name: Yup.string().required(dict.contact.messages.noName),
			email: Yup.string()
				.email(dict.contact.messages.invalidEmail)
				.required(dict.contact.messages.noEmail),
			subject: Yup.string().required(dict.contact.messages.noSubject),
			message: Yup.string().required(dict.contact.messages.noMessage),
		}),

		onSubmit: (values, { setSubmitting, resetForm }) => {
			axios({
				method: "POST",
				url: "https://formbold.com/s/3V0ba",
				data: values,
			})
				.then(() => {
					setSuccess(true);
					resetForm();
					formRef.current?.reset();
				})
				.catch(() => {
					setError(dict.contact.messages.failed);
				})
				.finally(() => {
					setSubmitting(false);
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
					{dict.contact.messages.success}
				</span>
			)}
			{error && (
				<span className="w-full rounded-md p-4 text-center text-sm font-semibold text-[#ff8080]">
					{dict.contact.messages.failed}
				</span>
			)}
			<form
				className="flex w-3/4 flex-col gap-4"
				method="post"
				ref={formRef}
				onSubmit={formik.handleSubmit}
				noValidate>
				<div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
					<InputField
						type="text"
						name="name"
						label={dict.contact.label.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.name ? formik.errors.name : undefined}
					/>
					<InputField
						type="text"
						name="email"
						label={dict.contact.label.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.email ? formik.errors.email : undefined}
					/>
				</div>
				<InputField
					type="text"
					name="subject"
					label={dict.contact.label.subject}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.subject ? formik.errors.subject : undefined}
				/>
				<InputField
					type="textarea"
					name="message"
					label={dict.contact.label.message}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.message ? formik.errors.message : undefined}
				/>
				<div className="my-12 text-center md:my-8 md:text-end">
					<button
						type="submit"
						className={`inline-flex rounded border  bg-transparent px-12 py-4 text-xl font-bold uppercase  transition-all duration-300  md:px-6 md:py-3 md:text-base ${
							!formik.isSubmitting
								? " border-white text-white hover:bg-white hover:text-black"
								: "cursor-default border-gray-400 text-gray-400"
						}`}>
						{formik.isSubmitting && <Spinner />}
						{formik.isSubmitting
							? dict.contact.label.submitting
							: dict.contact.label.submit}
					</button>
				</div>
			</form>
		</>
	);
}
