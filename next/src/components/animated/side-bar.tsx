import React from 'react'
import { PiTable } from 'react-icons/pi'
import { Icon } from '@iconify/react'

function SideBar() {
	const list = [
		' الحسابات',
		' نقاط البيع',
		' الأصول الثابتة',
		' العقارات',
		' الاعتمادات المستندية',
		' التخليص الجمركي',
		' النقليات',
		' معارض السيارات',
		' تأجير السيارات',
		' النقل الجماعي',
		' أجره',
		' الصيانة والتشغيل',
		' محطات الوقود',
		' الحج',
		' العمرة',
		' المشاريع',
		' التصنيع',
		' الكافيهات والمطاعم',
		' المدارس',
		' الاشتراكات',
		' المستشفيات',
		' الصيدليات',
		' شركات الادوية',
		' مجوهرات',
		' الخدمات اللوجيستية',
		' الموارد البشرية ',
		' علاقات العملاء',
		' مناديب التوزيع',
	]

	return (
		<div className="relative mx-auto h-[450px] w-[350px] flex-1 items-center justify-center overflow-hidden rounded-lg bg-cyan-950/40 py-2 text-white shadow-lg">
			<div className="text-main absolute left-0 right-0 top-0 z-[1] flex items-center gap-2 rounded-lg px-6 py-3 font-semibold backdrop-blur">
				<Icon icon="ph:table" className="size-6" />
				<p>النظام الحسابي</p>
			</div>
			<div className="customScrollbar relative mx-3 h-full overflow-hidden border-red-300 pt-12">
				<ul className="text-main -border mb-3 me-3 border-sky-300">
					{list.map((item) => (
						<li
							key={item}
							className={
								'cursor-default rounded-md px-3 py-2 text-end text-base font-medium text-white/80 hover:bg-white/20 hover:text-white'
							}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default SideBar