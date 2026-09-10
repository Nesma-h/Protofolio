/* =========================================
   NESMA HESHAM PORTFOLIO
   Vanilla JavaScript
   Theme + Language + Mobile Menu + Typewriter + Scroll Animations
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    const html = document.documentElement;

    const themeToggle = document.getElementById("themeToggle");
    const languageToggle = document.getElementById("languageToggle");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const header = document.querySelector(".site-header");

    /* =========================================
       JAVASCRIPT READY FLAG
       ========================================= */

    html.classList.add("js-ready");

    /* =========================================
       DARK / LIGHT MODE TOGGLE
       ========================================= */

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }

    function updateThemeButton() {
        if (!themeToggle) return;
        const isDark = body.classList.contains("dark");
        themeToggle.textContent = isDark ? "☀" : "☾";
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );
        themeToggle.title = isDark ? "Light mode" : "Dark mode";
    }

    updateThemeButton();

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            body.classList.toggle("dark");
            const isDark = body.classList.contains("dark");
            localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
            updateThemeButton();
        });
    }

    /* =========================================
       TYPEWRITER EFFECT
       ========================================= */

    const wordsEn = ["code.", "creativity.", "AI."];
    const wordsAr = ["الكود.", "الإبداع.", "الذكاء الاصطناعي."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    function runTypingEffect() {
        const target = document.querySelector('.typewriter-text');
        if (!target) return;

        const currentWords = (html.lang === "ar" || body.dir === "rtl") ? wordsAr : wordsEn;
        const currentWord = currentWords[wordIndex];

        if (isDeleting) {
            target.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            target.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 60 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % currentWords.length;
            speed = 400;
        }

        typingTimeout = setTimeout(runTypingEffect, speed);
    }

    runTypingEffect();

    /* =========================================
       LANGUAGE TRANSLATIONS & DICTIONARY
       ========================================= */

    const translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.skills": "Skills",
            "nav.projects": "Projects",
            "nav.experience": "Experience",
            "nav.contact": "Contact",

            "hero.title_prefix": "Building digital experiences with ",
            "hero.eyebrow": "SOFTWARE ENGINEER • FRONT-END • AI",
            "hero.text": "Computer Science student at Benha University, passionate about software engineering, front-end development, AI, and problem solving.",
            "hero.projects": "View Projects",
            "hero.contact": "Let's Connect",
            "hero.gpa": "/ 4.00 GPA",
            "hero.graduation": "Expected Graduation",
            "hero.open": "Open",
            "hero.opportunities": "to opportunities",

            "about.eyebrow": "ABOUT ME",
            "about.title": "A developer who enjoys turning ideas into real products.",
            "about.p1": "I'm Nesma Hesham, a Computer Science student at Benha University (AI Track) with a strong interest in software engineering, front-end development, artificial intelligence, and problem solving.",
            "about.p2": "I enjoy building practical applications, learning new technologies, and sharing what I learn through mentoring and technical communities.",
            "about.h1": "Build",
            "about.h1s": "Web & AI projects",
            "about.h2": "Learn",
            "about.h2s": "New tools & technologies",
            "about.h3": "Share",
            "about.h3s": "Mentoring & community",
            "about.available": "Currently learning & building",

            "skills.eyebrow": "TECH STACK",
            "skills.title": "Tools I use to bring ideas to life.",
            "skills.frontend": "Front-End Development",
            "skills.ai": "AI & Machine Learning",
            "skills.cs": "Computer Science",
            "skills.tools": "Tools & Platforms",

            "projects.eyebrow": "SELECTED WORK",
            "projects.title": "Featured Engineering Projects",
            "projects.subtitle": "A showcase of AI models, algorithmic solutions, and production-ready web applications.",
            "projects.cat_ai": "AI & Data Science Engineering",
            "projects.cat_web": "Web Development & Frontend Engineering",

            "project.p4.title": "Full-Stack React E-Commerce Platform",
            "project.p4.desc": "Developed a scalable e-commerce application integrating Firebase authentication, real-time database state management, dynamic shopping cart, and Tailwind CSS UI components.",

            "project.p3.title": "Food Court Interactive Ordering Engine",
            "project.p3.desc": "Constructed an interactive food ordering web app with dynamic cart state calculation, responsive product filtering, and asynchronous UI updates using jQuery.",

            "project.girlyhotel.title": "GirlyHotel Luxury Page",
            "project.girlyhotel.desc": "A stylish, fully responsive hotel landing web page designed with elegant typography, custom CSS layouts, and interactive UI components.",

            "project.missfolio.title": "MissFolio — ATS-Friendly CV Builder Platform",
            "project.missfolio.desc": "Responsive web-based portfolio and CV builder designed to help users create a professional online presence and showcase their skills, projects, and experience with ATS optimization.",

            "project.cssproj.title": "Gaming Website - Advanced CSS Animations",
            "project.cssproj.desc": "A modern and responsive gaming-themed website designed to showcase games, tournaments, players, products, and live content through an engaging visual interface.",

            "project.insurance.title": "Insurance Management Portal",
            "project.insurance.desc": "Architected a responsive Web Application interface for document verification and insurance management featuring dynamic DOM manipulation and modular styling.",

            "project.depi12.title": "DEPI Track — Advanced UI Component Design",
            "project.depi12.desc": "Implemented responsive interface components utilizing modern CSS Grid/Flexbox architectures and fluid design standards during the DEPI Front-End track.",

            "project.p1.title": "Student Performance Predictive Analytics",
            "project.p1.desc": "A machine learning project designed to predict student academic performance using supervised learning models, implementing predictive systems for pass/fail classification and grade estimation.",

            "project.nlp.title": "Text Summarization — Extractive & Abstractive Approaches",
            "project.nlp.desc": "A structured NLP pipeline comparing TF-IDF extractive summarization and BART abstractive summarization with a full-featured Streamlit web app interface.",

            "project.garbage.title": "Garbage Classification NN Platform",
            "project.garbage.desc": "Deep Learning computer vision application that classifies waste items into categories using Neural Networks, integrated into an interactive Streamlit web dashboard.",

            "project.p2.title": "Game AI Agent: Dots & Boxes",
            "project.p2.desc": "Implemented an autonomous game-playing agent using Adversarial Search (Minimax algorithm with Alpha-Beta Pruning) for optimal decision-making and move prediction.",

            "common.live": "Live Demo ↗",
            "common.github": "GitHub Repo ↗",

            "experience.eyebrow": "EXPERIENCE",
            "experience.title": "Learning, building, and helping others grow.",
            "experience.present": "Present",
            "experience.role": "CODING INSTRUCTOR",
            "experience.desc": "Teaching Scratch, Python, HTML, CSS, JavaScript, MIT App Inventor, PictoBlox, LEGO Spike Essential/Prime, and introductory Machine Learning concepts.",
            "experience.subtitle": "Experiences, communities, mentoring and competitions that shaped my journey.",
            "experience.gdg": "Participating as a Front-End Mentor, helping learners understand web development concepts and sharing practical knowledge.",
            "experience.icpcCoach": "Participating as a coach in ICPC Benha Community and supporting students in problem solving and competitive programming.",
            "experience.icpcTitle": "ICPC Competition Journey",
            "experience.icpcText": "Participated in ICPC competitions three times, gaining valuable experience in teamwork, problem solving and competitive programming.",
            "experience.icpc1": "First participation",
            "experience.icpc2": "Second participation",
            "experience.icpc3": "Third participation",
            "activities.title": "Leadership & Activities",

            "education.eyebrow": "EDUCATION",
            "education.title": "Benha University",
            "education.degree": "Faculty of Computers and Artificial Intelligence — AI Track",
            "education.graduation": "Expected Graduation: 2027",

            "training.eyebrow": "PROFESSIONAL TRAINING",
            "training.current": "(Current)",

            "contact.eyebrow": "GET IN TOUCH",
            "contact.title": "Have an idea, opportunity, or just want to say hello?",
            "contact.text": "I'm always interested in learning, collaborating, and building meaningful things.",

            "form.name": "Name",
            "form.email": "Email",
            "form.subject": "Subject",
            "form.message": "Message",
            "form.namePlaceholder": "Your name",
            "form.emailPlaceholder": "you@example.com",
            "form.subjectPlaceholder": "How can I help?",
            "form.messagePlaceholder": "Write your message...",
            "form.send": "Send Message ↗",

            "footer.rights": "All rights reserved.",
            "footer.back": "Back to top ↑",
            "nav.cv": "CV ↗",
            "hero.cv": "View My CV ↗",
            "hero.downloadCv": "Download CV ↓"
        },

        ar: {
            "nav.home": "الرئيسية",
            "nav.about": "عني",
            "nav.skills": "المهارات",
            "nav.projects": "المشاريع",
            "nav.experience": "الخبرة",
            "nav.contact": "تواصل معي",
            "nav.cv": "السيرة الذاتية ↗",
            "hero.cv": "عرض الـCV ↗",
            "hero.downloadCv": "تحميل الـCV ↓",
            "hero.eyebrow": "هندسة برمجيات • Front-End • ذكاء اصطناعي",
            "hero.text": "طالبة علوم حاسب في جامعة بنها، شغوفة بهندسة البرمجيات وتطوير الواجهات والذكاء الاصطناعي وحل المشكلات.",
            "hero.projects": "شوفي مشاريعي",
            "hero.contact": "تواصلي معي",
            "hero.gpa": " / 4.00 المعدل",
            "hero.graduation": "التخرج المتوقع",
            "hero.open": "متاحة",
            "hero.opportunities": "للفرص الجديدة",
            "hero.title_prefix": "ببني تجارب رقمية بـ ",

            "about.eyebrow": "عني",
            "about.title": "مُطورة بحب أحوّل الأفكار لمنتجات حقيقية.",
            "about.p1": "أنا نسمة هشام، طالبة علوم حاسب في جامعة بنها، مسار الذكاء الاصطناعي، وعندي اهتمام كبير بهندسة البرمجيات وتطوير الواجهات والذكاء الاصطناعي وحل المشكلات.",
            "about.p2": "بحب أبني تطبيقات عملية، أتعلم تقنيات جديدة، وأشارك اللي بتعلمه من خلال الـMentoring والمجتمعات التقنية.",
            "about.h1": "أبني",
            "about.h1s": "مشاريع Web وAI",
            "about.h2": "أتعلم",
            "about.h2s": "أدوات وتقنيات جديدة",
            "about.h3": "أشارك",
            "about.h3s": "التعلم والـMentoring",
            "about.available": "حاليًا بتعلم وببني مشاريع",

            "skills.eyebrow": "التقنيات",
            "skills.title": "أدوات بستخدمها عشان أحوّل الأفكار لحاجات حقيقية.",
            "skills.frontend": "تطوير الـFront-End",
            "skills.ai": "الذكاء الاصطناعي والـMachine Learning",
            "skills.cs": "أساسيات علوم الحاسب",
            "skills.tools": "الأدوات والمنصات",

            "projects.eyebrow": "أعمال مختارة",
            "projects.title": "مشاريع هندسية بارزة",
            "projects.subtitle": "استعراض لنماذج الذكاء الاصطناعي، الحلول الخوارزمية، وتطبيقات الويب المتكاملة.",
            "projects.cat_ai": "هندسة الذكاء الاصطناعي وعلوم البيانات",
            "projects.cat_web": "تطوير الويب وهندسة الواجهات (Front-End)",

            "project.p4.title": "منصة تجارة إلكترونية متكاملة بـ React",
            "project.p4.desc": "تطوير تطبيق تجارة إلكترونية متكامل يتضمن مصادقة المستخدمين عبر Firebase، إدارة الحالة الحية (State Management)، سلة تسوق تفاعلية، وتنسيقات Tailwind CSS.",

            "project.p3.title": "مُحرك طلب الطعام التفاعلي (Food Court)",
            "project.p3.desc": "بناء تطبيق ويب تفاعلي لطلب الطعام يتضمن حساب ديناميكي لعناصر السلة، تصفية المنتجات، وتحديث الواجهة بطريقة غير متزامنة باستخدام jQuery.",

            "project.girlyhotel.title": "صفحة GirlyHotel الفندقية",
            "project.girlyhotel.desc": "تصميم واجهة هبوط متجاوبة وأنيقة لموقع فندقي باستخدام تقنيات CSS المتقدمة وتخطيطات متناسقة.",

            "project.missfolio.title": "منصة MissFolio — إنشاء السير الذاتية المتوافقة مع ATS",
            "project.missfolio.desc": "تصميم وتطوير منصة ويب تفاعلية تتيح للمستخدمين إنشاء سير ذاتية احترافية ومتوافقة مع أنظمة الفرز الآلي (ATS) مع واجهات متجاوبة بالكامل.",

            "project.cssproj.title": "موقع الألعاب - أنظمة التنسيق والأنيميشن المتقدم",
            "project.cssproj.desc": "موقع للألعاب عصري ومتجاوب يعرض الألعاب، البطولات، اللاعبين، والمنتجات عبر واجهة مستخدم جذابة بصرياً.",

            "project.insurance.title": "بوابة إدارة وتأمين المستندات الرقمية",
            "project.insurance.desc": "بناء واجهة تطبيق ويب متجاوبة للتحقق من المستندات وخدمات التأمين مع إدارة عناصر الصفحة (DOM) وتنسيق نمطي محكم.",

            "project.depi12.title": "تصميم مكونات الواجهات المتقدمة — مسار DEPI",
            "project.depi12.desc": "تنفيذ مكونات واجهة مستخدم متجاوبة باستخدام تقنيات CSS Grid وFlexbox المعاصرة ومعايير التصميم المرن ضمن تدريب DEPI.",

            "project.p1.title": "منظومة التنبؤ بأداء الطلاب والتحليل التنبؤي",
            "project.p1.desc": "تطوير نماذج تعلّم آلي مُشرف عليها (Supervised ML) لتحليل المؤشرات الأكاديمية واستكشاف البيانات والتنبؤ بالنتائج والدرجات بدقة عالية.",

            "project.nlp.title": "تلخيص النصوص — الطرق الاستخراجية والتجريدية (NLP)",
            "project.nlp.desc": "خط معالجة لغات طبيعية يربط بين تقنية TF-IDF الاستخراجية ونموذج BART التجريدي مع واجهة تفاعلية عبر Streamlit.",

            "project.garbage.title": "منصة تصنيف النفايات بالشبكات العصبية",
            "project.garbage.desc": "تطبيق رؤية حاسوبية يعتمد على التعلم العميق والشبكات العصبية لتصنيف المخلفات مع لوحة تحكم تفاعلية عبر Streamlit.",

            "project.p2.title": "العميل الذكي للعبة Dots & Boxes",
            "project.p2.desc": "برمجة خصم ذكي أوتوماتيكي باستخدام البحث التنافسي (خوارزمية Minimax مع تقليم Alpha-Beta) لتقديم قرارات وحركات مثالية أثناء اللعب.",

            "common.live": "المشروع Live ↗",
            "common.github": "GitHub Repo ↗",

            "experience.eyebrow": "الخبرة",
            "experience.title": "بتعلم وببني مشاريع وبساعد غيري يتعلم.",
            "experience.present": "حتى الآن",
            "experience.role": "CODING INSTRUCTOR",
            "experience.desc": "بدرّس Scratch وPython وHTML وCSS وJavaScript وMIT App Inventor وPictoBlox وLEGO Spike Essential/Prime، بالإضافة لمفاهيم Machine Learning للمبتدئين.",
            "experience.subtitle": "تجارب ومجتمعات وMentoring ومسابقات كان ليها دور كبير في رحلتي.",
            "experience.gdg": "شاركت كـ Front-End Mentor في GDG، وساعدت المتعلمين في فهم مفاهيم تطوير الويب ومشاركة الخبرات العملية.",
            "experience.icpcCoach": "شاركت كـ Coach في ICPC Benha Community، وساعدت الطلاب في الـProblem Solving والـCompetitive Programming.",
            "experience.icpcTitle": "رحلتي في مسابقات ICPC",
            "experience.icpcText": "شاركت في مسابقات ICPC ثلاث مرات، واكتسبت خبرة كبيرة في الـTeamwork والـProblem Solving والـCompetitive Programming.",
            "experience.icpc1": "المشاركة الأولى",
            "experience.icpc2": "المشاركة الثانية",
            "experience.icpc3": "المشاركة الثالثة كـ coach",
            "activities.title": "القيادة والأنشطة",

            "education.eyebrow": "التعليم",
            "education.title": "جامعة بنها",
            "education.degree": "كلية الحاسبات والذكاء الاصطناعي — مسار الذكاء الاصطناعي",
            "education.graduation": "التخرج المتوقع: 2027",

            "training.eyebrow": "التدريب المهني",
            "training.current": "(حاليًا)",

            "contact.eyebrow": "تواصلي معي",
            "contact.title": "عندك فكرة، فرصة، أو حتى حابة تقولي Hello؟",
            "contact.text": "دايمًا مهتمة بالتعلم والتعاون وبناء حاجات مفيدة ومؤثرة.",

            "form.name": "الاسم",
            "form.email": "الإيميل",
            "form.subject": "الموضوع",
            "form.message": "الرسالة",
            "form.namePlaceholder": "اكتبي اسمك",
            "form.emailPlaceholder": "you@example.com",
            "form.subjectPlaceholder": "إزاي أقدر أساعدك؟",
            "form.messagePlaceholder": "اكتبي رسالتك...",
            "form.send": "إرسال الرسالة ↗",

            "footer.rights": "جميع الحقوق محفوظة.",
            "footer.back": "العودة للأعلى ↑"
        }
    };

    /* =========================================
       APPLY LANGUAGE & SWITCHING
       ========================================= */

    let currentLanguage = localStorage.getItem("portfolio-language") || "en";

    function applyLanguage(language) {
        const dictionary = translations[language];
        if (!dictionary) return;

        currentLanguage = language;

        html.lang = language;
        html.dir = language === "ar" ? "rtl" : "ltr";
        body.lang = language;
        body.dir = language === "ar" ? "rtl" : "ltr";

        const titlePrefix = document.querySelector('.hero-title-prefix');
        if (titlePrefix && dictionary["hero.title_prefix"]) {
            titlePrefix.textContent = dictionary["hero.title_prefix"];
        }

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.getAttribute("data-i18n");
            if (dictionary[key]) {
                element.textContent = dictionary[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-placeholder");
            if (dictionary[key]) {
                element.placeholder = dictionary[key];
            }
        });

        if (languageToggle) {
            languageToggle.textContent = language === "en" ? "عربي" : "EN";
        }

        localStorage.setItem("portfolio-language", language);
    }
    applyLanguage(currentLanguage);

    if (languageToggle) {
        languageToggle.addEventListener("click", function () {
            const newLanguage = currentLanguage === "en" ? "ar" : "en";
            applyLanguage(newLanguage);

            clearTimeout(typingTimeout);
            wordIndex = 0;
            charIndex = 0;
            isDeleting = false;
            runTypingEffect();
        });
    }

    /* =========================================
       MOBILE MENU
       ========================================= */

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "×" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });
    }

    /* =========================================
       HEADER SCROLL EFFECT
       ========================================= */

    function updateHeader() {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 20);
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    /* =========================================
       SCROLL REVEAL ANIMATIONS
       ========================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

    /* =========================================
       FOOTER YEAR & BACK TO TOP
       ========================================= */

    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const backToTop = document.querySelector('a[href="#top"]');
    if (backToTop) {
        backToTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});