// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // language browser/localStorage मधून लक्षात ठेवतो
  .use(initReactI18next) // React ला जोडतो
  .init({
    resources: {
      en: {
        translation: {
          navbar: {
            brand: "OM GURUDEV SANSTHA",
            home: "Home",
            about: "About",
            focus: "Focus Areas",
            projects: "Projects",
            impact: "Impact",
            team: "Team",
            partners: "Partners",
            testimonials: "Testimonials",
            help: "Help",
            language: "Language"
          },
          home: {
            welcome: "Welcome to Om Gurudev NGO",
            tagline: "Working for rural development, education, and empowerment.",
            community: "Community Driven",
            communityText: "We focus on building strong community connections to solve real-world problems.",
            reach: "Wider Reach",
            reachText: "Serving across regions to ensure no one is left behind in our journey of growth.",
            impact: "Empowering Impact",
            impactText: "Focusing on sustainable development and real transformation through our programs."
          },
          about: {
            title: "About Us",
            content: "We are a non-profit organization dedicated to social service..."
          },
          focus: {
            title: "Focus Areas",
            education: "Education",
            women: "Women's Empowerment",
            health: "Health & Wellness"
          },
          projects: {
            title: "Our Projects",
            p1: "Digital literacy programs",
            p2: "Healthcare camps",
            p3: "Women skill training"
          },
          impact: {
            title: "Our Impact",
            content: "We have helped 5000+ families with education, healthcare, and empowerment."
          },
          team: {
            title: "Meet Our Team",
            subtitle: "Our leadership brings experience, passion, and community-first values."
          },
          help: {
            title: "How You Can Help",
            donate: "Donate Now",
            volunteer: "Become a Volunteer"
          }
        }
      },
      mr: {
        translation: {
          navbar: {
            brand: "ॐ गुरुदेव संस्था",
            home: "मुख्यपृष्ठ",
            about: "आमच्याबद्दल",
            focus: "मुख्य कार्यक्षेत्रे",
            projects: "प्रकल्प",
            impact: "परिणाम",
            team: "संघ",
            partners: "भागीदार",
            testimonials: "प्रशंसापत्रे",
            help: "मदत",
            language: "भाषा"
          },
          home: {
            welcome: "ॐ गुरुदेव संस्थेमध्ये आपले स्वागत आहे",
            tagline: "ग्रामीण विकास, शिक्षण आणि सक्षमीकरणासाठी कार्यरत.",
            community: "समुदाय प्रेरित",
            communityText: "खऱ्या समस्यांचे निराकरण करण्यासाठी आम्ही मजबूत समुदाय नाते निर्माण करतो.",
            reach: "विस्तृत पोहोच",
            reachText: "प्रदेशभर सेवा देऊन कोणीही मागे राहू नये याची खात्री करतो.",
            impact: "सक्षमीकरणाचा परिणाम",
            impactText: "शाश्वत विकास आणि खऱ्या परिवर्तनावर लक्ष केंद्रित करतो."
          },
          about: {
            title: "आमच्याबद्दल",
            content: "आम्ही एक सेवाभावी संस्था आहोत जी समाजसेवेसाठी कार्य करते..."
          },
          focus: {
            title: "मुख्य कार्यक्षेत्रे",
            education: "शिक्षण",
            women: "महिला सक्षमीकरण",
            health: "आरोग्य व स्वास्थ्य"
          },
          projects: {
            title: "आमचे प्रकल्प",
            p1: "डिजिटल साक्षरता कार्यक्रम",
            p2: "आरोग्य शिबिरे",
            p3: "महिला कौशल्य प्रशिक्षण"
          },
          impact: {
            title: "आमचा परिणाम",
            content: "शिक्षण, आरोग्य व सक्षमीकरणामधून 5000+ कुटुंबांना मदत केली आहे."
          },
          team: {
            title: "आमचा संघ",
            subtitle: "आमचे नेतृत्व अनुभव, उत्कटता आणि समाजप्रथम मूल्यांवर कार्य करते."
          },
          help: {
            title: "तुम्ही कशी मदत करू शकता",
            donate: "आता दान करा",
            volunteer: "स्वयंसेवक बना"
          }
        }
      }
    },
    supportedLngs: ["en", "mr"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
