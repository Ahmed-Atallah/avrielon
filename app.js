
"use strict";

// =========================
// AVRIELON — Interface Controls
// =========================

const html = document.documentElement;

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Translations
const translations = {
  ar: {
    navFeatures: "المميزات",
    navHow: "كيف يعمل",
    navPricing: "الأسعار",
    navAbout: "عن AVRIELON",
    navStart: "ابدأ الآن",

    heroBadge: "مساحة عمل أكثر تنظيمًا",
    heroTitle: "عملك كله في مكان واحد. <span>ببساطة ووضوح.</span>",
    heroDescription: "أدر عملاءك ومشاريعك ومهامك من مساحة واحدة. ركّز على إنجاز العمل بدلًا من التنقل بين الأدوات.",
    heroPrimary: "اكتشف AVRIELON",
    heroSecondary: "استكشف المميزات",
    heroNote: "مصمم للمستقلين والفرق الصغيرة",

    featuresEyebrow: "مساحة عمل متكاملة",
    featuresTitle: "كل ما تحتاجه لإدارة عملك. <span>دون تعقيد.</span>",
    featuresDescription: "أدوات مترابطة تساعدك على تنظيم العمل من أول تواصل مع العميل حتى تسليم المشروع.",

    feature1Title: "إدارة العملاء",
    feature1Description: "احتفظ ببيانات عملائك ومعلومات التواصل وسجل التعاملات في مكان واحد.",
    feature2Title: "إدارة المشاريع",
    feature2Description: "أنشئ مشاريعك، اربطها بالعملاء، وتابع مراحل الإنجاز بوضوح.",
    feature3Title: "تنظيم المهام",
    feature3Description: "حدد الأولويات والمواعيد وتابع ما تم إنجازه وما ينتظر التنفيذ.",
    feature4Title: "بوابة العميل",
    feature4Description: "شارك تقدم المشروع مع عميلك عبر مساحة خاصة ومنظمة.",

    howEyebrow: "طريقة العمل",
    howTitle: "من أول عميل <span>حتى إنجاز المشروع.</span>",
    howDescription: "اجعل سير عملك واضحًا ومترابطًا. كل خطوة لها مكانها.",
    step1Title: "أضف العميل",
    step1Description: "أنشئ ملفًا منظمًا لكل عميل.",
    step2Title: "أنشئ المشروع",
    step2Description: "حدد التفاصيل والمراحل والموعد.",
    step3Title: "نظم المهام",
    step3Description: "قسّم المشروع إلى خطوات قابلة للتنفيذ.",
    step4Title: "شارك التقدم",
    step4Description: "دع العميل يتابع مشروعه بوضوح.",

    aboutTitle: "وقت أقل في التنظيم. <span>وقت أكثر في العمل.</span>",
    aboutDescription: "نبني مساحة عمل تساعد المستقلين والفرق الصغيرة على إدارة أعمالهم بطريقة أبسط وأكثر وضوحًا.",

    pricingEyebrow: "خطط AVRIELON",
    pricingTitle: "خطة تناسب طريقة عملك.",
    pricingDescription: "الأسعار التالية تصور مبدئي وليست عروض اشتراك متاحة حاليًا.",
    freeTitle: "ابدأ ببساطة",
    freeDescription: "للتعرف على مساحة العمل وتنظيم البداية.",
    freeFeature1: "إدارة أساسية للعملاء",
    freeFeature2: "مشاريع ومهام أساسية",
    freeFeature3: "مساحة عمل واحدة",
    starterTitle: "نظم عملك",
    starterDescription: "للمستقل الذي يريد إدارة عملائه ومشاريعه.",
    starterFeature1: "إدارة متقدمة للعملاء",
    starterFeature2: "مشاريع ومهام أكثر",
    starterFeature3: "بوابة العميل",
    studioTitle: "وسّع فريقك",
    studioDescription: "للفرق والوكالات الصغيرة.",
    studioFeature1: "مساحات عمل متعددة",
    studioFeature2: "أدوات تعاون الفريق",
    studioFeature3: "إدارة أوسع للمشاريع",
    planContact: "تواصل معنا",
    popular: "الخطة المقترحة",

    contactEyebrow: "ابدأ رحلتك",
    contactTitle: "هل تريد تجربة AVRIELON؟",
    contactDescription: "نحن في مرحلة بناء المنتج. تواصل معنا لمعرفة المزيد عن النسخة التجريبية.",
    contactButton: "تواصل معنا",
    footerText: "مساحة واحدة لإدارة عملك."
  },

  en: {
    navFeatures: "Features",
    navHow: "How it works",
    navPricing: "Pricing",
    navAbout: "About AVRIELON",
    navStart: "Get started",

    heroBadge: "A more organized workspace",
    heroTitle: "Your work, all in one place. <span>Simple and clear.</span>",
    heroDescription: "Manage your clients, projects, and tasks from one workspace. Spend less time switching tools and more time getting work done.",
    heroPrimary: "Discover AVRIELON",
    heroSecondary: "Explore features",
    heroNote: "Designed for freelancers and small teams",

    featuresEyebrow: "One connected workspace",
    featuresTitle: "Everything you need to manage work. <span>Without the complexity.</span>",
    featuresDescription: "Connected tools that help you organize work from the first client conversation to project delivery.",

    feature1Title: "Client management",
    feature1Description: "Keep client details, contact information, and relationship history in one place.",
    feature2Title: "Project management",
    feature2Description: "Create projects, connect them to clients, and track progress clearly.",
    feature3Title: "Task management",
    feature3Description: "Set priorities and deadlines, and track completed and pending work.",
    feature4Title: "Client portal",
    feature4Description: "Share project progress with clients through a dedicated, organized space.",

    howEyebrow: "How it works",
    howTitle: "From the first client <span>to project delivery.</span>",
    howDescription: "Keep your workflow connected and clear. Every step has its place.",
    step1Title: "Add a client",
    step1Description: "Create an organized profile for each client.",
    step2Title: "Create a project",
    step2Description: "Define the details, stages, and deadline.",
    step3Title: "Organize tasks",
    step3Description: "Break projects into actionable steps.",
    step4Title: "Share progress",
    step4Description: "Let clients follow their projects clearly.",

    aboutTitle: "Less time organizing. <span>More time doing.</span>",
    aboutDescription: "We are building a workspace that helps freelancers and small teams manage their work in a simpler, clearer way.",

    pricingEyebrow: "AVRIELON plans",
    pricingTitle: "A plan that fits your workflow.",
    pricingDescription: "These are preliminary pricing concepts, not currently available subscriptions.",
    freeTitle: "Start simple",
    freeDescription: "Explore the workspace and organize your starting point.",
    freeFeature1: "Basic client management",
    freeFeature2: "Basic projects and tasks",
    freeFeature3: "One workspace",
    starterTitle: "Organize your work",
    starterDescription: "For freelancers managing clients and projects.",
    starterFeature1: "Advanced client management",
    starterFeature2: "More projects and tasks",
    starterFeature3: "Client portal",
    studioTitle: "Grow your team",
    studioDescription: "For small teams and agencies.",
    studioFeature1: "Multiple workspaces",
    studioFeature2: "Team collaboration tools",
    studioFeature3: "Expanded project management",
    planContact: "Contact us",
    popular: "Suggested plan",

    contactEyebrow: "Get started",
    contactTitle: "Want to try AVRIELON?",
    contactDescription: "We are building the product. Contact us to learn more about the beta.",
    contactButton: "Contact us",
    footerText: "One workspace to manage your work."
  }
};

// Apply language
function setLanguage(language) {
  if (!translations[language]) return;

  html.lang = language;
  html.dir = language === "ar" ? "rtl" : "ltr";

  document.title = language === "ar"
    ? "AVRIELON — مساحة واحدة لإدارة عملك"
    : "AVRIELON — One workspace for your work";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translation = translations[language][key];

    if (translation) {
      element.innerHTML = translation;
    }
  });

  languageToggle.textContent = language === "ar" ? "EN" : "AR";

  try {
    localStorage.setItem("AVRIELON-language", language);
  } catch (error) {
    console.warn("Language preference could not be saved.");
  }

  closeMenu();
}

// Change language
languageToggle.addEventListener("click", () => {
  const nextLanguage = html.lang === "ar" ? "en" : "ar";
  setLanguage(nextLanguage);
});

// Apply theme
function setTheme(theme) {
  const selectedTheme = theme === "dark" ? "dark" : "light";

  html.dataset.theme = selectedTheme;
  themeIcon.textContent = selectedTheme === "dark" ? "☀" : "☾";

  try {
    localStorage.setItem("AVRIELON-theme", selectedTheme);
  } catch (error) {
    console.warn("Theme preference could not be saved.");
  }
}

// Change theme
themeToggle.addEventListener("click", () => {
  const nextTheme =
    html.dataset.theme === "dark" ? "light" : "dark";

  setTheme(nextTheme);
});

// Mobile navigation
function closeMenu() {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Current year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// Restore preferences
function initializePreferences() {
  let savedLanguage = "ar";
  let savedTheme = "light";

  try {
    savedLanguage = localStorage.getItem("AVRIELON-language") || "ar";
    savedTheme = localStorage.getItem("AVRIELON-theme") || "light";
  } catch (error) {
    console.warn("Saved preferences are unavailable.");
  }

  setLanguage(savedLanguage);
  setTheme(savedTheme);
}

initializePreferences();
