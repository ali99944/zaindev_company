import { Footer } from "@/src/components/common/footer"
import { Navbar } from "@/src/components/common/navbar"
import { CtaSection } from "@/src/components/landing/cta-section"
import { ServicesCategories } from "./components/services-categories"
import { ServicesGrid } from "./components/services-grid"
import { ServicesHero } from "./components/services-hero"
import { ServicesProcess } from "./components/services-process"
import { Suspense } from "react"

const getAllServices = () => {
    // Mock data for all services
    return [
        {
            id: 1,
            image: "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
            logo: "logos/7df05208-1f4d-4495-aeff-47a2d3e22828_download (7).webp",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-building2 w-12 h-12 text-amber-500 dark:text-amber-400"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>',
            name: "المقاولات العامة",
            short: "خدمات البناء والتشطيب بأعلى معايير الجودة والاحترافية، مع التزام بالمواعيد وأسعار تنافسية.",
            category: "construction",
            subServicesCount: 6,
        },
        {
            id: 2,
            image: "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
            logo: "logos/maintenance-logo.png",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-wrench w-12 h-12 text-amber-500 dark:text-amber-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
            name: "الصيانة المنزلية",
            short: "خدمات صيانة شاملة للمنازل والمباني التجارية، تشمل الكهرباء والسباكة والتكييف وغيرها.",
            category: "maintenance",
            subServicesCount: 8,
        },
        {
            id: 3,
            image: "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
            logo: "logos/interior-design-logo.png",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-paintbrush w-12 h-12 text-amber-500 dark:text-amber-400"><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path><path d="M14.5 17.5 4.5 15"></path></svg>',
            name: "التصميم الداخلي",
            short: "خدمات تصميم داخلي عصرية وإبداعية للمنازل والمكاتب والمحلات التجارية.",
            category: "design",
            subServicesCount: 5,
        },
        {
            id: 4,
            image: "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
            logo: "logos/electrical-logo.png",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-zap w-12 h-12 text-amber-500 dark:text-amber-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
            name: "الخدمات الكهربائية",
            short: "خدمات كهربائية متكاملة للمنازل والمنشآت التجارية، تشمل التركيب والصيانة والإصلاح.",
            category: "electrical",
            subServicesCount: 7,
        },
        {
            id: 5,
            image: "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
            logo: "logos/plumbing-logo.png",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-droplets w-12 h-12 text-amber-500 dark:text-amber-400"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>',
            name: "خدمات السباكة",
            short: "خدمات سباكة احترافية للمنازل والمباني، تشمل تركيب وصيانة وإصلاح جميع أنظمة المياه والصرف الصحي.",
            category: "plumbing",
            subServicesCount: 6,
        },
        {
            id: 6,
            image: "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
            logo: "logos/ac-services-logo.png",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-thermometer w-12 h-12 text-amber-500 dark:text-amber-400"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>',
            name: "خدمات التكييف",
            short: "خدمات تركيب وصيانة وإصلاح أنظمة التكييف المركزية والسبليت للمنازل والمباني التجارية.",
            category: "ac",
            subServicesCount: 5,
        },
        {
            id: 7,
            image: "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
            logo: "logos/painting-logo.png",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-palette w-12 h-12 text-amber-500 dark:text-amber-400"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
            name: "خدمات الدهان",
            short: "خدمات دهان احترافية للمنازل والمباني، باستخدام أفضل أنواع الدهانات وأحدث التقنيات.",
            category: "painting",
            subServicesCount: 4,
        },
        {
            id: 8,
            image: "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
            logo: "logos/cleaning-logo.png",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles w-12 h-12 text-amber-500 dark:text-amber-400"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>',
            name: "خدمات التنظيف",
            short: "خدمات تنظيف شاملة للمنازل والمكاتب والمباني التجارية، باستخدام أفضل المنظفات والمعدات.",
            category: "cleaning",
            subServicesCount: 6,
        },
    ]
}

// This would normally come from an API call
const getServiceCategories = () => {
    // Mock data for service categories
    return [
        { id: "all", name: "جميع الخدمات", count: 42 },
        { id: "construction", name: "المقاولات", count: 6 },
        { id: "maintenance", name: "الصيانة", count: 8 },
        { id: "design", name: "التصميم", count: 5 },
        { id: "electrical", name: "الكهرباء", count: 7 },
        { id: "plumbing", name: "السباكة", count: 6 },
        { id: "ac", name: "التكييف", count: 5 },
        { id: "painting", name: "الدهان", count: 4 },
        { id: "cleaning", name: "التنظيف", count: 6 },
    ]
}

export default function ServicesPage() {
    const services = getAllServices()
    const categories = getServiceCategories()

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <ServicesHero />
            <Suspense>
                <ServicesCategories categories={categories} />
            </Suspense>
            <Suspense>
                <ServicesGrid services={services} />
            </Suspense>
            <ServicesProcess />
            <CtaSection />
            <Footer />
        </main>
    )
}

