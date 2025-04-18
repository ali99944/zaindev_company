

// import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import '@/src/styles/globals.css'

import { Navbar } from '@/src/components/common/navbar'
import { Footer } from '@/src/components/common/footer'
import FloatingWhatsAppButton from '@/src/components/common/floating-whatsapp-button'
import ReactQueryProvider from '@/src/providers/query-providers'
import { ChatWidget } from '@/src/components/common/support-widget'
import axios_client from '@/lib/axios_client'
import { AppSettings } from '@/src/types/app-settings'

const arabic = Tajawal({ 
  subsets: ['arabic'],
  weight: "500",
  variable: '--font-arabic'
})

// export const metadata: Metadata = {
//   title: 'مؤسسة سعودية رائدة في المقاولات، التكييف، الصيانة، وإدارة المشاريع | خدمات في جميع أنحاء المملكة  ',
//   description: 'مؤسسة سعودية تنموية مقرها في *المنطقة الشرقية - الأحساء، متخصصة في **المقاولات، مشاريع التكييف، أنظمة المراقبة، التصميم والديكور، الخدمات الكهربائية، حلول السباكة، إدارة المشاريع، وخدمات الصيانة، بالإضافة إلى **تجارة مستحضرات التجميل بالجملة والمفرق. نقدم خدماتنا في **جميع أنحاء المملكة العربية السعودية* بجودة عالية ومعايير احترافية.',
//   keywords: "مؤسسة سعودية, تنموية, المنطقة الشرقية, الأحساء, المقاولات, مشاريع التكييف, صيانة التكييف, تشغيل التكييف, تجارة مستحضرات التجميل, مستحضرات التجميل جملة, مستحضرات التجميل مفرق, أنظمة المراقبة, كاميرات المراقبة, التصميم والديكور, خدمات الديكور, الخدمات الكهربائية, حلول السباكة, إدارة المشاريع, خدمات الصيانة, صيانة المباني, تنفيذ المشاريع, أعمال البناء, التهوية والتبريد, شبكات الكهرباء, صيانة كهربائية, شبكات المياه, تمديدات السباكة, إصلاح السباكة, تخطيط المشاريع, الإشراف على المشاريع, مستحضرات التجميل الأصلية, السعودية, مشاريع البناء, الترميم, التشييد, خدمات الطوارئ, خدمات التشغيل, الأمن والحماية, تنفيذ الديكورات, تشغيل وصيانة, المملكة العربيةالسعودية"
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await axios_client.get('settings')
  const app_settings = data.data as AppSettings
  
    
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className='light' style={{
      colorScheme: 'light'
    }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={app_settings.favicon} />
      </head>
      <body className={`${arabic.className} bg-white dark:bg-slate-950`}>
        <ReactQueryProvider>
            <Navbar />
            {children}
            <Footer />
            <FloatingWhatsAppButton />
            <ChatWidget />
        </ReactQueryProvider>
    </body>
    </html>
  )
}


