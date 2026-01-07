import { Language, Translation } from '../types';

const servicesItems = [
  {
    id: "custom-garment",
    title: "Custom Garment Embroidery",
    desc: "Transform ordinary garments into masterpieces. We offer bespoke hand and machine embroidery services tailored to your personal style.",
    fullDescription: "Our Custom Garment Embroidery service is the epitome of personal expression. Whether you wish to revitalize a vintage jacket or commission a completely new embroidered ensemble, our atelier works closely with you to develop motifs that resonate with your personal narrative. We utilize a blend of traditional tambour beading and modern needlework techniques to ensure durability and exquisite detail.",
    features: ["Personalized Design Consultation", "Hand & Machine Techniques", "Vintage Restoration Capability", "Sustainable Thread Options"],
    tag: "Bespoke",
    icon: "style",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSMNNi9xP9jd-0Z4Lr6PzqcB6edglQ-k4QgdMvlE_tOOmnkNsnew8DlNYw355YYhZJMDIbFy41wIkWqEH-QeNebpaldU0XarHVpz-8keBBRllVopLHF76V4uGBFlfU8S3iVNcEdIGJCDP1yv_fSf2VTBugOb7f98aaNhZSVou9lI7TyhJyQsd8piWrAtyrPQ1CEI7zIlHnzWRqKDDflI84D6jcBbM2JMeWbkK6iJBBmQ2vGAisJttDR7eCsq6QDoUCCNqvRjIrpcw"
  },
  {
    id: "bridal-ceremonial",
    title: "Bridal & Ceremonial",
    desc: "For your most special moments. We craft exquisite details for wedding gowns, veils, and ceremonial attire.",
    fullDescription: "Your wedding day demands perfection. Our Bridal & Ceremonial service focuses on creating heirloom-quality pieces that will be cherished for generations. From adding intricate lace appliqués to your veil to fully embellishing a bespoke gown with pearls and Swarovski crystals, we ensure you shine. We also specialize in traditional ceremonial attire for diverse cultural weddings.",
    features: ["Veil & Gown Embellishment", "Swarovski & Pearl Application", "Cultural Ceremonial Attire", "Heirloom Quality Finishes"],
    tag: "Luxury",
    icon: "favorite",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLZjH5sjIY99ljkTNpyFri8TAHqQc0teYA_hSdNsPEOpCq-FgFtFhbUtaylV_llBZ7WXSvIAs3Pz0kfGZfbjCrd8XhbSePwVJu3LgH6BKWvxZPXCqcUHA1VOVfWyD5Kn120FLe0oSs30sx0jCk2RON7uol6eufEGPdBboAEB0jC0n1phg3yiFbTPIoZOeGjH9Qusz5PEXz7XJtcnE5e2hV2M_IvfrdiyBJZ3OOxvgU7TJ4tC-eoTsxellA7iXf6a5rHDvFVU2DLS4"
  },
  {
    id: "fabric-personalization",
    title: "Fabric Personalization",
    desc: "Add a signature touch to your textiles. We offer monogramming, custom initials, and logo embroidery.",
    fullDescription: "Elevate your home and lifestyle with our Fabric Personalization service. We bring a touch of aristocracy to everyday items through precision monogramming and custom logo embroidery. Perfect for luxury linens, bathrobes, or bespoke gifts, this service adds a distinct layer of sophistication and ownership to high-quality textiles.",
    features: ["Custom Monogramming", "Luxury Linen Embroidery", "Corporate Gifting", "High-Precision Stitching"],
    tag: "Personal",
    icon: "edit",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAICUx6qRavHsybtruHIILbxw5DCnCsVc3sRoJ237ZDe-OwRPVEbqQiKRnCm563bn5Xs604AnAS_Lo7a8EUDQzeW7Qx3FfmpN-dby4vcZGjjNcGv9_9VL-X3ecEo_CIdwwT4L_NrVkpapMjwUcMFbtt6Q5vYqK1HJB3tLHUPenpvgcD-9jAADrrMCMJJQDxdy4SFr1wDnNpGUsj9v-W8qKaJjH_N_Y9XA4QwOx4oft6qvUNEhOuffCTF-c1_kLMlsgPq5sTM3dWuuQ"
  },
  {
    id: "repair-restoration",
    title: "Repair & Restoration",
    desc: "Preserve the legacy of your cherished textiles. Our skilled artisans specialize in repairing vintage embroidery.",
    fullDescription: "Vintage textiles carry stories that shouldn't be lost to time. Our Repair & Restoration service is dedicated to the conservation of antique embroidery and delicate fabrics. Using period-correct materials and techniques, we meticulously repair tears, re-bead loose sections, and stabilize aging fibers to breathe new life into your cherished heirlooms.",
    features: ["Antique Textile Conservation", "Invisible Mending", "Period-Correct Materials", "Structural Reinforcement"],
    tag: "Restoration",
    icon: "healing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIGZNlwC5DXdwizpWD28NZZ-PNLZlnQi4WWBEz6_-LqiX6V3HtKvXzAiJrAk1Jyjvz9bD7ifaBvjLDhYpN36KDD7235wxS2C4hgvu8SC0e5bSORSAD3ZPtwoOlbuz79xtlWdW0aSAXuj4nTv_-EmY6Jo3UfvaVy6ApdUJcBQOGUNyZWWo59Mr9mFDjXkAf4XDXBLwmC5KPw5-5q_JN81bt9KiTDsSFtq5ZcrOU9pOkPeqWiAbT4u3eRgdRHLqkBQDxwDq0F5xK8QE"
  },
  {
    id: "design-consultation",
    title: "Design Consultation",
    desc: "Not sure where to start? Sit down with our creative director for a one-on-one consultation.",
    fullDescription: "Every masterpiece begins with a vision. Our Design Consultation service offers you direct access to our Creative Director, Mojgan Esnaashary. In these sessions, we explore your inspirations, select the perfect color palettes, and determine the most suitable embroidery techniques for your project. We provide sketches and material swatches to ensure the final result exceeds your expectations.",
    features: ["One-on-One with Creative Director", "Sketching & Visualization", "Material Swatch Selection", "Technique Advisory"],
    tag: "Design",
    icon: "palette",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLCyvvTHSOVeSm4rdEWJ5dF4nOaMIJAfuY30Eo-AK1XN5jmAdoagsAplcN0_rHZmD_DRAvEBV5DdlYjQOIzzR4ksbVIG3-I6RCpJYHzzCNDkLO_rSFkSVauAG9LAszbBAJB4yUmmFr7WC9mONcjvTDLwEqqtG_i9drvoCK-70rjyhurMvET8NjlvSnIXyiBPg7H5gv8w2h6fm08ViQfkHrV0l5AzWAEy0Gy8JAHm7UDnDagqoVGGuGlYp8r4RUhKlwoZSpCBRDLxU"
  },
  {
    id: "bulk-corporate",
    title: "Bulk & Corporate",
    desc: "Elevate your brand or event. We manage large-scale embroidery orders for uniforms and corporate gifts.",
    fullDescription: "Meson Mojgan brings artisanal quality to scale. Our Bulk & Corporate service is designed for luxury brands, high-end hospitality, and exclusive events requiring consistent, high-quality embroidery. Whether for staff uniforms, event merchandise, or corporate gifting, we ensure that every piece reflects the prestige of your brand with timely delivery and impeccable standards.",
    features: ["Volume Order Management", "Consistent Quality Control", "Brand Identity Alignment", "Uniforms & Merchandise"],
    tag: "Commercial",
    icon: "layers",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsQZjWVRKSwQoVuIKMnKIhcaPQs7UptH8rij6TXfrLs4wYZ_gx6lQPcNcU3TD0S6pF1DtNrQF2wGTUC-QMdvIVqnLAEz8pKRH6zjxUcwxyqlV8PWx_PFAuzDtqrk3m6DKkTkZqffZ5AzNTE8EKtRCmGzGA6jLEcjrQBDdKZFazvtX5n8MsB6MFjYTgLuxe6tRmxzI4gvWW5ebU14HageDmdRFaLTuyUFJxF_s3GyxR4wz5MKSbPHA2McYHynJ0rtmcuhjHGNWW7FY"
  }
];

const testimonialItems = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Custom Evening Gown",
    text: "The handcrafted embroidery on my evening gown was nothing short of a masterpiece. Mojgan's attention to detail turned a simple dress into a work of art. I felt like royalty.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAob1pdX1V8YMDRevw-mDDEp_SuFKnBGjSRU-_3LYZbyqbYRPX9FRyutfYgabysCBwAGGXihRWjrr-Wdx_bx1g2sLLEttxvH5ga8MeJRIUrdOS43ar-92ShleK7pwmFpUdMujuZJ4rRf72hky4IQk_3yiixIKRS_pUH_oc_cjYi6bHy0EzD8KkrR7bzLJr3pdfA87rEa8LD2P1fHJmn-iBAPC38dou7Ru0W3lRujymQalqSE09lJxtyuGF0ILEeekxaBspJAOnOc1M"
  },
  {
    id: 2,
    name: "David Alistair",
    role: "Bespoke Wedding Suit",
    text: "Finding a tailor who understands the nuance of traditional Persian patterns while keeping the silhouette modern is rare. Meson Mojgan exceeded all my expectations for my wedding suit.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx6OUr3zdjuVO32UHI0eYldegxl3Mw4-JSGwTzBV4IeVfVfW7xVvSP5tMV_EjZ0jtTItKszO9Ef1HEbr2vyPF8UPKG_ktiZR0GyGkPaL0QfS_dSPD9KWeYKqkTfbpV71sqmv4bD9jgcaT4ERK671dOKJ05Uln2GEMJT8RT2OdDLASjA7C_fOYKDQDHpwns13SVmvoW_lKKpO7d1S4V91aUKpaGA21S1MPyueSJMvQ1P3kSuXhftech7S0DlMJpypqVne-fM9JdWAc",
    featured: true
  },
  {
    id: 3,
    name: "Eleanor Rigby",
    role: "Heirloom Restoration",
    text: "I commissioned a vintage restoration and was amazed by the delicate craftsmanship. The team treated my grandmother's heirloom with such respect and skill.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5y56jiAjIhJW_gNVJinkL5lDK3Swvk8VxrlZu_9YHbvFe5pceJSjGashmdBTfgXaiYKtJcu_KqusUlwrdw9Tv-SNSyzv0f4GA1MrP_UbTM-izUAjFT2BSMYkd7nwCZ_q-3EpZMRGTJSp3SOgeLcrzxAOnm7TiXs8b2wgvlrZdo7QIFrB50ONRGkeLEnyy6UsWj2pw3jL6auSibRMh3GepwWg-rg9tQGCN6Mcd4doxKOT62d7eTLuEq0SnAWXHqTPDCigG8mVQ9-s"
  }
];

export const translations: Record<Language, Translation> = {
  [Language.EN]: {
    nav: {
      home: "Home",
      collections: "Collections",
      maison: "The Maison",
      services: "Services",
      testimonials: "Testimonials",
      contact: "Place Order",
    },
    home: {
      hero: {
        brand: "Meson Mojgan Esnaashary",
        line1: "Timeless Handcrafted",
        line2: "Embroidery for",
        accent: "Elegant Fashion",
        description: "Where tradition meets modern luxury. Bespoke textile art and custom-designed garments for the distinguished individual.",
        btnOrder: "Order Custom Design",
        btnGallery: "View Gallery"
      },
      legacy: {
        year: "1990",
        title: "A Legacy of",
        accent: "Detail",
        p1: "At Meson Mojgan Esnaashary, every stitch tells a story. Established in 1990, we have dedicated over three decades to the mastery of traditional Persian embroidery techniques, fusing them with contemporary silhouettes to create wearable art.",
        p2: "Our atelier creates more than just clothing; we create heirlooms. From bridal trousseaus to evening gowns, each piece is a unique canvas of golden threads, silk, and passion, meticulously crafted by master artisans.",
        stat1: "30+",
        stat1Label: "Years Experience",
        stat2: "5k+",
        stat2Label: "Custom Pieces"
      },
      services: {
        subtitle: "Our Expertise",
        title: "Atelier",
        accent: "Services",
        viewDetails: "View Details"
      },
      testimonials: {
        title: "Voices of",
        accent: "Elegance",
        description: "Our creations are more than garments; they are cherished experiences. Read the stories of those who have adorned our art.",
        scroll: "Scroll Stories"
      },
      orderSection: {
        subtitle: "Bespoke Service",
        title: "Start Your",
        accent: "Creation",
        guaranteeTitle: "Guaranteed Excellence",
        guaranteeText: "Each commission is treated with the utmost care, ensuring a personalized experience from sketch to stitch."
      }
    },
    footer: {
      description: "Since 1990, crafting luxury embroidery with passion and precision. A legacy of needlework artistry for the modern era.",
      headers: {
        quickLinks: "Quick Links",
        services: "Services",
        contact: "Contact"
      },
      links: {
        about: "About Us",
        services: "Our Services",
        gallery: "Portfolio Gallery",
        testimonials: "Testimonials",
        bridal: "Bridal Embroidery",
        custom: "Custom Garments",
        restoration: "Restoration",
        monogram: "Monogramming"
      },
      copyright: "© 2026 Meson Mojgan Esnaashary. All rights reserved."
    },
    servicesPage: {
      heroTag: "The Art of Fine Needlework",
      heroTitle: "Our",
      heroTitleAccent: "Services",
      heroDesc: "Step into a world where threads weave stories of elegance. At Meson Mojgan Esnaashary, we specialize in breathing life into fabrics through bespoke embroidery and artistic craftsmanship.",
      items: servicesItems,
      cta: {
        title: "Ready to Create Something Beautiful?",
        desc: "Whether it's a single cherished piece or a collection for your boutique, Meson Mojgan Esnaashary is dedicated to perfection in every stitch.",
        btn1: "Book Consultation",
        btn2: "View Portfolio"
      }
    },
    gallery: {
      title: "Masterpieces in Thread",
      subtitle: "The Gallery",
      description: "Explore our curated collection of hand-embroidered artistry. From the delicate details of bridal veils to the bold statements of modern evening wear.",
      filters: {
        all: "All Works",
        bridal: "Bridal",
        evening: "Evening Wear",
        traditional: "Traditional",
        modern: "Modern Art"
      }
    },
    testimonialsPage: {
      subtitle: "Voices of Elegance",
      title: "Client Testimonials",
      description: "Discover the stories behind our bespoke creations. From handcrafted embroidery to custom-designed gowns, read how Meson Mojgan Esnaashary brings artistic visions to life.",
      cta: {
        title: "Join our happy clients",
        subtitle: "Book your consultation today",
        button: "Contact Us"
      },
      items: testimonialItems
    },
    order: {
      title: "Place Your Order",
      subtitle: "Submit your details to commission your unique masterpiece",
      steps: {
        contact: "Contact Details",
        details: "Design Specifics",
        review: "Review"
      },
      fields: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        garment: "Type of Garment",
        style: "Embroidery Style",
        fabric: "Preferred Fabric",
        date: "Required Delivery Date",
        notes: "Additional Notes & Vision",
        submit: "Submit Request"
      },
      success: "Thank you. Your request has been sent to our atelier."
    }
  },
  [Language.DE]: {
    nav: {
      home: "Startseite",
      collections: "Kollektionen",
      maison: "Das Haus",
      services: "Dienstleistungen",
      testimonials: "Kundenstimmen",
      contact: "Bestellen",
    },
    home: {
      hero: {
        brand: "Meson Mojgan Esnaashary",
        line1: "Zeitlose Handgefertigte",
        line2: "Stickerei für",
        accent: "Elegante Mode",
        description: "Wo Tradition auf modernen Luxus trifft. Maßgeschneiderte Textilkunst und individuell entworfene Kleidungsstücke für die anspruchsvolle Persönlichkeit.",
        btnOrder: "Individuelles Design Bestellen",
        btnGallery: "Galerie Ansehen"
      },
      legacy: {
        year: "1990",
        title: "Ein Erbe des",
        accent: "Details",
        p1: "Bei Meson Mojgan Esnaashary erzählt jeder Stich eine Geschichte. Gegründet 1990, widmen wir uns seit über drei Jahrzehnten der Beherrschung traditioneller persischer Sticktechniken und verbinden sie mit zeitgenössischen Silhouetten.",
        p2: "Unser Atelier schafft mehr als nur Kleidung; wir schaffen Erbstücke. Von der Brautausstattung bis zum Abendkleid ist jedes Stück eine einzigartige Leinwand aus Goldfäden, Seide und Leidenschaft.",
        stat1: "30+",
        stat1Label: "Jahre Erfahrung",
        stat2: "5k+",
        stat2Label: "Maßanfertigungen"
      },
      services: {
        subtitle: "Unsere Expertise",
        title: "Atelier",
        accent: "Dienstleistungen",
        viewDetails: "Details Anzeigen"
      },
      testimonials: {
        title: "Stimmen der",
        accent: "Eleganz",
        description: "Unsere Kreationen sind mehr als Kleidungsstücke; sie sind geschätzte Erlebnisse. Lesen Sie die Geschichten derer, die unsere Kunst getragen haben.",
        scroll: "Geschichten Scrollen"
      },
      orderSection: {
        subtitle: "Maßgeschneiderter Service",
        title: "Beginnen Sie Ihre",
        accent: "Kreation",
        guaranteeTitle: "Garantierte Exzellenz",
        guaranteeText: "Jeder Auftrag wird mit größter Sorgfalt behandelt, um ein personalisiertes Erlebnis von der Skizze bis zum Stich zu gewährleisten."
      }
    },
    footer: {
      description: "Seit 1990 fertigen wir Luxusstickereien mit Leidenschaft und Präzision. Ein Erbe der Nadelkunst für die moderne Ära.",
      headers: {
        quickLinks: "Schnelllinks",
        services: "Dienstleistungen",
        contact: "Kontakt"
      },
      links: {
        about: "Über Uns",
        services: "Unsere Dienste",
        gallery: "Portfolio Galerie",
        testimonials: "Kundenstimmen",
        bridal: "Brautstickerei",
        custom: "Maßkleidung",
        restoration: "Restaurierung",
        monogram: "Monogrammierung"
      },
      copyright: "© 2026 Meson Mojgan Esnaashary. Alle Rechte vorbehalten."
    },
    servicesPage: {
      heroTag: "Die Kunst der feinen Nadelarbeit",
      heroTitle: "Unsere",
      heroTitleAccent: "Dienstleistungen",
      heroDesc: "Treten Sie ein in eine Welt, in der Fäden Geschichten von Eleganz weben. Bei Meson Mojgan Esnaashary haben wir uns darauf spezialisiert, Stoffen durch maßgeschneiderte Stickerei Leben einzuhauchen.",
      items: servicesItems, 
      cta: {
        title: "Bereit, etwas Schönes zu schaffen?",
        desc: "Ob es sich um ein einzelnes geschätztes Stück oder eine Kollektion für Ihre Boutique handelt, Meson Mojgan Esnaashary widmet sich der Perfektion in jedem Stich.",
        btn1: "Beratung Buchen",
        btn2: "Portfolio Ansehen"
      }
    },
    gallery: {
      title: "Meisterwerke in Garn",
      subtitle: "Die Galerie",
      description: "Entdecken Sie unsere kuratierte Sammlung handgestickter Kunstwerke. Von den feinen Details der Brautschleier bis zu den kühnen Statements moderner Abendgarderobe.",
      filters: {
        all: "Alle Werke",
        bridal: "Brautmode",
        evening: "Abendgarderobe",
        traditional: "Traditionell",
        modern: "Moderne Kunst"
      }
    },
    testimonialsPage: {
      subtitle: "Stimmen der Eleganz",
      title: "Kundenstimmen",
      description: "Entdecken Sie die Geschichten hinter unseren maßgeschneiderten Kreationen. Lesen Sie, wie Meson Mojgan Esnaashary künstlerische Visionen zum Leben erweckt.",
      cta: {
        title: "Schließen Sie sich unseren glücklichen Kunden an",
        subtitle: "Buchen Sie Ihre Beratung noch heute",
        button: "Kontaktiere Uns"
      },
      items: testimonialItems
    },
    order: {
      title: "Bestellung Aufgeben",
      subtitle: "Senden Sie Ihre Daten, um Ihr einzigartiges Meisterwerk in Auftrag zu geben",
      steps: {
        contact: "Kontaktdaten",
        details: "Design-Details",
        review: "Überprüfung"
      },
      fields: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        garment: "Art des Kleidungsstücks",
        style: "Stickerei-Stil",
        fabric: "Bevorzugter Stoff",
        date: "Gewünschtes Lieferdatum",
        notes: "Zusätzliche Notizen & Vision",
        submit: "Anfrage Senden"
      },
      success: "Danke. Ihre Anfrage wurde an unser Atelier gesendet."
    }
  },
  [Language.FA]: {
    nav: {
      home: "خانه",
      collections: "مجموعه‌ها",
      maison: "مزون",
      services: "خدمات",
      testimonials: "نظرات",
      contact: "ثبت سفارش",
    },
    home: {
      hero: {
        brand: "مزون مژگان اسنی‌شری",
        line1: "گلدوزی دست‌دوز",
        line2: "بی‌زمان برای",
        accent: "مد فاخر",
        description: "جایی که سنت با لوکس مدرن تلاقی می‌کند. هنر نساجی سفارشی و لباس‌های طراحی شده اختصاصی برای افراد متمایز.",
        btnOrder: "سفارش طراحی اختصاصی",
        btnGallery: "مشاهده گالری"
      },
      legacy: {
        year: "۱۹۹۰",
        title: "میراثی از",
        accent: "جزئیات",
        p1: "در مزون مژگان اسنی‌شری، هر کوک داستانی را روایت می‌کند. با تاسیس در سال ۱۹۹۰، ما بیش از سه دهه را وقف استادی در تکنیک‌های گلدوزی سنتی ایرانی کرده‌ایم و آن‌ها را با سیلوئت‌های معاصر ترکیب می‌کنیم.",
        p2: "آتلیه ما بیش از لباس خلق می‌کند؛ ما میراث می‌آفرینیم. از جهیزیه عروس تا لباس‌های شب، هر قطعه بومی منحصر به فرد از تارهای طلا، ابریشم و اشتیاق است.",
        stat1: "۳۰+",
        stat1Label: "سال تجربه",
        stat2: "۵هزار+",
        stat2Label: "قطعه سفارشی"
      },
      services: {
        subtitle: "تخصص ما",
        title: "خدمات",
        accent: "آتلیه",
        viewDetails: "مشاهده جزئیات"
      },
      testimonials: {
        title: "صداهای",
        accent: "وقار",
        description: "آثار ما بیش از لباس هستند؛ آن‌ها تجربه‌هایی ارزشمندند. داستان‌های کسانی که هنر ما را بر تن کرده‌اند بخوانید.",
        scroll: "مرور داستان‌ها"
      },
      orderSection: {
        subtitle: "خدمات سفارشی",
        title: "آفرینش خود را",
        accent: "آغاز کنید",
        guaranteeTitle: "تضمین تعالی",
        guaranteeText: "هر سفارش با نهایت دقت انجام می‌شود تا تجربه‌ای شخصی از طراحی تا دوخت تضمین شود."
      }
    },
    footer: {
      description: "از سال ۱۹۹۰، خلق گلدوزی‌های لوکس با اشتیاق و دقت. میراثی از هنر سوزن‌دوزی برای عصر مدرن.",
      headers: {
        quickLinks: "لینک‌های سریع",
        services: "خدمات",
        contact: "تماس"
      },
      links: {
        about: "درباره ما",
        services: "خدمات ما",
        gallery: "گالری نمونه کارها",
        testimonials: "نظرات مشتریان",
        bridal: "گلدوزی عروس",
        custom: "لباس‌های سفارشی",
        restoration: "ترمیم و بازسازی",
        monogram: "منوگرام و نشان‌دوزی"
      },
      copyright: "© ۲۰۲۶ مزون مژگان اسنی‌شری. تمامی حقوق محفوظ است."
    },
    servicesPage: {
      heroTag: "هنر سوزن دوزی ظریف",
      heroTitle: "خدمات",
      heroTitleAccent: "ما",
      heroDesc: "به دنیایی قدم بگذارید که در آن تارها داستان‌هایی از وقار می‌بافند. در مزون مژگان اسنی‌شری، ما در دمیدن روح به پارچه‌ها از طریق گلدوزی سفارشی و مهارت هنری تخصص داریم.",
      items: servicesItems, 
      cta: {
        title: "آماده خلق چیزی زیبا هستید؟",
        desc: "چه یک قطعه ارزشمند و چه مجموعه‌ای برای بوتیک شما باشد، مزون مژگان اسنی‌شری متعهد به کمال در هر کوک است.",
        btn1: "رزرو مشاوره",
        btn2: "مشاهده نمونه کارها"
      }
    },
    gallery: {
      title: "شاهکارهایی در تار و پود",
      subtitle: "گالری",
      description: "مجموعه دست‌چین شده ما از هنر گلدوزی دستی را کاوش کنید. از جزئیات ظریف تورهای عروس تا جلوه‌های جسورانه لباس‌های شب مدرن.",
      filters: {
        all: "همه آثار",
        bridal: "عروس",
        evening: "لباس شب",
        traditional: "سنتی",
        modern: "هنر مدرن"
      }
    },
    testimonialsPage: {
      subtitle: "صداهای وقار",
      title: "نظرات مشتریان",
      description: "داستان‌های پشت خلق آثار سفارشی ما را کشف کنید. از گلدوزی‌های دستی تا لباس‌های طراحی شده اختصاصی.",
      cta: {
        title: "به مشتریان راضی ما بپیوندید",
        subtitle: "امروز وقت مشاوره خود را رزرو کنید",
        button: "تماس با ما"
      },
      items: testimonialItems
    },
    order: {
      title: "ثبت سفارش",
      subtitle: "اطلاعات خود را وارد کنید تا سفارش شاهکار منحصر به فرد شما ثبت شود",
      steps: {
        contact: "اطلاعات تماس",
        details: "جزئیات طراحی",
        review: "بررسی"
      },
      fields: {
        name: "نام و نام خانوادگی",
        email: "آدرس ایمیل",
        phone: "شماره تماس",
        garment: "نوع لباس",
        style: "سبک گلدوزی",
        fabric: "پارچه مورد نظر",
        date: "تاریخ تحویل مورد نیاز",
        notes: "یادداشت‌های اضافی و دیدگاه",
        submit: "ارسال درخواست"
      },
      success: "با تشکر. درخواست شما به آتلیه ما ارسال شد."
    }
  }
};