export interface Author {
    id: number
    name: string
    position: string
    bio: string
    image: string
    social: {
      twitter?: string
      linkedin?: string
      email?: string
    }
  }
  
  export interface ArticleTag {
    id: number
    name: string
    slug: string
  }
  
  export interface Article {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    featured_image: string
    category: string
    publish_date: string
    reading_time: number
    author: Author
    tags: ArticleTag[]
    seo_title: string
    seo_keywords: string
    seo_description: string
  }
  
  // Sample authors data
  const authors: Author[] = [
    {
      id: 1,
      name: "أحمد الشمري",
      position: "مدير قسم التطوير",
      bio: "خبير في مجال البناء والتطوير العقاري مع خبرة تزيد عن 15 عاماً في تنفيذ المشاريع السكنية والتجارية. حاصل على شهادة الماجستير في الهندسة المعمارية من جامعة الملك سعود.",
      image: "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg",
      social: {
        twitter: "https://twitter.com/ahmed_alshamri",
        linkedin: "https://linkedin.com/in/ahmed-alshamri",
        email: "ahmed@zaindev.com",
      },
    },
    {
      id: 2,
      name: "سارة القحطاني",
      position: "مديرة التسويق",
      bio: "متخصصة في التسويق العقاري والتسويق الرقمي مع خبرة واسعة في إدارة الحملات التسويقية للمشاريع العقارية. حاصلة على شهادة البكالوريوس في التسويق من جامعة الأميرة نورة.",
      image:
        "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
      social: {
        twitter: "https://twitter.com/sara_alqahtani",
        linkedin: "https://linkedin.com/in/sara-alqahtani",
        email: "sara@zaindev.com",
      },
    },
    {
      id: 3,
      name: "محمد العتيبي",
      position: "مهندس معماري",
      bio: "مهندس معماري محترف مع خبرة في تصميم وتنفيذ المشاريع السكنية والتجارية. حاصل على شهادة البكالوريوس في الهندسة المعمارية من جامعة الملك فهد للبترول والمعادن.",
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      social: {
        twitter: "https://twitter.com/mohammed_alotaibi",
        linkedin: "https://linkedin.com/in/mohammed-alotaibi",
        email: "mohammed@zaindev.com",
      },
    },
  ]
  
  // Sample tags data
  const tags: ArticleTag[] = [
    { id: 1, name: "تصميم داخلي", slug: "interior-design" },
    { id: 2, name: "مواد بناء", slug: "building-materials" },
    { id: 3, name: "تقنيات بناء", slug: "construction-techniques" },
    { id: 4, name: "تطوير عقاري", slug: "real-estate-development" },
    { id: 5, name: "استدامة", slug: "sustainability" },
    { id: 6, name: "ديكور", slug: "decoration" },
    { id: 7, name: "تكييف", slug: "air-conditioning" },
    { id: 8, name: "إضاءة", slug: "lighting" },
    { id: 9, name: "تشطيبات", slug: "finishing" },
    { id: 10, name: "تصميم خارجي", slug: "exterior-design" },
  ]
  
  // Sample articles data
  const articles: Article[] = [
    {
      id: 1,
      title: "أحدث اتجاهات التصميم الداخلي لعام 2025",
      slug: "latest-interior-design-trends-2025",
      excerpt: "تعرف على أحدث صيحات التصميم الداخلي التي ستسيطر على المشهد في عام 2025 وكيفية تطبيقها في منزلك",
      content: `
  # أحدث اتجاهات التصميم الداخلي لعام 2025
  
  مع تطور عالم التصميم الداخلي بشكل مستمر، يبحث الكثيرون عن أحدث الصيحات والاتجاهات التي ستسيطر على المشهد في السنوات القادمة. في هذا المقال، نستعرض أبرز اتجاهات التصميم الداخلي المتوقعة لعام 2025، والتي ستساعدك على تجديد منزلك بأسلوب عصري ومتطور.
  
  ## 1. الاستدامة والمواد الصديقة للبيئة
  
  أصبحت الاستدامة من أهم الاتجاهات في عالم التصميم الداخلي، حيث يتجه المصممون والعملاء نحو استخدام مواد صديقة للبيئة وقابلة لإعادة التدوير. من المتوقع أن يزداد الاهتمام بالمواد الطبيعية مثل الخشب المعاد تدويره، والقطن العضوي، والصوف، والحجر الطبيعي.
  
  كما ستشهد السنوات القادمة زيادة في استخدام الطاقة المتجددة في المنازل، مثل الألواح الشمسية وأنظمة تجميع مياه الأمطار، بالإضافة إلى تصميم المساحات بطريقة تسمح بدخول أكبر قدر من الإضاءة الطبيعية لتقليل استهلاك الطاقة.
  
  ## 2. التصميم المرن والمتعدد الاستخدامات
  
  مع تغير أنماط العمل والحياة، أصبحت الحاجة إلى مساحات متعددة الاستخدامات أكثر إلحاحاً. سيركز التصميم الداخلي في عام 2025 على إنشاء مساحات مرنة يمكن تعديلها بسهولة لتناسب احتياجات مختلفة، مثل تحويل غرفة المعيشة إلى مكتب منزلي أو صالة رياضية.
  
  ستزداد شعبية الأثاث القابل للطي والتحويل، والجدران المتحركة، والوحدات المدمجة التي توفر مساحة تخزين إضافية دون التضحية بالجمال والأناقة.
  
  ## 3. التكنولوجيا المدمجة
  
  سيشهد عام 2025 اندماجاً أكبر للتكنولوجيا في التصميم الداخلي، حيث ستصبح المنازل الذكية هي القاعدة وليست الاستثناء. سيتم دمج أنظمة التحكم الصوتي، وأجهزة الاستشعار، وأنظمة الإضاءة الذكية، وأجهزة المطبخ المتصلة بالإنترنت بشكل أكثر سلاسة في التصميم.
  
  كما ستظهر تقنيات جديدة مثل الجدران التفاعلية، والأرضيات الذكية التي يمكنها تتبع الحركة وتعديل درجة الحرارة، والمرايا الذكية التي توفر معلومات عن الطقس والأخبار أثناء الاستعداد للخروج.
  
  ## 4. الألوان الجريئة والنابضة بالحياة
  
  بعد سنوات من هيمنة الألوان المحايدة، سيشهد عام 2025 عودة الألوان الجريئة والنابضة بالحياة. ستكون درجات الأزرق الداكن، والأخضر الزمردي، والأصفر الخردلي، والوردي الباستيل من أبرز الألوان المستخدمة في التصميم الداخلي.
  
  سيتم استخدام هذه الألوان بطرق مبتكرة، مثل الجدران ذات الألوان المتباينة، والأسقف الملونة، والأثاث ذو الألوان الجريئة، لإضفاء الحيوية والطاقة على المساحات الداخلية.
  
  ## 5. المواد الطبيعية والملمس المتنوع
  
  سيزداد الاهتمام بالمواد الطبيعية والملمس المتنوع في التصميم الداخلي لعام 2025. سيتم استخدام الخشب الخام، والحجر الطبيعي، والطين، والقش، والخيزران بشكل أكبر لإضفاء الدفء والأصالة على المساحات الداخلية.
  
  كما سيتم الجمع بين مواد ذات ملمس مختلف، مثل الخشب الخشن مع المعدن الناعم، أو الحجر الطبيعي مع الزجاج، لخلق تباين مثير للاهتمام وإضافة عمق وثراء للتصميم.
  
  ## 6. التصميم المستوحى من الطبيعة
  
  سيستمر الاتجاه نحو التصميم المستوحى من الطبيعة (Biophilic Design) في النمو خلال عام 2025. سيتم دمج العناصر الطبيعية مثل النباتات الداخلية، والمساحات الخضراء، والنوافذ الكبيرة التي توفر إطلالات على الطبيعة، في التصميم الداخلي.
  
  كما ستزداد شعبية جدران النباتات الداخلية، والأسقف المزروعة، والحدائق المائية، لتعزيز الاتصال بالطبيعة وتحسين جودة الهواء الداخلي وتقليل التوتر.
  
  ## 7. الحرف اليدوية والقطع الفريدة
  
  في عصر الإنتاج الضخم، سيزداد تقدير القطع الفريدة والحرف اليدوية في التصميم الداخلي لعام 2025. سيبحث الناس عن قطع أثاث وإكسسوارات مصنوعة يدوياً تعكس ثقافات وتقاليد مختلفة، وتضيف شخصية وقصة إلى مساحاتهم.
  
  ستزداد شعبية الحرف التقليدية مثل النسيج اليدوي، والفخار، والنحت، والزجاج المنفوخ يدوياً، كعناصر أساسية في التصميم الداخلي العصري.
  
  ## الخلاصة
  
  يتجه التصميم الداخلي في عام 2025 نحو مزيج من الاستدامة، والتكنولوجيا، والمرونة، مع التركيز على الراحة والرفاهية. سواء كنت تخطط لتجديد منزلك بالكامل أو إجراء تغييرات بسيطة، فإن تبني هذه الاتجاهات سيساعدك على إنشاء مساحة عصرية ومريحة تلبي احتياجاتك المتغيرة وتعكس شخصيتك الفريدة.
  
  تذكر أن أفضل تصميم داخلي هو الذي يجمع بين الجمال والوظيفة، ويخلق مساحة تشعر فيها بالراحة والسعادة. لا تتردد في استشارة مصمم داخلي محترف لمساعدتك في تطبيق هذه الاتجاهات بطريقة تناسب ذوقك واحتياجاتك الخاصة.
      `,
      featured_image: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2095.jpg",
      category: "تصميم داخلي",
      publish_date: "2024-03-15",
      reading_time: 7,
      author: authors[0],
      tags: [tags[0], tags[5], tags[7]],
      seo_title: "أحدث اتجاهات التصميم الداخلي لعام 2025 - زين التنموية",
      seo_keywords: "تصميم داخلي، اتجاهات التصميم، ديكور منزلي، تصميم عصري، 2025",
      seo_description: "تعرف على أحدث صيحات التصميم الداخلي التي ستسيطر على المشهد في عام 2025 وكيفية تطبيقها في منزلك لتحصل على مساحة عصرية ومريحة."
    },
    {
      id: 2,
      title: "كيفية اختيار مواد البناء المناسبة لمشروعك",
      slug: "how-to-choose-the-right-building-materials",
      excerpt: "دليل شامل لاختيار أفضل مواد البناء التي تناسب مشروعك من حيث الجودة والتكلفة والاستدامة",
      content: `
  # كيفية اختيار مواد البناء المناسبة لمشروعك
  
  يعد اختيار مواد البناء المناسبة من أهم القرارات التي ستتخذها عند بدء مشروع بناء جديد. فالمواد التي تختارها ستؤثر على جودة البناء، وتكلفته الإجمالية، وعمره الافتراضي، وكفاءته في استهلاك الطاقة، ومظهره الجمالي. في هذا الدليل الشامل، سنستعرض أهم العوامل التي يجب مراعاتها عند اختيار مواد البناء، وأنواع المواد المختلفة ومميزاتها وعيوبها.
  
  ## العوامل الرئيسية لاختيار مواد البناء
  
  ### 1. الميزانية
  
  تعتبر الميزانية من أهم العوامل التي تحدد نوعية مواد البناء التي يمكنك استخدامها. من المهم وضع ميزانية واقعية تأخذ في الاعتبار تكلفة المواد، وتكلفة العمالة، والتكاليف غير المتوقعة. ومع ذلك، يجب ألا تضحي بالجودة من أجل توفير المال، فاستخدام مواد رخيصة وذات جودة منخفضة قد يؤدي إلى مشاكل وتكاليف إضافية في المستقبل.
  
  ### 2. المناخ والظروف البيئية
  
  يجب أن تكون مواد البناء مناسبة للمناخ والظروف البيئية في المنطقة التي سيقام فيها المشروع. في المناطق الحارة، يفضل استخدام مواد ذات قدرة عالية على عزل الحرارة، بينما في المناطق الباردة، يجب التركيز على مواد تحتفظ بالحرارة. كما يجب مراعاة عوامل أخرى مثل الرطوبة، والرياح، والأمطار، والزلازل.
  
  ### 3. الاستدامة والتأثير البيئي
  
  مع تزايد الوعي البيئي، أصبح اختيار مواد بناء مستدامة وصديقة للبيئة أمراً ضرورياً. يمكن تقييم استدامة مواد البناء من خلال عدة عوامل، مثل:
  
  - مصدر المواد (محلي أم مستورد)
  - كمية الطاقة المستخدمة في إنتاجها
  - قابليتها لإعادة التدوير
  - تأثيرها على جودة الهواء الداخلي
  - عمرها الافتراضي
  
  ### 4. الجودة والمتانة
  
  يجب أن تكون مواد البناء ذات جودة عالية ومتانة كافية لتحمل الاستخدام اليومي والظروف البيئية المختلفة. المواد عالية الجودة قد تكون أكثر تكلفة في البداية، لكنها ستوفر المال على المدى الطويل من خلال تقليل تكاليف الصيانة والإصلاح.
  
  ### 5. الجمال والمظهر
  
  بالإضافة إلى الجوانب الوظيفية، يجب أن تكون مواد البناء جذابة من الناحية الجمالية وتتناسب مع التصميم العام للمشروع. يمكن أن تؤثر ألوان وملمس المواد بشكل كبير على المظهر النهائي للمبنى.
  
  ## أنواع مواد البناء الرئيسية
  
  ### 1. الخرسانة
  
  الخرسانة هي مادة بناء أساسية تتكون من الأسمنت والرمل والحصى والماء. تتميز بقوتها ومتانتها وقدرتها على تحمل الضغط العالي، مما يجعلها مثالية للأساسات والهياكل.
  
  **المميزات:**
  - قوة ومتانة عالية
  - مقاومة للحريق
  - مرونة في التشكيل
  - تكلفة معقولة
  
  **العيوب:**
  - ثقيلة الوزن
  - موصل جيد للحرارة (عزل حراري ضعيف)
  - تتطلب وقتاً للجفاف والتصلب
  - تأثير بيئي كبير في عملية الإنتاج
  
  ### 2. الطوب
  
  الطوب هو مادة بناء تقليدية تستخدم في بناء الجدران والأسقف. يتوفر بأنواع مختلفة مثل الطوب الأحمر، والطوب الخرساني، والطوب الطيني.
  
  **المميزات:**
  - متانة عالية
  - عزل حراري وصوتي جيد
  - مقاومة للحريق
  - مظهر جمالي تقليدي
  
  **العيوب:**
  - عملية البناء بالطوب تستغرق وقتاً طويلاً
  - ثقيل الوزن
  - قد يتطلب صيانة دورية (خاصة في المناطق الرطبة)
  
  ### 3. الخشب
  
  الخشب مادة بناء طبيعية تستخدم في الهياكل، والأرضيات، والأسقف، والديكورات الداخلية. يتوفر بأنواع مختلفة مثل الخشب الصلب، والخشب اللين، والخشب المعالج.
  
  **المميزات:**
  - عازل حراري ممتاز
  - سهل التشكيل والتعديل
  - مظهر جمالي دافئ وطبيعي
  - مادة متجددة (إذا تم حصادها بشكل مستدام)
  
  **العيوب:**
  - قابل للتلف بسبب الرطوبة والحشرات
  - أقل متانة من الخرسانة والفولاذ
  - يتطلب صيانة دورية
  - قابل للاشتعال (ما لم يتم معالجته)
  
  ### 4. الفولاذ
  
  الفولاذ مادة بناء قوية تستخدم في الهياكل والإطارات والأسقف. يتميز بنسبة قوة إلى وزن عالية، مما يجعله مثالياً للمباني العالية والهياكل الكبيرة.
  
  **المميزات:**
  - قوة استثنائية
  - خفيف الوزن نسبياً مقارنة بقوته
  - مقاوم للزلازل
  - قابل لإعادة التدوير بنسبة 100%
  
  **العيوب:**
  - تكلفة عالية
  - موصل جيد للحرارة (عزل حراري ضعيف)
  - عرضة للصدأ (ما لم يتم معالجته)
  - يتطلب عمالة متخصصة
  
  ### 5. الزجاج
  
  الزجاج مادة شفافة تستخدم في النوافذ والواجهات والأبواب. يتوفر بأنواع مختلفة مثل الزجاج العادي، والزجاج المقوى، والزجاج المزدوج، والزجاج الذكي.
  
  **المميزات:**
  - يسمح بدخول الضوء الطبيعي
  - مظهر عصري وأنيق
  - سهل التنظيف
  - متوفر بتقنيات متطورة للعزل الحراري والصوتي
  
  **العيوب:**
  - قابل للكسر (خاصة الزجاج العادي)
  - عزل حراري ضعيف (ما لم يكن مزدوجاً أو معالجاً)
  - تكلفة عالية للأنواع المتطورة
  - يتطلب عناية خاصة في التركيب
  
  ### 6. الحجر الطبيعي
  
  الحجر الطبيعي مادة بناء تقليدية تستخدم في الواجهات والجدران والأرضيات. يتوفر بأنواع مختلفة مثل الجرانيت، والرخام، والحجر الجيري، والحجر الرملي.
  
  **المميزات:**
  - متانة استثنائية
  - مظهر فخم وطبيعي
  - مقاومة للحريق والعوامل الجوية
  - عمر افتراضي طويل جداً
  
  **العيوب:**
  - تكلفة عالية
  - ثقيل الوزن
  - صعب التركيب والتعديل
  - يتطلب صيانة دورية (خاصة الرخام)
  
  ## نصائح لاختيار مواد البناء المناسبة
  
  1. **استشر الخبراء**: تحدث مع مهندس معماري أو مقاول ذو خبرة للحصول على نصائح حول أفضل المواد لمشروعك.
  
  2. **قم بزيارة معارض مواد البناء**: شاهد المواد بنفسك وتعرف على خصائصها وملمسها ومظهرها.
  
  3. **اطلب عينات**: قبل شراء كميات كبيرة، اطلب عينات من المواد لاختبارها والتأكد من جودتها.
  
  4. **ابحث عن الشهادات والضمانات**: تأكد من أن المواد تحمل شهادات جودة وضمانات من الشركات المصنعة.
  
  5. **فكر في المستقبل**: اختر مواد ذات عمر افتراضي طويل وتتطلب صيانة أقل لتوفير التكاليف على المدى الطويل.
  
  6. **وازن بين التكلفة والجودة**: لا تختر المواد الأرخص دائماً، بل وازن بين التكلفة والجودة والعمر الافتراضي.
  
  7. **راعِ الاستدامة**: اختر مواد صديقة للبيئة وقابلة لإعادة التدوير كلما أمكن
  
  ## سوق مواد البناء
  
  - [موقع سوق مواد البناء](https://www.materialmarket.com/)
  `,
  featured_image: "https://img.freepik.com/free-photo/modern-office-building_1127-3174.jpg",
  category: "مواد البناء",
  publish_date: "2024-03-15",
  reading_time: 7,
  author: {
    id: 1,
    name: "زين التنموية",
    position: "مدير قسم التطوير",
    bio: "مدير قسم التطوير في شركة التنموية",
    image: "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg",
    social: {
      twitter: "https://twitter.com/ahmed_alshamri",
      linkedin: "https://linkedin.com/in/ahmed-alshamri",
      email: "ahmed@zaindev.com",
    }
  },
  seo_title: "موقع سوق مواد البناء",
  seo_description: "موقع سوق مواد البناء لتوفير مواد البناء لمشروعك",
  seo_keywords: "مواد البناء, سوق مواد البناء, موقع سوق مواد البناء",
  tags: [tags[0], tags[1], tags[2]]
}
]
  

export const getAllArticles = () => {
  return articles;
}

export const getArticlesByCategory = (category: string) => {
  return articles.filter((article) => article.category === category);
}

export const getArticleById = (id: number) => {
  return articles.find((article) => article.id === id);
}

export const getRelatedArticles = (id: number) => {
  return articles.filter((article) => article.tags.some((tag) => tag.id === id));
}               