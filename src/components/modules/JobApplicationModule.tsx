import FileUpload from '@/components/FileUpload'

export default function JobApplicationModule({
	heroTitle,
	heroSubtitle,
	formDescription,
	stepsTitle,
	steps,
}: {
	heroTitle?: string
	heroSubtitle?: string
	formDescription?: string
	stepsTitle?: string
	steps?: { title: string; icon?: any }[]
}) {
	return (
		<main id="main-content">
			<section
				className="pt-16 lg:pt-28"
				style={{
					backgroundImage: `
            linear-gradient(transparent, white),
            radial-gradient(at center top, rgb(21, 94, 117) 0%, rgb(45, 212, 191) 60%, rgb(255, 255, 255) 100%)
          `,
				}}
			>
				<div className="flex w-full flex-col items-center justify-center gap-y-6 rounded-2xl p-12">
					<h1 className="h1 mx-auto max-w-3xl text-center text-balance text-white ltr:leading-tight rtl:leading-snug">
						{heroTitle}
					</h1>
					<p className="mx-auto w-2/5 text-center text-lg text-gray-100">
						{heroSubtitle}
					</p>

					{/* Form Section */}
					<section className="bg-gradient-to-tl px-4 py-12">
						<div className="mx-auto grid max-w-5xl gap-8 rounded-2xl bg-white p-8 shadow-md md:grid-cols-2">
							{/* البيانات الأساسية */}
							<div>
								<h2 className="mb-4 text-right text-xl font-bold text-cyan-950">
									البيانات الأساسية
								</h2>
								<p className="mb-6 text-right text-sm text-gray-500">
									يرجى التأكد من إدخال جميع البيانات المطلوبة بشكل صحيح.
								</p>

								<div className="space-y-4 text-right">
									<div>
										<label className="mb-1 block text-sm font-medium text-gray-700">
											الاسم بالكامل
										</label>
										<input
											type="text"
											className="w-full rounded-md border border-cyan-400 px-4 py-2 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
											placeholder="حسام محمد"
										/>
									</div>

									<div className="flex gap-4">
										<div className="w-1/2">
											<label className="mb-1 block text-sm font-medium text-gray-700">
												تاريخ الميلاد
											</label>
											<input
												type="date"
												className="w-full rounded-md border border-cyan-400 px-4 py-2"
											/>
										</div>
										<div className="w-1/2">
											<label className="mb-1 block text-sm font-medium text-gray-700">
												العمر
											</label>
											<input
												type="text"
												className="w-full rounded-md border border-cyan-400 px-4 py-2"
												placeholder="30 عامًا"
											/>
										</div>
									</div>
									<div className="flex gap-4">
										<div className="w-1/2">
											<label className="mb-1 block text-sm font-medium text-gray-700">
												البلد
											</label>
											<input
												type="text"
												placeholder="الرياض"
												className="w-full rounded-md border border-cyan-400 px-4 py-2"
											/>
										</div>
										<div className="w-1/2">
											<label className="mb-1 block text-sm font-medium text-gray-700">
												المدينة
											</label>
											<input
												type="text"
												className="w-full rounded-md border border-cyan-400 px-4 py-2"
												placeholder=" الرياض"
											/>
										</div>
									</div>

									<div className="flex gap-4">
										<div className="w-1/2">
											<label className="mb-1 block text-sm font-medium text-gray-700">
												الجنسية
											</label>
											<input
												type="text"
												className="w-full rounded-md border border-cyan-400 px-4 py-2"
												placeholder="سعودي"
											/>
										</div>
										<div className="w-1/2">
											<label className="mb-1 block text-sm font-medium text-gray-700">
												النوع
											</label>
											<input
												type="text"
												className="w-full rounded-md border border-cyan-400 px-4 py-2"
												placeholder="ذكر"
											/>
										</div>
									</div>

									<div>
										<label className="mb-1 block text-sm font-medium text-gray-700">
											رقم الهوية (اختياري)
										</label>
										<input
											type="text"
											className="w-full rounded-md border border-cyan-400 px-4 py-2"
											placeholder="5-8-19996"
										/>
									</div>
									<div className="flex gap-4">
										<div className="w-1/2">
											<label className="mb-1 block text-sm font-medium text-gray-700">
												رقم الهاتف
											</label>
											<input
												type="text"
												className="w-full rounded-md border border-cyan-400 px-4 py-2"
												placeholder="+966 465 2990 243"
											/>
										</div>
										<div className="w-1/2">
											<label className="mb-1 block text-sm font-medium text-gray-700">
												البريد الإلكتروني
											</label>
											<input
												type="email"
												className="w-full rounded-md border border-cyan-400 px-4 py-2"
												placeholder="Hossam@example.com"
											/>
										</div>
									</div>
								</div>
							</div>
							{/* رفع المستندات */}
							<div>
								<h2 className="mb-4 text-right text-xl font-bold text-cyan-950">
									إرفاق المستندات
								</h2>
								<p className="mb-6 text-right text-sm text-gray-500">
									يرجى إرفاق سيرتك الذاتية بصيغة PDF أو ملف صورة شخصية واضحة،
									وشهادات الخبرة أو شهادات الدورات التدريبية ذات الصلة.
								</p>

								{/* مكون رفع الملف */}
								<FileUpload />

								<textarea
									placeholder="رسالة أو ملاحظات إضافية"
									className="mt-6 w-full rounded-md border border-cyan-300 px-4 py-2"
									rows={4}
								></textarea>

								<button className="mt-6 w-full rounded-lg bg-cyan-500 py-3 text-white transition hover:bg-cyan-600">
									إرسال الطلب
								</button>
							</div>
						</div>

						<p className="mt-6 text-center text-sm text-gray-500">
							عادة ما تستغرق مراجعة الطلبات من 5-7 أيام عمل. سيتم إخطارك عبر
							البريد الإلكتروني أو الهاتف في حال تم اختيارك للمقابلة.
						</p>
					</section>
				</div>
			</section>
			<section className="w-full bg-white px-4 py-16 text-center">
				<p className="mb-2 text-sm font-medium text-gray-400">
					مراحل دورة التوظيف الكاملة
				</p>

				{/* العنوان الرئيسي */}
				<h2 className="mb-12 text-2xl font-bold text-cyan-950 md:text-3xl">
					تعرف على الخطوات الأساسية <br /> في دورة التوظيف
				</h2>

				{/* شبكة الأيقونات */}
				<div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
					{[
						{
							title: 'التحضير',
							image:
								'https://cdn.sanity.io/images/m7bjawr3/production/8da32fdacc3605037ae763429d7eb1b4442e3d4b-136x167.png',
						},
						{ title: 'الاستقطاب', image: 'https://cdn.sanity.io/images/m7bjawr3/production/8da32fdacc3605037ae763429d7eb1b4442e3d4b-136x167.png' },
						{ title: 'الفرز', image: 'https://cdn.sanity.io/images/m7bjawr3/production/8da32fdacc3605037ae763429d7eb1b4442e3d4b-136x167.png' },
						{ title: 'الإختيار', image: 'https://cdn.sanity.io/images/m7bjawr3/production/8da32fdacc3605037ae763429d7eb1b4442e3d4b-136x167.png' },
						{ title: 'التعيين', image: 'https://cdn.sanity.io/images/m7bjawr3/production/8da32fdacc3605037ae763429d7eb1b4442e3d4b-136x167.png' },
					].map((step, index) => (
						<div
							key={index}
							className="flex flex-col items-center gap-2 text-center"
						>
							<img
								src={step.image}
								alt={step.title}
								className="h-14 w-14 md:h-16 md:w-16"
							/>
							<p className="mt-2 text-sm font-semibold text-cyan-950">
								{step.title}
							</p>
						</div>
					))}
				</div>
			</section>


		</main>
	)
}
