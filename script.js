/* =========================================
   NESMA HESHAM PORTFOLIO
   Vanilla JavaScript
   Theme + Language + Mobile Menu + Animations
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
       JAVASCRIPT IS READY
       ========================================= */

    html.classList.add("js-ready");


    /* =========================================
       DARK / LIGHT MODE
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
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

        themeToggle.title =
            isDark
                ? "Light mode"
                : "Dark mode";
    }

    updateThemeButton();

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            body.classList.toggle("dark");

            const isDark =
                body.classList.contains("dark");

            localStorage.setItem(
                "portfolio-theme",
                isDark ? "dark" : "light"
            );

            updateThemeButton();
        });
    }


    /* =========================================
       LANGUAGE
       ========================================= */

    const translations = {

        en: {

            "nav.home": "Home",
            "nav.about": "About",
            "nav.skills": "Skills",
            "nav.projects": "Projects",
            "nav.experience": "Experience",
            "nav.contact": "Contact",

            "hero.eyebrow":
                "SOFTWARE ENGINEER • FRONT-END • AI",

            "hero.title":
                "Building digital experiences with code, creativity & AI.",

            "hero.text":
                "Computer Science student at Benha University, passionate about software engineering, front-end development, AI, and problem solving.",

            "hero.projects":
                "View Projects",

            "hero.contact":
                "Let's Connect",

            "hero.gpa":
                "/ 4.00 GPA",

            "hero.graduation":
                "Expected Graduation",

            "hero.open":
                "Open",

            "hero.opportunities":
                "to opportunities",


            "about.eyebrow":
                "ABOUT ME",

            "about.title":
                "A developer who enjoys turning ideas into real products.",

            "about.p1":
                "I'm Nesma Hesham, a Computer Science student at Benha University (AI Track) with a strong interest in software engineering, front-end development, artificial intelligence, and problem solving.",

            "about.p2":
                "I enjoy building practical applications, learning new technologies, and sharing what I learn through mentoring and technical communities.",

            "about.h1":
                "Build",

            "about.h1s":
                "Web & AI projects",

            "about.h2":
                "Learn",

            "about.h2s":
                "New tools & technologies",

            "about.h3":
                "Share",

            "about.h3s":
                "Mentoring & community",

            "about.available":
                "Currently learning & building",


            "skills.eyebrow":
                "TECH STACK",

            "skills.title":
                "Tools I use to bring ideas to life.",

            "skills.frontend":
                "Front-End Development",

            "skills.ai":
                "AI & Machine Learning",

            "skills.cs":
                "Computer Science",

            "skills.tools":
                "Tools & Platforms",


            "projects.eyebrow":
                "SELECTED WORK",

            "projects.title":
                "Projects I'm proud of.",

            "projects.subtitle":
                "A selection of web, AI, and algorithmic projects.",

            "project.p1.title":
                "Garbage Classification Web App",

            "project.p1.desc":
                "CNN and MobileNetV2-based waste classifier achieving 90% test accuracy and deployed with Streamlit.",

            "project.p2.title":
                "React E-Commerce Platform",

            "project.p2.desc":
                "Full-featured e-commerce app with authentication, cart, wishlist, Firebase, and Tailwind CSS.",

            "project.p3.title":
                "Dots and Boxes AI",

            "project.p3.desc":
                "An AI opponent for Dots and Boxes implemented using Minimax with Alpha-Beta Pruning.",

            "project.p4.title":
                "Food Court",

            "project.p4.desc":
                "Interactive JavaScript web application focused on a smooth and engaging user experience.",

            "common.live":
                "View Live ↗",

            "common.github":
                "GitHub Repo ↗",

            "projects.note":
                "Project links are placeholders — replace the # links with your actual GitHub and live URLs.",


            "experience.eyebrow":
                "EXPERIENCE",

            "experience.title":
                "Learning, building, and helping others grow.",

            "experience.present":
                "Present",

            "experience.role":
                "CODING INSTRUCTOR",

            "experience.desc":
                "Teaching Scratch, Python, HTML, CSS, JavaScript, MIT App Inventor, PictoBlox, LEGO Spike Essential/Prime, and introductory Machine Learning concepts. Designing coding competitions and interactive learning activities for students.",

            "activities.title":
                "Leadership & Activities",


            "education.eyebrow":
                "EDUCATION",

            "education.title":
                "Benha University",

            "education.degree":
                "Faculty of Computers and Artificial Intelligence — AI Track",

            "education.graduation":
                "Expected Graduation: 2027",


            "training.eyebrow":
                "PROFESSIONAL TRAINING",

            "training.current":
                "(Current)",


            "contact.eyebrow":
                "GET IN TOUCH",

            "contact.title":
                "Have an idea, opportunity, or just want to say hello?",

            "contact.text":
                "I'm always interested in learning, collaborating, and building meaningful things.",


            "form.name":
                "Name",

            "form.email":
                "Email",

            "form.subject":
                "Subject",

            "form.message":
                "Message",

            "form.namePlaceholder":
                "Your name",

            "form.emailPlaceholder":
                "you@example.com",

            "form.subjectPlaceholder":
                "How can I help?",

            "form.messagePlaceholder":
                "Write your message...",

            "form.send":
                "Send Message ↗",


            "footer.rights":
                "All rights reserved.",

            "footer.back":
                "Back to top ↑"
        },


        ar: {

            "nav.home":
                "الرئيسية",

            "nav.about":
                "عني",

            "nav.skills":
                "المهارات",

            "nav.projects":
                "المشاريع",

            "nav.experience":
                "الخبرة",

            "nav.contact":
                "تواصل معي",


            "hero.eyebrow":
                "هندسة برمجيات • Front-End • ذكاء اصطناعي",

            "hero.title":
                "ببني تجارب رقمية بالكود والإبداع والذكاء الاصطناعي.",

            "hero.text":
                "طالبة علوم حاسب في جامعة بنها، شغوفة بهندسة البرمجيات وتطوير الواجهات والذكاء الاصطناعي وحل المشكلات.",

            "hero.projects":
                "شوفي مشاريعي",

            "hero.contact":
                "تواصلي معي",

            "hero.gpa":
                " / 4.00 المعدل",

            "hero.graduation":
                "التخرج المتوقع",

            "hero.open":
                "متاحة",

            "hero.opportunities":
                "للفرص الجديدة",


            "about.eyebrow":
                "عني",

            "about.title":
                "مُطورة بحب أحوّل الأفكار لمنتجات حقيقية.",

            "about.p1":
                "أنا نسمة هشام، طالبة علوم حاسب في جامعة بنها، مسار الذكاء الاصطناعي، وعندي اهتمام كبير بهندسة البرمجيات وتطوير الواجهات والذكاء الاصطناعي وحل المشكلات.",

            "about.p2":
                "بحب أبني تطبيقات عملية، أتعلم تقنيات جديدة، وأشارك اللي بتعلمه من خلال الـMentoring والمجتمعات التقنية.",

            "about.h1":
                "أبني",

            "about.h1s":
                "مشاريع Web وAI",

            "about.h2":
                "أتعلم",

            "about.h2s":
                "أدوات وتقنيات جديدة",

            "about.h3":
                "أشارك",

            "about.h3s":
                "التعلم والـMentoring",

            "about.available":
                "حاليًا بتعلم وببني مشاريع",


            "skills.eyebrow":
                "التقنيات",

            "skills.title":
                "أدوات بستخدمها عشان أحوّل الأفكار لحاجات حقيقية.",

            "skills.frontend":
                "تطوير الـFront-End",

            "skills.ai":
                "الذكاء الاصطناعي والـMachine Learning",

            "skills.cs":
                "أساسيات علوم الحاسب",

            "skills.tools":
                "الأدوات والمنصات",


            "projects.eyebrow":
                "أعمال مختارة",

            "projects.title":
                "مشاريع بفتخر بيها.",

            "projects.subtitle":
                "مجموعة من مشاريع الـWeb والـAI والـAlgorithms.",

            "project.p1.title":
                "تطبيق تصنيف المخلفات",

            "project.p1.desc":
                "نموذج لتصنيف المخلفات باستخدام CNN وMobileNetV2، حقق دقة اختبار 90% وتم نشره باستخدام Streamlit.",

            "project.p2.title":
                "منصة E-Commerce باستخدام React",

            "project.p2.desc":
                "تطبيق تجارة إلكترونية متكامل يحتوي على تسجيل الدخول والـCart والـWishlist باستخدام React وFirebase وTailwind CSS.",

            "project.p3.title":
                "Dots and Boxes AI",

            "project.p3.desc":
                "خصم ذكي للعبة Dots and Boxes باستخدام Minimax مع Alpha-Beta Pruning.",

            "project.p4.title":
                "Food Court",

            "project.p4.desc":
                "تطبيق Web تفاعلي باستخدام JavaScript مع التركيز على تجربة مستخدم بسيطة وتفاعلية.",

            "common.live":
                "المشروع Live ↗",

            "common.github":
                "GitHub Repo ↗",

            "projects.note":
                "الروابط الموجودة حاليًا Placeholder — استبدلي # بروابط المشاريع الحقيقية.",


            "experience.eyebrow":
                "الخبرة",

            "experience.title":
                "بتعلم وببني مشاريع وبساعد غيري يتعلم.",

            "experience.present":
                "حتى الآن",

            "experience.role":
                "CODING INSTRUCTOR",

            "experience.desc":
                "بدرّس Scratch وPython وHTML وCSS وJavaScript وMIT App Inventor وPictoBlox وLEGO Spike Essential/Prime، بالإضافة لمفاهيم Machine Learning للمبتدئين. وبصمم مسابقات Coding وأنشطة تفاعلية للطلاب.",

            "activities.title":
                "القيادة والأنشطة",


            "education.eyebrow":
                "التعليم",

            "education.title":
                "جامعة بنها",

            "education.degree":
                "كلية الحاسبات والذكاء الاصطناعي — مسار الذكاء الاصطناعي",

            "education.graduation":
                "التخرج المتوقع: 2027",


            "training.eyebrow":
                "التدريب المهني",

            "training.current":
                "(حاليًا)",


            "contact.eyebrow":
                "تواصلي معي",

            "contact.title":
                "عندك فكرة، فرصة، أو حتى حابة تقولي Hello؟",

            "contact.text":
                "دايمًا مهتمة بالتعلم والتعاون وبناء حاجات مفيدة ومؤثرة.",


            "form.name":
                "الاسم",

            "form.email":
                "الإيميل",

            "form.subject":
                "الموضوع",

            "form.message":
                "الرسالة",

            "form.namePlaceholder":
                "اكتبي اسمك",

            "form.emailPlaceholder":
                "you@example.com",

            "form.subjectPlaceholder":
                "إزاي أقدر أساعدك؟",

            "form.messagePlaceholder":
                "اكتبي رسالتك...",

            "form.send":
                "إرسال الرسالة ↗",


            "footer.rights":
                "جميع الحقوق محفوظة.",

            "footer.back":
                "العودة للأعلى ↑"
        }
    };


    /* =========================================
       APPLY LANGUAGE
       ========================================= */

    let currentLanguage =
        localStorage.getItem("portfolio-language") || "en";


    function applyLanguage(language) {

        const dictionary = translations[language];

        if (!dictionary) return;

        currentLanguage = language;

        /* Change HTML direction */

        html.lang = language;

        html.dir =
            language === "ar"
                ? "rtl"
                : "ltr";


        body.lang = language;

        body.dir =
            language === "ar"
                ? "rtl"
                : "ltr";


        /* Change normal text */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key =
                    element.getAttribute("data-i18n");

                if (dictionary[key]) {
                    element.textContent =
                        dictionary[key];
                }
            });


        /* Change placeholders */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                if (dictionary[key]) {
                    element.placeholder =
                        dictionary[key];
                }
            });


        /* Change language button */

        if (languageToggle) {

            languageToggle.textContent =
                language === "en"
                    ? "عربي"
                    : "EN";
        }


        /* Save language */

        localStorage.setItem(
            "portfolio-language",
            language
        );
    }


    applyLanguage(currentLanguage);


    /* Language Button */

    if (languageToggle) {

        languageToggle.addEventListener(
            "click",
            function () {

                const newLanguage =
                    currentLanguage === "en"
                        ? "ar"
                        : "en";

                applyLanguage(newLanguage);
            }
        );
    }


    /* =========================================
       MOBILE MENU
       ========================================= */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    navLinks.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                menuToggle.textContent =
                    isOpen
                        ? "×"
                        : "☰";
            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove("open");

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.textContent = "☰";
                    }
                );
            });
    }


    /* =========================================
       HEADER ON SCROLL
       ========================================= */

    function updateHeader() {

        if (!header) return;

        header.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );
    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =========================================
       SCROLL REVEAL
       ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );

                },
                {
                    threshold: 0.1
                }
            );


        revealElements.forEach(
            function (element) {
                observer.observe(element);
            }
        );

    } else {

        revealElements.forEach(
            function (element) {
                element.classList.add("visible");
            }
        );
    }


    /* =========================================
       FOOTER YEAR
       ========================================= */

    const year =
        document.getElementById("year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =========================================
       CONTACT FORM
       ========================================= */

    const contactForm =
        document.querySelector(".contact-form");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                if (
                    contactForm.getAttribute(
                        "action"
                    ) === "#"
                ) {

                    event.preventDefault();

                    alert(
                        currentLanguage === "ar"
                            ? "الفورم جاهز، لكن محتاجة تربطيه بخدمة مثل Formspree عشان يستقبل الرسائل."
                            : "The form is ready, but you need to connect it to a service such as Formspree to receive messages."
                    );
                }
            }
        );
    }

});