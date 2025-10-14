import { MdWorkOutline } from 'react-icons/md'

export default {
  name: 'job-application',
  title: 'Job Application',
  type: 'object',
  icon: MdWorkOutline,
  fields: [
    {
      name: 'heroTitle',
      type: 'string',
      title: 'العنوان الرئيسي',
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      title: 'الوصف التوضيحي',
    },
    {
      name: 'formDescription',
      type: 'string',
      title: 'وصف النموذج',
    },
    {
      name: 'formFields',
      title: 'حقول النموذج',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'formField',
          title: 'حقل',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'عنوان الحقل (Label)',
            },
            {
              name: 'name',
              type: 'string',
              title: 'اسم الحقل (name attribute)',
            },
            {
              name: 'type',
              type: 'string',
              title: 'نوع الحقل',
              options: {
                list: [
                  { title: 'نص', value: 'text' },
                  { title: 'بريد إلكتروني', value: 'email' },
                  { title: 'رقم هاتف', value: 'tel' },
                  { title: 'نص متعدد الأسطر', value: 'textarea' },
                  { title: 'رفع ملف', value: 'file' },
                ],
              },
            },
            {
              name: 'required',
              type: 'boolean',
              title: 'هل الحقل مطلوب؟',
            },
          ],
        },
      ],
    },
    {
      name: 'stepsTitle',
      type: 'string',
      title: 'عنوان خطوات التوظيف',
    },
    {
      name: 'steps',
      title: 'خطوات التوظيف',
      type: 'array',
      of: [
        {
          name: 'step',
          type: 'object',
          title: 'خطوة',
          fields: [
            { name: 'title', type: 'string', title: 'عنوان' },
            {
              name: 'icon',
              type: 'image',
              title: 'أيقونة',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { title: 'heroTitle' },
    prepare({ title }) {
      return { title: title || 'نموذج التوظيف' }
    },
  },
}
