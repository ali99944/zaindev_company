export interface ProjectImage {
    id: number;
    project_id: number;
    image: string;
    alt: string;
  }
  
  export interface Project {
    id: number;
    logo: string;
    completion_year: string;
    project_type: string;
    category: string | null;
    name: string;
    short: string;
    description: string;
    infologo: string;
    client: string | null;
    location: string | null;
    seo_title: string;
    seo_keywords: string;
    seo_description: string | null;
    images: ProjectImage[];
  }
  
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      logo: "/placeholder.svg?height=80&width=160",
      completion_year: "2023",
      project_type: "تجاري",
      category: "commercial",
      name: "برج الأفق التجاري",
      short: "مشروع برج تجاري متكامل في قلب مدينة الرياض",
      description: "مشروع برج الأفق التجاري هو أحد المشاريع المميزة التي نفذتها شركة زين التنموية في قلب مدينة الرياض. يتكون البرج من 25 طابقاً بمساحة إجمالية تبلغ 45,000 متر مربع، ويضم مكاتب إدارية فاخرة ومحلات تجارية متنوعة ومطاعم عالمية.\n\nتم تصميم البرج وفق أحدث المعايير العالمية في مجال البناء والتشييد، مع مراعاة أعلى معايير الجودة والسلامة. يتميز البرج بواجهة زجاجية عاكسة تعكس جمال سماء الرياض، وتصميم داخلي فاخر يوفر بيئة عمل مثالية للشركات والمؤسسات.\n\nيضم البرج أيضاً مواقف سيارات متعددة الطوابق تتسع لأكثر من 500 سيارة، ونظام أمني متكامل يعمل على مدار الساعة، بالإضافة إلى نظام تكييف مركزي متطور وأنظمة إطفاء وإنذار حريق حديثة.",
      infologo: "/placeholder.svg?height=80&width=160",
      client: "شركة الأفق للاستثمار العقاري",
      location: "الرياض، المملكة العربية السعودية",
      seo_title: "برج الأفق التجاري - مشروع تجاري متكامل في قلب الرياض",
      seo_keywords: "برج تجاري، مشاريع تجارية، الرياض، زين التنموية",
      seo_description: "برج الأفق التجاري هو أحد المشاريع المميزة التي نفذتها شركة زين التنموية في قلب مدينة الرياض، يتكون من 25 طابقاً بمساحة إجمالية 45,000 متر مربع.",
      images: [
        {
          id: 1,
          project_id: 1,
          image: "https://img.freepik.com/free-photo/modern-business-buildings_1127-3169.jpg",
          alt: "واجهة برج الأفق التجاري"
        },
        {
          id: 2,
          project_id: 1,
          image: "https://img.freepik.com/free-photo/modern-office-building_1127-3174.jpg",
          alt: "المدخل الرئيسي للبرج"
        },
        {
          id: 3,
          project_id: 1,
          image: "https://img.freepik.com/free-photo/modern-business-center_1127-3167.jpg",
          alt: "المنطقة التجارية في البرج"
        },
        {
          id: 4,
          project_id: 1,
          image: "https://img.freepik.com/free-photo/modern-office-building-exterior_1127-3172.jpg",
          alt: "منظر جانبي للبرج"
        },
        {
          id: 5,
          project_id: 1,
          image: "https://img.freepik.com/free-photo/modern-office-building-sky_1127-3170.jpg",
          alt: "منظر علوي للبرج"
        }
      ]
    },
    {
      id: 2,
      logo: "/placeholder.svg?height=80&width=160",
      completion_year: "2022",
      project_type: "سكني",
      category: "residential",
      name: "مجمع الواحة السكني",
      short: "مجمع سكني فاخر يضم 120 وحدة سكنية متنوعة",
      description: "مجمع الواحة السكني هو أحد المشاريع السكنية الفاخرة التي نفذتها شركة زين التنموية في مدينة جدة. يمتد المجمع على مساحة 100,000 متر مربع، ويضم 120 وحدة سكنية متنوعة ما بين فلل مستقلة وفلل متصلة وشقق فاخرة.\n\nتم تصميم المجمع وفق أحدث المعايير العالمية في مجال التطوير العقاري، مع مراعاة توفير بيئة سكنية متكاملة توفر الراحة والخصوصية للسكان. يتميز المجمع بمساحات خضراء واسعة ومرافق ترفيهية متنوعة تشمل مسابح ونوادي رياضية وملاعب متعددة.\n\nيضم المجمع أيضاً مركزاً تجارياً صغيراً يحتوي على محلات تجارية ومطاعم ومقاهي، بالإضافة إلى مسجد ومدرسة ومركز صحي، مما يجعله مجتمعاً سكنياً متكاملاً يوفر جميع احتياجات السكان.",
      infologo: "/placeholder.svg?height=80&width=160",
      client: "شركة الواحة للتطوير العقاري",
      location: "جدة، المملكة العربية السعودية",
      seo_title: "مجمع الواحة السكني - مجمع سكني فاخر في جدة",
      seo_keywords: "مجمع سكني، فلل فاخرة، جدة، زين التنموية",
      seo_description: "مجمع الواحة السكني هو أحد المشاريع السكنية الفاخرة التي نفذتها شركة زين التنموية في مدينة جدة، يضم 120 وحدة سكنية متنوعة ومرافق ترفيهية متكاملة.",
      images: [
        {
          id: 6,
          project_id: 2,
          image: "https://img.freepik.com/free-photo/plan-project-architecture-blueprint-drawing-concept_53876-13746.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
          alt: "مخطط مجمع الواحة السكني"
        },
        {
          id: 7,
          project_id: 2,
          image: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2000.jpg",
          alt: "نموذج للتصميم الداخلي للوحدات السكنية"
        },
        {
          id: 8,
          project_id: 2,
          image: "https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg",
          alt: "المسبح الرئيسي في المجمع"
        },
        {
          id: 9,
          project_id: 2,
          image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-tv-wall_105762-2185.jpg",
          alt: "غرفة المعيشة في إحدى الوحدات"
        },
        {
          id: 10,
          project_id: 2,
          image: "https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-working-table_105762-2071.jpg",
          alt: "غرفة النوم الرئيسية في إحدى الوحدات"
        }
      ]
    },
    {
      id: 3,
      logo: "/placeholder.svg?height=80&width=160",
      completion_year: "2021",
      project_type: "صناعي",
      category: "industrial",
      name: "مستودعات الخليج اللوجستية",
      short: "مجمع مستودعات حديث بمساحة 50,000 متر مربع",
      description: "مشروع مستودعات الخليج اللوجستية هو أحد المشاريع الصناعية الكبرى التي نفذتها شركة زين التنموية في المدينة الصناعية بالدمام. يمتد المشروع على مساحة 50,000 متر مربع، ويضم 20 مستودعاً بمساحات مختلفة تتراوح بين 1,000 و5,000 متر مربع.\n\nتم تصميم المستودعات وفق أحدث المعايير العالمية في مجال المستودعات اللوجستية، مع مراعاة توفير جميع المتطلبات اللازمة للتخزين والشحن والتفريغ. تتميز المستودعات بارتفاع يصل إلى 12 متراً، مما يتيح استغلال المساحة بشكل أمثل، كما تم تزويدها بأنظمة تهوية وتكييف متطورة تناسب مختلف أنواع البضائع.\n\nيضم المشروع أيضاً مبنى إداري يحتوي على مكاتب ومرافق خدمية، بالإضافة إلى ساحات تحميل وتفريغ واسعة ومواقف للشاحنات والسيارات، ونظام أمني متكامل يعمل على مدار الساعة.",
      infologo: "/placeholder.svg?height=80&width=160",
      client: "شركة الخليج للخدمات اللوجستية",
      location: "الدمام، المملكة العربية السعودية",
      seo_title: "مستودعات الخليج اللوجستية - مجمع مستودعات حديث في الدمام",
      seo_keywords: "مستودعات، خدمات لوجستية، الدمام، زين التنموية",
      seo_description: "مستودعات الخليج اللوجستية هي أحد المشاريع الصناعية الكبرى التي نفذتها شركة زين التنموية في المدينة الصناعية بالدمام، تمتد على مساحة 50,000 متر مربع.",
      images: [
        {
          id: 11,
          project_id: 3,
          image: "https://img.freepik.com/free-photo/warehouse-interior-logistics-transportation-industry_93675-129610.jpg",
          alt: "المنظر الداخلي لأحد المستودعات"
        },
        {
          id: 12,
          project_id: 3,
          image: "https://img.freepik.com/free-photo/warehouse-with-many-racks-boxes_1340-37528.jpg",
          alt: "نظام التخزين داخل المستودعات"
        },
        {
          id: 13,
          project_id: 3,
          image: "https://img.freepik.com/free-photo/warehouse-with-packages-ready-be-shipped_1340-37531.jpg",
          alt: "منطقة الشحن والتفريغ"
        },
        {
          id: 14,
          project_id: 3,
          image: "https://img.freepik.com/free-photo/warehouse-with-packages-shelves_1340-37530.jpg",
          alt: "الرفوف التخزينية داخل المستودعات"
        },
        {
          id: 15,
          project_id: 3,
          image: "https://img.freepik.com/free-photo/warehouse-with-goods-shelves_1340-37529.jpg",
          alt: "البضائع المخزنة داخل المستودعات"
        }
      ]
    },
    {
      id: 4,
      logo: "/placeholder.svg?height=80&width=160",
      completion_year: "2023",
      project_type: "سكني",
      category: "residential",
      name: "فيلا الريحان الخاصة",
      short: "فيلا سكنية فاخرة بتصميم عصري",
      description: "فيلا الريحان الخاصة هي أحد المشاريع السكنية الفاخرة التي نفذتها شركة زين التنموية في مدينة الرياض. تمتد الفيلا على مساحة 1,000 متر مربع، وتتكون من طابقين بمساحة بناء إجمالية تبلغ 750 متر مربع.\n\nتم تصميم الفيلا وفق أحدث اتجاهات التصميم المعماري العصري، مع مراعاة توفير أقصى درجات الراحة والخصوصية للمالك. تضم الفيلا 5 غرف نوم، وصالة استقبال رئيسية، وصالة معيشة عائلية، ومجلس رجال، ومجلس نساء، ومطبخ رئيسي، ومطبخ خارجي، بالإضافة إلى غرفة طعام وغرفة خادمة وغرفة سائق.\n\nتتميز الفيلا بتصميم داخلي فاخر يجمع بين الأصالة والحداثة، مع استخدام أفخم أنواع التشطيبات والديكورات. كما تضم الفيلا حديقة خارجية واسعة تحتوي على مسبح ومنطقة شواء وجلسات خارجية، بالإضافة إلى مواقف سيارات متعددة.",
      infologo: "/placeholder.svg?height=80&width=160",
      client: "السيد/ خالد الريحان",
      location: "الرياض، المملكة العربية السعودية",
      seo_title: "فيلا الريحان الخاصة - فيلا سكنية فاخرة في الرياض",
      seo_keywords: "فيلا فاخرة، تصميم عصري، الرياض، زين التنموية",
      seo_description: "فيلا الريحان الخاصة هي أحد المشاريع السكنية الفاخرة التي نفذتها شركة زين التنموية في مدينة الرياض، تمتد على مساحة 1,000 متر مربع وتتميز بتصميم عصري فاخر.",
      images: [
        {
          id: 16,
          project_id: 4,
          image: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2000.jpg",
          alt: "غرفة المعيشة في الفيلا"
        },
        {
          id: 17,
          project_id: 4,
          image: "https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-working-table_105762-2071.jpg",
          alt: "غرفة النوم الرئيسية"
        },
        {
          id: 18,
          project_id: 4,
          image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bathroom-toilet_105762-1967.jpg",
          alt: "الحمام الرئيسي"
        },
        {
          id: 19,
          project_id: 4,
          image: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-kitchen-dining-room_105762-1931.jpg",
          alt: "المطبخ والطعام"
        },
        {
          id: 20,
          project_id: 4,
          image: "https://img.freepik.com/free-photo/3d-rendering-luxury-living-room-with-bookshelf_105762-2020.jpg",
          alt: "صالة الاستقبال"
        }
      ]
    }
  ];
  
  export function getProjectById(id: number): Project | undefined {
    return projects.find(project => project.id === id);
  }
  
  export function getRelatedProjects(id: number, limit: number = 3): Project[] {
    const currentProject = getProjectById(id);
    if (!currentProject) return [];
    
    return projects
      .filter(project => project.id !== id && project.category === currentProject.category)
      .slice(0, limit);
  }
  
  export function getAllProjects(): Project[] {
    return projects;
  }
  
  export function getProjectsByCategory(category: string): Project[] {
    return category === 'all' 
      ? projects 
      : projects.filter(project => project.category === category);
  }
  
  export const categories = [
    { id: "all", label: "جميع المشاريع", icon: "Building2" },
    { id: "residential", label: "سكني", icon: "Home" },
    { id: "commercial", label: "تجاري", icon: "Building" },
    { id: "industrial", label: "صناعي", icon: "Warehouse" },
  ];
  