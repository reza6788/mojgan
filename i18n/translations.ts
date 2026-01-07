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
      contact: "Contact",
    },
    hero: {
      est: "Est. 1990",
      title: "The Legacy of",
      titleAccent: "Esnaashary",
      description: "Where threads of gold weave stories of timeless elegance."
    },
    about: {
      title: "A Tradition of",
      titleAccent: "Excellence",
      p1: "Since 1990, Meson Mojgan Esnaashary has stood as a beacon of sartorial artistry. Founded on the belief that clothing is not merely worn but experienced, our maison specializes in the nearly forgotten art of handcrafted embroidery.",
      p2: "Every garment that leaves our atelier is a labor of love, meticulously designed to reflect the unique spirit of its wearer. We blend ancient Persian needlework techniques with contemporary silhouettes, creating pieces that are both modern and timelessly significant.",
      feature1Title: "Luxury Materials",
      feature1Desc: "Sourced from the finest mills, we utilize pure silks, gold threads, and rare textiles.",
      feature2Title: "Bespoke Design",
      feature2Desc: "Collaborative creation process ensuring every stitch aligns with your vision.",
      role: "Mojgan Esnaashary, Founder & Creative Director"
    },
    quote: {
      text: "\"Embroidery is the poetry of the needle, written upon the canvas of silk.\"",
      label: "The Philosophy"
    },
    process: {
      title: "The Process",
      step1Title: "Consultation & Sketch",
      step1Desc: "We begin with a personal dialogue to understand your desires, followed by hand-drawn sketches.",
      step2Title: "Handcrafting",
      step2Desc: "Our artisans spend hundreds of hours applying beads, sequins, and threads by hand.",
      step3Title: "Final Fitting",
      step3Desc: "Precision adjustments ensure the garment drapes perfectly, completing the masterpiece."
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
      title: "Bespoke Commission",
      subtitle: "Begin your journey to a unique masterpiece",
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
      contact: "Kontakt",
    },
    hero: {
      est: "Gegr. 1990",
      title: "Das Erbe von",
      titleAccent: "Esnaashary",
      description: "Wo Goldfäden Geschichten von zeitloser Eleganz weben."
    },
    about: {
      title: "Eine Tradition der",
      titleAccent: "Exzellenz",
      p1: "Seit 1990 steht Meson Mojgan Esnaashary als Leuchtfeuer der sartorialen Kunstfertigkeit. Unser Haus wurde in dem Glauben gegründet, dass Kleidung nicht nur getragen, sondern erlebt wird, und ist auf die fast vergessene Kunst der Handstickerei spezialisiert.",
      p2: "Jedes Kleidungsstück, das unser Atelier verlässt, ist eine Liebeserklärung, sorgfältig entworfen, um den einzigartigen Geist seiner Trägerin widerzuspiegeln. Wir verbinden alte persische Handarbeitstechniken mit zeitgenössischen Silhouetten.",
      feature1Title: "Luxuriöse Materialien",
      feature1Desc: "Wir beziehen reine Seide, Goldfäden und seltene Textilien aus den besten Webereien.",
      feature2Title: "Maßgeschneidertes Design",
      feature2Desc: "Kollaborativer Prozess, der sicherstellt, dass jeder Stich Ihrer Vision entspricht.",
      role: "Mojgan Esnaashary, Gründerin & Kreativdirektorin"
    },
    quote: {
      text: "\"Stickerei ist die Poesie der Nadel, geschrieben auf der Leinwand der Seide.\"",
      label: "Die Philosophie"
    },
    process: {
      title: "Der Prozess",
      step1Title: "Beratung & Skizze",
      step1Desc: "Wir beginnen mit einem persönlichen Dialog, um Ihre Wünsche zu verstehen, gefolgt von handgezeichneten Skizzen.",
      step2Title: "Handarbeit",
      step2Desc: "Unsere Kunsthandwerker verbringen Hunderte von Stunden damit, Perlen, Pailletten und Fäden von Hand anzubringen.",
      step3Title: "Endgültige Anprobe",
      step3Desc: "Präzise Anpassungen sorgen für den perfekten Fall des Kleidungsstücks und vollenden das Meisterwerk."
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
      title: "Maßanfertigung",
      subtitle: "Beginnen Sie Ihre Reise zu einem einzigartigen Meisterwerk",
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
      contact: "تماس",
    },
    hero: {
      est: "تاسیس ۱۹۹۰",
      title: "میراث",
      titleAccent: "اسنی‌شری",
      description: "جایی که تارهای طلا داستان‌هایی از وقار جاودانه را می‌بافند."
    },
    about: {
      title: "سنت",
      titleAccent: "تعالی",
      p1: "از سال ۱۹۹۰، مزون مژگان اسنی‌شری به عنوان نمادی از هنر دوخت ایستاده است. مزون ما بر این باور بنا شده که لباس تنها پوشیده نمی‌شود بلکه تجربه می‌شود، و در هنر تقریباً فراموش شده گلدوزی دستی تخصص دارد.",
      p2: "هر لباسی که از آتلیه ما خارج می‌شود، حاصل عشقی است که با دقت طراحی شده تا روح منحصر به فرد پوشنده آن را بازتاب دهد. ما تکنیک‌های کهن سوزن‌دوزی ایرانی را با سیلوئت‌های معاصر ترکیب می‌کنیم.",
      feature1Title: "مواد لوکس",
      feature1Desc: "استفاده از ابریشم خالص، تارهای طلا و منسوجات کمیاب تهیه شده از بهترین کارخانه‌ها.",
      feature2Title: "طراحی اختصاصی",
      feature2Desc: "فرآیند خلق مشترک که اطمینان می‌دهد هر کوک با دیدگاه شما همسو است.",
      role: "مژگان اسنی‌شری، موسس و مدیر خلاق"
    },
    quote: {
      text: "«گلدوزی شعر سوزن است که بر بوم ابریشم نوشته می‌شود.»",
      label: "فلسفه"
    },
    process: {
      title: "فرآیند",
      step1Title: "مشاوره و طراحی",
      step1Desc: "ما با یک گفتگوی شخصی برای درک خواسته‌های شما آغاز می‌کنیم، که با طرح‌های دستی دنبال می‌شود.",
      step2Title: "کار دست",
      step2Desc: "هنرمندان ما صدها ساعت را صرف دوختن مهره‌ها، پولک‌ها و نخ‌ها با دست می‌کنند.",
      step3Title: "پرو نهایی",
      step3Desc: "تنظیمات دقیق اطمینان می‌دهد که لباس به کمال روی تن می‌نشیند و شاهکار را کامل می‌کند."
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
      title: "سفارش اختصاصی",
      subtitle: "سفر خود را برای داشتن یک شاهکار منحصر به فرد آغاز کنید",
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