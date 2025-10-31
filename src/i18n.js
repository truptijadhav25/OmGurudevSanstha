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
            all: "All",
            ongoing: "Ongoing",
            completed: "Completed",

            sanitaryTitle: "Sanitary Napkin Distribution",
            sanitaryDesc:
              "Providing sanitary napkins to school girls to promote menstrual hygiene, awareness, and reduce dropout rates.",
            sanitaryTag1: "1000+ Girls",
            sanitaryTag2: "15+ Schools",

            treeTitle: "Tree Plantation",
            treeDesc:
              "Organizing tree plantation and clean-up drives in rural & urban areas to build a sustainable and greener environment.",
            treeTag1: "3000+ Trees",
            treeTag2: "20 Locations",

            womenEmpTitle: "Mahila Sakshamikaran",
            womenEmpDesc:
              "Skill training programs for women in tailoring, beauty, and small entrepreneurship to empower self-reliance.",
            womenEmpTag1: "120+ Women",
            womenEmpTag2: "5 Training Batches",

            naviTitle: "Navi Disha",
            naviDesc:
              "Skill training & placement initiative focused on preparing youth for careers in IT, Cyber Security, and professional fields. Successfully trained and placed 100+ students in reputed companies.",
            naviTag1: "100+ Students",
            naviTag2: "Cyber Security",
            naviTag3: "Placements"
          },
          impact: {
            title: "Our Impact",
            content: "Transforming lives through consistent efforts and community support.",
            heading: "Our Impact",
            subtitle: "Transforming lives through consistent efforts and community support.",

            // English Titles & Descriptions
            educationTitle: "Education Kits Distributed",
            educationDesc: "School kits provided to underprivileged children.",

            healthTitle: "Health Camp Beneficiaries",
            healthDesc: "Free health checkups across rural areas.",

            environmentTitle: "Trees Planted",
            environmentDesc: "Tree plantation drives for a greener tomorrow.",

            womenTitle: "Women Empowered",
            womenDesc: "Skill development through training programs."
          },
          team: {
            title: "Meet Our Team",
            subtitle: "Our leadership brings experience, passion, and community-first values.",
            members: {
              priti: {
                name: "Mrs. Priti Ingle",
                role: "President",
                bio: "Founder of an NGO dedicated to social upliftment and rural development. Over a decade of service leading educational programs, women's empowerment initiatives, and community health projects",
                image: "/priti_ingle.jpg"
              },
              ankush: {
                name: "Mr. Ankush Sapkal",
                role: "Vice President",
                bio: "Leader in digital transformation and education with impact in the IT industry. Helps students secure IT and cybersecurity careers through training programs and mentorship.",
                image: "/ankush_sapkal.jpg"
              },
              dilip: {
                name: "Dr. Dilip Pawar",
                role: "Secretary",
                bio: "Drives operations and coordinates stakeholders for effective program execution. Made significant impact in education and microfinance solutions for underserved communities",
                image: "/dilip_pawar.jpg"
              },
              rama: {
                name: "Mr. Rama Ingle",
                role: "Joint Secretary",
                bio: "Experienced advocate and astrology expert with significant impact in legal and spiritual guidance.",
                image: "/rama_ingle.jpg"
              },
              dipali: {
                name: "Mrs. Dipali Dilip Pawar",
                role: "Treasurer",
                bio: "Over 9 years in the financial and banking sector, actively involved in social work and community development, ensuring transparent financial planning.",
                image: "/dipali_paar.jpg"
              },
              renuka: {
                name: "Mrs. Renuka Sapkal",
                role: "Member",
                bio: "Renuka Sapkal is an experienced professional committed to supporting individuals in the IT industry. She actively guides job seekers in enhancing their skills, preparing for opportunities, and achieving sustainable career growth. Her expertise and dedication to empowering people make her a valuable addition to the NGO body.",
                image: "/renuka_sapkal.jpg"
              },
              kakasaheb: {
                name: "Mr. Kakasaheb Pawar",
                role: "Member",
                bio: "Contributes to educational initiatives and empowers students.",
                image: "/kakasaheb_pawar.jpg"
              }
            }
          },
          partners: {
            title: "Our Core Partners",
            subtitle: "Collaborating with innovators to build a better future.",
            list: {
              synthex: {
                name: "Sythexhub Pvt Ltd",
                type: "Technology Partner",
                description: "Empowered our infrastructure with scalable software and secure cloud platforms."
              },
              aarna: {
                name: "AARNA Technologies Pvt Ltd",
                type: "IT Solutions Partner",
                description: "Delivered innovative tech solutions for community outreach and monitoring."
              },
              perfect: {
                name: "Perfect Urban Co-operative Society",
                type: "Financial Ally",
                description: "Supported financial literacy programs and micro-savings initiatives."
              },
              truth: {
                name: "Truth Tech Enterprise",
                type: "Innovation Partner",
                description: "Brought automation and AI-based insights to improve impact tracking."
              }
            }
          },

          testimonials: {
            title: "Testimonials",
            subtitle: "What people say about us",
            t1: "The NGO has transformed our village with education and healthcare support.",
            t2: "Thanks to Om Gurudev Sanstha, women in our area are now self-reliant.",
            t3: "Their environmental programs have truly made our surroundings greener."
          },
          help: {
            heroTitle1: "Your Small Step",
            heroHighlight1: "Can Bring",
            heroTitle2: "a Big",
            heroHighlight2: "Change",
            heroSubtitle:
              "Join us in creating a brighter future for children, families, and communities.",
            donateNow: "Donate Now",
            volunteerNow: "Become a Volunteer",
            howYouCanHelp: "How You Can Help",
            joinPositiveChange: "Join us in creating positive change",
            volunteerTitle: "Volunteer with us",
            volunteerText:
              "Join our team of dedicated volunteers and make a direct impact in communities.",
            donateTitle: "Donate to support a cause",
            donateText:
              "Make a difference with your contribution to our various programs and initiatives.",
            inkindTitle: "In-Kind Support",
            inkindText:
              "Contribute resources like books, clothes, or equipment to support our mission.",
            partnerTitle: "Partner for CSR or government schemes",
            partnerText:
              "Collaborate with us for meaningful CSR initiatives and social impact programs.",
            quickDonation: "Quick Donation",
            scanUPI: "Scan the QR Code below to donate via UPI:",
            upiId: "UPI ID: omguruadev@upi",
            bankTransfer: "Bank Transfer Details",
            accountName:
              "Account Name: Om Gurudev Bahuudeshiya Sevabhavi Sanstha",
            branch:
              "Branch: 00196 Chikalthana, DAHIHANDE BLDG Ahillyabai Holkar Chouck Chikhaltana, District Chhatrapati Sambhajinagar 431201",
            accountNumber: "Account Number: 60544638141",
            ifscCode: "IFSC Code: MAHB0000196",
            contactUs: "Contact Us",
            phone: "📞 Phone: +91-9112401041",
            email: "📧 Email: info@omgurudev.org",
            address:
              "📍 Address: Ho No 30, Rashtramata Jijau Housing Society, Sawangi (Harsul), Chhatrapati Sambhajinagar, Maharashtra 431008",
            ourImpact: "Our Impact",
            familiesHelped: "Families Helped",
            childrenSupported: "Children Supported",
            projectsCompleted: "Projects Completed",
          },


          hero: {
            logoAlt: "Om Gurudev NGO Logo",
            welcome: "Welcome to Om Gurudev NGO",
            slogan1: "Empowering Communities",
            slogan2: "Serving with Purpose",
            slogan3: "Creating Impact",
            slogan4: "Extending a Hand, Changing a Life",
            slogan5: "Together for a Better Tomorrow",
            donationMsg1: "Donate today and make a difference! Every contribution counts.",
            donationMsg2: "Your support brings hope and smiles to those in need.",
            donationMsg3: "Together, we can create a brighter future for all.",
            donate: "Donate"
          }
        }
      },

      // ✅ Marathi translations
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
            all: "सर्व",
            ongoing: "चालू",
            completed: "पूर्ण झालेले",

            sanitaryTitle: "सॅनिटरी नॅपकिन वितरण",
            sanitaryDesc:
              "शाळकरी मुलींना मासिक पाळी स्वच्छतेबद्दल जागरूकता आणि शैक्षणिक सातत्य राखण्यासाठी सॅनिटरी नॅपकिनचे वितरण.",
            sanitaryTag1: "1000+ मुली",
            sanitaryTag2: "15+ शाळा",

            treeTitle: "वृक्षारोपण",
            treeDesc:
              "ग्रामीण आणि शहरी भागात वृक्षारोपण आणि स्वच्छता मोहिमा आयोजित करून हरित आणि शाश्वत वातावरण तयार करणे.",
            treeTag1: "3000+ झाडे",
            treeTag2: "20 ठिकाणे",

            womenEmpTitle: "महिला सक्षमीकरण",
            womenEmpDesc:
              "महिलांसाठी शिलाई, ब्युटी पार्लर आणि लघुउद्योजकतेचे प्रशिक्षण देऊन स्वावलंबनाला प्रोत्साहन.",
            womenEmpTag1: "120+ महिला",
            womenEmpTag2: "5 प्रशिक्षण बॅचेस",

            naviTitle: "नवी दिशा",
            naviDesc:
              "तरुणांना IT, सायबर सिक्युरिटी आणि व्यावसायिक क्षेत्रात करिअर घडवण्यासाठी प्रशिक्षण आणि प्लेसमेंट उपक्रम. 100+ विद्यार्थ्यांना प्रतिष्ठित कंपन्यांमध्ये यशस्वीरित्या नियुक्त केले.",
            naviTag1: "100+ विद्यार्थी",
            naviTag2: "सायबर सिक्युरिटी",
            naviTag3: "प्लेसमेंट्स"
          },
          impact: {
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
            subtitle: "आमचे नेतृत्व अनुभव, उत्कटता आणि समाजप्रथम मूल्यांवर आधारित आहे.",
            members: {
              priti: {
                name: "श्रीमती प्रीती इंगले",
                role: "अध्यक्ष",
                bio: "सामाजिक उन्नती आणि ग्रामीण विकासासाठी कार्यरत स्वयंसेवी संस्थेच्या संस्थापक. शिक्षण, महिला सक्षमीकरण आणि समुदाय आरोग्य प्रकल्पांमध्ये दशकभराहून अधिक काळ योगदान दिले आहे.",
                image: "/priti_ingle.jpg"
              },
              ankush: {
                name: "श्री अंकुश सपकाल",
                role: "उपाध्यक्ष",
                bio: "डिजिटल परिवर्तन आणि शिक्षण क्षेत्रातील अग्रणी व्यक्ती. IT आणि सायबरसुरक्षा क्षेत्रात विद्यार्थ्यांना प्रशिक्षण आणि मार्गदर्शनाद्वारे करिअर घडविण्यात मदत करतो.",
                image: "/ankush_sapkal.jpg"
              },
              dilip: {
                name: "डॉ. दिलीप पवार",
                role: "सचिव",
                bio: "संस्थेच्या कार्यक्रमांचे प्रभावी समन्वयन आणि अंमलबजावणी सुनिश्चित करतात. शिक्षण आणि सूक्ष्म वित्तीय उपाययोजनांद्वारे वंचित समाजघटकांवर महत्त्वपूर्ण प्रभाव टाकला आहे.",
                image: "/dilip_pawar.jpg"
              },
              rama: {
                name: "श्री रामा इंगले",
                role: "सह-सचिव",
                bio: "कायदेशीर आणि ज्योतिष विषयातील तज्ञ. समाजासाठी कायदेशीर तसेच आध्यात्मिक मार्गदर्शन प्रदान करण्यात सक्रिय भूमिका बजावतात.",
                image: "/rama_ingle.jpg"
              },
              dipali: {
                name: "श्रीमती दीपाली दिलीप पवार",
                role: "कोषाध्यक्ष",
                bio: "बँकिंग आणि वित्त क्षेत्रातील 9+ वर्षांचा अनुभव. सामाजिक कार्य आणि सामुदायिक विकासात सक्रिय सहभाग घेतात आणि पारदर्शक आर्थिक नियोजन सुनिश्चित करतात.",
                image: "/dipali_paar.jpg"
              },
              renuka: {
                name: "श्रीमती रेणुका सपकाल",
                role: "सदस्य",
                bio: "IT उद्योगातील व्यावसायिकांना कौशल्यवृद्धी, रोजगार संधी आणि करिअर विकासासाठी मार्गदर्शन करणाऱ्या तज्ञ व्यक्ती. त्यांचा अनुभव आणि समर्पण संस्थेचा अमूल्य ठेवा आहे.",
                image: "/renuka_sapkal.jpg"
              },
              kakasaheb: {
                name: "श्री काकासाहेब पवार",
                role: "सदस्य",
                bio: "शैक्षणिक उपक्रमांमध्ये योगदान देऊन विद्यार्थ्यांना सशक्त बनविण्यात सक्रिय सहभाग घेतात.",
                image: "/kakasaheb_pawar.jpg"
              }
            }
          },
          partners: {
            title: "आमचे प्रमुख भागीदार",
            subtitle: "नवोन्मेषकांसोबत एकत्र येऊन उज्ज्वल भविष्य घडविण्याचा प्रयत्न.",
            list: {
              synthex: {
                name: "Sythexhub Pvt Ltd",
                type: "तंत्रज्ञान भागीदार",
                description: "स्केलेबल सॉफ्टवेअर आणि सुरक्षित क्लाउड प्लॅटफॉर्मद्वारे आमच्या प्रणालीला अधिक सक्षम केले."
              },
              aarna: {
                name: "AARNA Technologies Pvt Ltd",
                type: "IT सोल्यूशन्स भागीदार",
                description: "समुदायाशी जोडणी आणि देखरेखीसाठी नाविन्यपूर्ण तंत्रज्ञान उपाय प्रदान केले."
              },
              perfect: {
                name: "Perfect Urban Co-operative Society",
                type: "आर्थिक सहकारी",
                description: "आर्थिक साक्षरता कार्यक्रम आणि सूक्ष्म बचत उपक्रमांना पाठिंबा दिला."
              },
              truth: {
                name: "Truth Tech Enterprise",
                type: "नवोपक्रम भागीदार",
                description: "ऑटोमेशन आणि कृत्रिम बुद्धिमत्तेवर आधारित उपायांद्वारे परिणाम विश्लेषण सुधारले."
              }
            }
          },

          testimonials: {
            title: "प्रशंसापत्रे",
            subtitle: "लोक आमच्याबद्दल काय म्हणतात",
            t1: "शिक्षण आणि आरोग्य सहाय्यामुळे आमच्या गावात परिवर्तन झाले.",
            t2: "ॐ गुरुदेव संस्थेमुळे आमच्या भागातील महिला आता स्वावलंबी आहेत.",
            t3: "त्यांचे पर्यावरण कार्यक्रम खरोखरच आमचे परिसर हरित करतात."
          },
          help: {
            heroTitle1: "तुमचं छोटं पाऊल",
            heroHighlight1: "घेऊन येऊ शकतं",
            heroTitle2: "मोठा",
            heroHighlight2: "बदल",
            heroSubtitle:
              "मुलं, कुटुंबं आणि समाजासाठी उज्ज्वल भविष्य घडवण्यासाठी आमच्यात सामील व्हा.",
            donateNow: "आता देणगी द्या",
            volunteerNow: "स्वयंसेवक बना",
            howYouCanHelp: "आपण कसे मदत करू शकता",
            joinPositiveChange: "सकारात्मक बदल घडवण्यासाठी आमच्यासोबत या",
            volunteerTitle: "आमच्यासोबत स्वयंसेवक बना",
            volunteerText:
              "आमच्या समर्पित स्वयंसेवकांच्या टीममध्ये सामील व्हा आणि थेट समाजावर परिणाम घडवा.",
            donateTitle: "एखाद्या कारणासाठी देणगी द्या",
            donateText:
              "आमच्या विविध कार्यक्रमांना आणि उपक्रमांना तुमच्या योगदानाने फरक पडू शकतो.",
            inkindTitle: "वस्तुरूपात मदत",
            inkindText:
              "आमच्या उद्दिष्टासाठी पुस्तके, कपडे किंवा उपकरणे यांसारखी साधने दान करा.",
            partnerTitle: "CSR किंवा सरकारी योजनांसाठी भागीदारी करा",
            partnerText:
              "अर्थपूर्ण CSR उपक्रम आणि सामाजिक परिणाम कार्यक्रमांसाठी आमच्यासोबत सहयोग करा.",
            quickDonation: "त्वरित देणगी",
            scanUPI: "UPI द्वारे देणगी देण्यासाठी खालील QR कोड स्कॅन करा:",
            upiId: "UPI आयडी: omguruadev@upi",
            bankTransfer: "बँक हस्तांतरणाची माहिती",
            accountName: "खाते नाव: ओम गुरुदेव बहुउद्देशीय सेवाभावी संस्था",
            branch:
              "शाखा: 00196 चिकलठाणा, दहीहांडे बिल्डिंग, अहिल्याबाई होळकर चौक, चिकलठाणा, जिल्हा छत्रपती संभाजीनगर 431201",
            accountNumber: "खाते क्रमांक: 60544638141",
            ifscCode: "IFSC कोड: MAHB0000196",
            contactUs: "आमच्याशी संपर्क करा",
            phone: "📞 फोन: +91-9112401041",
            email: "📧 ईमेल: info@omgurudev.org",
            address:
              "📍 पत्ता: घर क्र. 30, राष्ट्रमाता जिजाऊ हाऊसिंग सोसायटी, सवंगी (हर्सूल), छत्रपती संभाजीनगर, महाराष्ट्र 431008",
            ourImpact: "आमचा प्रभाव",
            familiesHelped: "मदत केलेली कुटुंबे",
            childrenSupported: "सहाय्य केलेली मुले",
            projectsCompleted: "पूर्ण केलेले प्रकल्प",
          },



          hero: {
            logoAlt: "ॐ गुरुदेव संस्था लोगो",
            welcome: "ॐ गुरुदेव संस्थेमध्ये आपले स्वागत आहे",
            slogan1: "समुदाय सशक्तीकरण",
            slogan2: "सेवेतून समाधान",
            slogan3: "परिणामकारक कार्य",
            slogan4: "मदतीचा हात, बदललेले जीवन",
            slogan5: "एकत्र येऊ, उज्ज्वल भविष्य घडवूया",
            donationMsg1: "आज दान करा आणि फरक घडवा! प्रत्येक योगदान महत्त्वाचे आहे.",
            donationMsg2: "तुमचा पाठिंबा गरजू लोकांना आशा आणि आनंद देतो.",
            donationMsg3: "एकत्र येऊन आपण सर्वांसाठी उज्ज्वल भविष्य घडवू शकतो.",
            donate: "दान करा"
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
