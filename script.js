let currentIndex = 0;

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const indicatorContainer = document.querySelector(".indicator-container");

function createIndicators() {
  indicatorContainer.innerHTML = ""; // Temizle

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
    });

    indicatorContainer.appendChild(dot);
  }
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  // İndikatörleri güncelle
  const dots = indicatorContainer.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[currentIndex]) dots[currentIndex].classList.add("active");
}

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateSlider();
}

createIndicators();
updateSlider();

// Dil değişikliği için
const translations = {
  en: {
    aboutTitle: "ABOUT ME",
    aboutText:
      "I'm studying Computer Engineering at Karabük University. I know the basics of web technologies and programming, and I'm interested in cybersecurity.",
    educationTitle: "EDUCATION",
    education1: "SINCAN FATIH ANATOLIAN HIGH SCHOOL",
    education2: "COMPUTER ENGINEERING, KARABÜK UNIVERSITY",
    skillsTitle: "SKILLS",
    skills: [
      "PROGRAMMING LANGUAGES",
      "C, JAVA (OOP)",
      "WEB TECHNOLOGIES",
      "HTML, CSS, PHP, JS",
      "DATABASES",
      "SQL",
    ],
    languagesTitle: "LANGUAGES",
    language1: "ENGLISH",
    languageLevel: "B1-B2",
  },
  tr: {
    aboutTitle: "HAKKIMDA",
    aboutText:
      "Karabük Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Web teknolojileri ve programlamanın temelini biliyorum, siber güvenlik ile ilgileniyorum.",
    educationTitle: "EĞİTİM",
    education1: "SİNCAN FATİH ANADOLU LİSESİ",
    education2: "BİLGİSAYAR MÜHENDİSLİĞİ, KARABÜK ÜNİVERSİTESİ",
    skillsTitle: "YETENEKLER",
    skills: [
      "PROGRAMLAMA DİLLERİ",
      "C, JAVA (OOP)",
      "WEB TEKNOLOJİLERİ",
      "HTML, CSS, PHP, JS",
      "VERİ TABANLARI",
      "SQL",
    ],
    languagesTitle: "DİLLER",
    language1: "İNGİLİZCE",
    languageLevel: "B1-B2",
  },
};

function setLanguage(lang) {
  const langData = translations[lang];

  // About me
  document.querySelector(".about h2").textContent = langData.aboutTitle;
  document.querySelector(".about p").textContent = langData.aboutText;

  // Slider içeriği güncelle
  slides[0].querySelector("h2").textContent = langData.educationTitle;
  const edDiv = slides[0].querySelector("div");
  edDiv.children[0].textContent = langData.education1;
  edDiv.children[2].textContent = langData.education2;

  slides[1].querySelector("h2").textContent = langData.skillsTitle;
  const skillsDiv = slides[1].querySelector("div");
  for (let i = 0; i < langData.skills.length; i++) {
    skillsDiv.children[i].textContent = langData.skills[i];
  }

  slides[2].querySelector("h2").textContent = langData.languagesTitle;
  const langDiv = slides[2].querySelector("div");
  langDiv.children[0].textContent = langData.language1;
  langDiv.children[1].textContent = langData.languageLevel;
}
