import { Footer } from "@/src/components/common/footer"
import { Navbar } from "@/src/components/common/navbar"
import { CtaSection } from "@/src/components/landing/cta-section"
import { ServiceFaq } from "./components/service-faq"
import { ServiceFeatures } from "./components/service-features"
import { ServiceHero } from "./components/service-hero"
import { ServiceProcess } from "./components/service-process"
import { ServiceSubServices } from "./components/service-sub-services"
import { ServiceTestimonials } from "./components/service-testimonials"

// This would normally come from an API call using the ID from params
const getServiceData = (id: string) => {
    console.log(id);
    
  // Mock data based on the provided service data
  return {
    id: 1,
    image: "images/general-contracting.jpg",
    logo: "logos/7df05208-1f4d-4495-aeff-47a2d3e22828_download (7).webp",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-building2 w-12 h-12 text-amber-500 dark:text-amber-400"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>',
    details_page: 0,
    menu_svg:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-building2 w-5 h-5 ml-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>',
    status: 1,
    deleted_at: null,
    created_at: "2025-01-03T05:37:57.000000Z",
    updated_at: "2025-03-03T00:07:21.000000Z",
    name: "زين التنموية للمقاولات العامة",
    short:
      "زين التنموية للمقاولات العامة تقدم خدمات البناء والتشطيب بأعلى معايير الجودة والاحترافية، مع التزام بالمواعيد وأسعار تنافسية. اتصل بنا الآن!",
    infologo: "https://dashboard.zaindev.com.sa/public/logos/7df05208-1f4d-4495-aeff-47a2d3e22828_download (7).webp",
    description:
      "هي إحدى الشركات الرائدة في مجال البناء والتشييد، حيث نقدم مجموعة متكاملة من الخدمات الهندسية والمقاولات التي تلبي احتياجات عملائنا بأعلى معايير الجودة.",
  }
}

// This would normally come from an API call to get sub-services
const getSubServices = (serviceId: string) => {
    console.log(serviceId);
    
  // Mock data for sub-services
  return [
    {
      id: 101,
      services_id: 1,
      logo: "/images/building-design.jpg",
      infologo: "/logos/building-design-logo.png",
      status: 1,
      stock: 10,
      original_price: "5000",
      price: "4500",
      discount: "10%",
      deleted_at: null,
      created_at: "2025-01-03T05:37:57.000000Z",
      updated_at: "2025-03-03T00:07:21.000000Z",
      name: "تصميم المباني",
      short: "خدمات تصميم معماري احترافية للمباني السكنية والتجارية",
      description:
        "نقدم خدمات التصميم المعماري الاحترافية للمباني السكنية والتجارية، مع مراعاة أحدث اتجاهات التصميم والمعايير الهندسية العالمية.",
    },
    {
      id: 102,
      services_id: 1,
      logo: "/images/building-construction.jpg",
      infologo: "/logos/building-construction-logo.png",
      status: 1,
      stock: 5,
      original_price: "15000",
      price: "13500",
      discount: "10%",
      deleted_at: null,
      created_at: "2025-01-03T05:37:57.000000Z",
      updated_at: "2025-03-03T00:07:21.000000Z",
      name: "بناء المباني",
      short: "تنفيذ مشاريع البناء بأعلى معايير الجودة والالتزام بالمواعيد",
      description:
        "نقوم بتنفيذ مشاريع البناء للمباني السكنية والتجارية بأعلى معايير الجودة، مع الالتزام بالجداول الزمنية المحددة والميزانيات المتفق عليها.",
    },
    {
      id: 103,
      services_id: 1,
      logo: "/images/interior-finishing.jpg",
      infologo: "/logos/interior-finishing-logo.png",
      status: 1,
      stock: 8,
      original_price: "8000",
      price: "7200",
      discount: "10%",
      deleted_at: null,
      created_at: "2025-01-03T05:37:57.000000Z",
      updated_at: "2025-03-03T00:07:21.000000Z",
      name: "التشطيبات الداخلية",
      short: "تشطيبات داخلية عالية الجودة للمباني السكنية والتجارية",
      description:
        "نقدم خدمات التشطيبات الداخلية عالية الجودة للمباني السكنية والتجارية، بما في ذلك أعمال الدهان، والسيراميك، والجبس، والأرضيات، والأسقف المعلقة، وغيرها.",
    },
    {
      id: 104,
      services_id: 1,
      logo: "/images/renovation.jpg",
      infologo: "/logos/renovation-logo.png",
      status: 1,
      stock: 12,
      original_price: "7000",
      price: "6300",
      discount: "10%",
      deleted_at: null,
      created_at: "2025-01-03T05:37:57.000000Z",
      updated_at: "2025-03-03T00:07:21.000000Z",
      name: "ترميم وتجديد المباني",
      short: "خدمات ترميم وتجديد المباني القديمة بأحدث التقنيات",
      description:
        "نقدم خدمات ترميم وتجديد المباني القديمة باستخدام أحدث التقنيات والمواد، مع الحفاظ على الطابع الأصلي للمبنى وتعزيز قيمته.",
    },
    {
      id: 105,
      services_id: 1,
      logo: "/images/project-management.jpg",
      infologo: "/logos/project-management-logo.png",
      status: 1,
      stock: 15,
      original_price: "6000",
      price: "5400",
      discount: "10%",
      deleted_at: null,
      created_at: "2025-01-03T05:37:57.000000Z",
      updated_at: "2025-03-03T00:07:21.000000Z",
      name: "إدارة المشاريع",
      short: "إدارة احترافية لمشاريع البناء من البداية إلى النهاية",
      description:
        "نقدم خدمات إدارة مشاريع البناء بشكل احترافي من مرحلة التخطيط إلى التنفيذ والتسليم، مع ضمان الالتزام بالجودة والوقت والميزانية.",
    },
    {
      id: 106,
      services_id: 1,
      logo: "/images/maintenance.jpg",
      infologo: "/logos/maintenance-logo.png",
      status: 1,
      stock: 20,
      original_price: "3000",
      price: "2700",
      discount: "10%",
      deleted_at: null,
      created_at: "2025-01-03T05:37:57.000000Z",
      updated_at: "2025-03-03T00:07:21.000000Z",
      name: "الصيانة الدورية",
      short: "خدمات صيانة دورية للمباني للحفاظ على جودتها وسلامتها",
      description:
        "نقدم خدمات الصيانة الدورية للمباني للحفاظ على جودتها وسلامتها، بما في ذلك صيانة الأنظمة الكهربائية والميكانيكية والسباكة وأنظمة التكييف وغيرها.",
    },
  ]
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const serviceData = getServiceData((await params).id)
  const subServices = getSubServices((await params).id)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <ServiceHero service={serviceData} />
      <ServiceSubServices service={serviceData} subServices={subServices} />
      <ServiceFeatures service={serviceData} />
      <ServiceProcess service={serviceData} />
      <ServiceTestimonials />
      <ServiceFaq service={serviceData} />
      <CtaSection />
      <Footer />
    </main>
  )
}

