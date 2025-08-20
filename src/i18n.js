// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
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
            communityText:
              "We focus on building strong community connections to solve real-world problems.",
            reach: "Wider Reach",
            reachText:
              "Serving across regions to ensure no one is left behind in our journey of growth.",
            impact: "Empowering Impact",
            impactText:
              "Focusing on sustainable development and real transformation through our programs."
          },
          about: {
            title: "About Om Gurudev NGO",
            subtitle: "Empowering Lives. Uplifting Communities.",
            whoWeAre: "Who We Are",
            content1:
              "Om Gurudev Bahuudeshiya Sevabhavi Sanstha Aurangabad is a committed NGO working to uplift underprivileged communities through impactful social welfare activities. We work across various sectors including education, healthcare, skill development, and rural empowerment.",
            content2:
              "We believe in inclusive growth and long-term sustainable development by empowering individuals and fostering community engagement. Our initiatives reach remote areas to ensure no one is left behind.",
            joinUs: "Join Us",
            vision: "Vision",
            visionText:
              "Empowering lives through sustainable social development and inclusive growth.",
            mission: "Mission",
            missionPoints: [
              "Ensure quality education and literacy",
              "Promote health and hygiene awareness",
              "Empower women and youth with skills",
              "Support rural and farmer livelihoods",
              "Foster sustainable communities"
            ],
            values: "Values",
            valuesText: "Integrity, Equality, Compassion, Community, Sustainability"
          },
          focus: {
            title: "Our Focus Areas",
            subtitle: "Driving impactful change through strategic initiatives",
            education: "Education",
            educationText:
              "Promoting literacy and quality education through innovative programs in underserved communities.",
            healthcare: "Healthcare",
            healthcareText:
              "Providing access to medical camps, health check-ups, and awareness programs for healthier lives.",
            skills: "Skill Development",
            skillsText:
              "Empowering youth and women with vocational training and skill enhancement workshops.",
            environment: "Environment",
            environmentText:
              "Spreading environmental awareness and encouraging sustainable practices in rural regions.",
            women: "Women & Child Welfare",
            womenText:
              "Improving lives of women and children by ensuring rights, safety, and growth opportunities.",
            rural: "Rural Development",
            ruralText:
              "Building self-reliant villages through agricultural support, water conservation, and infrastructure."
          },
          projects: {
            title: "Our Projects",
            subtitle: "Explore our ongoing and completed initiatives",
            categories: {
              all: "All",
              ongoing: "Ongoing",
              completed: "Completed"
            },
            project1: {
              title: "Digital Literacy Programs",
              description: "Empowering rural youth with computer and internet skills."
            },
            project2: {
              title: "Healthcare Camps",
              description: "Providing free checkups, medicines, and awareness drives."
            },
            project3: {
              title: "Women Skill Training",
              description: "Training women in tailoring, handicrafts, and entrepreneurship."
            }
          },
          impact: {
            // 👇 compatibility keys added
            title: "Our Impact",
            content: "Transforming lives through consistent efforts and community support.",

            heading: "Our Impact",
            subtitle:
              "Transforming lives through consistent efforts and community support.",
            educationTitle: "Education Kits Distributed",
            educationDesc:
              "School kits provided to underprivileged children.",
            healthTitle: "Health Camp Beneficiaries",
            healthDesc:
              "Free health checkups across rural areas.",
            environmentTitle: "Trees Planted",
            environmentDesc:
              "Tree plantation drives for a greener tomorrow.",
            womenTitle: "Women Empowered",
            womenDesc:
              "Skill development through training programs."
          },
          team: {
            title: "Meet Our Team",
            subtitle:
              "Our leadership brings experience, passion, and community-first values."
          },
          partners: {
            title: "Our Partners",
            subtitle: "Working together with organizations for greater impact."
          },
          testimonials: {
            title: "Testimonials",
            subtitle: "What people say about us",
            t1: "The NGO has transformed our village with education and healthcare support.",
            t2: "Thanks to Om Gurudev Sanstha, women in our area are now self-reliant.",
            t3: "Their environmental programs have truly made our surroundings greener."
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
            communityText:
              "खऱ्या समस्यांचे निराकरण करण्यासाठी आम्ही मजबूत समुदाय नाते निर्माण करतो.",
            reach: "विस्तृत पोहोच",
            reachText:
              "प्रदेशभर सेवा देऊन कोणीही मागे राहू नये याची खात्री करतो.",
            impact: "सक्षमीकरणाचा परिणाम",
            impactText:
              "शाश्वत विकास आणि खऱ्या परिवर्तनावर लक्ष केंद्रित करतो."
          },
          about: {
            title: "ॐ गुरुदेव संस्था विषयी",
            subtitle: "जीवन सशक्तीकरण. समुदाय उन्नती.",
            whoWeAre: "आम्ही कोण आहोत",
            content1:
              "ॐ गुरुदेव बहुउद्देशीय सेवाभावी संस्था, औरंगाबाद ही एक निष्ठावान संस्था आहे जी शिक्षण, आरोग्य, कौशल्य विकास आणि ग्रामीण सक्षमीकरणाद्वारे वंचित समाज उन्नतीसाठी कार्य करते.",
            content2:
              "आम्ही सर्वसमावेशक विकास आणि शाश्वत प्रगतीवर विश्वास ठेवतो. आमची उपक्रमे दुर्गम भागात पोहोचतात जेणेकरून कोणीही मागे राहणार नाही.",
            joinUs: "आमच्यात सामील व्हा",
            vision: "दृष्टी",
            visionText:
              "शाश्वत सामाजिक विकास आणि सर्वसमावेशक प्रगतीद्वारे जीवन सशक्त करणे.",
            mission: "ध्येय",
            missionPoints: [
              "गुणवत्तापूर्ण शिक्षण व साक्षरता सुनिश्चित करणे",
              "आरोग्य व स्वच्छतेबाबत जागरूकता वाढवणे",
              "महिला व युवकांना कौशल्ये देणे",
              "ग्रामीण व शेतकरी उपजीविका समर्थित करणे",
              "शाश्वत समुदाय उभारणे"
            ],
            values: "मूल्ये",
            valuesText: "प्रामाणिकपणा, समानता, करुणा, समुदाय, शाश्वतता"
          },
          focus: {
            title: "मुख्य कार्यक्षेत्रे",
            subtitle: "धोरणात्मक उपक्रमांद्वारे परिणामकारक बदल घडवून आणणे",
            education: "शिक्षण",
            educationText:
              "वंचित भागात नाविन्यपूर्ण कार्यक्रमांद्वारे साक्षरता आणि गुणवत्तापूर्ण शिक्षणाला प्रोत्साहन.",
            healthcare: "आरोग्य",
            healthcareText:
              "वैद्यकीय शिबिरे, आरोग्य तपासण्या आणि जागरूकता कार्यक्रमांची सुविधा.",
            skills: "कौशल्य विकास",
            skillsText:
              "तरुण आणि महिलांना व्यावसायिक प्रशिक्षण व कौशल्य वृद्धीद्वारे सक्षम करणे.",
            environment: "पर्यावरण",
            environmentText:
              "ग्रामीण भागात पर्यावरणाविषयी जागरूकता आणि शाश्वत पद्धतींना प्रोत्साहन.",
            women: "महिला व बालकल्याण",
            womenText:
              "महिला व मुलांचे जीवन सुरक्षितता, हक्क आणि प्रगतीच्या संधींनी सुधारित करणे.",
            rural: "ग्रामीण विकास",
            ruralText:
              "शेतकऱ्यांना मदत, जलसंधारण आणि पायाभूत सुविधा यांद्वारे स्वावलंबी गावे उभारणे."
          },
          projects: {
            title: "आमचे प्रकल्प",
            subtitle: "चालू आणि पूर्ण झालेल्या उपक्रमांचा आढावा घ्या",
            categories: {
              all: "सर्व",
              ongoing: "चालू",
              completed: "पूर्ण झालेले"
            },
            project1: {
              title: "डिजिटल साक्षरता कार्यक्रम",
              description: "ग्रामीण युवकांना संगणक आणि इंटरनेट कौशल्ये देणे."
            },
            project2: {
              title: "आरोग्य शिबिरे",
              description: "मोफत तपासण्या, औषधे आणि जनजागृती मोहिमा."
            },
            project3: {
              title: "महिला कौशल्य प्रशिक्षण",
              description: "महिलांना शिवणकाम, हस्तकला आणि उद्योजकतेचे प्रशिक्षण."
            }
          },
          impact: {
            // 👇 compatibility keys added
            title: "आमचा परिणाम",
            content: "सातत्यपूर्ण प्रयत्न आणि सामुदायिक सहाय्याद्वारे जीवन परिवर्तन.",

            heading: "आमचा परिणाम",
            subtitle: "सातत्यपूर्ण प्रयत्न आणि सामुदायिक सहाय्याद्वारे जीवन परिवर्तन.",
            educationTitle: "शैक्षणिक किट वितरित",
            educationDesc: "वंचित मुलांना शालेय किट प्रदान करण्यात आले.",
            healthTitle: "आरोग्य शिबिर लाभार्थी",
            healthDesc: "ग्रामीण भागात मोफत आरोग्य तपासण्या.",
            environmentTitle: "झाडे लावली",
            environmentDesc: "हरित उद्यासाठी वृक्षारोपण मोहिमा.",
            womenTitle: "महिला सशक्त",
            womenDesc: "प्रशिक्षण कार्यक्रमांद्वारे कौशल्य विकास."
          },
          team: {
            title: "आमचा संघ",
            subtitle:
              "आमचे नेतृत्व अनुभव, उत्कटता आणि समाजप्रथम मूल्यांवर कार्य करते."
          },
          partners: {
            title: "आमचे भागीदार",
            subtitle: "अधिक परिणामासाठी संस्थांबरोबर कार्यरत."
          },
          testimonials: {
            title: "प्रशंसापत्रे",
            subtitle: "लोक आमच्याबद्दल काय म्हणतात",
            t1: "शिक्षण आणि आरोग्य सहाय्यामुळे आमच्या गावात परिवर्तन झाले.",
            t2: "ॐ गुरुदेव संस्थेमुळे आमच्या भागातील महिला आता स्वावलंबी आहेत.",
            t3: "त्यांचे पर्यावरण कार्यक्रम खरोखरच आमचे परिसर हरित करतात."
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
