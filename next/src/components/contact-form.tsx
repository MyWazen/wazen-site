'use client'

import React, { useState } from 'react'
import { sendEmail } from '@/action/sendEmail'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

const ContactForm = () => {
	const t = useTranslations('ContactUs')

	const { toast } = useToast()

	const [formData, setFormData] = useState<any>({
		firstName: '',
		lasttName: '',
		companyName: '',
		businessField: '',
		email: '',
		contactNumber: '',
		message: '',
	})
	const [errors, setErrors] = useState<any>({})

	const handleChange = (e: any) => {
		const { name, value } = e.target

		setFormData((prev: any) => ({ ...prev, [name]: value }))

		const error = validateField(name, value)
		setErrors((prev: any) => ({ ...prev, [name]: error }))
	}

	const validateField = (name: any, value: any) => {
		switch (name) {
			case 'firstName':
			case 'lastName':
			case 'companyName':
			case 'businessField':
				return /^[a-zA-Z\s]*$/.test(value)
					? ''
					: 'Only letters and spaces are allowed'
			case 'contactNumber':
				return /^\d*$/.test(value) ? '' : 'Only numbers are allowed'
			case 'email':
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
					? ''
					: 'Invalid email format'
			case 'message':
				return value.length > 2
					? ''
					: 'Message must be longer than 10 characters'
			default:
				return ''
		}
	}

	const handleSendEmail = async () => {
		const formErrors = Object.keys(formData).reduce((acc: any, key) => {
			const error = validateField(key, formData[key as keyof typeof formData])
			if (error) acc[key] = error
			return acc
		}, {})

		if (Object.keys(formErrors).length === 0) {
			try {
				const result = await sendEmail(formData)

				if (result.error == null) {
					toast({
						title: t('Success'),
						description: t('Your message was sent successfully'),
					})
					// Reset form
					setFormData({
						firstName: '',
						lastName: '',
						companyName: '',
						businessField: '',
						contactNumber: '',
						email: '',
						message: '',
					})
				} else {
					throw new Error(result.error || 'Failed to send email')
				}
			} catch (error) {
				console.error('Error sending email:', error)
				toast({
					title: t('Error'),
					description: t('Something went wrong'),
					variant: 'destructive',
				})
			}
		} else {
			setErrors(formErrors)
		}
	}

	return (
		<form
			id="contact-form"
			action={handleSendEmail}
			className="w-full space-y-8"
		>
			<div className="flex gap-4">
				<div className="w-full">
					<input
						type="text"
						id="firstName"
						name="firstName"
						className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-teal-500/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						placeholder={t('First Name')}
						onChange={handleChange}
						value={formData.firstName}
						required
					/>
					{errors['firstName'] && (
						<p className="mt-1 text-sm text-red-600">{errors['firstName']}</p>
					)}
				</div>
				<div className="w-full">
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={formData.lastName}
						className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-teal-500/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						placeholder={t('Last Name')}
						onChange={handleChange}
						required
					/>
					{errors['lastName'] && (
						<p className="mt-1 text-sm text-red-600">{errors['lastName']}</p>
					)}
				</div>
			</div>
			<div className="flex gap-4">
				<div className="w-full">
					<input
						type="text"
						id="companyName"
						name="companyName"
						value={formData.companyName}
						className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-teal-500/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						placeholder={t('Company Name')}
						onChange={handleChange}
						required
					/>
					{errors['companyName'] && (
						<p className="mt-1 text-sm text-red-600">{errors['companyName']}</p>
					)}
				</div>
				<div className="w-full">
					<input
						type="text"
						id="businessField"
						name="businessField"
						value={formData.businessField}
						className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-teal-500/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						placeholder={t('Business Field')}
						onChange={handleChange}
						required
					/>
					{errors['businessField'] && (
						<p className="mt-1 text-sm text-red-600">
							{errors['businessField']}
						</p>
					)}
				</div>
			</div>
			<div className="flex gap-4">
				<div className="w-full">
					<input
						type="text"
						id="contactNumber"
						name="contactNumber"
						value={formData.contactNumber}
						className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-teal-500/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						placeholder={t('Contact Number')}
						onChange={handleChange}
						required
					/>
					{errors['contactNumber'] && (
						<p className="mt-1 text-sm text-red-600">
							{errors['contactNumber']}
						</p>
					)}
				</div>
				<div className="w-full">
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium file:text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-teal-500/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						placeholder={t('Email')}
						onChange={handleChange}
						required
					/>
					{errors['email'] && (
						<p className="mt-1 text-sm text-red-600">{errors['email']}</p>
					)}
				</div>
			</div>
			<div className="sm:col-span-2">
				<textarea
					id="message"
					name="message"
					className="flex min-h-[60px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-teal-500/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
					rows={4}
					value={formData.message}
					onChange={handleChange}
					placeholder={t('Write your message here')}
				></textarea>
				{errors['message'] && (
					<p className="mt-1 text-sm text-red-600">{errors['message']}</p>
				)}
			</div>
			<div className="flex items-center gap-2">
				<input
					id="terms-and-conditions"
					type="checkbox"
					className="size-4 rounded"
				/>
				<label htmlFor="terms-and-conditions" className="text-sm text-gray-600">
					{t('I agree to the terms and conditions')}
				</label>
			</div>
			<button type="submit" className={cn('primary', 'h-12 w-full')}>
				{t('Send Message')}
			</button>
		</form>
	)
}

export default ContactForm
