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
          name:"CY CERGY PARIS UNIVERSITY (CY TECH)",
          image: "france6.PNG"
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
            name: "ROBERT GORDON UNIVERSITY",
            image: "rguuniversity2.webp"
          },
          {
            name: "UNIVERSITY OF DERBY",
            image: "derbyuniversity4.jpg"
          },
          {
            name: "UNIVERSITY OF WOLVERHAMPTON",
            image: "wolveruniversity5.jpg"
          },
          {
            name: "LONDON SOUTH BANK UNIVERSITY",
            image: "lsbuuniversity.jpg"
          },
          {
            name: "UNIVERSITY OF LINCOLN",
            image: "lincoln-university7.webp"
          }
          ,{
            name:"University of Stirling",
            image:"stirlinguniversity8.jpg"
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
  ];