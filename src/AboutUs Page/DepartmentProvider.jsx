import React, { createContext, useContext } from 'react';

const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
    const departments = [
        {
            overviewText: "The Radiology department at OAUTHC uses advanced imaging techniques to diagnose and treat various medical conditions. Our department is equipped with the latest technology to provide accurate and timely diagnostic services.", 
            departmentImage: 'https://img.freepik.com/free-photo/gynecologist-performing-ultrasound-consultation_23-2149353029.jpg?t=st=1719775007~exp=1719778607~hmac=59a6f5d312d7365ab4b2c1183136c396013a74ddeff30374a9fc682f36b7cba8&w=1380',
            departmentName: "Radiology",
            team: "Our radiology team includes board-certified radiologists, technologists, and support staff with expertise in medical imaging.",
            facilities: ["Digital radiography and fluoroscopy", "High-resolution MRI and CT scanners", "Ultrasound and nuclear medicine equipment" ],
            services: ["Diagnostic Imaging: X-rays, CT scans, MRI, ultrasound, and nuclear medicine.", "Image Interpretation: Analysis of images to diagnose conditions.", "Interventional Radiology: Minimally invasive procedures guided by imaging.", "Radiation Therapy: Radiation treatments for cancer.", "Research and Development: Advancing imaging technologies and techniques."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Internal Medicine department at OAUTHC focuses on the prevention, diagnosis, and treatment of adult diseases. Our team provides comprehensive care for a wide range of medical conditions.", 
            departmentImage: 'https://img.freepik.com/free-photo/side-view-patient-undergoing-physical-evaluation_23-2150165460.jpg?t=st=1719775379~exp=1719778979~hmac=249a1cef02f0bdb9014fed754d40fc6ae2087c12ecb387b3a12549208505e65c&w=996',
            departmentName: "Internal Medicine",
            team: "our internal medicine team includes board-certified internists, specialists and support staff.",
            facilities: ["Comprehensive diagnostic labs", "Advanced imaging facilities", "Specialized treatment units" ],
            services: ["General Medicine: Comprehensive care for adult patients.", "Endocrinology: Management of diabetes, thyroid disorders, and other endocrine conditions", "Gastroenterology: Treatement for digestive system disorders.", "Pulmonology: Care for respiratory diseases", "Neurology", "Dermatology"],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The haematology department at OAUTHC specializes in the study and treatment of blood disorders. We provide diagnostic and therapeutic services for a wide range of haematological conditions", 
            departmentImage: 'https://img.freepik.com/free-photo/coronavirus-blood-samples-arrangement-lab_23-2149107259.jpg?t=st=1719776325~exp=1719779925~hmac=2dfd1611fc21e5f5372c61ed940e75adbe52c2a297bd53d92016b48ce94d9c8c&w=1380',
            departmentName: "Haematology",
            team: "Our haematology team includes haematologists, lab technicians, and support staff with expertise in blood disorders.",
            facilities: ["State-of-the-art diagnostic labs", "Blood bank and transfusion services", "Advanced treatment units for haematological disorders." ],
            services: ["Diagnostic haematology: Blood tests and bone marrow examinations.", "Blood Disorders: Treatement for anaemia, clotting disorders, and haemophilia.", "Leukaemia and Lymphoma: Comprehensive care for blood cancers.", "Tranfusion Medicine: Blood transfusion service and management.", "Hematopoietic Stem Cell Transplantation: Stem cell and bone marrow transplants."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Chemical Pathology department at OAUTHC focuses on the biochemical analysis of body fluids to diagnose and monitor diseases. Our laboratory is equipped with advanced technology for accurate and timely results.", 
            departmentImage: 'https://img.freepik.com/free-photo/scientist-works-with-microscope-laboratory-conducting-experiments-formulas_146671-18289.jpg?t=st=1719776934~exp=1719780534~hmac=528e073a8e1bafc27c2b0f1f6e1fe7e939713c934c289cdb319df7fecd7eac52&w=1380',
            departmentName: "Chemical Pathology",
            team: "Our chemical pathology team includes clinical chemists, lab technicians, and support staff.",
            facilities: ["Advanced biochemical analyzers", "Automated lab systems", "Specialized testing units"],
            services: ["Clinical Chemistry: Analysis of blood and other body fluids", "Endocrinology: Hormone testing and management of endocrine disorders.", "Toxicology: Detection and management of toxins and poisons.", "Metabolic Disorders: Diagnosis and monitoring of metabolic diseases.", "Nutritional Biochemistry: Assessment of nutritional status and related disorders."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Microbiology and Parasitology department at OAUTHC is dedicated to the diagnosis and treatment of infectious diseases caused by bacteria, viruses, fungi and parasites. Our laboratory provides comprehensive testing and analysis.", 
            departmentImage: 'https://img.freepik.com/free-photo/3d-medical-background-with-abstract-virus-cells_1048-6296.jpg?t=st=1719777500~exp=1719781100~hmac=de656335f8e968af987597be1842bb313e4c52436f6c25e0a21c597df4b7b2f0&w=900',
            departmentName: "Microbiology and Parasitology",
            team: "Our microbiology and parasitology team includes microbiologists, parasitologists, lab technicians, and support staff.",
            facilities: ["Advanced microbiology labs", "Molecular diagnositic tools", "Specialized testing equipment." ],
            services: ["Bacteriology: Culture and sensitivity testing for bacterial infections.", "Virology: Detection and treatent of viral infections.", "Mycology: Diagnosis and treatment of fungal infections.", "Parasitology: Identification and management of parasitic diseases.", "Infection Control: Guidance on infection prevention and control measures."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Morbid Anatomy department at OAUTHC focuses on the study of diseases through the examination of organs, tissues and cells. We provide diagnostic services and support for clinical and research activities.", 
            departmentImage: 'https://img.freepik.com/free-photo/surgical-procedure-made-by-doctor_23-2148962519.jpg?t=st=1719777977~exp=1719781577~hmac=ebad8c927e926fd633137b065a61bc68ad23a538c0e6e18e1b1b23d5718d42af&w=900',
            departmentName: "Morbid Anatomy",
            team: "Our morbid anatomy team includes pathologists, lab technicians and support staff.",
            facilities: ["Advanced histopathology labs", "Automated staining and imaging systems", "State-of-the-art autopsy suite" ],
            services: ["Histopathology: Examination tissue samples to diagnose diseases.", "Cytopathology: Analysis of cells to detect cancer and other conditions.", "Autopsy Services: Post-mortem examinations to determine cause of death.", "Immunohistochemistry: Specialized staining techniques for precise diagnosis.", "Research Support: Histological service for research studies."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Family Medicine department at OAUTHC offers comprehensive health care for individuals and families across all ages, genders, and diseases. Our approach is patient-centered, focusing on continuous and integrated care.", 
            departmentImage: 'https://img.freepik.com/free-photo/family-shape-figure-with-heart-stethoscope_23-2148488214.jpg?w=1380&t=st=1719826374~exp=1719826974~hmac=7309d5e5a1509b78f085023cd271d7b566e05a51d7ee62692d57b688c0be054c',
            departmentName: "Family Medicine",
            team: "Our family medicine team includes board-certified family physicians, nurse practitioners and pysician asistants dedicated to providing holistic care.",
            facilities: ["Fully equipped examination rooms", "On-site laboratory and diagnostic services.", "Electronic medical records for coordinated care." ],
            services: ["Preventive Care: Regular check-ups, immunizations, and health screenings.", "Chronic Disease Management: Ongoing care for conditions like diabetes, hypertension, and asthma.", "Women's Health", "Men's Health: Prostate exams, cardiovascular screenings"],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "TheAnaesthesia department at OAUTHC provides anaesthesia services for surgical and diagnostic procedures, ensuring patient comfort and safety. We specialize in perioperative care, pain management and critical care.", 
            departmentImage: 'https://img.freepik.com/free-photo/female-patient-undergoing-surgery_7502-8404.jpg?t=st=1719835957~exp=1719839557~hmac=77f2a09dd975c470079cdbe46818d4bf9a2d50370d224c51ca1c6e5511de4e05&w=1380',
            departmentName: "Anaesthesia",
            team: "Our microbiology and parasitology team includes microbiologists, parasitologists, lab technicians, and support staff.",
            facilities: ["Advanced microbiology labs", "Molecular diagnositic tools", "Specialized testing equipment." ],
            services: ["General Anaestehsia: For major surgeries requiring complete unconsciousness.", "Regional Anaesthesia: Nerve blocks and spinal/epidural anaesthesia for localised pain control", "Sedation: Conscious sedation for minor procedures.", "Pain Management: Acute and chronic pain management services.", "Critical Care: Intensive care services for critically ill patients."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The orthopaedics and Traumatology department at OAUTHC provides specialized care for musculoskeletal conditions. Our team focuses on the diagnosis, treatment, and rehabilitation of bone, joint and msucle disorders.", 
            departmentImage: 'https://img.freepik.com/free-photo/physician-examining-human-skeleton-cabinet-checkup-visit-explaining-anatomy-bones-diagnosis-elderly-patient-specialist-analyzing-spinal-cord-help-with-orthopedic-treatment_482257-50443.jpg?t=st=1719836418~exp=1719840018~hmac=d1d5ced56f9a55ecbc395382bbf54ba3da7d13ddfb01a9b756ad7aa237d01028&w=1380',
            departmentName: "Orthopaedics & Traumatology",
            team: "Our orthopaedics team includes orthopaedic surgeons, sports medicine specialists, physioterapists, and nursing staff.",
            facilities: ["Modern operating theatres with advacned surgical equipment.", "Rehabilitation and physiotherapy center", "Diagnostic imaging (X-ray, MRI, CT)"],
            services: ["Fracture Care: Treatment of broken bones, including surgical and non-surgical options.", "Joint Replacement: Total hip, knee and shoulder replacement surgeries", "Sports Medicine: Management of sports injuries, including arthroscopy.", "Spine Surgery: Treatment for spinal disorders and injuries.", "Paediatric Orthopaedics: Specialized care for children with musculoskeletal issues."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Physiotherapy department at OAUTHC provides rehabilitation services to help patients recover from injuries, surgeries and medical conditions. Our team uses a variety of techniques to restore function and improve quality of life.", 
            departmentImage: 'https://img.freepik.com/free-photo/injured-man-doing-physiotherapy-exercises-walking_23-2149071497.jpg?w=1380&t=st=1719836747~exp=1719837347~hmac=232e4c1a8bc5194dd777cafef4318f00901dce4bcc57e5af64a6eca7127520a3',
            departmentName: "Physiotherapy",
            team: "Our Physiotherapy team includes licensed physiotherapists, rehabilitation specialists and support staff.",
            facilities: ["Fully equipped rehabilitation gym", "Hydrotherapy pool", "Advanced therapeutic equipment" ],
            services: ["Orthopaedic Rehabilitation: Post-surgical and injury recovery for musculoskeletal conditions.", "Neurological Rehabilitation: Therapy for patients with stroke, spinal cord injuries, and other neurological disorders.", "Cadiopulmonary Rehabilitation: Programs for heart and lung conditions.", "Paediatric Physiotherapy: Specialised care for children with developmental and physical challenges.", "Sports Rehabilitation: Treatment and prevention of sports-related injuries."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Accident and Emergency department at OAUTHC provides immediate and critical care to patients with acute illnesses or injuries. Our team is dedicated to delivering timely and effective treatment in emergency situations.", 
            departmentImage: 'https://img.freepik.com/free-photo/side-view-patient-with-oxygen-mask_23-2149478555.jpg?t=st=1719837202~exp=1719840802~hmac=76c1f59a0feb32fbf9865744d573b3bb8a4d44b7fc9bdaa7266cc38f9a1596eb&w=1380',
            departmentName: "Accident & Emergency",
            team: "Our emergency medicine team includes board-certified emergency physcians, trauma surgeons, nurses and support staff trained in emergency care.",
            facilities: ["Advanced ambulances", "Standard emergency department with resuscitation rooms", "Rapid diagnostic services (X-ray, CT scan, MRI"],
            services: ["Trauma Care: Treatment for patients with severe injuries", "Cardiac Emergencies: Management of heart attacks, arrhythmias, and other cardiac conditions", "Paediatric Emergencies: Specialised emergency care for children.", "Poisoning and Overdose Management: Treatment for toxic exposures.", "Acute Medical Conditions: Care for acute illnesses such as asthma attacks, infections and allergic reactions."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The General Surgery department at OAUTHC provides surgical treatment for a wide range of conditions. Our skilled surgeons and advanced facilities ensure high-quality care and sucessful outcomes.", 
            departmentImage: 'https://img.freepik.com/free-photo/doctors-doing-surgical-procedure-patient_23-2148962500.jpg?t=st=1719837513~exp=1719841113~hmac=61eba947e3d6df0fd06ab0a6be506c5dc3c937300edd24af0bedbce50e0fb71a&w=1060',
            departmentName: "General Surgery",
            team: "Our general surgery team includes board-certified surgeons, anesthesiolgists and specialized nursing staff.",
            facilities: ["Modern operating theatres", "Advanced laparoscopic and robotic surgery equipment", "Comprehensive preoperative and postoperative care units" ],
            services: ["Abdominal Surgery: Procedures for conditions affecting the stomach, intestines, livera nd other abdominal organs.", "Breast Surgery: Treatment for breast cancer and other breast conditions", "Endocrine Surgery: Surgery for thyroid, parathyroid and adrenal gland conditions.", "Minimally Invasive Surgery: Laparoscopic and robotic-assisted surgeries.", "Emergency Surgery: Urgent surgical interventions for acute conditions."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Paediatrics department at OAUTHC provides comprehensive healthcare for children from birth to adolescence. Our team is dedicated to ensuring the health and well-being of young patients through a wide range of services.", 
            departmentImage: 'https://img.freepik.com/free-photo/african-american-small-girl-receiving-covid19-vaccine-medical-clinic_637285-10541.jpg?t=st=1719838971~exp=1719842571~hmac=232e8b0bdc1cb56b1022e05def63062d783fb43aa9088d32660259455b3114ab&w=1380',
            departmentName: "Paediatrics",
            team: "Our paediatrics team includes paediatricians, neonatologists, paediatric nurses and support staff.",
            facilities: ["Neonatal Intensive Care Unit (NICU)", "Paediatric Intensive Care Unit (PICU)", "Child-friendly examination rooms and play areas" ],
            services: ["General Pediatrics: Routine check-ups, immunizations, and treatment for common childhool illnesses.", "Neonatology: Specialized care for newborns, including premature and critically ill infants", "Paediatric cardiology: Diagnosis and treatment of heart conditions in children.", "paediatric Neurology: Care for neurological disorders in children. ", "Paediatric Oncology: Treatment for childhool cancers."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Obstetrics and Gynaecology department at OAUTHC offers comprehensive care for women’s reproductive health. We provide a full range of services from prenatal care to advanced gynecological treatments.", 
            departmentImage: 'https://img.freepik.com/free-photo/woman-with-pregnancy-discussing-with-specialist-about-medical-care-office-general-practitioner-talking-patient-expecting-child-about-healthcare-support-wearing-face-masks_482257-28804.jpg?w=1380&t=st=1719839740~exp=1719840340~hmac=4d981ac71943ba69c69155941b36c46c01255ec41562d5b5eb952f22764ec69c',
            departmentName: "Obstetrics & Gynaecology",
            team: "Our obstetrics and gynaecology team includes obstetricians, gynaecologists, midwives, and specialised nursing staff.",
            facilities: ["Modern labour and delivery rooms", "Advanced surgical suites for gynaecological procedures", "Comprehensive prenatal and antenatal care facilities" ],
            services: ["Prenatal and Antenatal Care: Monitoring and care throughout pregnancy.", "Labour and Delivery: Safe and supportive childbirth services", "Gynaecological Surgery: Procedures for reproductive systems conditions", "Fertility Services: Evaluation and treatment for infertility. ", "Menopausal Care: Management of menopausal symptoms and health."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Mental Health department at OAUTHC is dedicated to the diagnosis, treatment, and support of individuals with mental health conditions. Our multidisciplinary approach ensures comprehensive care for all patients.", 
            departmentImage: 'https://img.freepik.com/free-photo/mental-health-care-sketch-diagram_53876-123900.jpg?t=st=1719840178~exp=1719843778~hmac=aaa18ffed36fd63def2ee0742f974a178b670bd3dc07e96144b56bdb61e97d90&w=826',
            departmentName: "Mental Health",
            team: "Our mental health team includes psychiatrists, psychologists, therapists, and psychiatric nurses.",
            facilities: ["Outpatient and inpatient care units", "Therapy rooms for individual and group sessions", "Specialized facilities for substance abuse treatment"],
            services: ["General Psychiatry: Diagnosis and treatment of common health disorders ", "Child and Adolescent Psychiatry: Specialized care for younger patients. ", "Psychotherapy: Individual, group and family therapy sessions", "Substance Abuse Treatment: Programs for addiction recovery.", "Crisis Intervention: Immediate support for acute mental health crises."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Otorhinolaryngology department at OAUTHC provides comprehensive care for ear, nose and throat disorders. Our experts are skilled in both medical and surgical treatments for ENT conditions.", 
            departmentImage: 'https://img.freepik.com/free-photo/healthcare-facility-otologist-checking-internal-ear-infection-illness-using-otoscope-clinic-otology-specialist-consulting-sick-woman-ear-infection-prevent-otitis-other-health-complications_482257-37992.jpg?w=1380&t=st=1719841657~exp=1719842257~hmac=d67e861ebfb9d3b51ca9ddd48b054a6e94a12062689e06caa768f00987dd0c98',
            departmentName: "Otorhinolaryngology ",
            team: "Our ENT team includes otolaryngologists, audiologists, speech therapists and specialized nursing staff.",
            facilities: ["Audiology lab for hearing tests", "Endoscopic equipment for minially invasive procedures", "Advanced surgical theatres for ENT surgeries." ],
            services: ["General ENT Care: Treatment for common ENT conditions such as sinusitis, tonsilitis, and ear infections.", "Hearing and Balance: Audiology service and management of balance disorders.", "Voice and Swallowing: Diagnosis and treatment of voice and swallowing disorders."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Neurology department at OAUTHC specializes in diagnosing and treating disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. Our multidisciplinary team is dedicated to providing comprehensive neurological care.", 
            departmentImage: 'https://img.freepik.com/free-photo/back-view-man-patient-wearing-performant-brainwave-scanning-headset-sitting-neurological-research-laboratory-while-medical-researcher-adjusting-it-examining-nervous-system-typing-tablet_482257-16484.jpg?t=st=1719843310~exp=1719846910~hmac=b9b258da67bf891f3ced4f26ef207b2848e41c7110eba98915345908170046ef&w=1380',
            departmentName: "Neurology",
            team: "Our neurology team includes board-certified neurologiests, neurosurgeons, neurophysiologists and specialized nursing staff.",
            facilities: ["Advanced neuroimaging (MRI, CT)", "Neurophysiology lab for EEG and EMG", "Stroke unit with dedicated care" ],
            services: ["General Neurology: Evaluation and management of neurological disorders such as  headaches, epilepsy and movement disorders.", "Stroke Care: Acute management and rehabilitation for stroke patients.", "Neuroimmunology: Treatment for multiple sclerosis and other autoimmune neurological conditions.", "Neurophysiology: Diagnosticc testings such as EEG and EMG.", "Neuro-oncology: Treatment for brain and spinal cord tumors."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Ophthalmology department at OAUTHC offers comprehensive eye care services, including the diagnosis and treatment of eye diseases and conditions. We are committed to preserving and restoring vision through advanced medical and surgical care.", 
            departmentImage: 'https://img.freepik.com/free-photo/ophthalmologist-doctor-consulting-patient_23-2150923356.jpg?t=st=1719843447~exp=1719847047~hmac=9554a349f46fb2e7aeb5c0df9a6fde7030687dff7a4988e3336f25067da880af&w=1380',
            departmentName: "Ophthalmology",
            team: "Our ophthalmology team includes board-certified ophthalmology team includes board-certified ophthalmologists, optometrists and trained ophthalmic technicians.",
            facilities: ["Advanced diagnostic imaging (OCT, retinal photography)", "State-of-the-art surgical suites for eye procedures", "Laser treatment facilities" ],
            services: ["General Eye Care: Routine eye exams, vision correction and management of common eye conditions", "Cataract Surgery: Removal and replacement of cataracts.", "Glaucoma Management: Diagnosis and treatment of glaucoma.", "Retina Services: Treatment for retinal disorders such as diabetic retinopathy and macular degeneration.", "Paediatric Ophthalmology: Specialized eye care for children."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Dermatology department at OAUTHC provides comprehensive care for skin, hair and nail disorders. Our specialists are dedicated to diagnosing and treating a wide range of dermatological conditions.", 
            departmentImage: 'https://img.freepik.com/free-photo/person-getting-micro-needling-beauty-treatment_23-2149334294.jpg?w=740&t=st=1719843907~exp=1719844507~hmac=017c1d4dd6cf58948ad1384b7df30c58aa6160869c21e970f710b1049c39f9d9',
            departmentName: "Dermatology",
            team: "Our dermatology team includes board-certified dermatologists, dermatologic surgeons and specialised nursing staff.",
            facilities: ["Advanced laser and light therapy equipment", "State-of-the-art surgical suites for dermatologic procedures", "Comprehensive diagnostic labs" ],
            services: ["General Dermatology: Treatment for acne, eczema, psoriasis and other common skin conditions.", "Skin Cancer: Diagnosis and treatment of skin cancer, including melanoma.", "Cosmetic Dermatology: Procedures such as chemical peels, laser therapy and Botox", "Dermatologic Surgery: Surgical treatment for skin lesions and tumors."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Oral and Maxillofacial Surgery department at OAUTHC provides surgical care for diseases, injuries, and defects of the head, neck, face, jaws, and oral cavity. Our team is skilled in both minor and major surgical procedures.", 
            departmentImage: 'https://img.freepik.com/free-photo/medium-shot-doctor-checking-young-patient_23-2149352211.jpg?t=st=1719845124~exp=1719848724~hmac=4079f8ad21e0cc2ba698c18256053b52928650cb361405834a4e8e85a7ff41d3&w=740',
            departmentName: "Oral & Maxillofacial Surgery",
            team: "The Oral and Maxillofacial Surgery department at OAUTHC provides surgical care for diseases, injuries and defects of the head, neck, face, jaw and oral cavity. Our team is skilled in both minor and major surgical procedures.",
            facilities: ["Modern operating theatres with advanced surgical equipment", "Outpatient clinics for minor procedures", "Inpatient facilities for complex surgeris" ],
            services: ["Dental Implants: Surgical placement of dental implants", "Orthognathic Surgery: Corrective jaw surgery", "Facial Trauma: Treatment for facial fractures and injuries", "Oral Pathology: Diagnosis and treatment of oral diseases.", "Reconstructive Surgery: Reconstruction of facial and oral structures after injury or disease."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Restorative Dentistry department at OAUTHC focuses on restoring the function and appearance of the teeth. Our services includes a range of treatments from fillings to complex dental restorations.", 
            departmentImage: 'https://img.freepik.com/free-photo/view-from-side-female-doctor-process-doing-filling_651396-1703.jpg?w=1380&t=st=1719844566~exp=1719845166~hmac=5e9b4be4a1d7396f3df2179a4e56bca0f229a6f1c5c379e68034cae54cb1bfee',
            departmentName: "Restorative Dentistry",
            team: "Our restorative dentistry team includes board-certified dentists, dental hygienists and lab technicians.",
            facilities: ["Advanced dental chairs and equipment", "Digitial radiography for precise diagnosis", "On-site dental lab for custom restorations" ],
            services: ["Dental Fillings: Repairing caviities and restoring tooth structure", "Crowns and Bridges: Restoring damaged or missing teeth", "Dentures: Creating and fitting partial or complete dentures", "Root Canal Therapy: Treating infected or damaged tooth pulp", "Cosmetic Dentistry: Enhancing the appearance of teeth through veneers, bonding and whitening."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Child Dental Health department at OAUTHC provides comprehensive dental care for children from infancy through adolescence. Our goal is to promote good oral health and prevent dental problems.", 
            departmentImage: 'https://img.freepik.com/free-photo/happy-afro-kid-regular-check-up-teeth-dental-clinic_651396-1411.jpg?t=st=1719845300~exp=1719848900~hmac=6e9dca5bd8834570debba446078afcb4faf42e7d4ad290a7bd79a55efd962960&w=1380',
            departmentName: "Child Dental Health",
            team: "Our child health team includes paediatric dentists, dental hygienists and support staff trained in child-friendly care.",
            facilities: ["Child-friendly examination rooms", "Specialized paediatric dental equipment", "Educational programs on oral hygiene" ],
            services: ["Paediatric Dental Exams: Routine check-ups and cleanings.", "Fluoride Treatments: Preventing tooth decay.", "Sealants: Protecting teeth from caviities. ", "Orthodontics: Early assessment and treatment for misaligned teeth. ", "Emergency Dental Care: Managing dental injuries and acute conditions."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Preventive and Community Dentistry department at OAUTHC focuses on promoting oral health and preventing dental diseases within the community. Our programs and services aim to improve overall dental health through education and preventive care.", 
            departmentImage: 'https://img.freepik.com/free-photo/young-african-american-man-guy-visiting-dentist-s-office-prevention-oral-cavity-man-famale-doctor-while-checkup-teeth_1157-42081.jpg?t=st=1719846000~exp=1719849600~hmac=3b34e135b940742e11b6eee6a77cc67c3e4a4854941a2a5cb6df630cdf59fd25&w=1380',
            departmentName: "Preventive & Community Dentistry",
            team: "Our preventive and community dentistry team includes dentists, dental hygienists and public health specialists. ",
            facilities: ["Mobile dental units for community outreach", "On-site clinics for preventive care", "Educational materials and resources" ],
            services: ["Community Dental Programs: Outreach and education on oral health. ", "Preventive Care: Cleanings, fluoride treatments and sealants", "School Dental Programs: Dental screenings and treatments for schoolchildren.", "Oral Health Education: Workshops and seminars on maintaining oral hygiene. ", "Research: Studies on preventive measures and community dental health."],
            phone:  "+ (123) 456-7890"
        },
        {
            overviewText: "The Virology department at OAUTHC specialises in the study and treatment of viral infections. Our laboratory provides comprehensive diagnostic services and supports clinical management of viral diseases.", 
            departmentImage: 'https://img.freepik.com/free-photo/scientist-wearing-coverall-equipped-medical-laboratory-examining-drug-discovery-with-micropipette-biochemists-analysing-virus-evolution-using-high-tech-researching-vaccine-against-covid19_482257-3798.jpg?t=st=1719847146~exp=1719850746~hmac=2f0b415097596794ef7e746ecf887444c0e636bcb9a4822b96812ffed75ed508&w=1380',
            departmentName: "Virology",
            team: "Our virology team includes viorlogists, lab technicians and support staff with expertise in viral diagnositics and treatment.",
            facilities: ["Advanced molecular diagnostic labs", "Auomated PCR systems for rapid testing", "Specialised equipment for viral culture and analysis" ],
            services: ["Diagnostic Virology: Detection and identification of viruses", "Viral Load Testing: Monitoring of viral infections such as HIV and Hepatitis.", "Antiviral Therapy: Treatment for viral infections ", "Vaccine Research: Development and testing of vaccines", "Outbreak Management: Response and control of viral outbreaks"],
            phone:  "+ (123) 456-7890"
        },


        
        
    ];

    const schools = [
        {
            overviewText: "The School of Nursing Ife, dedicated to educating students to become compassionate and skilled nurses, equipped to provide exceptional patient care in a variety of settings", 
            schoolImage: "https://img.freepik.com/free-photo/group-african-medical-students-posed-outdoor_627829-380.jpg?t=st=1719490292~exp=1719493892~hmac=5275ddb66ebf23cb36174e8c484c3e88b622c0bda49e0caa3b5c663a681ce6d1&w=1380",
            schoolName: "School of Nursing, Ife",
            description: "The school's comprehensive curriculum emphasizes evidence-based practice, critical thinking, and effective communication. Students gain hands-on experience in state-of-the-art simulation labs and clinical settings, preparing them for a successful nursing career. Graduates of the School of Nursing are highly sought after for their expertise and commitment to delivering high-quality patient care. They go on to work in hospitals, clinics, and communities, making a positive impact on the healthcare landscape.",
            facilities: "Equipped with state of the art facilities to suppport student learning and success. Our simulation labs, skills labs and classrooms are equipped with the latest technology and equipment, simulating real-world healthcare settings.",
            services: ["Simulation labs with high-fidelity mannequins", "Skills labs for hands-on practice", "Advanced audiovisual equipment for interactive learning"],
            facultiesNames: ["Faculty of a", "Faculty of b", "Faculty of c"]
        },
        {
            overviewText: "School of Nursing Ilesa, is renowned for its nurturing environment, dedicated faculty, and rigorous academic programs, producing nursing professionals who excel in their field. ", 
            schoolImage: 'https://img.freepik.com/free-photo/group-african-paramedic-crew-doctors_627829-4957.jpg?t=st=1719490334~exp=1719493934~hmac=e28f16210e8aa5e82aa71d9249e8d687d62926432cb3439209d766defdc599f3&w=1380',
            schoolName: "School of Nursing, Ilesa",
            description: "Students at Ife School of Nursing benefit from small class sizes, personalized attention, and a curriculum that emphasizes both theoretical foundations and practical skills. The school's strong network of healthcare partners provides students with diverse clinical experiences, preparing them for a wide range of nursing careers. Ife School of Nursing graduates are highly respected for their compassion, critical thinking, and exceptional patient care skills, making them valuable assets to healthcare teams worldwide.",
            facilities: "This school offers modern facilities designed to enhance student learning and comfort. Our campus features spacious classrooms, well-equipped skills labs, and a comprehensive library. ",
            services: ["Spacious classrooms with multimedia resources", "Well-equipped skills labs for practical training", "Comprehensive library with e-learning resources"],
            facultiesNames: ["Faculty of d", "Faculty of e", "Faculty of f", "Faculty of g"]
        },
        {
            overviewText: "The School of Midwifery at OAUTHC is committed to educating midwives who deliver safe, personalized, and evidence-based care to women and their families.", 
            schoolImage: "https://img.freepik.com/free-photo/general-practitioner-attending-consultation-taking-notes_482257-40874.jpg?w=1380&t=st=1719490493~exp=1719491093~hmac=ca47750a3301e877042060803180658f1265ef1fad6a100a30b6a137d05ca183",
            schoolName: "School of Midwifery",
            description: "The school's midwifery program focuses on the art and science of midwifery, emphasizing normal pregnancy, childbirth, and postpartum care. Students learn to manage complications and provide supportive care, developing the skills and confidence to practice midwifery with excellence. Graduates of the School of Midwifery are highly skilled and compassionate professionals, equipped to provide exceptional care to women and their families in a variety of settings. ",
            facilities: "The School of Midwifery at OAUTHC provides specialized facilities to support midwifery education. Our birth simulation lab, skills labs, and classrooms are designed to replicate real-world midwifery settings.",
            services: ["Birth simulation lab with advanced mannequins", "Skills labs for hands-on midwifery training", "Classrooms with multimedia resources"],
            facultiesNames: ["Faculty of h", "Faculty of i", "Faculty of j"]
        },
        {
            overviewText: "The School of Perioperative Nursing at OAUTHC prepares nurses for the specialized care of surgical patients, emphasizing precision, safety, and compassionate care.", 
            schoolImage: "https://img.freepik.com/free-psd/interior-view-operating-room-generative-ai_587448-2215.jpg?t=st=1719492207~exp=1719495807~hmac=faabe366aa11831217d2d847756af1d9eee5d1512079adddbe271a8332e44d30&w=1380",
            schoolName: "School of Perioperative Nursing",
            description: "The school's perioperative nursing program covers all aspects of surgical care, from preoperative assessment to postoperative recovery. Students gain expertise in anesthesia, surgical techniques, and patient management, developing the skills to work effectively in fast-paced surgical settings. Graduates of the School of Perioperative Nursing are highly sought after for their expertise and ability to provide high-quality care to surgical patients. ",
            facilities: "The School of Perioperative Nursing offers cutting-edge facilities to prepare students for the operating room. Our simulation labs, skills labs, and classrooms are equipped with the latest surgical equipment and technology.",
            services: ["Simulation labs with virtual reality technology", "Skills labs for hands-on surgical training", "Classrooms with advanced audiovisual equipment"],
            facultiesNames: ["Faculty of k", "Faculty of l", "Faculty of m"]
        },
        {
            overviewText: "The School of Health Information Management at OAUTHC educates students to manage health data with accuracy, integrity, and confidentiality, supporting informed healthcare decisions. ", 
            schoolImage: 'https://img.freepik.com/free-psd/mock-up-design-with-smiley-doctor-holding-clipboard_23-2147659937.jpg?t=st=1719493460~exp=1719497060~hmac=254359817a41e603e44ba3de0ca5623ff4fbcfb87f73dff404d27ee6faad557b&w=900',
            schoolName: "School of Health Information Management",
            description: "The school's HIM program covers health information systems, data analysis, and privacy and security regulations. Students learn to design and implement health information systems, preparing them for careers in healthcare data management. Graduates of the School of Health Information Management are highly skilled professionals, equipped to manage health data and support quality patient care. ",
            facilities: "The School of Health Information Management at OAUTHC provides modern facilities to support HIM education. Our computer labs, classrooms, and library offer the latest technology and resources. ",
            services: ["Computer labs with specialized software", "classrooms with multimedia resources", "Comprehensive library with e-learning resources"],
            facultiesNames: ["Faculty of n", "Faculty of o", "Faculty of p"]
        },
        {
            overviewText: "The Community Health Officers Training Program at OAUTHC develops healthcare leaders who promote community-focused care, addressing health disparities and improving population health. ", 
            schoolImage: 'https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117846.jpg?t=st=1719493664~exp=1719497264~hmac=8a1fc6d9568b0aba0be65a30aebc90349ce15eac9ab9d25e363afc127c84bbe1&w=1380',
            schoolName: "Community Health Officers Program",
            description: "The program emphasizes community health assessment, program planning, and health education, preparing students to work effectively in diverse community settings. Students gain practical experience in community health projects, developing the skills to design and implement successful health initiatives. Graduates of the Community Health Officers Training Program are highly respected for their ability to lead community health efforts, promoting health equity and social justice.",
            facilities: "The Community Health Officers Training Program at OAUTHC offers facilities that support community-focused learning. Our classrooms, skills labs, and community health centers provide students with practical experience. ",
            services: ["Classrooms iwth multimedia resources", "Skills lab for community health training", "Community health centers for practical experience"],
            facultiesNames: ["Faculty of q", "Faculty of r", "Faculty of s"]
        }
    ];

    const doctorsData = [
        { 
          doctorName: 'Dr. John Doe', 
          gender: 'Male',
          specialty: ['Cardiology', 'Pediatrics', 'Dermatology'], 
          experience: '10',  
          qualification: ['MD', 'FACC'],
          location: 'Urban Comprehensive Health Center',
          languages: ['English', 'Yoruba'],
          overviewText: "Dr. John Doe is a highly experienced cardiologist, pediatrician, and dermatologist with over 10 years of experience. He is dedicated to providing compassionate and personalized care to his patients.",
          accomplishments: "Dr. Doe is a exceptional physician who possesses a unique blend of medical expertise and interpersonal skills. He is renowned for his ability to distill complex medical concepts into understandable terms, making him an invaluable resource for his patients. His empathetic nature and warm bedside manner have earned him a reputation as a trusted and caring doctor. Throughout his career, Dr. Doe has demonstrated a commitment to staying abreast of the latest medical advancements, ensuring that his patients receive the most up-to-date care available.",
          doctorImage: 'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1719218887~exp=1719222487~hmac=033708b0c73d77e4ea65ddea772507ec267d33ccee4cbdbdec07935f5e0c9347&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
        { 
          doctorName: 'Dr. Jane Smith', 
          gender: 'Female',
          specialty: ['Pediatrics', 'Opthalmology'], 
          experience: '8', 
          qualification: ['MD', 'FACC'],
          location: 'Ijeshaland geriatric Center',
          languages: ['English', 'Yoruba'],
          overviewText: "Dr. Jane Smith is a dedicated pediatrician and ophthalmologist with a passion for providing quality care to her patients. She has over 8 years of experience and is committed to staying up-to-date with the latest medical advancements.",
          accomplishments: "Dr. Smith is a highly respected physician known for her tireless work ethic and dedication to her patients. Her exceptional clinical skills are complemented by her ability to connect with patients and families on a personal level, making her a beloved figure in the medical community. Dr. Smith's passion for pediatrics and ophthalmology is evident in everything she does, from conducting thorough exams to developing personalized treatment plans. Her commitment to excellence has earned her a reputation as one of the top pediatricians and ophthalmologists in her field.",
          doctorImage: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1719220401~exp=1719224001~hmac=1fc1cada4b937eff6cd4363a985fa9cbd84c3569410f978bc1405c98ac671432&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
        { 
          doctorName: 'Dr. Michael Brown', 
          gender: 'Male',
          specialty: ['Orthopedics'], 
          experience: '12', 
          qualification: ['MD', 'FACC'],
          location: 'Ife Hospital Unit',
          languages: ['Ibibio'],
          overviewText: "Dr. Michael Brown is a skilled orthopedic surgeon with over 12 years of experience. He is dedicated to providing personalized care and treatment plans to his patients.",
          accomplishments: "Dr. Brown is a gifted surgeon and a compassionate physician who has dedicated his career to helping patients overcome orthopedic injuries and conditions. His exceptional surgical skills are matched only by his ability to communicate complex information in a clear and concise manner. Dr. Brown's patients appreciate his warm and caring demeanor, which puts them at ease even in the most challenging situations. Throughout his career, Dr. Brown has demonstrated a commitment to staying at the forefront of orthopedic surgery, ensuring that his patients receive the most advanced care available.",
          doctorImage: 'https://img.freepik.com/free-photo/confident-attractive-male-doctor-wearing-white-lab-coat-while-standing-with-arms-crossed-against-turquoise-background_662251-1654.jpg?t=st=1719220736~exp=1719224336~hmac=3659fc16dd388e676a7b94baea44b0435b8c170fcbca2bf71c84991492a93462&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
        { 
          doctorName: 'Dr. Emily Wilson', 
          gender: 'Female',
          specialty: ['Dermatology'], 
          experience: '9', 
          qualification: ['MD', 'FACC'],
          location: 'Wesley Guild Hopsital Unit',
          languages: ['Igbo'],
          overviewText: "Dr. Emily Wilson is a compassionate dermatologist with over 9 years of experience. She is committed to providing high-quality care and treatment plans to her patients.",
          accomplishment: "Dr. Wilson is a highly respected dermatologist known for her expertise and empathy. She possesses a unique ability to understand the emotional impact of skin conditions on her patients, and she works tirelessly to develop personalized treatment plans that address both the physical and emotional aspects of their care. Dr. Wilson's commitment to excellence has earned her a reputation as one of the top dermatologists in her field, and her patients appreciate her warm and caring approach to medicine.",
          doctorImage: 'https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-88112.jpg?t=st=1719220474~exp=1719224074~hmac=19cc44dc4ef14ffb9b4224e8fa0a46351985395e55b694d1478dffdb741f3c07&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
        { 
          doctorName: 'Dr. David Lee', 
          gender: 'Male',
          specialty: ['Ophthalmology'], 
          experience: '11', 
          qualification: ['MD', 'FAAOS'],
          location: 'Ife Hospital Unit',
          languages: ['English', 'Yoruba'],
          overviewText: "Dr. David Lee is a highly experienced ophthalmologist with over 11 years of experience. He is dedicated to providing personalized care and treatment plans to his patients.",
          accomplishments: " Dr. Lee is a gifted ophthalmologist and a compassionate physician who has dedicated his career to helping patients achieve optimal vision and eye health. His exceptional clinical skills are complemented by his ability to communicate complex information in a clear and concise manner. Dr. Lee's patients appreciate his warm and caring demeanor, which puts them at ease even in the most challenging situations. Throughout his career, Dr. Lee has demonstrated a commitment to staying at the forefront of ophthalmology, ensuring that his patients receive the most advanced care available",
          doctorImage: 'https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?t=st=1719220764~exp=1719224364~hmac=a59b0987540520499cb0d3b83fdda32a880022488956be212371f7210999d21b&w=1060',
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
        { 
          doctorName: 'Dr. Sarah Adams', 
          gender: 'Female',
          specialty: ['Gynecology'], 
          experience: '7', 
          qualification: ['MD', 'FAAP'],
          location: 'Wesley Guild Hospital Unit',
          languages: ['English', 'Igbo', 'Ibibio'],
          overviewText: "Dr. Sarah Adams is a dedicated gynecologist with over 7 years of experience. She is committed to providing compassionate and personalized care to her patients",
          accomplishments: "Dr. Adams is a highly respected gynecologist known for her exceptional clinical skills and her ability to connect with patients on a personal level. She possesses a unique ability to understand the emotional and physical aspects of women's health, and she works tirelessly to develop personalized treatment plans that address both. Dr. Adams' commitment to excellence has earned her a reputation as one of the top gynecologists in her field, and her patients appreciate her warm and caring approach to medicine.",
          doctorImage: 'https://img.freepik.com/free-photo/portrait-african-american-practitioner-nurse-smiling-camera-working-illness-expertise_482257-31387.jpg?t=st=1719220549~exp=1719224149~hmac=f8222241e7bb93ca28dbb6d61f7580fb58cdf81c559249498ea7ff5bbf61b924&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: "" 
        },
        { 
          doctorName: 'Dr. Robert Garcia', 
          gender: 'Male',
          specialty: ['Neurology'], 
          experience: '13', 
          qualification: ['MD', 'FACC'],
          location: 'Ijeshaland geriatric Center',
          languages: ['English', 'Igbo'],
          overviewText: "Dr. Robert Garcia is a highly experienced neurologist with over 13 years of experience. He is dedicated to providing personalized care and treatment plans to his patients.",
          accomplishments: "Dr. Garcia's expertise in neurology has earned him a reputation as a skilled and compassionate physician. He is passionate about staying up-to-date with the latest medical advancements and has published numerous papers on neurology. His patients appreciate his empathetic approach and ability to explain complex medical concepts in a clear and concise manner.",
          doctorImage: 'https://img.freepik.com/free-photo/cheerful-doctor-making-notes-looking-away_23-2147896151.jpg?t=st=1719220409~exp=1719224009~hmac=31424f526954a965e065d04e7207a50db209c69030768ef764976f3de03690d5&w=826', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: "" 
        },
        { 
          doctorName: 'Dr. Laura Taylor', 
          gender: 'Female',
          specialty: ['Psychiatry'], 
          experience: '6', 
          qualification: ['MD', 'FACS'],
          location: 'Rural Comprehensive Health Center',
          languages: ['English', 'Ibibio'],
          overviewText: "Dr. Laura Taylor is a compassionate psychiatrist with over 6 years of experience. She is committed to providing high-quality care and treatment plans to her patients, specializing in the diagnosis and management of mental health disorders.",
          accomplishments: "Dr. Taylor's expertise in psychiatry has enabled her to develop personalized treatment plans that prioritize patient care and comfort. She is a strong advocate for mental health awareness and has published numerous papers on the topic. Her patients appreciate her empathetic approach and ability to explain complex medical concepts in a clear and concise manner.",
          doctorImage: 'https://img.freepik.com/free-photo/healthcare-workers-medicine-insurance-covid-19-pandemic-concept-serious-determined-professional-female-nurse-doctor-blue-scrubs-holding-stethoscope-wear-glasses-look-confident_1258-57384.jpg?t=st=1719220586~exp=1719224186~hmac=851678b328224cae4d774d7cd8533843677a2107500d362b94638064a7c67f8d&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
        { 
          doctorName: 'Dr. William Clark', 
          gender: 'Male',
          specialty: ['Urology'], 
          experience: '10', 
          qualification: ['MD', 'DFAPA'],
          location: 'Urban Comprehensive Health Center',
          languages: ['Yoruba'],
          overviewText: "Dr. William Clark is a skilled urologist with over 10 years of experience. He is committed to providing compassionate and personalized care to his patients, specializing in the diagnosis and treatment of urological disorders.",
          accomplishments: "Dr. Clark's expertise in urology has enabled him to develop innovative treatment plans that prioritize patient comfort and care. He is a sought-after speaker at medical conferences and has published numerous papers on urological disorders. His patients appreciate his warm bedside manner and dedication to delivering high-quality care.",
          doctorImage: 'https://img.freepik.com/free-photo/portrait-successful-young-doctor-with-folder-stethoscope_1262-12410.jpg?t=st=1719220800~exp=1719224400~hmac=e1d1f745b7fb83b1b2efbdf833474cf5862fac5e6efdbcbade28f0d06d3166d7&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
        { 
          doctorName: 'Dr. Jennifer Martinez', 
          gender: 'Female',
          specialty: ['Oncology'], 
          experience: '8', 
          qualification: ['MD', 'FAAN'],
          languages: ['English', 'Yoruba', 'Ibibio'],
          location: 'Ife Hospital Unit',
          overviewText: "Dr. Jennifer Martinez is a dedicated oncologist with over 8 years of experience. She is passionate about providing high-quality care and treatment plans to her patients, specializing in the diagnosis and management of cancer.",
          accomplishments: "Dr. Martinez's expertise in oncology has enabled her to develop personalized treatment plans that prioritize patient care and comfort. She is a strong advocate for cancer research and has published numerous papers on the topic. Her patients appreciate her empathetic approach and ability to explain complex medical concepts in a clear and concise manner.",
          doctorImage: 'https://img.freepik.com/free-psd/doctor-preparing-routine-medical-check_23-2150493308.jpg?t=st=1719220706~exp=1719224306~hmac=98bd7aecade63b2f8d531f6417f67408d48a145d233f93a4a7e716a4bfaad242&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
        { 
          doctorName: 'Dr. Gomez Stone', 
          gender: 'Male',
          specialty: ['Dermatology', 'Oncology'], 
          experience: '8', 
          qualification: ['MD', 'FAAN'],
          languages: ['English', 'Yoruba', 'Ibibio'],
          location: 'Ife Hospital Unit',
          overviewText: "Dr. Gomez Stone is a highly experienced dermatologist and oncologist with over 8 years of experience. He is dedicated to providing personalized care and treatment plans to his patients, specializing in the diagnosis and management of skin disorders and cancer.",
          accomplishments: "Dr. Stone's expertise in dermatology and oncology has enabled him to develop innovative treatment plans that prioritize patient care and comfort. He is a sought-after speaker at medical conferences and has published numerous papers on skin disorders and cancer. His patients appreciate his warm bedside manner and dedication to delivering high-quality care.",
          doctorImage: 'https://img.freepik.com/free-psd/doctor-preparing-routine-medical-check_23-2150493308.jpg?t=st=1719220706~exp=1719224306~hmac=98bd7aecade63b2f8d531f6417f67408d48a145d233f93a4a7e716a4bfaad242&w=1380', 
          linkedIn: "", 
          facebook: "",
          instagram: "", 
          twitter: ""
        },
    ];
    const contextValue = {
        departments,
        schools,
        doctorsData
    };

    return (
        <DepartmentContext.Provider value={contextValue}>
            {children}
        </DepartmentContext.Provider>
    );
};

export const useDepartments = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useDepartments must be used within a DepartmentProvider");
    }
    return context.departments;
};

export const useSchools = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useSchools must be used within a DepartmentProvider");
    }
    return context.schools;
};

export const useDoctors = () => {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useDoctors must be used within a DepartmentProvider");
    }
    return context.doctorsData;
};