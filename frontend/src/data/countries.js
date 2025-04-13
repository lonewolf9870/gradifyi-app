export const countries = [
    {
      name: "India",
      banner:"indiaflag.jpg",
      capital: "New Delhi",
      population: "1.4 Billion",
      currency: "Indian Rupee (INR)",
      language: "Hindi, English",
      climate: "Tropical to Alpine",
      timeZone: "IST (UTC+5:30)",
      internationalStudents: "49,000+",
      description: "India offers a diverse educational experience with world-class technical institutions and affordable tuition fees.",
      educationSystem: {
        description: "Indian higher education follows a 3-tier system with bachelor's (3-4 years), master's (2 years), and doctoral programs.",
        stats: [
          { value: "1,000+", label: "Universities" },
          { value: "45", label: "IITs & IISERs" },
          { value: "85%", label: "Graduate Employability" }
        ]
      },
      universities: [
        {
          name: "istituto marangoni",
          image:"india1.jpg"
        },
        {
          name: "ajeenkya dy patil university",
          image:"india2.jpg"
        },
        {
          name: "fraser valley india education llp",
          image:"india3.jpg"
        },
        {
          name: "deakin university gift city campus",
          image:"india4.jpg"
        },
        {
          name: "s p jain school of global management",
          image:'india5.jpeg',
        }
      ],
      benefits: [
        {
          icon: "innovation",
          title: "Innovation Hub",
          description: "Leading in technology and research"
        },
        {
          icon: "flexibility",
          title: "Academic Flexibility",
          description: "Option to change majors and customize courses"
        },
        {
          icon: "opportunities",
          title: "Career Opportunities",
          description: "Strong industry connections and OPT program"
        }
      ],
      admissionRequirements: {
        general: [
          "12th grade completion with minimum 60%",
          "Entrance exams (JEE, NEET, etc.)",
          "English proficiency for some courses"
        ],
        documents: [
          "Academic transcripts",
          "Entrance exam scores",
          "Passport copy",
          "Financial documents"
        ]
      },
      costOfLiving: [
        { category: "Accommodation", amount: "₹5,000-15,000/month" },
        { category: "Food", amount: "₹3,000-8,000/month" },
        { category: "Transport", amount: "₹1,000-3,000/month" },
        { category: "Miscellaneous", amount: "₹2,000-5,000/month" }
      ],
      visa: {
        process: [
          "Receive admission letter",
          "Complete online visa application",
          "Schedule biometrics appointment",
          "Submit documents"
        ],
        requirements: [
          "Valid passport",
          "University admission letter",
          "Financial proof",
          "Medical certificate"
        ],
        processingTime: "2-4 weeks",
        successRate: "90%"
      },
      scholarships: [
        {
          name: "ICCR Scholarship",
          amount: "Full tuition + monthly stipend",
          deadline: "March 31",
          eligibility: [
            "Minimum 60% in previous degree",
            "Age below 30 years",
            "English proficiency"
          ]
        }
      ]
    },
    {
      name: "USA",
      banner:"usaflag.jpeg",
      capital: "Washington D.C.",
      population: "331 Million",
      currency: "US Dollar (USD)",
      language: "English",
      climate: "Varies by region",
      timeZone: "Multiple (UTC-5 to UTC-10)",
      internationalStudents: "1.1 Million",
      description: "The United States offers world-renowned universities with cutting-edge research facilities and diverse academic programs.",
      educationSystem: {
        description: "US higher education features flexible curriculum with bachelor's (4 years), master's (1-2 years), and doctoral programs (5-7 years).",
        stats: [
          { value: "4,000+", label: "Institutions" },
          { value: "#1", label: "Global Ranking" },
          { value: "90%", label: "Graduate Employability" }
        ]
      },
      universities: [
        {
          name: "University of North Alabama",
          image:"usa1.webp"
        },
        {
          name: "Troy University",
          image:"usa2.webp"
        },
        {
          name: "Auburn University at Montgomery",
          image: "usa3.webp"
        },
        {
          name: "The University of West Alabama",
          image:"usa4.jpeg"
        },
        {
          name: "Jacksonville State University",
          image:"usa5.jpg"
        },
        {
          name:"University of Alabama at Birmingham",
          image:"usa6.jpeg"
        }
      ],
      benefits: [
        {
          icon: "innovation",
          title: "Innovation Hub",
          description: "Leading in technology and research"
        },
        {
          icon: "flexibility",
          title: "Academic Flexibility",
          description: "Option to change majors and customize courses"
        },
        {
          icon: "opportunities",
          title: "Career Opportunities",
          description: "Strong industry connections and OPT program"
        }
      ],
      admissionRequirements: {
        general: [
          "High school diploma or equivalent",
          "Minimum GPA of 3.0",
          "SAT/ACT scores",
          "English proficiency (TOEFL/IELTS)"
        ],
        documents: [
          "Academic transcripts",
          "Letters of recommendation",
          "Statement of purpose",
          "Financial documents"
        ]
      },
      costOfLiving: [
        { category: "Accommodation", amount: "$800-$2,500/month" },
        { category: "Food", amount: "$300-$600/month" },
        { category: "Transport", amount: "$70-$150/month" },
        { category: "Health Insurance", amount: "$500-$1,200/year" }
      ],
      visa: {
        process: [
          "Receive I-20 from university",
          "Pay SEVIS fee",
          "Complete DS-160 form",
          "Schedule visa interview"
        ],
        requirements: [
          "Valid passport",
          "I-20 form",
          "Proof of financial support",
          "Visa application fee receipt"
        ],
        processingTime: "3-5 weeks",
        successRate: "75%"
      },
      scholarships: [
        {
          name: "Fulbright Scholarship",
          amount: "Full tuition + living expenses",
          deadline: "October 15",
          eligibility: [
            "Outstanding academic record",
            "Leadership potential",
            "English proficiency"
          ]
        }
      ]
    },
    {
      name: "France",
      banner:"franceflag.jpg",
      capital: "Paris",
      population: "67 Million",
      currency: "Euro (EUR)",
      language: "French",
      climate: "Temperate",
      timeZone: "CET (UTC+1)",
      internationalStudents: "343,000",
      description: "France combines rich cultural heritage with excellent education, particularly in business, arts, and engineering.",
      educationSystem: {
        description: "French higher education includes universities, Grandes Écoles, and specialized schools with bachelor's (3 years), master's (2 years), and doctoral programs.",
        stats: [
          { value: "3,500+", label: "Institutions" },
          { value: "€170", label: "Public Uni Fees" },
          { value: "94%", label: "Student Satisfaction" }
        ]
      },
      universities: [
        {
          name: "LE CORDON BLEU",
          image:"france1.jpg"
        },
        {
          name: "TOULOUSE BUSINESS SCHOOL",
          image:"france2.webp",
        },
        {
          name: "NEW YORK FILM ACADEMY",
          image: "france3.webp"
        },
        {
          name: "INSTITUT SUPERIEUR DE GESTION (ISG)",
          image: "france4.avif"
        },
        {
          name: "ESC CLERMONT",
          image:"france5.jpeg"
        },
        {
          name:"EM STRASBOURG BUSINESS SCHOOL",
          image: "france6.jpg"
        }
      ],
      benefits: [
        {
          icon: "affordable",
          title: "Low Tuition Fees",
          description: "Public universities charge minimal fees"
        },
        {
          icon: "culture",
          title: "Cultural Richness",
          description: "World-class museums, architecture, and history"
        },
        {
          icon: "location",
          title: "European Hub",
          description: "Easy travel to other European countries"
        }
      ],
      admissionRequirements: {
        general: [
          "Baccalauréat or equivalent",
          "Minimum 12/20 GPA",
          "French/English proficiency",
          "Motivation letter"
        ],
        documents: [
          "Academic transcripts",
          "Language certificate",
          "CV",
          "Passport copy"
        ]
      },
      costOfLiving: [
        { category: "Accommodation", amount: "€400-€800/month" },
        { category: "Food", amount: "€200-€400/month" },
        { category: "Transport", amount: "€20-€75/month" },
        { category: "Health Insurance", amount: "€20-€50/month" }
      ],
      visa: {
        process: [
          "Receive admission confirmation",
          "Register with Campus France",
          "Complete visa application",
          "Attend visa interview"
        ],
        requirements: [
          "Valid passport",
          "Admission letter",
          "Proof of accommodation",
          "Financial means (€615/month)"
        ],
        processingTime: "2-3 weeks",
        successRate: "85%"
      },
      scholarships: [
        {
          name: "Eiffel Excellence Scholarship",
          amount: "€1,181/month",
          deadline: "January 10",
          eligibility: [
            "Academic excellence",
            "Age below 30",
            "Non-French nationality"
          ]
        }
      ]
    },
    {
      name: "Canada",
      banner: "canadaflag.jpeg",
      capital: "Ottawa",
      population: "39 Million",
      currency: "Canadian Dollar (CAD)",
      language: "English, French",
      climate: "Cold winters, warm summers",
      timeZone: "Multiple (UTC−3.5 to UTC−8)",
      internationalStudents: "900,000+",
      description: "Canada is known for its high-quality education system, multicultural environment, and welcoming immigration policies for international students.",
      educationSystem: {
        description: "Canadian higher education includes bachelor's (3-4 years), master's (1-2 years), and PhD (3-5 years) programs offered by universities and colleges.",
        stats: [
          { value: "100+", label: "Universities" },
          { value: "3", label: "Top 100 Global Universities" },
          { value: "90%", label: "Graduate Employability" }
        ]
      },
      universities: [
        {
          name: "VANCOUVER ISLAND UNIVERSITY",
          image: "canada1.jpg"
        },
        {
          name: "THOMPSON RIVERS UNIVERSITY (TRU)",
          image: "canada2.jpg"
        },
        {
          name: "UNIVERSITY OF THE FRASER VALLEY",
          image: "canada3.png"
        },
        {
          name: "CENTENNIAL COLLEGE",
          image: "canada4.jpg"
        },
        {
          name: "OKANAGAN COLLEGE ",
          image: "canada5.jpg"
        },
        {
          name:"CAPILANO UNIVERSITY",
          image:"canada5.jpg"
        }
      ],
      benefits: [
        {
          icon: "quality",
          title: "World-Class Education",
          description: "Top-ranked universities with strong research programs"
        },
        {
          icon: "immigration",
          title: "Pathway to PR",
          description: "Post-graduation work permit leads to permanent residency options"
        },
        {
          icon: "safety",
          title: "Safe & Inclusive Society",
          description: "Multicultural and welcoming environment for international students"
        }
      ],
      admissionRequirements: {
        general: [
          "Completion of high school with minimum GPA",
          "IELTS/TOEFL for English proficiency",
          "Apply through university website or OUAC (Ontario)"
        ],
        documents: [
          "Academic transcripts",
          "English proficiency test results",
          "Statement of purpose",
          "Passport copy"
        ]
      },
      costOfLiving: [
        { category: "Accommodation", amount: "CAD 800–1,500/month" },
        { category: "Food", amount: "CAD 300–600/month" },
        { category: "Transport", amount: "CAD 80–150/month" },
        { category: "Health Insurance", amount: "CAD 600–900/year" }
      ],
      visa: {
        process: [
          "Receive Letter of Acceptance (LoA)",
          "Apply online via IRCC portal",
          "Submit biometrics and documents",
          "Receive decision"
        ],
        requirements: [
          "Valid passport",
          "Letter of Acceptance",
          "Proof of funds (GIC)",
          "Medical exam (if needed)"
        ],
        processingTime: "4-8 weeks",
        successRate: "95%"
      },
      scholarships: [
        {
          name: "Vanier Canada Graduate Scholarships",
          amount: "CAD 50,000/year for 3 years",
          deadline: "November",
          eligibility: [
            "Excellent academic performance",
            "Research potential",
            "Leadership skills"
          ]
        }
      ]
    },
      {
        name: "UK",
        banner: "ukflag.jpeg",
        capital: "London",
        population: "67 Million",
        currency: "British Pound (GBP)",
        language: "English",
        climate: "Temperate Maritime",
        timeZone: "GMT (UTC+0) / BST (UTC+1)",
        internationalStudents: "600,000+",
        description: "The UK is home to some of the oldest and most prestigious universities, offering a strong academic foundation and global recognition.",
        educationSystem: {
          description: "UK higher education typically includes bachelor's (3 years), master's (1 year), and doctoral programs (3-4 years).",
          stats: [
            { value: "160+", label: "Universities" },
            { value: "4", label: "Top 10 Global Universities" },
            { value: "95%", label: "Graduate Satisfaction" }
          ]
        },
        universities: [
          {
            name: "LONDON SOUTH BANK UNIVERSITY (LSBU)",
            image: "uk1.jpg"
          },
          {
            name: "Anglia Ruskin University",
            image: "uk2.jpeg"
          },
          {
            name: "ROBERT GORDON UNIVERSITY",
            image: "uk3.webp"
          },
          {
            name: "BIRMINGHAM CITY UNIVERSITY",
            image: "uk4.jpeg"
          },
          {
            name: "UNIVERSITY OF DERBY",
            image: "uk5.jpg"
          }
          ,{
            name:"UNIVERSITY OF WOLVERHAMPTON",
            image:"uk6.jpg"
          }
        ],
        benefits: [
          {
            icon: "reputation",
            title: "Global Reputation",
            description: "Universities consistently ranked among the world's best"
          },
          {
            icon: "duration",
            title: "Shorter Programs",
            description: "Fast-track degrees save time and money"
          },
          {
            icon: "support",
            title: "International Support",
            description: "Excellent services for international students"
          }
        ],
        admissionRequirements: {
          general: [
            "High school completion with strong academic record",
            "IELTS or TOEFL for English proficiency",
            "UCAS application for undergraduate programs"
          ],
          documents: [
            "Academic transcripts",
            "Personal statement",
            "Reference letters",
            "Proof of English proficiency"
          ]
        },
        costOfLiving: [
          { category: "Accommodation", amount: "£500-£1,200/month" },
          { category: "Food", amount: "£150-£300/month" },
          { category: "Transport", amount: "£50-£100/month" },
          { category: "Miscellaneous", amount: "£100-£200/month" }
        ],
        visa: {
          process: [
            "Receive CAS from university",
            "Complete Tier 4 visa application",
            "Attend biometrics appointment",
            "Submit supporting documents"
          ],
          requirements: [
            "Valid passport",
            "Confirmation of Acceptance for Studies (CAS)",
            "Proof of funds",
            "English proficiency certificate"
          ],
          processingTime: "3 weeks",
          successRate: "98%"
        },
        scholarships: [
          {
            name: "Chevening Scholarship",
            amount: "Full tuition + living stipend",
            deadline: "November 1",
            eligibility: [
              "Leadership qualities",
              "Work experience",
              "Strong academic background"
            ]
          }
        ]
      },
      {
        name: "Australia",
        banner: "australiaflag.jpeg",
        capital: "Canberra",
        population: "26 Million",
        currency: "Australian Dollar (AUD)",
        language: "English",
        climate: "Varied (Tropical, Desert, Temperate)",
        timeZone: "Multiple (UTC+8 to UTC+11)",
        internationalStudents: "500,000+",
        description: "Australia offers a high-quality education system, diverse environment, and strong post-study work opportunities for international students.",
        educationSystem: {
          description: "Australian higher education includes bachelor's (3-4 years), master's (1-2 years), and PhD (3-4 years) programs.",
          stats: [
            { value: "40+", label: "Universities" },
            { value: "7", label: "Top 100 Global Universities" },
            { value: "93%", label: "Graduate Employability" }
          ]
        },
        universities: [
          {
            name: "UNIVERSITY OF WOLLONGONG",
            image: "aus1.png"
          },
          {
            name: "MURDOCH COLLEGE",
            image: "aus2.jpeg"
          },
          {
            name: "MACQUARIE UNIVERSITY, SYDNEY",
            image: "aus3.png"
          },
          {
            name: "THE UNIVERSITY OF ADELAIDE",
            image: "aus4.webp"
          },
          {
            name: "LA TROBE UNIVERSITY",
            image: "aus5.webp"
          },
          {
            name:"UNIVERSITY OF TASMANIA",
            image:"aus6.jpg"
          }
        ],
        benefits: [
          {
            icon: "quality",
            title: "Top-Quality Education",
            description: "Universities known for research and innovation"
          },
          {
            icon: "work",
            title: "Post-Study Work Rights",
            description: "Graduate Visa allows work after graduation"
          },
          {
            icon: "lifestyle",
            title: "Great Lifestyle",
            description: "Safe, multicultural, and outdoor-friendly environment"
          }
        ],
        admissionRequirements: {
          general: [
            "Completion of secondary school with required scores",
            "IELTS/TOEFL/PTE for English proficiency",
            "Application through university portal or agent"
          ],
          documents: [
            "Academic transcripts",
            "Proof of English proficiency",
            "Statement of purpose",
            "Passport copy"
          ]
        },
        costOfLiving: [
          { category: "Accommodation", amount: "AUD 800–2,000/month" },
          { category: "Food", amount: "AUD 300–600/month" },
          { category: "Transport", amount: "AUD 50–150/month" },
          { category: "Health Insurance", amount: "AUD 500–600/year" }
        ],
        visa: {
          process: [
            "Receive university admission",
            "Create ImmiAccount and submit application",
            "Upload documents and pay visa fee",
            "Wait for decision"
          ],
          requirements: [
            "Valid passport",
            "CoE (Confirmation of Enrolment)",
            "OSHC (health insurance)",
            "Proof of funds"
          ],
          processingTime: "4-6 weeks",
          successRate: "92%"
        },
        scholarships: [
          {
            name: "Australia Awards Scholarship",
            amount: "Full tuition + living allowance",
            deadline: "April 30",
            eligibility: [
              "Academic excellence",
              "Commitment to return home",
              "Developing country citizenship"
            ]
          }
        ]
      },
      {
        "name": "Germany",
        "banner": "germanyflag.cms",
        "capital": "Berlin",
        "population": "84 Million",
        "currency": "Euro (EUR)",
        "language": "German (English widely spoken)",
        "climate": "Temperate (Cold winters, mild summers)",
        "timeZone": "CET (UTC+1, UTC+2 in summer)",
        "internationalStudents": "400,000+",
        "description": "Germany is renowned for its tuition-free/low-cost education, world-class universities, and strong industrial ties, making it a top destination for international students.",
        "educationSystem": {
          "description": "German higher education offers bachelor's (3 years), master's (2 years), and PhD (3-5 years) programs, with a focus on research and practical learning.",
          "stats": [
            { "value": "400+", "label": "Universities & Colleges" },
            { "value": "45", "label": "Top 1000 Global Universities" },
            { "value": "90%", "label": "Graduate Employability" }
          ]
        },
        "universities": [
          {
            "name": "IU INTERNATIONAL UNIVERSITY OF APPLIED SCIENCES ",
            "image": "germany1.jpg"
          },
          {
            "name": "EUROPEAN UNIVERSITY / EU BUSINESS SCHOOL",
            "image": "germany2.webp"
          },
          {
            "name": "STEINBEIS UNIVERSITY",
            "image": "germany3.jpg"
          },
          {
            "name": "UNIVERSITY OF EUROPE FOR APPLIED SCIENCES",
            "image": "germany4.jpg"
          },
          {
            "name": "ARDEN UNIVERSITY",
            "image": "germany5.jpg"
          },
          {
            "name": "GISMA UNIVERSITY OF APPLIED SCIENCES",
            "image": "germany6.webp"
          }
        ],
        "benefits": [
          {
            "icon": "tuition",
            "title": "Low/No Tuition Fees",
            "description": "Most public universities charge no tuition (only semester fees)"
          },
          {
            "icon": "industry",
            "title": "Industry Connections",
            "description": "Strong ties with engineering, tech, and automotive sectors"
          },
          {
            "icon": "work",
            "title": "Post-Study Work Visa",
            "description": "18-month residence permit to seek employment"
          }
        ],
        "admissionRequirements": {
          "general": [
            "Hochschulzugangsberechtigung (HZB) or equivalent school qualification",
            "IELTS/TOEFL/TestDaF for language proficiency",
            "APS certificate (for some countries)",
            "University-specific entrance exams (if applicable)"
          ],
          "documents": [
            "Academic transcripts (translated)",
            "Language proficiency proof",
            "Motivation letter",
            "CV",
            "Passport copy",
            "APS certificate (if required)"
          ]
        },
        "costOfLiving": [
          { "category": "Accommodation", "amount": "EUR 300–800/month" },
          { "category": "Food", "amount": "EUR 200–400/month" },
          { "category": "Transport", "amount": "EUR 30–100/month (Semester ticket included)" },
          { "category": "Health Insurance", "amount": "EUR 120/month" }
        ],
        "visa": {
          "process": [
            "Secure university admission",
            "Open blocked account (EUR 11,208/year)",
            "Book visa appointment at German embassy",
            "Submit documents and attend interview",
            "Wait for approval (8–12 weeks)"
          ],
          "requirements": [
            "Valid passport",
            "University admission letter",
            "Blocked account proof",
            "Health insurance",
            "Visa application form"
          ],
          "processingTime": "8–12 weeks",
          "successRate": "88%"
        },
        "scholarships": [
          {
            "name": "DAAD Scholarship",
            "amount": "Full/partial funding + monthly stipend",
            "deadline": "Varies by program",
            "eligibility": [
              "Academic excellence",
              "2+ years of work experience (for some programs)",
              "Language proficiency (German/English)"
            ]
          },
          {
            "name": "Deutschlandstipendium",
            "amount": "EUR 300/month",
            "deadline": "University-specific",
            "eligibility": [
              "Merit-based",
              "Enrolled in a German university"
            ]
          }
        ]
      },
      {
        "name": "Newzealand",
        "banner": "newzealandflag.jpeg",
        "capital": "Wellington",
        "population": "5.1 Million",
        "currency": "New Zealand Dollar (NZD)",
        "language": "English, Māori",
        "climate": "Temperate (Mild winters, warm summers)",
        "timeZone": "NZST (UTC+12), NZDT (UTC+13 in summer)",
        "internationalStudents": "100,000+",
        "description": "New Zealand offers world-class education in a safe, English-speaking environment with stunning natural landscapes and excellent post-study work opportunities.",
        "educationSystem": {
          "description": "New Zealand's education system offers bachelor's (3-4 years), master's (1-2 years), and PhD (3-4 years) programs with a strong focus on research and practical skills.",
          "stats": [
            { "value": "8", "label": "Public Universities" },
            { "value": "3", "label": "Top 300 Global Universities" },
            { "value": "94%", "label": "Graduate Employability" }
          ]
        },
        "universities": [
          {
            "name": "AUT UNIVERSITY",
            "image": "nz1.jpg"
          },
          {
            "name": "THE UNIVERSITY OF WAIKATO",
            "image": "nz2.png"
          },
          {
            "name": "THE UNIVERSITY OF OTAGO",
            "image": "nz3.jpg"
          },
          {
            "name": "LINCOLN UNIVERSITY",
            "image": "nz4.webp"
          },
          {
            "name": "MASSEY UNIVERSITY",
            "image": "nz5.jpg"
          },
          {
            "name": "AUCKLAND UNIVERSITY OF TECHNOLOGY",
            "image": "nz6.jpg"
          }
        ],
        "benefits": [
          {
            "icon": "work",
            "title": "Post-Study Work Rights",
            "description": "3-year work visa for bachelor's/master's graduates"
          },
          {
            "icon": "research",
            "title": "Research Opportunities",
            "description": "Strong focus on innovation and sustainability research"
          },
          {
            "icon": "lifestyle",
            "title": "Quality of Life",
            "description": "Safe, peaceful environment with stunning natural beauty"
          }
        ],
        "admissionRequirements": {
          "general": [
            "Completion of secondary education equivalent to NZQA standards",
            "IELTS 6.0+/TOEFL 80+ for undergraduate, 6.5+/90+ for postgraduate",
            "Specific academic prerequisites for chosen program"
          ],
          "documents": [
            "Academic transcripts",
            "English proficiency test results",
            "Statement of purpose",
            "Letters of recommendation",
            "Passport copy",
            "Evidence of funds"
          ]
        },
        "costOfLiving": [
          { "category": "Accommodation", "amount": "NZD 800–1,500/month" },
          { "category": "Food", "amount": "NZD 300–600/month" },
          { "category": "Transport", "amount": "NZD 100–200/month" },
          { "category": "Health Insurance", "amount": "NZD 600–800/year" }
        ],
        "visa": {
          "process": [
            "Receive offer from NZ institution",
            "Pay tuition deposit",
            "Submit visa application with medical/police certificates",
            "Provide proof of funds (NZD 20,000/year)",
            "Wait for approval (4-8 weeks)"
          ],
          "requirements": [
            "Valid passport",
            "Offer of place from approved institution",
            "Proof of sufficient funds",
            "Medical and chest x-ray certificates",
            "Genuine temporary entrant declaration"
          ],
          "processingTime": "4-8 weeks",
          "successRate": "85%"
        },
        "scholarships": [
          {
            "name": "New Zealand Excellence Awards",
            "amount": "Up to NZD 30,000",
            "deadline": "April/September",
            "eligibility": [
              "Academic excellence",
              "Leadership potential",
              "Citizenship from selected countries"
            ]
          },
          {
            "name": "University-specific Scholarships",
            "amount": "10-50% tuition fee waiver",
            "deadline": "Varies by institution",
            "eligibility": [
              "Merit-based",
              "Program-specific requirements"
            ]
          }
        ]
      },
      {
        "name": "Singapore",
        "banner": "singaporeflag.jpeg",
        "capital": "Singapore",
        "population": "5.7 Million",
        "currency": "Singapore Dollar (SGD)",
        "language": "English, Mandarin, Malay, Tamil",
        "climate": "Tropical (Warm and humid year-round)",
        "timeZone": "SST (UTC+8)",
        "internationalStudents": "70,000+",
        "description": "Singapore offers world-class education in Asia's global business hub, with cutting-edge research facilities and strong industry connections in a multicultural environment.",
        "educationSystem": {
          "description": "Singapore's education system includes bachelor's (3-4 years), master's (1-2 years), and PhD (2-5 years) programs with a strong emphasis on innovation and entrepreneurship.",
          "stats": [
            { "value": "6", "label": "National Universities" },
            { "value": "2", "label": "Top 20 Global Universities" },
            { "value": "91%", "label": "Graduate Employability" }
          ]
        },
        "universities": [
          {
            "name": "JAMES COOK UNIVERSITY (JCU)",
            "image": "singapore1.jpg"
          },
          {
            "name": "AMITY GLOBAL INSTITUTE",
            "image": "singapore2.jpg"
          },
          {
            "name": "MANAGEMENT DEVELOPMENT INSTITUTE OF SINGAPORE (MDIS)",
            "image": "singapore3.jpg"
          },
          {
            "name": "PSB ACADEMY",
            "image": "singapore4.jpg"
          },
          {
            "name": "NANYANG INSTITUTE OF MANAGEMENT",
            "image": "singapore5.jpg"
          },
          {
            "name": "WILLIAM ANGLISS INSTITUTE",
            "image": "singapore6.jpg"
          }
        ],
        "benefits": [
          {
            "icon": "industry",
            "title": "Industry-Aligned Programs",
            "description": "Strong partnerships with multinational corporations and local enterprises"
          },
          {
            "icon": "research",
            "title": "Research Excellence",
            "description": "State-of-the-art facilities with generous research funding"
          },
          {
            "icon": "location",
            "title": "Global Business Hub",
            "description": "Gateway to Asia's fastest-growing economies with internship opportunities"
          }
        ],
        "admissionRequirements": {
          "general": [
            "Excellent academic results in high school/diploma",
            "IELTS 6.5+/TOEFL 90+ or equivalent",
            "Strong extracurricular profile",
            "Entrance exams/interviews for some programs"
          ],
          "documents": [
            "Academic transcripts",
            "English proficiency test results",
            "Personal statement",
            "Letters of recommendation",
            "Passport copy",
            "Financial documents"
          ]
        },
        "costOfLiving": [
          { "category": "Accommodation", "amount": "SGD 600–2,000/month" },
          { "category": "Food", "amount": "SGD 300–600/month" },
          { "category": "Transport", "amount": "SGD 50–100/month" },
          { "category": "Health Insurance", "amount": "SGD 500–800/year" }
        ],
        "visa": {
          "process": [
            "Receive acceptance from Singapore institution",
            "Institution applies for Student's Pass on your behalf",
            "Pay visa processing fee",
            "Submit required documents",
            "Collect Student's Pass upon arrival"
          ],
          "requirements": [
            "Valid passport",
            "In-principle approval (IPA) letter",
            "Disembarkation/Embarkation card",
            "Medical examination report (if required)",
            "Proof of financial support"
          ],
          "processingTime": "2-4 weeks",
          "successRate": "89%"
        },
        "scholarships": [
          {
            "name": "Singapore Government Scholarship",
            "amount": "Full tuition + living allowance",
            "deadline": "Varies by program",
            "eligibility": [
              "Outstanding academic achievements",
              "Leadership potential",
              "Commitment to contribute to Singapore's development"
            ]
          },
          {
            "name": "ASEAN Scholarships",
            "amount": "Tuition fees + annual allowance",
            "deadline": "May-July",
            "eligibility": [
              "Citizenship from ASEAN countries",
              "Excellent academic record",
              "Good co-curricular activities record"
            ]
          }
        ]
      },
      {
        "name": "Ireland",
        "banner": "irelandflag.jpeg",
        "capital": "Dublin",
        "population": "5.0 Million",
        "currency": "Euro (EUR)",
        "language": "English, Irish (Gaelic)",
        "climate": "Temperate maritime (Mild winters, cool summers)",
        "timeZone": "IST (UTC+1), GMT (UTC+0 in winter)",
        "internationalStudents": "35,000+",
        "description": "Ireland is a leading European education hub with a strong reputation for research, innovation, and high-quality education in a friendly and English-speaking environment.",
        "educationSystem": {
          "description": "Ireland's education system offers bachelor's (3-4 years), master's (1-2 years), and PhD (3-4 years) programs with a focus on research, technology, and business.",
          "stats": [
            { "value": "8", "label": "Universities" },
            { "value": "3", "label": "Top 200 Global Universities" },
            { "value": "85%", "label": "Graduate Employability" }
          ]
        },
        "universities": [
          {
            "name": "NATIONAL COLLEGE OF IRELAND",
            "image": "ire1.webp"
          },
          {
            "name": "UNIVERSITY OF LIMERICK",
            "image": "ire2.jpg"
          },
          {
            "name": "DUBLIN BUSINESS SCHOOL",
            "image": "ire3.jpg"
          },
          {
            "name": "UNIVERSITY OF GALWAY",
            "image": "ire4.jpg"
          },
          {
            "name": "SHANNON COLLEGE OF HOTEL MANAGEMENT",
            "image": "ire5.jpg"
          },
          {
            "name": "MAYNOOTH UNIVERSITY",
            "image": "ire6.jpg"
          }
        ],
        "benefits": [
          {
            "icon": "research",
            "title": "World-Class Research",
            "description": "Leading research centers in technology, pharmaceuticals, and business"
          },
          {
            "icon": "industry",
            "title": "Strong Industry Links",
            "description": "Home to multinational companies like Google, Apple, and Pfizer"
          },
          {
            "icon": "culture",
            "title": "Vibrant Student Life",
            "description": "Rich cultural heritage, friendly locals, and English-speaking environment"
          }
        ],
        "admissionRequirements": {
          "general": [
            "High school diploma or equivalent with strong grades",
            "IELTS 6.5+/TOEFL 90+ or equivalent",
            "Personal statement and references",
            "Some programs may require entrance exams or interviews"
          ],
          "documents": [
            "Academic transcripts and certificates",
            "English language test scores",
            "CV/Resume",
            "Letters of recommendation",
            "Passport copy",
            "Proof of financial means"
          ]
        },
        "costOfLiving": [
          { "category": "Accommodation", "amount": "EUR 400–1,200/month" },
          { "category": "Food", "amount": "EUR 200–400/month" },
          { "category": "Transport", "amount": "EUR 50–100/month" },
          { "category": "Health Insurance", "amount": "EUR 500–1,000/year" }
        ],
        "visa": {
          "process": [
            "Receive acceptance from an Irish institution",
            "Apply online for a student visa",
            "Pay visa application fee",
            "Submit biometrics and required documents",
            "Wait for approval before traveling"
          ],
          "requirements": [
            "Letter of acceptance from a recognized Irish institution",
            "Proof of tuition fee payment",
            "Evidence of sufficient funds (EUR 7,000–10,000 per year)",
            "Medical insurance",
            "Passport valid for at least 6 months"
          ],
          "processingTime": "4-8 weeks",
          "successRate": "82%"
        },
        "scholarships": [
          {
            "name": "Government of Ireland International Education Scholarship",
            "amount": "EUR 10,000 stipend + full tuition waiver",
            "deadline": "March",
            "eligibility": [
              "Non-EU/EEA students",
              "Outstanding academic record",
              "Admitted to a master's or PhD program"
            ]
          },
          {
            "name": "Trinity College Dublin Scholarships",
            "amount": "Up to EUR 5,000–25,000",
            "deadline": "Varies by program",
            "eligibility": [
              "High academic achievement",
              "Leadership potential",
              "Program-specific requirements"
            ]
          }
        ]
      },
      {
        "name": "Dubai",
        "banner": "dubaiflag.avif",
        "capital": "Abu Dhabi (UAE), Dubai is the largest city",
        "population": "3.5 Million (Dubai), 10 Million (UAE)",
        "currency": "UAE Dirham (AED)",
        "language": "Arabic (official), English (widely spoken)",
        "climate": "Desert (Hot summers, mild winters; 40°C+ in summer, 20°C in winter)",
        "timeZone": "GST (UTC+4)",
        "internationalStudents": "75,000+ (UAE)",
        "description": "Dubai offers globally recognized education in a futuristic, multicultural city with tax-free salaries, luxury lifestyle, and strong industry connections in business, engineering, and hospitality.",
        "educationSystem": {
          "description": "Dubai’s education system includes bachelor’s (3–4 years), master’s (1–2 years), and PhD (3–5 years) programs, with many international branch campuses (e.g., NYU, Heriot-Watt) and vocational institutes.",
          "stats": [
            { "value": "75+", "label": "International University Branches" },
            { "value": "5", "label": "QS Top 500 Universities" },
            { "value": "88%", "label": "Graduate Employability" }
          ]
        },
        "universities": [
          {
            "name": "HERIOT-WATT UNIVERSITY",
            "image": "dubai1.jpg"
          },
          {
            "name": "MIDDLESEX UNIVERSITY",
            "image": "dubai2.jpeg"
          },
          {
            "name": "THE EMIRATES ACADEMY OF HOSPITALITY MANAGEMENT",
            "image": "dubai3.jpg"
          },
          {
            "name": "UNIVERSITY OF WOLLONGONG",
            "image": "dubai4.jpg"
          },
          {
            "name": "CURTIN UNIVERSITY",
            "image": "dubai5.jpg"
          },
          {
            "name": "DE MONTFORT UNIVERSITY",
            "image": "dubai6.png"
          }
        ],
        "benefits": [
          {
            "icon": "industry",
            "title": "Global Business Hub",
            "description": "Internships at Fortune 500 companies (e.g., Amazon, Emirates, Jumeirah Group)"
          },
          {
            "icon": "tax-free",
            "title": "Tax-Free Earnings",
            "description": "No income tax for graduates working in Dubai"
          },
          {
            "icon": "multicultural",
            "title": "Multicultural Society",
            "description": "90% expat population with English as the lingua franca"
          }
        ],
        "admissionRequirements": {
          "general": [
            "High school diploma (min. 70–80% GPA)",
            "IELTS 6.0+/TOEFL 79+ or equivalent",
            "Some programs require entrance exams (e.g., SAT, GRE)",
            "Work experience for MBA programs"
          ],
          "documents": [
            "Academic transcripts",
            "English proficiency scores",
            "Passport copy + visa application",
            "Personal statement",
            "Letters of recommendation",
            "Proof of funds (AED 30,000+ per year)"
          ]
        },
        "costOfLiving": [
          { "category": "Accommodation", "amount": "AED 2,500–6,000/month" },
          { "category": "Food", "amount": "AED 800–1,500/month" },
          { "category": "Transport", "amount": "AED 300–600/month" },
          { "category": "Health Insurance", "amount": "AED 3,000–6,000/year" }
        ],
        "visa": {
          "process": [
            "Receive acceptance from a Dubai university",
            "University sponsors student visa",
            "Medical test + biometrics in UAE",
            "Pay visa fee (AED 3,000–5,000)",
            "Collect residence visa after arrival"
          ],
          "requirements": [
            "Passport valid for 6+ months",
            "University admission letter",
            "Medical insurance",
            "Proof of financial means",
            "No criminal record"
          ],
          "processingTime": "15–30 days",
          "successRate": "95%"
        },
        "scholarships": [
          {
            "name": "Dubai Government Scholarships",
            "amount": "Up to 100% tuition waiver",
            "deadline": "Varies by university",
            "eligibility": [
              "Academic excellence (min. 90% GPA)",
              "Leadership achievements",
              "Community service record"
            ]
          },
          {
            "name": "Zayed University Merit Scholarship",
            "amount": "AED 20,000–50,000/year",
            "deadline": "June/December",
            "eligibility": [
              "Min. IELTS 6.5 or equivalent",
              "Maintain 3.5+ GPA",
              "UAE residency preferred"
            ]
          }
        ]
      },
      {
        "name": "Spain",
        "banner": "spainflag.jpg",
        "capital": "Madrid",
        "population": "47.4 Million",
        "currency": "Euro (€)",
        "language": "Spanish (official), Catalan, Galician, Basque",
        "climate": "Mediterranean (Hot summers, mild winters; varies by region)",
        "timeZone": "CET (UTC+1), CEST (UTC+2 in summer)",
        "internationalStudents": "85,000+",
        "description": "Spain combines world-class education with vibrant culture, affordable living costs, and a relaxed Mediterranean lifestyle, offering diverse programs in English and Spanish.",
        "educationSystem": {
          "description": "Spain's Bologna-compliant system includes bachelor's (4 years), master's (1-2 years), and PhD (3+ years) programs, with strong focus on business, engineering, and humanities.",
          "stats": [
            { "value": "76", "label": "Public Universities" },
            { "value": "12", "label": "Top 500 Global Universities" },
            { "value": "82%", "label": "Graduate Employability" }
          ]
        },
        "universities": [
          {
            "name": "European University",
            "image": "spain1.jpg"
          },
          {
            "name": "TOULOUSE BUSINESS SCHOOL",
            "image": "spain2.jpg"
          },
          {
            "name": "UNIVERSIDAD CATOLICA SAN ANTONIO DE MURCIA",
            "image": "spain3.jpg"
          },
          {
            "name": "BERLIN SCHOOL OF BUSINESS & INNOVATION",
            "image": "spain4.jpg"
          },
          {
            "name": "CEDEU CENTRO DE ESTUDIOS UNIVERSITARIOS",
            "image": "spain5.avif"
          },
          {
            "name": "UNIVERSIDAD INTERNACIONAL DE VALENCIA",
            "image": "spain6.webp"
          }
        ],
        "benefits": [
          {
            "icon": "affordability",
            "title": "Affordable Education",
            "description": "Low tuition fees (€750-€2,500/year at public universities)"
          },
          {
            "icon": "culture",
            "title": "Rich Culture",
            "description": "Historic cities, world-famous festivals, and UNESCO heritage sites"
          },
          {
            "icon": "language",
            "title": "Language Advantage",
            "description": "Learn Spanish (2nd most spoken native language worldwide)"
          }
        ],
        "admissionRequirements": {
          "general": [
            "High school diploma (Selectividad exam for public universities)",
            "B2 Spanish/English proficiency (DELE/IELTS 6.0+)",
            "University entrance exam for some programs",
            "Good academic record"
          ],
          "documents": [
            "Academic transcripts",
            "Language certificate",
            "Motivation letter",
            "Passport copy",
            "Health insurance proof",
            "Financial means proof (€6,000-€10,000/year)"
          ]
        },
        "costOfLiving": [
          { "category": "Accommodation", "amount": "€300-€700/month" },
          { "category": "Food", "amount": "€200-€400/month" },
          { "category": "Transport", "amount": "€20-€50/month" },
          { "category": "Health Insurance", "amount": "€50-€120/month" }
        ],
        "visa": {
          "process": [
            "Get university acceptance letter",
            "Apply for student visa at Spanish consulate",
            "Submit required documents",
            "Wait 4-8 weeks for processing",
            "Register upon arrival for residence card"
          ],
          "requirements": [
            "Valid passport",
            "University admission proof",
            "Medical insurance",
            "Clean criminal record",
            "Proof of financial means"
          ],
          "processingTime": "4-8 weeks",
          "successRate": "90%"
        },
        "scholarships": [
          {
            "name": "Erasmus+ Scholarships",
            "amount": "€300-€1,200/month",
            "deadline": "March",
            "eligibility": [
              "EU/EEA students",
              "Enrolled in exchange program",
              "Academic merit"
            ]
          },
          {
            "name": "MAEC-AECID Scholarships",
            "amount": "Full tuition + monthly stipend",
            "deadline": "April-May",
            "eligibility": [
              "Non-EU students",
              "Admitted to Spanish university",
              "No prior Spanish residence"
            ]
          }
        ]
      },
      {
        "name": "Malaysia",
        "banner": "malaysiaflag.jpg",
        "capital": "Kuala Lumpur",
        "population": "33.4 Million",
        "currency": "Malaysian Ringgit (MYR)",
        "language": "Malay (official), English, Chinese, Tamil",
        "climate": "Tropical (Warm and humid year-round, 23°C-32°C)",
        "timeZone": "MST (UTC+8)",
        "internationalStudents": "150,000+",
        "description": "Malaysia offers affordable, high-quality education with international branch campuses and a multicultural society in the heart of Southeast Asia.",
        "educationSystem": {
          "description": "Malaysia's education system includes bachelor's (3-4 years), master's (1-2 years), and PhD (3-5 years) programs with British/American-style curricula and twinning degrees.",
          "stats": [
            { "value": "20", "label": "Public Universities" },
            { "value": "7", "label": "Top 500 Global Universities" },
            { "value": "94%", "label": "Graduate Employability" }
          ]
        },
        "universities": [
          {
            "name": "HERIOT-WATT UNIVERSITY MALAYSIA",
            "image": "malaysia1.jpg"
          },
          {
            "name": "THE UNIVERSITY OF NOTTINGHAM",
            "image": "malaysia2.avif"
          },
          {
            "name": "UOW MALAYSIA KDU",
            "image": "malaysia3.webp"
          },
          {
            "name": "LE CORDON BLEU",
            "image": "malaysia4.png"
          },
          {
            "name": "RAFFLES COLLEGE OF HIGHER EDUCATION",
            "image": "malaysia5.jpg"
          },
          {
            "name": "RAFFLES AMERICAN SCHOOL",
            "image": "malaysia6.jpg"
          }
        ],
        "benefits": [
          {
            "icon": "affordability",
            "title": "Low-Cost Excellence",
            "description": "World-class education at 1/3 the cost of Western countries"
          },
          {
            "icon": "multicultural",
            "title": "Cultural Diversity",
            "description": "Harmonious mix of Malay, Chinese, Indian and indigenous cultures"
          },
          {
            "icon": "location",
            "title": "ASEAN Gateway",
            "description": "Strategic base for internships in Southeast Asia's booming economies"
          }
        ],
        "admissionRequirements": {
          "general": [
            "Good high school grades (minimum 60-70% aggregate)",
            "IELTS 5.5-6.5/TOEFL 500+ or equivalent",
            "Pre-university program for some degrees",
            "Health examination"
          ],
          "documents": [
            "Academic transcripts and certificates",
            "English proficiency results",
            "Passport-sized photographs",
            "Passport copy (valid 18+ months)",
            "Medical report",
            "Financial proof (MYR 40,000-50,000/year)"
          ]
        },
        "costOfLiving": [
          { "category": "Accommodation", "amount": "MYR 500-1,500/month" },
          { "category": "Food", "amount": "MYR 600-1,000/month" },
          { "category": "Transport", "amount": "MYR 100-300/month" },
          { "category": "Health Insurance", "amount": "MYR 500-1,500/year" }
        ],
        "visa": {
          "process": [
            "Receive university acceptance",
            "Institution applies for Student Pass (VAL)",
            "Pay visa processing fee",
            "Complete medical check-up",
            "Collect Student Pass upon arrival"
          ],
          "requirements": [
            "Valid passport",
            "Letter of Approval (VAL)",
            "Medical fitness report",
            "Proof of financial means",
            "Academic certificates"
          ],
          "processingTime": "4-8 weeks",
          "successRate": "95%"
        },
        "scholarships": [
          {
            "name": "Malaysia International Scholarship (MIS)",
            "amount": "Full tuition + monthly allowance",
            "deadline": "April/May",
            "eligibility": [
              "CGPA 3.5/4.0 or equivalent",
              "IELTS 6.5+/TOEFL 580+",
              "Age below 40 for master's, 45 for PhD"
            ]
          },
          {
            "name": "ASEAN Scholarship at University of Malaya",
            "amount": "50-100% tuition waiver",
            "deadline": "July",
            "eligibility": [
              "Citizen of ASEAN country",
              "Excellent academic record",
              "Active in extracurricular activities"
            ]
          }
        ]
      },
      {
        name: "Netherlands",
        banner: "nethflag.jpg",
        capital: "Amsterdam",
        population: "17.5 Million",
        currency: "Euro (EUR)",
        language: "Dutch (English widely spoken)",
        climate: "Temperate Maritime",
        timeZone: "CET (UTC+1)",
        internationalStudents: "100,000+",
        description: "The Netherlands is known for its high-quality education system, wide range of English-taught programs, and vibrant international student community.",
        educationSystem: {
          description: "Higher education is offered through Research Universities (WO), Universities of Applied Sciences (HBO), and Institutes for International Education.",
          stats: [
            { value: "50+", label: "Universities" },
            { value: "2,000+", label: "English-taught programs" },
            { value: "94%", label: "Student Satisfaction" }
          ]
        },
        universities: [
          {
            name: "TIO UNIVERSITY OF APPLIED SCIENCES",
            image: "neth1.webp"
          },
          {
            name: "WITTENBORG UNIVERSITY OF APPLIED SCIENCES",
            image: "neth2.avif"
          },
          {
            name: "SRH HAARLEM UNIVERSITY OF APPLIED SCIENCES",
            image: "neth3.png"
          },
          {
            name: "IC UNIVERSITY OF APPLIED SCIENCES",
            image: "neth4.webp"
          },
          {
            name: "CAMBRIDGE EDUCATION GROUP",
            image: "neth5.jpg"
          },
          {
            name:"EIT INNOENERGY & ISE - THE INSTITUTE OF SUSTAINABLE ENERGY",
            image:"neth6.jpg"
          }
        ],
        benefits: [
          {
            icon: "innovation",
            title: "Top-Ranked Education",
            description: "Globally recognized universities and research"
          },
          {
            icon: "english",
            title: "English-Taught Programs",
            description: "Over 2,000 programs available in English"
          },
          {
            icon: "qualitylife",
            title: "High Quality of Life",
            description: "Safe, open-minded society with excellent infrastructure"
          }
        ],
        admissionRequirements: {
          general: [
            "Completed secondary education equivalent to Dutch diploma",
            "Proof of English proficiency (IELTS/TOEFL)",
            "Program-specific requirements (e.g., portfolio, entrance exam)"
          ],
          documents: [
            "Academic transcripts",
            "Motivation letter",
            "English test scores",
            "Copy of passport",
            "CV/Resume"
          ]
        },
        costOfLiving: [
          { category: "Accommodation", amount: "€400-800/month" },
          { category: "Food", amount: "€150-300/month" },
          { category: "Transport", amount: "€40-100/month" },
          { category: "Miscellaneous", amount: "€100-250/month" }
        ],
        visa: {
          process: [
            "Receive admission letter",
            "University applies for student visa (MVV) on your behalf",
            "Await IND decision",
            "Collect MVV from Dutch embassy/consulate"
          ],
          requirements: [
            "Valid passport",
            "University admission letter",
            "Proof of sufficient funds (€13,000+/year)",
            "Health insurance"
          ],
          processingTime: "2-4 weeks",
          successRate: "95%"
        },
        scholarships: [
          {
            name: "Holland Scholarship",
            amount: "€5,000 (first year only)",
            deadline: "May 1 (varies by university)",
            eligibility: [
              "Non-EEA nationality",
              "Applying for full-time bachelor's or master's",
              "Meets specific academic criteria"
            ]
          },
          {
            name: "Orange Tulip Scholarship",
            amount: "Partial/full tuition waiver (varies)",
            deadline: "Varies by country and institution",
            eligibility: [
              "Students from selected countries",
              "Academic excellence",
              "University nomination"
            ]
          }
        ]
      }      
  ];