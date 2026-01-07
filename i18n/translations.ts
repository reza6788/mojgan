
import { Language, Translation } from '../types';

const servicesItems = [
  {
    id: "custom-garment",
    title: "Custom Garment Embroidery",
    desc: "Transform ordinary garments into masterpieces. We offer bespoke hand and machine embroidery services tailored to your personal style.",
    fullDescription: "Our Custom Garment Embroidery service is the epitome of personal expression. Whether you wish to revitalize a vintage jacket or commission a completely new embroidered ensemble, our atelier works closely with you to develop motifs that resonate with your personal narrative.",
    features: ["Personalized Design Consultation", "Hand & Machine Techniques", "Vintage Restoration Capability", "Sustainable Thread Options"],
    tag: "Bespoke",
    icon: "style",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSMNNi9xP9jd-0Z4Lr6PzqcB6edglQ-k4QgdMvlE_tOOmnkNsnew8DlNYw355YYhZJMDIbFy41wIkWqEH-QeNebpaldU0XarHVpz-8keBBRllVopLHF76V4uGBFlfU8S3iVNcEdIGJCDP1yv_fSf2VTBugOb7f98aaNhZSVou9lI7TyhJyQsd8piWrAtyrPQ1CEI7zIlHnzWRqKDDflI84D6jcBbM2JMeWbkK6iJBBmQ2vGAisJttDR7eCsq6QDoUCCNqvRjIrpcw"
  },
  {
    id: "bridal-ceremonial",
    title: "Bridal & Ceremonial",
    desc: "For your most special moments. We craft exquisite details for wedding gowns, veils, and ceremonial attire.",
    fullDescription: "Your wedding day demands perfection. Our Bridal & Ceremonial service focuses on creating heirloom-quality pieces that will be cherished for generations.",
    features: ["Veil & Gown Embellishment", "Swarovski & Pearl Application", "Cultural Ceremonial Attire", "Heirloom Quality Finishes"],
    tag: "Luxury",
    icon: "favorite",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLZjH5sjIY99ljkTNpyFri8TAHqQc0teYA_hSdNsPEOpCq-FgFtFhbUtaylV_llBZ7WXSvIAs3Pz0kfGZfbjCrd8XhbSePwVJu3LgH6BKWvxZPXCqcUHA1VOVfWyD5Kn120FLe0oSs30sx0jCk2RON7uol6eufEGPdBboAEB0jC0n1phg3yiFbTPIoZOeGjH9Qusz5PEXz7XJtcnE5e2hV2M_IvfrdiyBJZ3OOxvgU7TJ4tC-eoTsxellA7iXf6a5rHDvFVU2DLS4"
  },
  {
    id: "fabric-personalization",
    title: "Fabric Personalization",
    desc: "Add a signature touch to your textiles. We offer monogramming, custom initials, and logo embroidery.",
    fullDescription: "Elevate your home and lifestyle with our Fabric Personalization service. We bring a touch of aristocracy to everyday items.",
    features: ["Custom Monogramming", "Luxury Linen Embroidery", "Corporate Gifting", "High-Precision Stitching"],
    tag: "Personal",
    icon: "edit",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAICUx6qRavHsybtruHIILbxw5DCnCsVc3sRoJ237ZDe-OwRPVEbqQiKRnCm563bn5Xs604AnAS_Lo7a8EUDQzeW7Qx3FfmpN-dby4vcZGjjNcGv9_9VL-X3ecEo_CIdwwT4L_NrVkpapMjwUcMFbtt6Q5vYqK1HJB3tLHUPenpvgcD-9jAADrrMCMJJQDxdy4SFr1wDnNpGUsj9v-W8qKaJjH_N_Y9XA4QwOx4oft6qvUNEhOuffCTF-c1_kLMlsgPq5sTM3dWuuQ"
  },
  {
    id: "repair-restoration",
    title: "Repair & Restoration",
    desc: "Preserve the legacy of your cherished textiles. Our skilled artisans specialize in repairing vintage embroidery.",
    fullDescription: "Vintage textiles carry stories that shouldn't be lost to time. Our Repair & Restoration service is dedicated to the conservation of antique embroidery.",
    features: ["Antique Textile Conservation", "Invisible Mending", "Period-Correct Materials", "Structural Reinforcement"],
    tag: "Restoration",
    icon: "healing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIGZNlwC5DXdwizpWD28NZZ-PNLZlnQi4WWBEz6_-LqiX6V3HtKvXzAiJrAk1Jyjvz9bD7ifaBvjLDhYpN36KDD7235wxS2C4hgvu8SC0e5bSORSAD3ZPtwoOlbuz79xtlWdW0aSAXuj4nTv_-EmY6Jo3UfvaVy6ApdUJcBQOGUNyZWWo59Mr9mFDjXkAf4XDXBLwmC5KPw5-5q_JN81bt9KiTDsSFtq5ZcrOU9pOkPeqWiAbT4u3eRgdRHLqkBQDxwDq0F5xK8QE"
  },
  {
    id: "design-consultation",
    title: "Design Consultation",
    desc: "Not sure where to start? Sit down with our creative director for a one-on-one consultation.",
    fullDescription: "Every masterpiece begins with a vision. Our Design Consultation service offers you direct access to our Creative Director, Mojgan Esnaashary.",
    features: ["One-on-One with Creative Director", "Sketching & Visualization", "Material Swatch Selection", "Technique Advisory"],
    tag: "Design",
    icon: "palette",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLCyvvTHSOVeSm4rdEWJ5dF4nOaMIJAfuY30Eo-AK1XN5jmAdoagsAplcN0_rHZmD_DRAvEBV5DdlYjQOIzzR4ksbVIG3-I6RCpJYHzzCNDkLO_rSFkSVauAG9LAszbBAJB4yUmmFr7WC9mONcjvTDLwEqqtG_i9drvoCK-70rjyhurMvET8NjlvSnIXyiBPg7H5gv8w2h6fm08ViQfkHrV0l5AzWAEy0Gy8JAHm7UDnDagqoVGGuGlYp8r4RUhKlwoZSpCBRDLxU"
  },
  {
    id: "bulk-corporate",
    title: "Bulk & Corporate",
    desc: "Elevate your brand or event. We manage large-scale embroidery orders for uniforms and corporate gifts.",
    fullDescription: "Meson Mojgan brings artisanal quality to scale. Our Bulk & Corporate service is designed for luxury brands and high-end hospitality.",
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
    text: "The handcrafted embroidery on my evening gown was nothing short of a masterpiece. Mojgan's attention to detail turned a simple dress into a work of art.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAob1pdX1V8YMDRevw-mDDEp_SuFKnBGjSRU-_3LYZbyqbYRPX9FRyutfYgabysCBwAGGXihRWjrr-Wdx_bx1g2sLLEttxvH5ga8MeJRIUrdOS43ar-92ShleK7pwmFpUdMujuZJ4rRf72hky4IQk_3yiixIKRS_pUH_oc_cjYi6bHy0EzD8KkrR7bzLJr3pdfA87rEa8LD2P1fHJmn-iBAPC38dou7Ru0W3lRujymQalqSE09lJxtyuGF0ILEeekxaBspJAOnOc1M"
  },
  {
    id: 2,
    name: "David Alistair",
    role: "Bespoke Wedding Suit",
    text: "Finding a tailor who understands the nuance of traditional Persian patterns while keeping the silhouette modern is rare. Meson Mojgan exceeded all my expectations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx6OUr3zdjuVO32UHI0eYldegxl3Mw4-JSGwTzBV4IeVfVfW7xVvSP5tMV_EjZ0jtTItKszO9Ef1HEbr2vyPF8UPKG_ktiZR0GyGkPaL0QfS_dSPD9KWeYKqkTfbpV71sqmv4bD9jgcaT4ERK671dOKJ05Uln2GEMJT8RT2OdDLASjA7C_fOYKDQDHpwns13SVmvoW_lKKpO7d1S4V91aUKpaGA21S1MPyueSJMvQ1P3kSuXhftech7S0DlMJpypqVne-fM9JdWAc",
    featured: true
  },
  {
    id: 3,
    name: "Eleanor Rigby",
    role: "Heirloom Restoration",
    text: "I commissioned a vintage restoration and was amazed by the delicate craftsmanship. The team treated my grandmother's heirloom with such respect.",
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
        p1: "At Meson Mojgan Esnaashary, every stitch tells a story. Established in 1990, we have dedicated over three decades to the mastery of traditional Persian embroidery techniques.",
        p2: "Our atelier creates more than just clothing; we create heirlooms. Each piece is a unique canvas of golden threads and silk.",
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
        description: "Our creations are more than garments; they are cherished experiences.",
        scroll: "Scroll Stories"
      },
      orderSection: {
        subtitle: "Bespoke Service",
        title: "Start Your",
        accent: "Creation",
        guaranteeTitle: "Guaranteed Excellence",
        guaranteeText: "Each commission is treated with the utmost care, ensuring a personalized experience."
      }
    },
    maisonPage: {
      hero: {
        year: "Est. 1990",
        title: "The Legacy of",
        accent: "Esnaashary",
        subtitle: "Where threads of gold weave stories of timeless elegance."
      },
      tradition: {
        title: "A Tradition of",
        accent: "Excellence",
        p1: "Since 1990, Meson Mojgan Esnaashary has stood as a beacon of sartorial artistry. We specialize in the nearly forgotten art of handcrafted embroidery.",
        p2: "Every garment is a labor of love, designed to reflect the unique spirit of its wearer.",
        feature1Title: "Luxury Materials",
        feature1Desc: "Pure silks, gold threads, and rare textiles.",
        feature2Title: "Bespoke Design",
        feature2Desc: "Collaborative creation ensuring every stitch aligns with your vision.",
        signature: "Mojgan Esnaashary, Founder"
      },
      quote: "Embroidery is the poetry of the needle, written upon the canvas of silk.",
      process: {
        title: "The Process",
        steps: [
          { title: "Consultation", desc: "Personal dialogue to understand your desires." },
          { title: "Handcrafting", desc: "Artisans spend hundreds of hours applying beads by hand." },
          { title: "Final Fitting", desc: "Precision adjustments ensure the garment drapes perfectly." }
        ]
      },
      timeline: {
        title: "The Heritage Timeline",
        milestones: [
          { year: "1990", title: "Atelier Founding", desc: "Mojgan Esnaashary opens the first atelier, dedicated to traditional Persian needlework." },
          { year: "2005", title: "Luxury Expansion", desc: "Integration of Swarovski crystals and rare French laces into the signature bridal collections." },
          { year: "2018", title: "Digital Heritage", desc: "Launching the first digital portfolio to share Persian craftsmanship with the global audience." },
          { year: "2026", title: "Modern Era", desc: "Continuing the legacy by blending ancient motifs with high-tech sustainable silhouettes." }
        ]
      }
    },
    footer: {
      description: "Since 1990, crafting luxury embroidery with passion and precision.",
      headers: { quickLinks: "Quick Links", services: "Services", contact: "Contact" },
      links: {
        about: "About Us",
        placeOrder: "Place Order",
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
      heroDesc: "Step into a world where threads weave stories of elegance.",
      items: servicesItems,
      cta: {
        title: "Ready to Create Something Beautiful?",
        desc: "Meson Mojgan Esnaashary is dedicated to perfection in every stitch.",
        btn1: "Book Consultation",
        btn2: "View Portfolio"
      }
    },
    gallery: {
      title: "Masterpieces in Thread",
      subtitle: "The Gallery",
      description: "Explore our curated collection of hand-embroidered artistry.",
      filters: { all: "All", bridal: "Bridal", evening: "Evening", traditional: "Traditional", modern: "Modern" }
    },
    testimonialsPage: {
      subtitle: "Voices of Elegance",
      title: "Client Testimonials",
      description: "Discover the stories behind our bespoke creations.",
      cta: { title: "Join our happy clients", subtitle: "Book today", button: "Contact Us" },
      items: testimonialItems
    },
    order: {
      title: "Place Your Order",
      subtitle: "Submit details for your unique masterpiece",
      steps: { contact: "Contact", details: "Design", review: "Review" },
      fields: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        garmentType: "Garment Type",
        embroideryStyle: "Embroidery Style",
        fabricType: "Fabric",
        // Fix: Rename 'date' to 'deliveryDate' to match Translation interface
        deliveryDate: "Delivery Date",
        notes: "Notes",
        submit: "Submit Request"
      },
      success: "Request sent successfully."
    }
  },
  [Language.DE]: {
    nav: {
      home: "Startseite",
      collections: "Kollektionen",
      maison: "Das Haus",
      services: "Dienste",
      testimonials: "Kundenstimmen",
      contact: "Bestellen",
    },
    home: {
      hero: {
        brand: "Meson Mojgan Esnaashary",
        line1: "Zeitlose Handarbeit",
        line2: "Stickerei für",
        accent: "Elegante Mode",
        description: "Wo Tradition auf modernen Luxus trifft. Maßgeschneiderte Textilkunst.",
        btnOrder: "Design Bestellen",
        btnGallery: "Galerie Ansehen"
      },
      legacy: {
        year: "1990",
        title: "Ein Erbe des",
        accent: "Details",
        p1: "Seit 1990 widmen wir uns der Beherrschung traditioneller persischer Sticktechniken.",
        p2: "Unser Atelier schafft Erbstücke. Jedes Stück ist ein Kunstwerk aus Gold und Seide.",
        stat1: "30+",
        stat1Label: "Jahre Erfahrung",
        stat2: "5k+",
        stat2Label: "Maßanfertigungen"
      },
      services: {
        subtitle: "Expertise",
        title: "Atelier",
        accent: "Dienste",
        viewDetails: "Ansehen"
      },
      testimonials: {
        title: "Stimmen der",
        accent: "Eleganz",
        description: "Unsere Kreationen sind geschätzte Erlebnisse.",
        scroll: "Scrollen"
      },
      orderSection: {
        subtitle: "Maßgeschneidert",
        title: "Starten Sie",
        accent: "Kreation",
        guaranteeTitle: "Exzellenz",
        guaranteeText: "Jeder Auftrag wird mit größter Sorgfalt behandelt."
      }
    },
    maisonPage: {
      hero: {
        year: "Seit 1990",
        title: "Das Erbe von",
        accent: "Esnaashary",
        subtitle: "Wo Goldfäden Geschichten von zeitloser Eleganz weben."
      },
      tradition: {
        title: "Tradition der",
        accent: "Exzellenz",
        p1: "Wir spezialisieren uns auf fast vergessene Sticktechniken.",
        p2: "Jedes Kleidungsstück spiegelt den einzigartigen Geist seiner Trägerin wider.",
        feature1Title: "Materialien",
        feature1Desc: "Reine Seide und Goldfäden.",
        feature2Title: "Bespoke",
        feature2Desc: "Gemeinsame Kreation nach Ihrer Vision.",
        signature: "Mojgan Esnaashary, Gründerin"
      },
      quote: "Stickerei ist die Poesie der Nadel.",
      process: {
        title: "Der Prozess",
        steps: [
          { title: "Beratung", desc: "Persönlicher Dialog." },
          { title: "Handarbeit", desc: "Hunderte Stunden Präزision." },
          { title: "Anprobe", desc: "Perfekter Sitz." }
        ]
      },
      timeline: {
        title: "Heritage Timeline",
        milestones: [
          { year: "1990", title: "Gründung", desc: "Mojgan Esnaashary eröffnet das erste Atelier." },
          { year: "2005", title: "Luxus", desc: "Integration von Swarovski-Kristallen." },
          { year: "2018", title: "Digital", desc: "Globales Portfolio." },
          { year: "2026", title: "Moderne", desc: "Nachhaltige Haute Couture." }
        ]
      }
    },
    footer: {
      description: "Seit 1990 Luxusstickerei mit Leidenschaft.",
      headers: { quickLinks: "Links", services: "Dienste", contact: "Kontakt" },
      links: {
        about: "Über Uns",
        placeOrder: "Bestellen",
        services: "Dienste",
        gallery: "Portfolio",
        testimonials: "Kundenstimmen",
        bridal: "Brautmode",
        custom: "Maßkleidung",
        restoration: "Restaurierung",
        monogram: "Monogramm"
      },
      copyright: "© 2026 Meson Mojgan. Alle Rechte vorbehalten."
    },
    servicesPage: {
      heroTag: "Feine Nadelarbeit",
      heroTitle: "Unsere",
      heroTitleAccent: "Dienste",
      heroDesc: "Wo Fäden Geschichten weben.",
      items: servicesItems,
      cta: { title: "Bereit?", desc: "Perfektion in jedem Stich.", btn1: "Beratung", btn2: "Portfolio" }
    },
    gallery: {
      title: "Meisterwerke",
      subtitle: "Galerie",
      description: "Entdecken Sie handgestickte Kunst.",
      filters: { all: "Alle", bridal: "Braut", evening: "Abend", traditional: "Traditionell", modern: "Modern" }
    },
    testimonialsPage: {
      subtitle: "Eleganz",
      title: "Kundenstimmen",
      description: "Geschichten hinter unseren Kreationen.",
      cta: { title: "Kunden", subtitle: "Buchen", button: "Kontakt" },
      items: testimonialItems
    },
    order: {
      title: "Bestellung",
      subtitle: "Details für Ihr Meisterwerk",
      steps: { contact: "Kontakt", details: "Design", review: "Check" },
      fields: {
        name: "Name",
        email: "Email",
        phone: "Tel",
        garmentType: "Kleidungsstück",
        embroideryStyle: "Stil",
        fabricType: "Stoff",
        // Fix: Rename 'date' to 'deliveryDate' to match Translation interface
        deliveryDate: "Datum",
        notes: "Notizen",
        submit: "Senden"
      },
      success: "Gesendet."
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
        description: "جایی که سنت با لوکس مدرن تلاقی می‌کند. هنر نساجی سفارشی.",
        btnOrder: "سفارش طراحی",
        btnGallery: "مشاهده گالری"
      },
      legacy: {
        year: "۱۹۹۰",
        title: "میراثی از",
        accent: "جزئیات",
        p1: "در مزون مژگان، هر کوک داستانی را روایت می‌کند. با تاسیس در سال ۱۹۹۰، ما بیش از سه دهه را وقف استادی کرده‌ایم.",
        p2: "آتلیه ما میراث می‌آفرینیم. هر قطعه بومی از تارهای طلا و ابریشم است.",
        stat1: "۳۰+",
        stat1Label: "سال تجربه",
        stat2: "۵هزار+",
        stat2Label: "قطعه سفارشی"
      },
      services: {
        subtitle: "تخصص ما",
        title: "خدمات",
        accent: "آتلیه",
        viewDetails: "مشاهده"
      },
      testimonials: {
        title: "صداهای",
        accent: "وقار",
        description: "آثار ما تجربه‌هایی ارزشمندند.",
        scroll: "مرور داستان‌ها"
      },
      orderSection: {
        subtitle: "خدمات سفارشی",
        title: "آفرینش خود را",
        accent: "آغاز کنید",
        guaranteeTitle: "تضمین تعالی",
        guaranteeText: "هر سفارش با نهایت دقت انجام می‌شود."
      }
    },
    maisonPage: {
      hero: {
        year: "تأسیس ۱۳۶۹",
        title: "میراث",
        accent: "اسنی‌شری",
        subtitle: "جایی که تارهای طلا داستان‌هایی از وقار بی‌زمان می‌بافند."
      },
      tradition: {
        title: "سنت",
        accent: "تعالی",
        p1: "از سال ۱۹۹۰، مزون مژگان به عنوان چراغ راه هنر ایستاده است. ما در هنر گلدوزی دستی تخصص داریم.",
        p2: "هر لباس حاصل عشق است و میراثی از ابریشم.",
        feature1Title: "متریال لوکس",
        feature1Desc: "ابریشم خالص و تارهای طلا.",
        feature2Title: "طراحی سفارشی",
        feature2Desc: "خلق مشترک برای اطمینان از همسویی با دیدگاه شما.",
        signature: "مژگان اسنی‌شری، بنیان‌گذار"
      },
      quote: "گلدوزی شعرِ سوزن است که بر بوم ابریشم نگاشته می‌شود.",
      process: {
        title: "فرآیند خلق",
        steps: [
          { title: "مشاوره", desc: "گفتگوی شخصی برای درک خواسته‌ها." },
          { title: "هنر دست", desc: "صدها ساعت دوخت دستی." },
          { title: "پرو نهایی", desc: "تنظیمات دقیق برای نشستن کامل لباس." }
        ]
      },
      timeline: {
        title: "خط زمانی میراث",
        milestones: [
          { year: "۱۳۶۹", title: "تاسیس آتلیه", desc: "مژگان اسنی‌شری اولین آتلیه خود را با تمرکز بر سوزن‌دوزی سنتی افتتاح کرد." },
          { year: "۱۳۸۴", title: "گسترش لوکس", desc: "ادغام کریستال‌های سواروسکی و تورهای خاص فرانسوی در مجموعه‌های عروس." },
          { year: "۱۳۹۷", title: "میراث دیجیتال", desc: "راه‌اندازی اولین پورتفولیو دیجیتال برای اشتراک‌گذاری هنر ایرانی با جهان." },
          { year: "۱۴۰۵", title: "عصر مدرن", desc: "ادامه میراث با ترکیب نقوش کهن و برش‌های مدرن پایدار." }
        ]
      }
    },
    footer: {
      description: "از سال ۱۹۹۰، خلق گلدوزی‌های لوکس با اشتیاق.",
      headers: { quickLinks: "لینک‌ها", services: "خدمات", contact: "تماس" },
      links: {
        about: "درباره ما",
        placeOrder: "ثبت سفارش",
        services: "خدمات ما",
        gallery: "گالری",
        testimonials: "نظرات",
        bridal: "گلدوزی عروس",
        custom: "لباس‌های سفارشی",
        restoration: "ترمیم",
        monogram: "نشان‌دوزی"
      },
      copyright: "© ۲۰۲۶ تمامی حقوق محفوظ است."
    },
    servicesPage: {
      heroTag: "هنر سوزن دوزی ظریف",
      heroTitle: "خدمات",
      heroTitleAccent: "ما",
      heroDesc: "جایی که تارها داستان می‌بافند.",
      items: servicesItems, 
      cta: { title: "آماده خلق هستید؟", desc: "کمال در هر کوک.", btn1: "رزرو مشاوره", btn2: "مشاهده نمونه کارها" }
    },
    gallery: {
      title: "شاهکارهایی در تار و پود",
      subtitle: "گالری",
      description: "مجموعه دست‌چین شده ما را کاوش کنید.",
      filters: { all: "همه", bridal: "عروس", evening: "لباس شب", traditional: "سنتی", modern: "مدرن" }
    },
    testimonialsPage: {
      subtitle: "صداهای وقار",
      title: "نظرات مشتریان",
      description: "داستان‌های پشت خلق آثار ما.",
      cta: { title: "مشتریان ما", subtitle: "رزرو وقت", button: "تماس" },
      items: testimonialItems
    },
    order: {
      title: "ثبت سفارش",
      subtitle: "جزئیات شاهکار خود را وارد کنید",
      steps: { contact: "تماس", details: "طراحی", review: "بررسی" },
      fields: {
        name: "نام",
        email: "ایمیل",
        phone: "تلفن",
        garmentType: "نوع لباس",
        embroideryStyle: "سبک گلدوزی",
        fabricType: "پارچه",
        // Fix: Rename 'date' to 'deliveryDate' to match Translation interface
        deliveryDate: "تاریخ تحویل",
        notes: "یادداشت",
        submit: "ارسال"
      },
      success: "ارسال شد."
    }
  }
};
