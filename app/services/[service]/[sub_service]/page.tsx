import { CtaSection } from "@/src/components/landing/cta-section"
import { SubServiceDetails } from "./components/sub-service-details"
import { SubServiceGallery } from "./components/sub-service-gallery"
import { SubServiceHero } from "./components/sub-service-hero"
import { SubServiceRelated } from "./components/sub-service-related"


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
      "هي إحدى الشركات الر��ئدة في مجال البناء والتشييد، حيث نقدم مجموعة متكاملة من الخدمات الهندسية والمقاولات التي تلبي احتياجات عملائنا بأعلى معايير الجودة.",
  }
}

// This would normally come from an API call to get sub-service details
const getSubServiceData = (serviceId: string, subId: string) => {
    console.log(serviceId);
    console.log(subId);
    
    
  // Mock data for a specific sub-service
  return {
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
      "نقدم خدمات التصميم المعماري الاحترافية للمباني السكنية والتجارية، مع مراعاة أحدث اتجاهات التصميم والمعايير الهندسية العالمية. يشمل ذلك تصميم المخططات الأولية، والرسومات التنفيذية، والواجهات الخارجية، والتصميم الداخلي، وتصميم المناظر الطبيعية المحيطة بالمبنى.\n\nيتميز فريقنا من المهندسين المعماريين بالخبرة والإبداع في تصميم مباني تجمع بين الجمال والوظيفة، مع مراعاة احتياجات العميل وميزانيته. نستخدم أحدث برامج التصميم ثلاثية الأبعاد لتقديم تصور واضح للمشروع قبل البدء في التنفيذ.\n\nخدماتنا في تصميم المباني تشمل:\n\n- تصميم المباني السكنية (فلل، قصور، مجمعات سكنية)\n- تصميم المباني التجارية (مكاتب، محلات، مولات)\n- تصميم المباني الصناعية (مصانع، مستودعات)\n- تصميم المباني التعليمية والصحية\n- تصميم الواجهات الخارجية\n- التصميم الداخلي\n- تصميم المناظر الطبيعية",
    gallery: [
      "/images/building-design-1.jpg",
      "/images/building-design-2.jpg",
      "/images/building-design-3.jpg",
      "/images/building-design-4.jpg",
    ],
    features: [
      "تصاميم عصرية تجمع بين الجمال والوظيفة",
      "فريق من المهندسين المعماريين ذوي الخبرة",
      "استخدام أحدث برامج التصميم ثلاثية الأبعاد",
      "مراعاة احتياجات العميل وميزانيته",
      "الالتزام بالمعايير الهندسية العالمية",
      "تقديم تصور واضح للمشروع قبل البدء في التنفيذ",
    ],
    packages: [
      {
        name: "الباقة الأساسية",
        price: "4500",
        originalPrice: "5000",
        features: ["تصميم المخططات الأولية", "تصميم الواجهات الخارجية", "رسومات ثنائية الأبعاد", "تعديلان مجانيان"],
      },
      {
        name: "الباقة المتقدمة",
        price: "7500",
        originalPrice: "8500",
        features: [
          "جميع مميزات الباقة الأساسية",
          "تصميم داخلي للمساحات الرئيسية",
          "رسومات ثلاثية الأبعاد",
          "أربعة تعديلات مجانية",
        ],
      },
      {
        name: "الباقة الشاملة",
        price: "12000",
        originalPrice: "15000",
        features: [
          "جميع مميزات الباقة المتقدمة",
          "تصميم داخلي شامل",
          "تصميم المناظر الطبيعية",
          "نموذج ثلاثي الأبعاد تفاعلي",
          "تعديلات غير محدودة",
          "متابعة التنفيذ",
        ],
      },
    ],
  }
}

// This would normally come from an API call to get related sub-services
const getRelatedSubServices = (serviceId: string, subId: string) => {
    console.log(serviceId, subId);
    
  // Mock data for related sub-services
  return [
    {
      id: 102,
      services_id: 1,
      logo: "/images/building-construction.jpg",
      name: "بناء المباني",
      short: "تنفيذ مشاريع البناء بأعلى معايير الجودة والالتزام بالمواعيد",
      price: "13500",
    },
    {
      id: 103,
      services_id: 1,
      logo: "/images/interior-finishing.jpg",
      name: "التشطيبات الداخلية",
      short: "تشطيبات داخلية عالية الجودة للمباني السكنية والتجارية",
      price: "7200",
    },
    {
      id: 105,
      services_id: 1,
      logo: "/images/project-management.jpg",
      name: "إدارة المشاريع",
      short: "إدارة احترافية لمشاريع البناء من البداية إلى النهاية",
      price: "5400",
    },
  ]
}

export default async function SubServicePage({ params }: { params: Promise<{ id: string; subId: string }> }) {
  const serviceData = getServiceData((await params).id)
  const subServiceData = getSubServiceData((await params).id, (await params).subId)
  const relatedSubServices = getRelatedSubServices((await params).id, (await params).subId)

  return (
    <main className="min-h-screen bg-gray-50">
      <SubServiceHero service={serviceData} subService={subServiceData} />
      <SubServiceDetails service={serviceData} subService={subServiceData} />
      <SubServiceGallery subService={subServiceData} />
      <SubServiceRelated relatedSubServices={relatedSubServices} />
      <CtaSection />
    </main>
  )
}

