import React, { createContext, useContext, useState, useEffect } from "react";

const ServicesContext = createContext();

export const ServiceProvider = ({ children }) => {
    const [healthServices, setHealthServices] = useState([]);
    const [diseasesData] = useState([
      {
        name: "Acne",
        symptoms: ["Pimples", "Blackheads", "Whiteheads"],
        overviewText: "A skin condition characterized by inflamed or infected sebaceous glands.",
        images: ["https://th.bing.com/th/id/R.ff3326b5dfcfa1c5e8823d6e71c86cd0?rik=KHlbloxZBp%2brsg&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.WCwadokbDIF_mgH03vXgDgHaFj?rs=1&pid=ImgDetMain"],
        description: [
        "Acne occurs when the pores on the skin become clogged with dead skin cells, oil, and bacteria. It can affect people of all ages, but it is most common during puberty and early adulthood. Acne can range from mild to severe, and if left untreated, can lead to scarring and emotional distress.",
        "The exact cause of acne is not fully understood, but it is thought to involve a combination of factors, including hormonal changes, stress, and genetics. Treatment options include topical creams and gels, oral antibiotics, and in severe cases, isotretinoin. Maintaining good hygiene, using non-comedogenic products, and avoiding picking or popping pimples can help manage acne.",
        "In addition to physical symptoms, acne can also have emotional and psychological effects, such as low self-esteem, anxiety, and depression. If you are experiencing acne, it is important to seek medical attention to develop a treatment plan that works for you. With proper treatment and self-care, it is possible to manage acne and improve the appearance and health of your skin."
        ],
        treatment: ["Topical treatments are creams, gels, or lotions applied directly to the skin to reduce acne. They may contain ingredients like benzoyl peroxide, salicylic acid, or sulfur. These medications help unclog pores, reduce inflammation, and prevent new acne from forming. Topical treatments are available over-the-counter (OTC) or by prescription, depending on the strength and combination of ingredients.", "Oral antibiotics and retinoids are prescription medications used to treat moderate to severe acne. Antibiotics help clear up bacterial infections and reduce inflammation, while retinoids derived from vitamin A prevent clogged pores and promote cell turnover. For severe cases, isotretinoin may be prescribed, which requires close monitoring due to potential side effects. Hormonal therapies may also be used for acne related to hormonal imbalances.", "Blue light therapy and extractions are additional treatment options. Blue light targets bacteria that cause acne, reducing inflammation and preventing future breakouts. Extractions involve a professional removing blackheads and whiteheads to help unclog pores. In some cases, corticosteroid injections may be used to reduce inflammation. It's essential to work with a dermatologist to determine the best treatment plan for your individual skin concerns and acne severity." ]
    },
    {
        name: "AIDS",
        symptoms: ["Fever", "Fatigue", "Swollen glands", "Rash", "Muscle aches"],
        overviewText: "A chronic and life-threatening condition caused by the HIV virus.", 
        images: ["https://th.bing.com/th/id/OIP.CrnVSu8ImPVF9xivwAEdogHaE7?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.18425290c29c98bbfa446d61a1afb340?rik=uXzpplj95OFACQ&pid=ImgRaw&r=0"], 
        description: ["AIDS (Acquired Immunodeficiency Syndrome) is a chronic and life-threatening condition caused by the Human Immunodeficiency Virus (HIV). HIV attacks and weakens the immune system, making the body vulnerable to various diseases and infections.", "HIV is spread through bodily fluids such as blood, semen, and breast milk, and can be transmitted through sexual contact, sharing of needles, or mother-to-child transmission during pregnancy, childbirth, or breastfeeding.", "If left untreated, HIV can progress to AIDS, which is a advanced stage of HIV infection. At this stage, the immune system is severely damaged, and the body becomes susceptible to opportunistic infections and cancers."], 
        treatment: ["Antiretroviral therapy (ART) is the primary treatment for HIV/AIDS, which involves a combination of medications that suppress the virus, slow down its progression, and prevent its transmission to others.", "ART consists of three classes of drugs: nucleoside/nucleotide reverse transcriptase inhibitors (NRTIs/NtRTIs), non-nucleoside reverse transcriptase inhibitors (NNRTIs), and protease inhibitors (PIs). These medications work together to suppress the virus and restore the immune system.", "In addition to ART, treatment for HIV/AIDS may also include medications to prevent opportunistic infections, such as pneumocystis pneumonia (PCP) and tuberculosis (TB), as well as antiviral therapy to treat hepatitis B and C co-infections."]
    },
    {
        name: "Alzheimer’s disease",
        symptoms: ["Memory loss", "Confusion", "Difficulty with communication", "Problem-solving issues", "Mood changes"],
        overviewText: "A progressive neurological disorder affecting memory and cognitive function.",
        images: ["https://th.bing.com/th/id/OIP.8M7Hu1fTjtNP8WJXDBZXJAAAAA?rs=1&pid=ImgDetMain", "https://healthjade.com/wp-content/uploads/2017/08/ALZHEIMERS_DISEASE.jpg"], 
        description: ["Alzheimer's disease is a progressive neurological disorder that affects memory, thinking, and behavior. It is the most common form of dementia, accounting for 60-80% of dementia cases.", "The disease is characterized by the buildup of beta-amyloid plaques and tau tangles in the brain, leading to the death of brain cells and a decline in cognitive function. Symptoms worsen over time, affecting memory, language, problem-solving, and daily functioning.", "Alzheimer's disease is a complex condition, and its exact causes are still not fully understood. However, research has identified several risk factors, including age, family history, genetics, lifestyle factors, and medical conditions such as diabetes and cardiovascular disease."], 
        treatment: ["There is currently no cure for Alzheimer's disease, but medications and therapies can help manage its symptoms and slow down its progression. Cholinesterase inhibitors, such as donepezil, rivastigmine, and galantamine, are commonly used to treat mild to moderate Alzheimer's.", "Memantine, an N-methyl-D-aspartate (NMDA) receptor antagonist, is used to treat moderate to severe Alzheimer's. Combination therapy may also be prescribed to manage symptoms such as depression, anxiety, and sleep disturbances.", "Non-pharmacological interventions, such as cognitive training, behavioral therapy, and caregiver support, are also essential in managing Alzheimer's disease. Research is ongoing to develop new treatments and to understand the causes of the disease, with the goal of finding a cure in the future."]
    },
    {
        name: "Anemia",
        symptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Dizziness", "Headaches"],
        overviewText: "A condition characterized by a lack of red blood cells or hemoglobin in the blood.", 
        images: ["https://th.bing.com/th/id/OIP.AcxRiVbUJ-WjjwgR8MfNXgHaHa?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.BIUCJ7Xbk-TX7rOjw9FwPQHaEH?rs=1&pid=ImgDetMain"], 
        description: ["Anemia is a medical condition characterized by a decrease in the number of red blood cells or the amount of hemoglobin in the blood, leading to inadequate oxygen delivery to the body's tissues.", "The symptoms of anemia can vary depending on the severity of the condition, but may include fatigue, weakness, pale skin, shortness of breath, dizziness, and headaches. Anemia can be caused by a variety of factors, including iron deficiency, vitamin deficiency, chronic diseases, and blood loss.", "There are different types of anemia, including iron-deficiency anemia, vitamin deficiency anemia, anemia of chronic disease, and anemia of inflammation. Anemia can be diagnosed with a blood test and treated with dietary changes, supplements, and in some cases, medication or blood transfusions."], 
        treatment: ["Iron supplements are commonly used to treat iron-deficiency anemia, and folic acid supplements may be prescribed for folate-deficiency anemia. Vitamin supplements, such as vitamin B12 injections, may be necessary for vitamin deficiency anemia.", "Blood transfusions may be necessary in severe cases of anemia, and medications such as epoetin alfa may be used to stimulate red blood cell production. Addressing underlying conditions, such as chronic diseases or infections, is also essential in treating anemia.", "Dietary changes, such as increasing iron and folate intake, can help manage anemia. Foods rich in iron include red meat, poultry, fish, and fortified cereals, while foods rich in folate include leafy greens, legumes, and whole grains. Adequate hydration and rest are also essential in managing anemia symptoms."]
    },
    {
        name: "Anxiety",
        symptoms: ["Fear", "Apprehension", "Restlessness", "Difficulty concentrating", "Sleep disturbances"],
        overviewText: "A mental health disorder characterized by excessive and persistent feelings of worry and fear.", 
        images: ["https://th.bing.com/th/id/R.a306cd6597fcb69dd6da2425372e746e?rik=Bt4d%2bFKyK0i1Bg&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.nZbtI4UaU3sxFSQI7CY1pwHaHY?w=1080&h=1076&rs=1&pid=ImgDetMain" ], 
        description: ["Anxiety, also known as anxiety disorder, is a common mental health condition characterized by feelings of worry, nervousness, and fear that are persistent and overwhelming.", "Anxiety can manifest in different ways, including generalized anxiety disorder, panic disorder, social anxiety disorder, and phobias. Physical symptoms may include a racing heart, sweating, trembling, and difficulty sleeping.", "Anxiety can be caused by a combination of genetic, environmental, and psychological factors, and may be triggered by stress, trauma, or significant life changes. If left untreated, anxiety can significantly impact daily life and relationships."], 
        treatment: ["Cognitive-behavioral therapy (CBT) is a effective therapy for anxiety, helping individuals identify and change negative thought patterns and behaviors. Medications such as selective serotonin reuptake inhibitors (SSRIs) and benzodiazepines may also be prescribed to manage symptoms.", "Relaxation techniques, such as deep breathing, progressive muscle relaxation, and mindfulness meditation, can help reduce anxiety. Lifestyle changes, including regular exercise, healthy eating, and stress management, are also essential in managing anxiety.", "Support groups and online resources can provide a sense of community and help individuals feel less isolated. In some cases, medication may be combined with therapy, and it's important to work with a mental health professional to find the best treatment plan." ]
    },
    {
        name: "Appendicitis",
        symptoms: ["Severe abdominal pain", "Nausea", "Vomiting", "Fever", "Loss of appetite"],
        overviewText: "Inflammation of the appendix, a small organ in the digestive system.", 
        images: ["https://th.bing.com/th/id/OIP.EeOUhHu7JTC26p_7CrsacQHaDt?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.AeWU49ctscVP80tHLabTtAHaHa?rs=1&pid=ImgDetMain"], 
        description: ["Appendicitis is a medical emergency that occurs when the appendix, a small organ in the lower abdomen, becomes inflamed and fills with pus.", "The appendix can become blocked, leading to infection and inflammation, which can cause severe pain, nausea, vomiting, and fever. If left untreated, the appendix can rupture, leading to peritonitis, a life-threatening infection of the abdominal cavity.", "Appendicitis is most common in people between the ages of 10 and 30, and its exact cause is not always clear. However, it is thought to be related to a blockage of the appendix, which can be caused by feces, foreign bodies, or inflammatory bowel disease."], 
        treatment: ["The primary treatment for appendicitis is an appendectomy, a surgical procedure to remove the inflamed appendix. This can be done through an open surgery or a laparoscopic surgery, which is less invasive.", "In some cases, antibiotics may be prescribed to treat the infection before surgery. However, surgery is usually necessary to prevent the appendix from rupturing and to prevent future episodes of appendicitis.", "After surgery, patients typically spend a few days in the hospital recovering and may need to take antibiotics to prevent infection. It's important to seek medical attention immediately if symptoms of appendicitis occur, as prompt treatment can help prevent complications."]
    },
    {
        name: "Arthritis",
        symptoms: ["Joint pain", "Stiffness", "Swollen joints", "Redness", "Warmth"],
        overviewText: "A chronic condition characterized by inflammation of the joints.", 
        images: ["https://th.bing.com/th/id/R.a82c7e1a5da2a9f28f2b6659713c211d?rik=zG8Cfb51%2fX2T4w&pid=ImgRaw&r=0&sres=1&sresct=1", "https://th.bing.com/th/id/R.3bb30b3ab3b4a5515fa67be6091631af?rik=joKJasXcpc1Gzw&riu=http%3a%2f%2fwww.painrelief.com.sg%2fwp-content%2fuploads%2f2010%2f08%2fRheumatoid-Arthritis.jpg&ehk=30w8WW%2bFkMayjM5tUuEM2MFx%2fcZQtYdJ0GCmSdWtyqc%3d&risl=1&pid=ImgRaw&r=0"], 
        description: ["Arthritis is a term that refers to a group of conditions that affect the joints, causing pain, stiffness, and swelling. There are over 100 different types of arthritis, each with different causes and symptoms.", "The most common types of arthritis are osteoarthritis (OA), rheumatoid arthritis (RA), and psoriatic arthritis (PsA). OA is a degenerative condition that occurs when the cartilage in the joints wears down, while RA and PsA are autoimmune diseases that cause inflammation in the joints.", "Arthritis can cause a range of symptoms, including joint pain, stiffness, swelling, redness, and warmth. It can also lead to fatigue, fever, and loss of function in the affected joints."], 
        treatment: ["Treatment for arthritis depends on the type and severity of the condition. Medications such as pain relievers, anti-inflammatory drugs, and disease-modifying anti-rheumatic drugs (DMARDs) may be prescribed to manage symptoms.", "Lifestyle modifications such as exercise, physical therapy, and weight management can also help alleviate symptoms. In some cases, surgery may be necessary to repair or replace damaged joints.", "Alternative therapies such as acupuncture, massage, and herbal supplements may also be used to manage arthritis symptoms. It's important to work with a healthcare provider to develop a comprehensive treatment plan that addresses individual needs and goals." ]
    },
    {
        name: "Atrial fibrillation",
        symptoms: ["Palpitations", "Shortness of breath", "Fatigue", "Dizziness", "Chest pain"],
        overviewText: "An irregular heartbeat, where the heart's upper chambers beat too quickly and irregularly.", 
        images: ["https://th.bing.com/th/id/R.4684b78369b783f9936bcacd3a9a7ebe?rik=620nCrjOo4S6ew&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.DS7EtZO7kyzfCHIHHtIM8AAAAA?rs=1&pid=ImgDetMain"], 
        description: ["Atrial fibrillation (AFib) is a type of irregular heartbeat, also known as arrhythmia, that affects the heart's upper chambers (atria).", "In AFib, the heart's normal rhythm is disrupted, causing the atria to beat too quickly and irregularly, which can lead to symptoms such as palpitations, shortness of breath, and fatigue.", "AFib can increase the risk of stroke, heart failure, and other heart-related complications if left untreated. It is the most common type of arrhythmia, affecting millions of people worldwide." ], 
        treatment: ["Treatment for AFib depends on the severity of symptoms and the underlying cause of the condition. Medications such as anticoagulants, anti-arrhythmics, and rate controllers may be prescribed to manage symptoms.", "Cardioversion, a procedure that uses electrical shock to restore a normal heart rhythm, may be recommended in some cases. Catheter ablation, a minimally invasive procedure that destroys the abnormal electrical pathways in the heart, may also be effective.", "Lifestyle modifications such as quitting smoking, limiting alcohol and caffeine, and exercising regularly can also help manage AFib symptoms. In some cases, surgery may be necessary to implant a pacemaker or implantable cardioverter-defibrillator (ICD)."]
    },
    {
        name: "Autism spectrum disorder",
        symptoms: ["Difficulty with social interaction", "Impaired communication", "Repetitive behaviors", "Sensory sensitivities", "Delays in development"],
        overviewText: "A neurological and developmental disorder affecting communication, social interaction, and behavior.", 
        images: ["https://th.bing.com/th/id/R.b653f8585a7b1b2717df69931c7abb61?rik=G9Hl3LCYqD3pfg&riu=http%3a%2f%2fmed.stanford.edu%2fcontent%2fdam%2fsm-news%2fimages%2f2018%2f07%2fautism-mri-menon.jpg&ehk=uDkKSUC%2bqNK6cfzWzhXHYQC%2fY636PNHV0VC3BATu34M%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.khrU-YC2IL9ZYIP-Umi6HgAAAA?rs=1&pid=ImgDetMain"], 
        description: ["Autism Spectrum Disorder (ASD) is a neurological and developmental disorder that affects communication, social interaction, and behavior.", "It is characterized by difficulties in social interaction and communication, and by repetitive behaviors or interests. ASD is a spectrum disorder, meaning that it affects individuals to varying degrees and in different ways.", "The exact causes of ASD are not fully understood, but it is thought to be related to genetic and environmental factors. Early signs of ASD may include delayed speech, social withdrawal, and repetitive behaviors."], 
        treatment: ["There is no cure for ASD, but early intervention and treatment can significantly improve symptoms and quality of life. Behavioral therapies such as Applied Behavior Analysis (ABA) and Positive Behavior Support (PBS) can help individuals with ASD develop social and communication skills.", "Medications such as selective serotonin reuptake inhibitors (SSRIs) and antipsychotics may be prescribed to manage symptoms such as anxiety, hyperactivity, and irritability. Speech and language therapy, occupational therapy, and physical therapy may also be recommended.", "Lifestyle modifications such as a healthy diet, regular exercise, and stress management can also help individuals with ASD manage their symptoms and improve their overall well-being. Family support and counseling are also important for individuals with ASD and their loved ones."]
    },
    {
        name: "Asthma",
        symptoms: ["Shortness of breath", "Chest tightness", "Wheezing"],
        overviewText: "A chronic condition affecting the airways.", 
        images: ["https://th.bing.com/th/id/OIP.5h6TEkyWfQmsqtLhQ0XYfAHaFm?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.87b6d923fcd742a2e30662b718351da0?rik=EuMBgI9HS3Avhg&pid=ImgRaw&r=0"], 
        description: ["Asthma is a chronic respiratory disease characterized by inflammation, airway constriction, and spasm, leading to recurring episodes of wheezing, coughing, chest tightness, and shortness of breath.", "The airways become sensitive to certain triggers, such as allergens, irritants, and respiratory infections, which can cause them to narrow and produce excess mucus, making it difficult to breathe.", "Asthma can be classified into different types, including allergic asthma, non-allergic asthma, exercise-induced asthma, and occupational asthma. If left unmanaged, asthma can lead to serious complications and even death." ], 
        treatment: ["Medications such as inhaled corticosteroids, bronchodilators, and combination inhalers are commonly used to manage asthma symptoms. Rescue inhalers, like albuterol, are used to relieve acute symptoms, while controller medications, like fluticasone, are used to manage chronic symptoms.", "Lifestyle modifications, such as avoiding triggers, using an air purifier, and maintaining a healthy weight, can also help manage asthma. Allergen immunotherapy, also known as allergy shots, may be recommended for some individuals with allergic asthma.", "Monitoring and managing asthma symptoms through peak flow readings, symptom journals, and regular doctor visits is crucial to prevent exacerbations and improve quality of life. In severe cases, hospitalization may be necessary to treat asthma attacks." ]
    },
    {
        name: "Ankylosing spondylitis",
        symptoms: ["Back pain", "Stiffness", "Inflammation", "Limited mobility", "Fatigue"],
        overviewText: "A chronic inflammatory disease affecting the spine and pelvis.", 
        images: ["https://sa1s3optim.patientpop.com/assets/images/provider/photos/1988481.jpg", "https://th.bing.com/th/id/R.799678a53546739a5f9b72cfd2feaf5e?rik=seHqfJWXes3U7w&pid=ImgRaw&r=0"], 
        description: ["Ankylosing spondylitis (AS) is a chronic inflammatory disease that affects the spine and pelvis, causing pain, stiffness, and fusion of the spine.", "It is a type of spondyloarthritis, which is a group of conditions that affect the joints and entheses (the areas where tendons and ligaments attach to bone).", "AS can lead to a complete fusion of the spine, resulting in a rigid and inflexible spine, known as bamboo spine. It can also affect other joints, such as the hips, knees, and ankles." ], 
        treatment: ["Medications such as nonsteroidal anti-inflammatory drugs (NSAIDs), corticosteroids, and disease-modifying anti-rheumatic drugs (DMARDs) may be prescribed to manage symptoms and slow disease progression.", "Biologic agents, such as tumor necrosis factor (TNF) inhibitors, may be recommended for severe cases. Physical therapy, exercise, and lifestyle modifications, such as maintaining good posture and taking regular breaks, can also help manage symptoms.", "Surgery may be necessary in some cases to repair damaged joints or to fuse the spine. It's important for individuals with AS to work with a healthcare provider to develop a comprehensive treatment plan that addresses their specific needs and goals."]
    },
    {
        name: "Aortic aneurysm",
        symptoms: ["Abdominal pain", "Back pain", "Dizziness", "Nausea", "Vomiting"],
        overviewText: "A bulge in the aorta, the main blood vessel carrying blood from the heart.", 
        images: ["https://th.bing.com/th/id/R.d2ff97b4133538ab53294d8813d00439?rik=HgbNEG9x2GLOUQ&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.g08RIh2Ql9R5-utK0EmWOAHaE7?rs=1&pid=ImgDetMain"], 
        description: ["Aortic aneurysm is a bulge or balloon-like enlargement of the aorta, the main artery that carries blood from the heart to the rest of the body.", "The aorta can weaken and stretch, leading to an aneurysm, which can occur in the chest (thoracic aortic aneurysm) or abdomen (abdominal aortic aneurysm).", "Aortic aneurysms can be asymptomatic, but may cause symptoms such as chest or abdominal pain, difficulty breathing, and swelling in the legs." ], 
        treatment: ["Small aneurysms may not require immediate treatment, but regular monitoring is necessary to detect any growth or changes.", "Larger aneurysms may require surgical repair, which can be done through open surgery or endovascular repair (a minimally invasive procedure).", "Endovascular repair involves placing a stent-graft through a catheter to reinforce the aorta, while open surgery involves replacing the affected section of the aorta with a graft. The goal of treatment is to prevent the aneurysm from rupturing, which can be life-threatening." ]
    },
    {
        name: "Aphasia",
        symptoms: ["Difficulty speaking", "Understanding language", "Reading", "Writing", "Communication"],
        overviewText: "A language disorder resulting from brain damage or injury.", 
        images: ["https://th.bing.com/th/id/R.fb1ec357ada1334de7022a6c7831931d?rik=oDsRPjYhdwBISQ&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.LiaoVNn4x4v6NY_aU2TrmQAAAA?rs=1&pid=ImgDetMain"], 
        description: ["Aphasia is a communication disorder that results from damage to the brain, typically caused by stroke, traumatic brain injury, or neurodegenerative disease.", "It affects an individual's ability to understand, speak, read, and write language, leading to difficulties with communication, expression, and comprehension.", "Aphasia can be classified into different types, including Broca's aphasia, Wernicke's aphasia, global aphasia, and primary progressive aphasia, each with varying levels of severity and impact on communication." ], 
        treatment: ["Speech and language therapy is the primary treatment for aphasia, aimed at improving communication skills and adapting to individual needs.", "Therapy approaches may include cognitive-linguistic training, conversation therapy, and augmentative and alternative communication (AAC) strategies.", "Family support and education are also essential in helping individuals with aphasia cope with the condition and improve their quality of life. With appropriate treatment and support, individuals with aphasia can improve their communication skills and regain independence." ]
    },
    {
        name: "Aplastic anemia",
        symptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Dizziness", "Headaches"],
        overviewText: "A rare blood disorder where the bone marrow fails to produce enough new blood cells.", 
        images: ["https://th.bing.com/th/id/OIP.SePdcJw-mnYYsY4KoSE3xwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.lR7JBcIkvaa37u7jJ9RwgQHaEx?rs=1&pid=ImgDetMain"], 
        description: ["Aplastic anemia is a rare blood disorder characterized by the inability of the bone marrow to produce sufficient red blood cells, white blood cells, and platelets.", "This leads to a decrease in the number of healthy blood cells, causing fatigue, weakness, pale skin, frequent infections, and easy bleeding or bruising.", "Aplastic anemia can be caused by genetic mutations, exposure to certain chemicals or radiation, viral infections, or autoimmune disorders. It can be severe and life-threatening if left untreated."], 
        treatment: ["Treatment options for aplastic anemia include medications to stimulate blood cell production, blood transfusions, and bone marrow transplantation.", "Immunosuppressive therapy may be used to suppress the immune system and prevent further damage to the bone marrow.", "In some cases, stem cell therapy may be recommended to help regenerate healthy bone marrow cells. With appropriate treatment, many individuals with aplastic anemia can achieve remission and improve their quality of life."]
    },
    {
        name: "Arrhythmia",
        symptoms: ["Palpitations", "Shortness of breath", "Fatigue", "Dizziness", "Chest pain"],
        overviewText: "An irregular heartbeat, where the heart beats too quickly, slowly, or irregularly.", 
        images: ["https://th.bing.com/th/id/OIP.gzp0SltTQRECZQWutkvS2gHaH6?w=185&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7", "https://th.bing.com/th/id/R.193b4827b1d1a1ad4b89037ddd6112f1?rik=LUYZH4X9j0Ykjg&riu=http%3a%2f%2fibgnews.com%2fwp-content%2fuploads%2f2018%2f05%2fArrhythmiaClassification.jpg&ehk=pR9Nr%2f3jIu%2bHKVYyrn4bSl4ix2H2NkLYMl0GJMJ92aE%3d&risl=&pid=ImgRaw&r=0"], 
        description: ["Arrhythmia, also known as cardiac arrhythmia or dysrhythmia, refers to a group of conditions that affect the heart's rhythm, causing an irregular heartbeat.", "The heart may beat too fast (tachycardia), too slow (bradycardia), or in an irregular pattern, disrupting the normal electrical activity of the heart.", "Arrhythmias can be harmless, but some can be serious and even life-threatening, causing symptoms such as palpitations, shortness of breath, and chest pain."], 
        treatment: ["Treatment for arrhythmias depends on the type and severity of the condition, and may include medications to control heart rate and rhythm, cardioversion to restore a normal heartbeat, or catheter ablation to destroy abnormal electrical pathways in the heart.", "In some cases, implantable devices such as pacemakers, implantable cardioverter-defibrillators (ICDs), or cardiac resynchronization therapy (CRT) devices may be necessary to manage the arrhythmia.", "Lifestyle modifications, such as avoiding triggers like caffeine and alcohol, exercising regularly, and managing stress, can also help manage arrhythmias."]
    },
    {
        name: "Asbestosis",
        symptoms: ["Shortness of breath", "Coughing", "Fatigue", "Chest pain", "Difficulty breathing"],
        overviewText: "A chronic lung disease caused by inhaling asbestos fibers.", 
        images: ["https://th.bing.com/th/id/R.b6eb5b7b080d4b32c576a53223df25af?rik=S2Pemw5OPQpggg&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.645d400fd16bf7ce78adc706c2c09458?rik=z0j7yzpI0fKnAw&pid=ImgRaw&r=0"], 
        description: ["Asbestosis is a lung disease caused by the long-term inhalation of asbestos fibers, leading to inflammation and scarring.", "The symptoms of asbestosis include shortness of breath, coughing, wheezing, and chest tightness.", "Asbestosis can lead to serious complications, including lung cancer, mesothelioma, pulmonary heart disease, and respiratory failure."], 
        treatment: ["There is no cure for asbestosis, but oxygen therapy and other supportive treatments can help manage its symptoms.", "Medications such as bronchodilators and inhalers may be prescribed to relieve symptoms.", "Pulmonary rehabilitation programs can also help improve lung function and overall health."]
    },
    {
        name: "Ascites",
        symptoms: ["Abdominal swelling", "Pain", "Fatigue", "Loss of appetite", "Nausea"],
        overviewText: "The accumulation of fluid in the abdominal cavity, often caused by liver disease.", 
        images: ["https://th.bing.com/th/id/R.a0ddcc7bc02923d2cfe15db96edd1553?rik=W3%2bQU0JDVpIvMg&pid=ImgRaw&r=0", "https://assets.lybrate.com/imgs/tic/enadp/what-are-the-types-of-ascites.webp"], 
        description: ["Ascites is a medical condition characterized by the accumulation of fluid in the peritoneal cavity, which is the space between the lining of the abdominal wall and the organs in the abdomen.", "The fluid buildup can cause swelling, discomfort, and pain in the abdominal area, as well as shortness of breath and fatigue.", "Ascites can be caused by liver disease, cancer, heart failure, kidney disease, and other conditions that disrupt the body's fluid balance."], 
        treatment: ["Treatment for ascites depends on the underlying cause and may include medications to manage symptoms, such as diuretics to reduce fluid buildup.", "Paracentesis, a procedure to drain fluid from the peritoneal cavity, may be performed to relieve discomfort and improve breathing.", "In some cases, surgery or other interventional procedures may be necessary to address the underlying cause of ascites."]
    },
    {
        name: "Atopic dermatitis",
        symptoms: ["Itchy skin", "Redness", "Inflammation", "Dryness", "Crusting"],
        overviewText: "A chronic skin condition characterized by dry, itchy, and inflamed skin.", 
        images: ["https://th.bing.com/th/id/R.b8e70ff91377c399cb080ad64a65241b?rik=D3zmI%2f2%2bxjSErw&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.GhqOEoqGszltDIh4hsy2pwAAAA?rs=1&pid=ImgDetMain"], 
        description: ["Atopic dermatitis (eczema) is a condition that causes dry, itchy and inflamed skin.", "It's common in young children but can occur at any age.", "Dry, cracked skin, itchiness, rash on swollen skin that varies in color depending on your skin color, small, raised bumps, on brown or Black skin, oozing and crusting, thickened skin, darkening of the skin around the eyes, raw, sensitive skin from scratching are all symptoms of atopic dermatitis." ], 
        treatment: ["There is no cure for atopic dermatitis, but the condition can be managed with proper care and treatment options include corticosteroid creams, antihistamines and prescription medications.", "Moisturizing regularly and following other skin care habits can relieve itching and prevent new outbreaks (flares).", "Medications such as topical or oral medications, or other therapies can be prescribed by a dermatologist." ]
    },
    {
        name: "Atrial septal defect",
        symptoms: ["Fatigue", "Shortness of breath", "Swollen legs", "Heart palpitations", "Coughing"],
        overviewText: "A heart defect where there is a hole in the wall between the upper heart chambers.", 
        images: ["https://th.bing.com/th/id/R.1e696a0c2cba80db70a38f0e3261127f?rik=nVZ43n4xYHvNhQ&pid=ImgRaw&r=0", "https://i.pinimg.com/originals/9c/91/b0/9c91b09850e979265f83f9999379fd6c.jpg"],
        description: ["A congenital heart defect, atrial septal defect (ASD) is a hole in the atrial septum, the muscular wall that separates the two upper chambers of the heart.", "Small ASDs often don't need treatment, but larger ones may require repair or surgery to lower the risk of complications.", "There are four main types of atrial septal defects, defined by their location in the atrial septum: secundum, primum, sinus venosus and coronary sinus atrial septal defect." ], 
        treatment: ["Atrial septal defects can be closed through surgery or percutaneous repair, which is a nonsurgical procedure.", "Percutaneous repair uses a device called a septal occluder to close the hole in the atrial septum.", "Surgery is needed for some types of ASDs, and it usually involves using a tissue patch to close the ASD." ]

    },
    {
        name: "Autoimmune hepatitis",
        symptoms: ["Fatigue", "Loss of appetite", "Nausea", "Vomiting", "Abdominal pain"],
        overviewText: "A chronic liver disease where the immune system attacks the liver.", 
        images: ["https://th.bing.com/th/id/OIP.tb_2W56f9eql-eq_TzXbnAHaD9?rs=1&pid=ImgDetMain", "https://c8.alamy.com/comp/KJ1GY1/the-difference-of-healthy-liver-cells-and-cirrhosis-KJ1GY1.jpg"], 
        description: ["Autoimmune hepatitis is a chronic liver disease in which the immune system mistakenly attacks and damages the liver cells.", "The disease is characterized by inflammation and scarring of the liver, which can lead to cirrhosis and liver failure.", "The exact cause of autoimmune hepatitis is unknown, but genetic and environmental factors are thought to play a role."], 
        treatment: ["Medications such as corticosteroids and immunosuppressants are used to suppress the immune system and reduce inflammation.", "Antiviral medications may be prescribed if a viral trigger is suspected.", "In severe cases, a liver transplant may be necessary. Lifestyle modifications, such as avoiding alcohol and maintaining a healthy diet, are also important in managing the disease."]
    },
    {
        name: "Autonomic neuropathy",
        symptoms: ["Dizziness", "Lightheadedness", "Fainting", "Nausea", "Vomiting"],
        overviewText: "A nerve damage disorder that affects the autonomic nervous system.", 
        images: ["https://th.bing.com/th/id/OIP.soCse7p9_F7yIjPuJGLqXAHaCY?rs=1&pid=ImgDetMain"], 
        description: ["Autonomic neuropathy occurs when there is damage to the nerves that control automatic body functions, such as blood pressure, temperature control, digestion, bladder function, and sexual function.", "The symptoms of autonomic neuropathy can vary widely depending on the specific nerves affected, but may include dizziness, urinary problems, sexual difficulties, difficulty digesting food, and sweating problems.", "Autonomic neuropathy can be caused by a variety of factors, including diabetes, irregular protein buildup in organs (amyloidosis), autoimmune diseases, certain medications, viruses and bacteria, and inherited disorders." ],  
        treatment: ["Treatment for autonomic neuropathy typically focuses on managing the underlying cause and relieving symptoms, and may include medications to control pain, blood pressure, and other symptoms.", "Lifestyle modifications such as regular exercise, a healthy diet, stress management, and avoiding alcohol and tobacco can also help manage the condition.", "In some cases, physical therapy, speech therapy, or other specialized therapies may be necessary to help manage specific symptoms and improve quality of life."]
    },
    {
        name: "Avascular necrosis",
        symptoms: ["Joint pain", "Stiffness", "Limited mobility", "Groin pain", "Leg weakness"],
        overviewText: "A condition where the blood supply to the bones is disrupted, leading to bone death.", 
        images: ["https://th.bing.com/th/id/OIP._XjF3Q0rjnCBXms6tCklLAHaD4?rs=1&pid=ImgDetMain", "https://www.mdpi.com/bioengineering/bioengineering-08-00200/article_deploy/html/images/bioengineering-08-00200-g001.png"], 
        description: ["Avascular necrosis (AVN) is a condition that occurs when the blood supply to the bone is disrupted, causing the bone tissue to die.", "The condition can be caused by a variety of factors, including injury, infection, certain medications, and underlying medical conditions such as sickle cell disease and rheumatoid arthritis.", "If left untreated, AVN can lead to the collapse of the bone and joint damage, causing pain, stiffness, and limited mobility." ], 
        treatment: ["The goal of treatment for AVN is to improve blood flow to the affected bone and relieve pain.", "Conservative treatments such as physical therapy, exercises, and assistive devices may be recommended to help improve mobility and strength.", "Surgical options may include core decompression, osteotomy, or joint replacement, and are often necessary for more advanced cases of AVN."]
    },
    {
        name: "Azoospermia",
        symptoms: ["Infertility", "Low sperm count", "No sperm in ejaculation"],
        overviewText: "A condition where there is no sperm in the semen, often caused by a blockage or genetic issue.", 
        images: ["https://th.bing.com/th/id/R.e4f4b9c55511b6c6d2142749eac8fee8?rik=aphcudXiCauz5g&pid=ImgRaw&r=0", "https://www.almares.it/wp-content/uploads/2017/09/Senza-titolo.png"], 
        description: ["Azoospermia is a condition where a man's semen contains no sperm, making it difficult or impossible to conceive naturally.", "It affects about 1% of all men and can be caused by various factors, including blockages, hormonal imbalances, testicular failure, and genetic disorders.", "Azoospermia can be diagnosed with a semen analysis and may require further testing to determine the underlying cause." ], 
        treatment: ["Treatment for azoospermia depends on the underlying cause and may include medications to address hormonal imbalances or infections.", "Assisted reproductive technologies (ART) such as in vitro fertilization (IVF) or intracytoplasmic sperm injection (ICSI) may be recommended.", "In some cases, surgery may be necessary to repair blockages or retrieve sperm directly from the testicles." ]
    },    
    {
        name: "Achondroplasia",
        symptoms: ["Short stature", "Long trunk", "Short arms and legs", "Large head", "Small hands and feet"],
        overviewText: "A genetic disorder affecting bone growth, leading to dwarfism and other skeletal abnormalities.", 
        images: ["https://th.bing.com/th/id/OIP.E6RxPIZ7ytsmUzru3R1amwHaHa?rs=1&pid=ImgDetMain", "https://ceo.medword.net/wp-content/uploads/2017/01/Gallery-Patient-SL-Oct-5-1024x627.jpg"], 
        description: ["Achondroplasia is a genetic disorder that affects bone growth, leading to short-limbed dwarfism and characteristic physical features.", "It is caused by a mutation in the FGFR3 gene and is the most common form of short-limbed dwarfism, affecting about 1 in 27,500 people.", "People with achondroplasia typically have a normal intelligence, but may experience various health complications, such as sleep apnea, ear infections, and spinal problems."], 
        treatment: ["There is no cure for achondroplasia, but various treatments can help manage the symptoms and complications.", "Orthopedic surgery may be necessary to correct physical deformities, such as bowed legs or spinal curvature.", "Other treatments may include physical therapy, pain management, and assistive devices, such as braces or walkers, to improve mobility and quality of life." ]
    },
    {
        name: "Adrenal insufficiency",
        symptoms: ["Fatigue", "Weight loss", "Skin changes", "Hair loss", "Irritability"],
        overviewText: "A condition where the adrenal glands don't produce enough hormones, leading to a range of symptoms.", 
        images: ["https://th.bing.com/th/id/OIP.5FTdqe1CQoch7fmkZ9dPQwHaEK?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.45e06fe92e529bde598242b48b6ca0a6?rik=mQV%2b4axknp8bjQ&pid=ImgRaw&r=0"], 
        description: ["Adrenal insufficiency is a rare endocrine disorder in which the adrenal glands do not produce enough cortisol and aldosterone hormones.", "This can lead to fatigue, weight loss, skin changes, and low blood pressure, among other symptoms.", "The condition can be caused by various factors, including adrenal gland damage, pituitary gland problems, and genetic disorders."],  treatment: ["Treatment for adrenal insufficiency typically involves replacing the deficient hormones with medication.", "Glucocorticoid replacement therapy is the primary treatment, and mineralocorticoid replacement therapy may also be necessary.", "Lifestyle modifications, such as a healthy diet and regular exercise, can also help manage the condition and reduce symptoms."]
    },
    {
        name: "Agoraphobia",
        symptoms: ["Fear of crowds", "Fear of public places", "Avoidance of situations", "Panic attacks", "Anxiety"],
        overviewText: "An anxiety disorder where individuals fear being in public places or situations.", 
        images: ["https://th.bing.com/th/id/OIP.oiYQ4YJq944vJ6iyYgp08QHaEA?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.7O4K7hpV_TsZ30I0TcWwPgHaDt?rs=1&pid=ImgDetMain"], 
        description: ["Agoraphobia is a type of anxiety disorder in which individuals fear and avoid public places or situations where they may feel trapped or unable to escape.", "People with agoraphobia often experience panic attacks, feelings of anxiety, and avoidance behaviors, which can significantly impact daily life and social relationships.", "The exact cause of agoraphobia is unknown, but it is thought to involve a combination of genetic, environmental, and psychological factors." ], 
        treatment: ["Cognitive-behavioral therapy (CBT) is a effective treatment for agoraphobia, helping individuals change negative thought patterns and behaviors.", "Exposure therapy, a type of CBT, involves gradually exposing individuals to feared situations to build confidence and coping skills.", "Medications such as antidepressants and anti-anxiety drugs may also be prescribed to manage symptoms and support therapy."]
    },
    {
        name: "Amyloidosis",
        symptoms: ["Fatigue", "Weight loss", "Swollen legs", "Shortness of breath", "Numbness in hands and feet"],
        overviewText: "A group of diseases where abnormal proteins accumulate in organs and tissues, leading to damage.", images: ["https://th.bing.com/th/id/OIP.3JL35KarWsUVmBkPkBIyeAHaE7?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.AwK19G7KVGX_koefc-QKAQHaFX?rs=1&pid=ImgDetMain"], 
        description: ["Amyloidosis is a group of diseases characterized by the accumulation of abnormal proteins called amyloid fibrils in various organs and tissues.", "This can lead to damage and dysfunction of the affected organs, such as the kidneys, heart, liver, and nervous system.", "There are several types of amyloidosis, including primary amyloidosis, secondary amyloidosis, and familial amyloidosis, each with different causes and symptoms." ], 
        treatment: ["Treatment for amyloidosis depends on the type and severity of the disease, and may include medications to manage symptoms and slow disease progression.", "Chemotherapy, stem cell transplantation, and organ transplantation may be necessary in some cases.", "Supportive care, such as physical therapy, pain management, and nutritional support, is also important to manage symptoms and improve quality of life." ]
    },
    {
        name: "Anorexia nervosa",
        symptoms: ["Low body weight", "Fear of gaining weight", "Restrictive eating", "Excessive exercise", "Distorted body image"],
        overviewText: "A serious eating disorder characterized by a distorted body image and restrictive eating habits.", 
        images: ["https://th.bing.com/th/id/R.7adeb0ad3b2c05b8f860e383e234ff80?rik=d0GqFiqzM3OGFw&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.MENlH74v75c18RJLtMDbuAHaFu?rs=1&pid=ImgDetMain"], 
        description: ["Anorexia nervosa is a serious eating disorder characterized by a distorted body image and an intense fear of gaining weight.", "Individuals with anorexia nervosa restrict their food intake to the point of significantly low body weight, often accompanied by other symptoms such as excessive exercise and obsessive weight checking.", "If left untreated, anorexia nervosa can lead to severe physical and emotional complications, including malnutrition, organ damage, and even death." ], 
        treatment: ["Treatment for anorexia nervosa typically involves a combination of psychotherapy, nutrition counseling, and medication.", "Cognitive-behavioral therapy (CBT) and family-based therapy (FBT) are effective therapies for anorexia nervosa.", "Medications such as antidepressants and anti-anxiety drugs may be used to manage symptoms like depression, anxiety, and obsessive-compulsive behaviors." ]
    },
    {
        name: "Anthrax",
        symptoms: ["Skin sores", "Swollen lymph nodes", "Fever", "Chills", "Cough"],
        overviewText: "A bacterial infection that can be deadly if left untreated.", 
        images: ["https://th.bing.com/th/id/OIP.icaxSTE697FUq0JwsyOy_QHaEK?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.wOaRxbGhWLvDeWhoJcDzFgHaFL?w=515&h=360&rs=1&pid=ImgDetMain"], 
        description: ["Anthrax is a serious infectious disease caused by the bacterium Bacillus anthracis.", "It can occur in three forms: cutaneous (skin), inhalation (lungs), and gastrointestinal (digestive tract).", "Anthrax is typically found in animals, but can be transmitted to humans through contact with infected animals, contaminated animal products, or biological warfare."], 
        treatment: ["Anthrax is treated with antibiotics, such as ciprofloxacin and doxycycline, which are effective against the bacteria.", "Early treatment is essential, as anthrax can be fatal if left untreated.", "In severe cases, hospitalization may be necessary to manage symptoms and provide supportive care, such as respiratory assistance and wound management." ]
    },
    {
        name: "Apnea",
        symptoms: ["Pauses in breathing", "Loud snoring", "Morning headaches", "Fatigue", "Difficulty concentrating"],
        overviewText: "A sleep disorder where breathing is interrupted, often due to obstruction or brain signal issues.", 
        images: ["https://th.bing.com/th/id/R.6fcf65bca1ed002ce6ab7865f5e1820d?rik=SoLZIeo9CfIjGw&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.-Qt8niv88vuMbBnFv51FoQAAAA?rs=1&pid=ImgDetMain"], 
        description: ["Apnea is a condition characterized by paused or absent breathing, often occurring during sleep.", "There are three types of apnea: obstructive sleep apnea (OSA), central sleep apnea (CSA), and mixed sleep apnea.", "Apnea can lead to daytime sleepiness, fatigue, and increased risk of cardiovascular disease, high blood pressure, and stroke." ], 
        treatment: ["Treatment for apnea depends on the type and severity of the condition.", "Continuous positive airway pressure (CPAP) therapy is a common treatment for OSA, while CSA may require medication or respiratory therapy.", "Lifestyle changes, such as weight loss, smoking cessation, and avoiding alcohol and sedatives, can also help manage symptoms." ]
    },
    {
        name: "Adrenal gland tumor",
        symptoms: ["Unintended weight loss", "Fatigue", "High blood pressure", "Excessive sweating", "Irregular heartbeat"],
        overviewText: "A tumor that develops in the adrenal gland, which can be benign or cancerous.", 
        images: ["https://th.bing.com/th/id/R.dadbdc4b1c6b1de0d7d4bc5b0f407d85?rik=OGyVIx8DgqZpIQ&pid=ImgRaw&r=0", "https://arizonapremiersurgery.com/wp-content/uploads/2023/06/AdrenalGlandTumorArizona-Premier-Surgery.jpg"], 
        description: ["An adrenal gland tumor is a growth on the adrenal gland, which can be benign (non-cancerous) or malignant (cancerous).", "The tumor can produce excess hormones, leading to various symptoms such as high blood pressure, weight gain, and changes in mood and sexuality.", "The most common type of adrenal gland tumor is a pheochromocytoma, which produces excess adrenaline and can cause hypertension, headaches, and palpitations." ], 
        treatment: ["Surgery is the primary treatment for adrenal gland tumors, with the goal of removing the tumor and preserving adrenal gland function.", "In some cases, medication may be used to manage symptoms and reduce hormone production before surgery.", "Chemotherapy and radiation therapy may be necessary for malignant tumors that have spread to other parts of the body." ]
    },
    {
        name: "Addison's disease",
        symptoms: ["Fatigue", "Weight loss", "Low blood pressure", "Skin changes", "Nausea and vomiting"],
        overviewText: "A rare endocrine disorder where the adrenal glands don't produce enough hormones.", 
        images: ["https://th.bing.com/th/id/R.ca15001cd083cfeb8875bdbe22a6a6a3?rik=Q%2fi6QrH6flqYJw&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.SquonM9WKFErYJ6j3P02jAHaEy?rs=1&pid=ImgDetMain "], 
        description: ["Addison's disease, also called adrenal insufficiency or primary adrenal insufficiency, is a rare endocrine disorder.", "It is characterized by inadequate production of the steroid hormones, cortisol and aldosterone, by the adrenal glands.", "Symptoms develop over several months and include fatigue, weight loss, loss of appetite, darkened skin, and low blood pressure, among others."], 
        treatment: ["Treatment involves replacing the absent hormones with synthetic corticosteroids, such as hydrocortisone or fludrocortisone.", "Lifelong, continuous steroid replacement therapy is necessary, with regular follow-up treatment and monitoring for other health problems.", "A high-salt diet may also be useful in some people, and injections of corticosteroids and intravenous fluids with dextrose may be required in some cases."]
    },
    {
        name: "Acromegaly",
        symptoms: ["Excessive growth", "Large hands and feet", "Coarse facial features", "Joint pain", "Sleep apnea"],
        overviewText: "A rare hormonal disorder where the pituitary gland produces too much growth hormone.", 
        images: ["https://th.bing.com/th/id/OIP.DJl7DPkfkm_fKhcc68ljjAHaHa?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.31PYbchFqQ3lcDtlcc3RDgHaHw?rs=1&pid=ImgDetMain"], 
        description: ["Acromegaly is a rare hormonal disorder that develops when the pituitary gland produces too much growth hormone during adulthood.", "This excess growth hormone causes the body's tissues and organs to grow abnormally, leading to an enlargement of the hands, feet, and face.", "If left untreated, acromegaly can lead to serious health complications, such as type 2 diabetes, sleep apnea, high blood pressure, and cardiovascular disease." ], 
        treatment: ["Surgery to remove the tumor is usually the preferred treatment option, as it can immediately stop the excess production of growth hormone.", "Medications such as somatostatin analogues or GH receptor antagonists can be used if surgery is contraindicated or not curative, to reduce growth hormone production and alleviate symptoms.", "Radiation therapy may also be used if neither surgery nor medications are effective, to shrink the tumor and reduce growth hormone production." ]
    },
    {
        name: "Back pain",
        symptoms: ["Pain in the back", "Stiffness", "Limited mobility", "Muscle spasms", "Numbness or tingling"],
        overviewText: "Discomfort or pain in the back, which can be acute or chronic.", 
        images: ["https://th.bing.com/th/id/OIP.tA-hMqgyqMTJy9hRMkW1igAAAA?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.f3CXwN0mUVLWZyrqAYn2GgHaER?rs=1&pid=ImgDetMain"], 
        description: ["Back pain is a common condition that affects the muscles, bones, and nerves of the back, causing discomfort, stiffness, and limited mobility.", "It can be acute (short-term) or chronic (long-term), and can range from a dull ache to a sharp, stabbing pain, depending on the underlying cause.", "The symptoms of back pain can vary widely, and may include muscle spasms, numbness or tingling, and difficulty standing, sitting, or moving around." ], 
        treatment: ["Treatment for back pain depends on the underlying cause, but may include pain relief medications, muscle relaxants, and physical therapy to improve strength and flexibility.", "Chiropractic care, massage, and acupuncture may also be recommended, as well as lifestyle changes such as regular exercise, proper lifting techniques, and stress reduction.", "In some cases, surgery may be necessary to relieve compression on nerves or stabilize the spine, but this is typically considered a last resort after other options have been exhausted." ]
    },
    {
        name: "Bacterial infections",
        symptoms: ["Fever", "Chills", "Redness and swelling", "Pus or discharge", "Pain"],
        overviewText: "Infections caused by harmful bacteria, which can affect various parts of the body.", 
        images: ["https://th.bing.com/th/id/R.8d16239fed50b1d18d0d206c852b85a8?rik=sq1aUGYu73OkFQ&pid=ImgRaw&r=0", "https://images.fineartamerica.com/images-medium-large-5/bacterial-skin-infection-steve-gschmeissnerscience-photo-library.jpg"], 
        description: ["Bacterial infections occur when harmful bacteria enter the body and multiply, causing a range of symptoms and health problems.", "These infections can affect various parts of the body, including the skin, respiratory tract, urinary tract, and bloodstream.", "Bacterial infections can be spread through person-to-person contact, contaminated food and water, and contact with infected animals or environments." ], 
        treatment: ["Antibiotics are the primary treatment for bacterial infections, and the type and duration of treatment depend on the specific infection and severity.", "It's essential to complete the full course of antibiotics as prescribed, even if symptoms improve before finishing the medication.", "In addition to antibiotics, treatment may also include supportive care, such as rest, hydration, and pain management, as well as addressing any underlying conditions or complications."]
    },
    {
        name: "Bipolar disorder",
        symptoms: ["Mood swings", "Depression", "Mania", "Fatigue", "Difficulty concentrating"],
        overviewText: "A mental health condition characterized by extreme mood swings and emotional highs and lows.", 
        images: ["https://th.bing.com/th/id/OIP.m6c8hg4wNBH7hCb4dTwdtwHaE8?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/OIP.3YYdnDr1diOCe4cEh_r33wHaGQ?rs=1&pid=ImgDetMain"], 
        description: ["Bipolar disorder, also known as manic-depressive illness, is a brain disorder that causes unusual shifts in mood, energy, activity levels, and the ability to carry out daily tasks.", "It involves periods of extreme mood swings, from mania or hypomania (feeling extremely happy or energetic) to depression (feeling extremely sad or hopeless).", "Symptoms can include irritability, anxiety, sleep disturbances, and difficulty concentrating, and may also involve psychotic symptoms such as hallucinations or delusions." ], 
        treatment: ["Treatment for bipolar disorder typically involves a combination of medications, including mood stabilizers, antipsychotics, and antidepressants, to manage symptoms and prevent episodes.", "Psychotherapy, such as cognitive-behavioral therapy (CBT) and interpersonal therapy (IPT), can also be effective in managing symptoms and improving relationships.", "Lifestyle changes, such as regular exercise, healthy eating, and stress management, can also help manage symptoms and improve overall well-being."]
    },
    {
        name: "Bladder cancer",
        symptoms: ["Blood in urine", "Painful urination", "Frequent urination", "Pain in the lower abdomen", "Weakness"],
        overviewText: "A type of cancer that affects the bladder, often caused by smoking or exposure to chemicals.", 
        images: ["https://th.bing.com/th/id/R.1ee22d99cf911e553d8ae057eba17e39?rik=z3x89kYDqU7%2bnQ&riu=http%3a%2f%2fbmrat.org%2fpublic%2fjournals%2f2%2farticle_371_cover_en_US.jpg&ehk=Yc%2fnxFn5X8PwcuHkQt1SlzRk6o0hhHUrr7wNraNbbM0%3d&risl=&pid=ImgRaw&r=0", "https://aceoncology.org/wp-content/uploads/2020/12/file-1608725421950-Picture-Blog-Post-32_BladderCancer.jpg"], 
        description: ["Bladder cancer occurs when abnormal cells in the bladder grow and multiply uncontrollably, forming a tumor.", "The most common type of bladder cancer is transitional cell carcinoma (TCC), which starts in the inner lining of the bladder.", "Symptoms may include blood in the urine, painful urination, frequent urination, and pain in the lower abdomen or back."], 
        treatment: ["Surgery is often the first line of treatment for bladder cancer, and may involve removing the tumor, part of the bladder, or the entire bladder.", "Other treatments may include chemotherapy, radiation therapy, and immunotherapy, which can help kill cancer cells and reduce symptoms.", "In some cases, a combination of treatments may be used, and the doctor may also recommend ongoing surveillance to monitor for recurrences." ]
    },
    {
        name: "Bone fractures",
        symptoms: ["Pain", "Swelling", "Bruising", "Limited mobility", "Deformity"],
        overviewText: "A broken bone, which can be caused by injury, osteoporosis, or other conditions.", 
        images: ["https://th.bing.com/th/id/OIP.Bd8XOTA8AnoaTQB5kSLy1QHaEK?rs=1&pid=ImgDetMain", "https://th.bing.com/th/id/R.00ec3648c154667bac3a1ea71a0e8ad3?rik=iM%2bWvZx8GXum6Q&pid=ImgRaw&r=0"], 
        description: ["A bone fracture, also known as a broken bone, occurs when a bone is cracked or broken due to trauma, osteoporosis, or other conditions.", "There are different types of fractures, including stable fractures, comminuted fractures, and compound fractures, which can vary in severity and impact.",  "Symptoms may include pain, swelling, bruising, and limited mobility, and diagnosis is typically made through X-rays or other imaging tests."], 
        treatment: ["Treatment for bone fractures usually involves immobilization with a cast or splint, pain management with medication, and rehabilitation through physical therapy.", "Surgery may be necessary for more complex fractures, and may involve the use of plates, screws, or rods to stabilize the bone.", "Recovery time varies depending on the severity of the fracture and the individual's overall health, but may take several weeks or even months for full healing."] 

    },
    {
        name: "Brain tumor",
        symptoms: ["Headaches", "Seizures", "Nausea and vomiting", "Blurry vision", "Memory loss"],
        overviewText: "An abnormal growth of cells in the brain, which can be benign or cancerous.", 
        images: ["https://th.bing.com/th/id/OIP._8eGDGy8q02rSWkuvrrhhAHaEw?rs=1&pid=ImgDetMain", "https://assets.neurosurgicalatlas.com/aaroncohen-gadol-com/patients/brain-tumor-fig1.jpg"], 
        description: ["A brain tumor is an abnormal growth of cells in the brain, which can be benign (non-cancerous) or malignant (cancerous).", "Brain tumors can originate in the brain or spread from other parts of the body, and can affect brain function, personality, and overall health.", "Symptoms may include headaches, seizures, weakness or numbness in the arms or legs, vision changes, and difficulty with speech or memory."], 
        treatment: ["Treatment for brain tumors depends on the type, size, and location of the tumor, as well as the individual's overall health.", "Surgery is often the first line of treatment, followed by radiation therapy and chemotherapy to kill cancer cells and shrink the tumor.", "In some cases, targeted therapy or immunotherapy may also be used, and rehabilitation may be necessary to regain lost cognitive or motor skills." ]
    },
    {
        name: "Breast cancer",
        symptoms: ["Lump in the breast", "Nipple discharge", "Change in breast size", "Redness or scaliness", "Pain"],
        overviewText: "A type of cancer that affects the breast tissue, often caused by genetic or hormonal factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bursitis",
        symptoms: ["Pain and swelling", "Warmth and redness", "Limited mobility", "Fever", "Swollen joint"],
        overviewText: "Inflammation of the fluid-filled sacs (bursae) that cushion joints and reduce friction.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Botulism",
        symptoms: ["Muscle weakness", "Fatigue", "Drooping eyelids", "Slurred speech", "Difficulty swallowing"],
        overviewText: "A rare but serious illness caused by the botulinum toxin, often contracted through contaminated food or wounds.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Brucellosis",
        symptoms: ["Fever", "Fatigue", "Swollen lymph nodes", "Joint pain", "Night sweats"],
        overviewText: "A bacterial infection caused by Brucella bacteria, often transmitted through contaminated milk or contact with infected animals.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bulimia nervosa",
        symptoms: ["Frequent bingeing and purging", "Secretive eating habits", "Electrolyte imbalance", "Tooth decay", "Gastric rupture"],
        overviewText: "A serious eating disorder characterized by cycles of bingeing and purging, often accompanied by emotional and psychological distress.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bunion",
        symptoms: ["Bony bump on the side of the foot", "Redness and swelling", "Pain and discomfort", "Corn or callus formation", "Difficulty walking"],
        overviewText: "A bony growth that forms on the joint at the base of the big toe, often caused by poorly fitting shoes or genetic factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Burns",
        symptoms: ["Redness and swelling", "Pain and discomfort", "Blisters or charring", "Fever", "Difficulty breathing"],
        overviewText: "Injuries caused by heat, electricity, or chemicals, which can damage skin and underlying tissues.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Berylliosis",
        symptoms: ["Shortness of breath", "Coughing", "Fatigue", "Weight loss", "Blue discoloration of the skin"],
        overviewText: "A chronic lung disease caused by inhaling beryllium particles, often found in industries such as aerospace and defense.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bell’s palsy",
        symptoms: ["Sudden weakness or paralysis of the face", "Drooping eyelid", "Difficulty smiling or closing the eye", "Numbness or tingling", "Headache"],
        overviewText: "A condition that affects the nerve that controls the muscles of the face, causing weakness or paralysis.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Barrett's esophagus",
        symptoms: ["Heartburn", "Regurgitation", "Difficulty swallowing", "Chest pain", "Hoarseness"],
        overviewText: "A condition where the esophagus lining changes, often caused by chronic acid reflux.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Behçet's disease",
        symptoms: ["Recurring mouth sores", "Genital sores", "Eye inflammation", "Joint pain", "Skin lesions"],
        overviewText: "A chronic autoimmune disorder that affects various parts of the body.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bile duct cancer",
        symptoms: ["Jaundice", "Abdominal pain", "Weight loss", "Fatigue", "Loss of appetite"],
        overviewText: "A rare cancer that affects the bile ducts, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Birth defects",
        symptoms: ["Physical abnormalities", "Developmental delays", "Intellectual disability", "Organ dysfunction", "Disability"],
        overviewText: "Congenital anomalies that occur during fetal development, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Blastomycosis",
        symptoms: ["Coughing", "Chest pain", "Fever", "Fatigue", "Skin lesions"],
        overviewText: "A fungal infection that affects the lungs and other parts of the body.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Blepharitis",
        symptoms: ["Itchy eyes", "Redness and swelling", "Crusting or discharge", "Blurry vision", "Eye pain"],
        overviewText: "Inflammation of the eyelids, often caused by bacterial or fungal infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Blood clots",
        symptoms: ["Pain or tenderness", "Swelling", "Redness or discoloration", "Warmth or itching", "Shortness of breath"],
        overviewText: "A clotting of blood in a vein or artery, often caused by injury, surgery, or medical conditions.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Blue rubber bleb nevus syndrome",
        symptoms: ["Blue or purple skin lesions", "Easy bruising", "Painful lesions", "Gastrointestinal bleeding", "Fatigue"],
        overviewText: "A rare condition characterized by bluish skin lesions and gastrointestinal bleeding.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Boils",
        symptoms: ["Red and swollen bump", "Painful and warm to the touch", "Pus-filled head", "Fever", "Swollen lymph nodes"],
        overviewText: "A bacterial infection of the hair follicle or oil gland, often caused by Staphylococcus aureus.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bowen's disease",
        symptoms: ["Slow-growing scaly patch", "Redness and itching", "Bleeding or crusting", "Pain or tenderness", "Ulceration"],
        overviewText: "A type of skin cancer that affects the outer layer of the skin, often caused by sun exposure or HPV.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Brain abscess",
        symptoms: ["Headache", "Fever", "Confusion or disorientation", "Nausea and vomiting", "Seizures"],
        overviewText: "A pocket of pus in the brain, often caused by bacterial or fungal infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bronchiectasis",
        symptoms: ["Coughing up mucus", "Chest pain", "Shortness of breath", "Fatigue", "Recurring lung infections"],
        overviewText: "A condition where the airways are damaged and widened, often caused by infection or inflammation.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bronchiolitis",
        symptoms: ["Coughing", "Wheezing", "Shortness of breath", "Fatigue", "Chest pain"],
        overviewText: "An inflammation of the small airways, often caused by viral infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Brown recluse spider bite",
        symptoms: ["Pain or redness at the bite site", "Necrotic lesion", "Fever", "Chills", "Nausea and vomiting"],
        overviewText: "A bite from the brown recluse spider, which can cause necrotic lesions and systemic symptoms.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Budd-Chiari syndrome",
        symptoms: ["Abdominal pain", "Nausea and vomiting", "Fatigue", "Jaundice", "Ascites"],
        overviewText: "A rare condition where the hepatic veins are blocked, often caused by blood clots or tumors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bulge syndrome",
        symptoms: ["Abdominal pain", "Nausea and vomiting", "Bloating", "Abdominal tenderness", "Constipation"],
        overviewText: "A condition where the large intestine bulges into the abdominal cavity, often caused by weakened muscles or hernias.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Burkitt lymphoma",
        symptoms: ["Swollen lymph nodes", "Fever", "Night sweats", "Fatigue", "Weight loss"],
        overviewText: "A type of cancer that affects the immune system, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Byssinosis",
        symptoms: ["Coughing", "Shortness of breath", "Chest tightness", "Fatigue", "Nausea and vomiting"],
        overviewText: "An occupational lung disease caused by inhaling cotton dust, often found in textile workers.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Bronchitis",
        symptoms: ["Cough", "Mucus production", "Chest pain"],
        overviewText: "Inflammation of the bronchial tubes.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cancer",
        symptoms: ["Unexplained weight loss", "Fatigue", "Pain"],
        overviewText: "A group of diseases characterized by abnormal cell growth.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Celiac disease",
        symptoms: ["Diarrhea", "Abdominal pain", "Fatigue", "Weight loss", "Nausea and vomiting"],
        overviewText: "An autoimmune disorder that affects the small intestine, caused by a reaction to gluten.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cervical cancer",
        symptoms: ["Abnormal vaginal bleeding", "Pelvic pain", "Unusual vaginal discharge", "Pain during sex", "Heavy menstrual bleeding"],
        overviewText: "A type of cancer that affects the cervix, often caused by HPV infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chickenpox",
        symptoms: ["Itchy rash", "Fever", "Headache", "Fatigue", "Loss of appetite"],
        overviewText: "A highly contagious viral infection that causes a rash and blisters.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chronic obstructive pulmonary disease (COPD)",
        symptoms: ["Shortness of breath", "Wheezing", "Coughing", "Chest tightness", "Blue lips or fingernail beds"],
        overviewText: "A progressive lung disease that makes it hard to breathe, often caused by smoking or pollution.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chronic kidney disease",
        symptoms: ["Fatigue", "Swollen legs and feet", "Nausea and vomiting", "Shortness of breath", "Confusion"],
        overviewText: "A gradual loss of kidney function, often caused by diabetes, hypertension, or genetic factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cirrhosis",
        symptoms: ["Fatigue", "Loss of appetite", "Nausea and vomiting", "Abdominal pain", "Yellowing of the skin and eyes"],
        overviewText: "A liver disease that causes scarring and damage, often caused by alcoholism or hepatitis.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Colon cancer",
        symptoms: ["Blood in the stool", "Changes in bowel movements", "Abdominal pain", "Weight loss", "Fatigue"],
        overviewText: "A type of cancer that affects the colon or rectum, often caused by genetic or lifestyle factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Concussion",
        symptoms: ["Headache", "Dizziness", "Confusion", "Nausea and vomiting", "Sensitivity to light"],
        overviewText: "A mild traumatic brain injury caused by a blow to the head or body.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Crohn's disease",
        symptoms: ["Diarrhea", "Abdominal pain", "Fatigue", "Weight loss", "Nausea and vomiting"],
        overviewText: "A chronic inflammatory bowel disease that affects the digestive tract.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cystic fibrosis",
        symptoms: ["Coughing", "Shortness of breath", "Chest pain", "Fatigue", "Recurring lung infections"],
        overviewText: "A genetic disorder that affects the respiratory and digestive systems.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cardiomyopathy",
        symptoms: ["Shortness of breath", "Fatigue", "Swollen legs and feet", "Chest pain", "Palpitations"],
        overviewText: "A disease that affects the heart muscle, leading to impaired heart function.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Carpal tunnel syndrome",
        symptoms: ["Numbness or tingling in the hand", "Pain or burning in the wrist", "Weakness in the hand", "Tingling or shock-like sensations", "Difficulty gripping or holding objects"],
        overviewText: "A condition that compresses the median nerve in the wrist, leading to numbness and pain.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cataracts",
        symptoms: ["Blurred vision", "Double vision", "Sensitivity to light", "Fading or yellowing of colors", "Difficulty reading or watching TV"],
        overviewText: "A clouding of the lens in the eye that affects vision, often caused by aging or injury.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cavernous malformation",
        symptoms: ["Headaches", "Seizures", "Confusion or disorientation", "Vision problems", "Weakness or numbness in the face or extremities"],
        overviewText: "A abnormal collection of blood vessels in the brain or spinal cord, which can cause a range of neurological symptoms.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cellulitis",
        symptoms: ["Redness and swelling", "Warmth and tenderness", "Pus or abscesses", "Fever and chills", "Swollen lymph nodes"],
        overviewText: "A bacterial infection of the skin and underlying tissues, often caused by Staphylococcus aureus.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chagas disease",
        symptoms: ["Swollen eyelids", "Fatigue", "Fever", "Swollen lymph nodes", "Abdominal pain"],
        overviewText: "A parasitic infection caused by the protozoan Trypanosoma cruzi, often transmitted through insect vectors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Charcot-Marie-Tooth disease",
        symptoms: ["Muscle weakness", "Muscle atrophy", "Sensory loss", "Difficulty walking", "Foot deformities"],
        overviewText: "A group of genetic disorders that affect the peripheral nerves, leading to muscle weakness and sensory problems.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chikungunya",
        symptoms: ["Fever", "Joint pain and swelling", "Headache", "Muscle pain", "Rash"],
        overviewText: "A viral infection transmitted by mosquitoes, which can cause severe joint pain and swelling.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cholecystitis",
        symptoms: ["Abdominal pain", "Nausea and vomiting", "Fever", "Yellowing of the skin and eyes", "Tea-colored urine"],
        overviewText: "An inflammation of the gallbladder, often caused by gallstones or bacterial infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cholangitis",
        symptoms: ["Abdominal pain", "Fever", "Nausea and vomiting", "Yellowing of the skin and eyes", "Tea-colored urine"],
        overviewText: "An inflammation of the bile ducts, often caused by bacterial infections or gallstones.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chondrocalcinosis",
        symptoms: ["Joint pain and stiffness", "Swollen joints", "Limited mobility", "Crepitus or grating sensation", "Bone spurs"],
        overviewText: "A condition characterized by the deposition of calcium pyrophosphate dihydrate crystals in the joints.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chorea",
        symptoms: ["Involuntary movements", "Twitching or jerking", "Difficulty speaking or swallowing", "Muscle weakness", "Cognitive impairment"],
        overviewText: "A neurological disorder characterized by involuntary movements, often caused by genetic or autoimmune factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chronic fatigue syndrome",
        symptoms: ["Prolonged fatigue", "Muscle pain", "Joint pain", "Headaches", "Difficulty concentrating"],
        overviewText: "A condition characterized by persistent fatigue that is not relieved by rest.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Chylothorax",
        symptoms: ["Coughing up chyle", "Chest pain", "Shortness of breath", "Fatigue", "Weight loss"],
        overviewText: "A rare condition where lymphatic fluid accumulates in the pleural space, often caused by cancer or surgical complications.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cleft palate",
        symptoms: ["Opening in the roof of the mouth", "Difficulty speaking or eating", "Hearing loss", "Nasal regurgitation", "Difficulty breathing"],
        overviewText: "A congenital deformity where the roof of the mouth is not properly formed, often requiring surgical correction.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cluster headaches",
        symptoms: ["Severe headache pain", "Redness and swelling of the eye", "Nasal congestion", "Sweating and flushing", "Restlessness and agitation"],
        overviewText: "A type of headache that occurs in clusters or cycles, often caused by abnormalities in the hypothalamus.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Cold sores",
        symptoms: ["Painful blisters on the lips or mouth", "Itching or tingling", "Fever", "Sore throat", "Swollen lymph nodes"],
        overviewText: "A viral infection caused by herpes simplex virus (HSV), often transmitted through skin-to-skin contact.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Colitis",
        symptoms: ["Diarrhea", "Abdominal pain", "Blood in the stool", "Fatigue", "Loss of appetite"],
        overviewText: "An inflammation of the colon, often caused by infection, inflammatory bowel disease, or ischemia.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Congenital heart disease",
        symptoms: ["Cyanosis (blue tinge to the skin)", "Fatigue", "Shortness of breath", "Swollen legs and feet", "Heart murmur"],
        overviewText: "A heart defect present at birth, often caused by genetic or environmental factors during fetal development.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Coxsackievirus",
        symptoms: ["Fever", "Headache", "Sore throat", "Fatigue", "Rash"],
        overviewText: "A viral infection that can cause a range of symptoms, from mild to severe, including hand, foot, and mouth disease.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Diabetes",
        symptoms: ["Increased thirst", "Frequent urination", "Fatigue"],
        overviewText: "A metabolic disorder affecting blood sugar levels.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dandruff",
        symptoms: ["White flakes on the scalp", "Itching or redness", "Flaking skin", "Scalp irritation", "Hair loss"],
        overviewText: "A common skin condition characterized by flakes of dead skin on the scalp.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dementia",
        symptoms: ["Memory loss", "Confusion", "Difficulty with communication", "Problem-solving challenges", "Mood changes"],
        overviewText: "A broad term for a decline in cognitive function, often caused by Alzheimer's disease or vascular disease.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Depression",
        symptoms: ["Persistent sadness", "Loss of interest in activities", "Changes in appetite or sleep", "Fatigue or loss of energy", "Difficulty concentrating"],
        overviewText: "A mood disorder characterized by feelings of sadness, hopelessness, and loss of interest in activities.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Diarrhea",
        symptoms: ["Frequent and loose bowel movements", "Abdominal cramps", "Bloating and gas", "Nausea and vomiting", "Fever"],
        overviewText: "A gastrointestinal disorder characterized by frequent and loose bowel movements, often caused by infection or food poisoning.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Diverticulitis",
        symptoms: ["Abdominal pain", "Nausea and vomiting", "Fever", "Changes in bowel movements", "Blood in the stool"],
        overviewText: "A condition where small pouches in the colon become inflamed, often caused by a diet low in fiber.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Down syndrome",
        symptoms: ["Developmental delays", "Intellectual disability", "Distinctive facial features", "Short stature", "Heart defects"],
        overviewText: "A genetic disorder caused by an extra copy of chromosome 21, leading to developmental and intellectual delays.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dyslexia",
        symptoms: ["Difficulty reading or spelling", "Reversing letters or numbers", "Trouble with word recognition", "Slow reading speed", "Mixing up similar words"],
        overviewText: "A learning disorder that affects reading and writing skills, often caused by genetic or neurological factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dystonia",
        symptoms: ["Involuntary muscle contractions", "Twisting or repetitive movements", "Posture abnormalities", "Difficulty speaking or swallowing", "Eye spasms"],
        overviewText: "A neurological disorder characterized by involuntary muscle movements, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dengue fever",
        symptoms: ["High fever", "Severe headache", "Pain behind the eyes", "Joint and muscle pain", "Rash"],
        overviewText: "A viral infection transmitted by mosquitoes, causing severe flu-like symptoms.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dermatitis",
        symptoms: ["Itchy and inflamed skin", "Redness and swelling", "Blisters or crusting", "Skin thickening", "Increased risk of infection"],
        overviewText: "A general term for skin inflammation, often caused by allergies, irritants, or infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Diabetic neuropathy",
        symptoms: ["Numbness or tingling in hands and feet", "Pain or discomfort", "Sensitivity to touch", "Weakness or fatigue", "Difficulty with balance or coordination"],
        overviewText: "A complication of diabetes that damages the nerves, often caused by high blood sugar levels over time.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Diabetic retinopathy",
        symptoms: ["Blurred vision", "Double vision", "Flashes of light", "Dark spots or floaters", "Vision loss"],
        overviewText: "A complication of diabetes that damages the blood vessels in the retina, often causing vision loss.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Discitis",
        symptoms: ["Back pain", "Fever", "Nausea and vomiting", "Abdominal pain", "Difficulty walking"],
        overviewText: "An inflammation of the intervertebral discs, often caused by infection or injury.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dislocated shoulder",
        symptoms: ["Severe pain", "Swelling and bruising", "Limited mobility", "Deformity of the shoulder", "Numbness or tingling"],
        overviewText: "A condition where the humerus bone is forced out of the shoulder socket, often caused by injury or trauma.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Distal myopathy",
        symptoms: ["Muscle weakness", "Muscle wasting", "Difficulty walking or balance", "Foot drop", "Hand weakness"],
        overviewText: "A group of muscle disorders that affect the distal muscles, often caused by genetic or acquired factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Drug addiction",
        symptoms: ["Compulsive drug-seeking behavior", "Tolerance and withdrawal", "Loss of control", "Neglecting responsibilities", "Continued use despite negative consequences"],
        overviewText: "A chronic disease characterized by drug-seeking behavior, often caused by genetic, environmental, or psychological factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dysautonomia",
        symptoms: ["Dizziness and lightheadedness", "Fainting", "Rapid heart rate", "Sweating and flushing", "Nausea and vomiting"],
        overviewText: "A condition where the autonomic nervous system is impaired, often causing a range of symptoms related to automatic functions.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dysentery",
        symptoms: ["Diarrhea", "Blood in the stool", "Abdominal pain", "Fever", "Rectal pain"],
        overviewText: "A type of gastrointestinal disease caused by bacterial or parasitic infections, often spread through contaminated food or water.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dysphonia",
        symptoms: ["Hoarseness", "Breathiness", "Strained voice", "Pitch changes", "Voice tremors"],
        overviewText: "A speech disorder characterized by changes in the voice, often caused by neurological or physical factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dysrhythmia",
        symptoms: ["Irregular heartbeat", "Palpitations", "Shortness of breath", "Chest pain", "Dizziness"],
        overviewText: "A condition characterized by an abnormal heart rhythm, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dysthymia",
        symptoms: ["Persistent sadness", "Loss of interest in activities", "Changes in appetite or sleep", "Fatigue", "Difficulty concentrating"],
        overviewText: "A mood disorder characterized by a long-term, low-grade depression, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dyspepsia",
        symptoms: ["Indigestion", "Nausea and vomiting", "Abdominal pain", "Bloating and gas", "Difficulty swallowing"],
        overviewText: "A condition characterized by upper abdominal pain and discomfort, often caused by gastroesophageal reflux disease (GERD) or other factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Dupuytren's contracture",
        symptoms: ["Thickening of the palmar fascia", "Nodules or cords in the palm", "Finger stiffness and contraction", "Difficulty grasping or holding objects", "Pain or tenderness"],
        overviewText: "A condition that affects the hands, causing the fingers to contract and curve inward, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Eczema",
        symptoms: ["Dry and itchy skin", "Redness and inflammation", "Small bumps or blisters", "Crusting and scaling", "Swollen lymph nodes"],
        overviewText: "A chronic skin condition characterized by dry, itchy, and inflamed skin, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Edema",
        symptoms: ["Swelling in the legs, ankles, and feet", "Stretched skin", "Pain or discomfort", "Redness and inflammation", "Difficulty walking"],
        overviewText: "A condition characterized by excess fluid in the body's tissues, often caused by heart failure, kidney disease, or other factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Emphysema",
        symptoms: ["Shortness of breath", "Wheezing and coughing", "Chest tightness", "Blue lips or fingernail beds", "Fatigue"],
        overviewText: "A chronic lung condition where the air sacs are damaged, often caused by smoking or pollution.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Endocarditis",
        symptoms: ["Fever and chills", "Fatigue and weakness", "Swollen legs and feet", "Shortness of breath", "Chest pain"],
        overviewText: "An infection of the heart valves, often caused by bacterial or fungal infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Endometriosis",
        symptoms: ["Pelvic pain and cramping", "Heavy menstrual bleeding", "Irregular periods", "Infertility", "Bowel or urinary symptoms"],
        overviewText: "A condition where tissue similar to the lining of the uterus grows outside the uterus, often causing pain and infertility.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Encephalitis",
        symptoms: ["Fever and headache", "Confusion and disorientation", "Seizures and coma", "Sensitivity to light and sound", "Nausea and vomiting"],
        overviewText: "A rare but serious condition where the brain is inflamed, often caused by viral or bacterial infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Eosinophilia",
        symptoms: ["High eosinophil count", "Asthma and allergies", "Skin rashes and lesions", "Gastrointestinal symptoms", "Cardiac problems"],
        overviewText: "A condition where the eosinophil count is elevated, often caused by allergies, asthma, or parasitic infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Epilepsy",
        symptoms: ["Seizures and convulsions", "Uncontrolled movements", "Loss of consciousness", "Confusion and disorientation", "Memory loss"],
        overviewText: "A neurological disorder characterized by recurrent seizures, often caused by genetic or environmental factors.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Erysipelas",
        symptoms: ["Redness and swelling", "Pain and warmth", "Fever and chills", "Swollen lymph nodes", "Blistering and crusting"],
        overviewText: "A bacterial infection of the skin, often caused by Streptococcus pyogenes.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Erythema nodosum",
        symptoms: ["Red and tender nodules", "Pain and swelling", "Fever and chills", "Joint pain and swelling", "Fatigue"],
        overviewText: "A condition characterized by inflammatory nodules, often caused by bacterial or fungal infections.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Escherichia coli (E. coli)",
        symptoms: ["Urinary tract infections", "Diarrhea and vomiting", "Abdominal cramps", "Fever and chills", "Blood in the urine"],
        overviewText: "A type of bacteria that can cause a range of symptoms, from mild to severe, often caused by contaminated food or water.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
    },
    {
        name: "Essential tremor",
        symptoms: ["Tremors and shaking", "Difficulty speaking or eating", "Tremors in the head, arms, or legs", "Difficulty writing or drawing", "Tremors that worsen with movement"],
        overviewText: "A neurological disorder characterized by involuntary tremors, often caused by genetic or environmental factors.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Exophthalmos",
        symptoms: ["Bulging eyes", "Double vision", "Redness and swelling", "Pain or discomfort", "Vision loss"],
        overviewText: "A condition where the eyeball protrudes from the socket, often caused by thyroid disorders or tumors.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Fibromyalgia",
        symptoms: ["Widespread muscle pain", "Fatigue and sleep disturbances", "Brain fog and memory issues", "Headaches and migraines", "Joint pain and stiffness"],
        overviewText: "A chronic condition characterized by muscle pain, fatigue, and tender points, often caused by genetic or environmental factors.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Fibrosis",
        symptoms: ["Scarring and thickening of tissues", "Shortness of breath", "Fatigue and weakness", "Loss of appetite", "Nausea and vomiting"],
        overviewText: "A condition where fibrous tissue forms in response to injury or inflammation, often leading to scarring and organ dysfunction.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Fifth disease",
        symptoms: ["Red rash on the face", "Fever and headache", "Fatigue and weakness", "Swollen glands", "Joint pain and stiffness"],
        overviewText: "A viral infection that causes a distinctive red rash, often affecting children.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Focal segmental glomerulosclerosis (FSGS)",
        symptoms: ["Nephrotic syndrome", "Proteinuria", "Hematuria", "Hypertension", "Kidney failure"],
        overviewText: "A condition where the kidney's filtering units are damaged, often leading to proteinuria and kidney failure.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Folliculitis",
        symptoms: ["Redness and inflammation", "Pus-filled bumps", "Itching and burning", "Fever and chills", "Swollen lymph nodes"],
        overviewText: "An infection of the hair follicles, often caused by bacterial or fungal infections.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Food poisoning",
        symptoms: ["Nausea and vomiting", "Diarrhea and abdominal cramps", "Fever and headache", "Fatigue and weakness", "Bloating and gas"],
        overviewText: "An illness caused by consuming contaminated or spoiled food, often caused by bacteria, viruses, or parasites.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Fournier gangrene",
        symptoms: ["Severe pain and swelling", "Redness and warmth", "Fever and chills", "Pus or discharge", "Foul odor"],
        overviewText: "A rare but life-threatening condition where the tissue in the genital area dies, often caused by bacterial infection.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Fracture",
        symptoms: ["Pain and swelling", "Deformity or abnormal alignment", "Limited mobility", "Bruising or redness", "Numbness or tingling"],
        overviewText: "A broken bone, often caused by trauma, osteoporosis, or other factors.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Frostbite",
        symptoms: ["Numbness and tingling", "Pale or blue-gray skin", "Firm or waxy skin", "Blisters or sores", "Gangrene"],
        overviewText: "A condition where skin and underlying tissues freeze due to prolonged exposure to cold temperatures.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Fungal nail infection",
        symptoms: ["Yellowing or thickening of the nail", "Crumbling or brittleness", "Distortion of the nail shape", "Pain or discomfort", "Foul odor"],
        overviewText: "An infection of the nail caused by fungal growth, often affecting the toenails.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Gallstones",
        symptoms: ["Severe abdominal pain", "Nausea and vomiting", "Fever and chills", "Yellowing of the skin and eyes", "Tea-colored urine"],
        overviewText: "Small, hard deposits that form in the gallbladder, often causing pain and inflammation.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Gangrene",
        symptoms: ["Skin discoloration", "Sloughing of skin", "Foul odor", "Pain or numbness", "Swelling and redness"],
        overviewText: "A condition where tissue dies due to lack of blood supply, often caused by injury, infection, or vascular disease.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Gastritis",
        symptoms: ["Abdominal pain", "Nausea and vomiting", "Indigestion and bloating", "Loss of appetite", "Hematemesis"],
        overviewText: "An inflammation of the stomach lining, often caused by infection, alcohol, or NSAIDs.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Gastroenteritis",
        symptoms: ["Diarrhea and vomiting", "Abdominal cramps and pain", "Fever and headache", "Bloating and gas", "Blood in stool or vomit"],
        overviewText: "An inflammation of the stomach and intestines, often caused by viral or bacterial infections.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Gastroesophageal reflux disease (GERD)",
        symptoms: ["Heartburn and acid reflux", "Regurgitation and bloating", "Difficulty swallowing", "Chest pain and tightness", "Coughing and wheezing"],
        overviewText: "A chronic condition where stomach acid flows back into the esophagus, often causing heartburn and regurgitation.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Genital herpes",
        symptoms: ["Painful blisters or sores", "Itching and burning", "Flu-like symptoms", "Swollen lymph nodes", "Difficulty urinating"],
        overviewText: "A sexually transmitted infection caused by the herpes simplex virus, often causing recurring sores and blisters.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Giardiasis",
        symptoms: ["Diarrhea and weight loss", "Abdominal cramps and bloating", "Nausea and vomiting", "Fever and chills", "Blood in stool"],
        overviewText: "A parasitic infection caused by Giardia lamblia, often spread through contaminated water or food.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Glaucoma",
        symptoms: ["Blurred vision", "Eye pain and pressure", "Nausea and vomiting", "Sensitivity to light", "Redness of the eye"],
        overviewText: "A group of eye conditions that damage the optic nerve, often caused by increased pressure in the eye.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Glioblastoma",
        symptoms: ["Headaches and seizures", "Nausea and vomiting", "Confusion and disorientation", "Memory loss and personality changes", "Weakness and paralysis"],
        overviewText: "A type of brain cancer that originates from the brain's glial cells, often aggressive and malignant.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Glossitis",
        symptoms: ["Inflammation and redness of the tongue", "Pain and discomfort", "Difficulty speaking or eating", "Swollen lymph nodes", "Fever"],
        overviewText: "An inflammation of the tongue, often caused by bacterial or viral infections.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Goiter",
        symptoms: ["Enlargement of the thyroid gland", "Neck swelling and pain", "Difficulty swallowing", "Coughing and wheezing", "Shortness of breath"],
        overviewText: "An enlargement of the thyroid gland, often caused by iodine deficiency or thyroid disorders.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Gout",
        symptoms: ["Joint pain", "Swelling", "Redness"],
        overviewText: "A type of arthritis causing sudden, severe joint pain.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hypertension",
        symptoms: ["High blood pressure", "Headaches", "Dizziness"],
        overviewText: "A condition characterized by high blood pressure.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hantavirus",
        symptoms: ["Fever and headache", "Muscle aches and fatigue", "Coughing and shortness of breath", "Nausea and vomiting", "Abdominal pain"],
        overviewText: "A viral infection spread by rodents, often causing severe respiratory and kidney disease.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hemophilia",
        symptoms: ["Bleeding that won't stop", "Pain and swelling", "Bruising and redness", "Limited mobility", "Weakness and fatigue"],
        overviewText: "A genetic disorder that affects blood clotting, often causing prolonged bleeding and joint damage.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hepatitis",
        symptoms: ["Fatigue and loss of appetite", "Nausea and vomiting", "Abdominal pain and dark urine", "Yellowing of the skin and eyes", "Fever and chills"],
        overviewText: "An inflammation of the liver, often caused by viral infection or liver damage.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hernia",
        symptoms: ["Bulge or lump in the affected area", "Discomfort and pain", "Feeling of heaviness or pressure", "Burning or aching sensation", "Weakness and fatigue"],
        overviewText: "A protrusion of an organ or tissue through a weakened area in the muscle or connective tissue.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Herpes zoster",
        symptoms: ["Pain and burning sensations", "Blisters and rash", "Fever and headache", "Fatigue and weakness", "Swollen lymph nodes"],
        overviewText: "A viral infection that causes shingles, often causing pain and a characteristic rash.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hirschsprung's disease",
        symptoms: ["Constipation and bowel obstruction", "Abdominal pain and distension", "Vomiting and diarrhea", "Blood in the stool", "Failure to pass meconium"],
        overviewText: "A congenital condition where the large intestine is missing ganglion cells, often causing bowel obstruction and constipation.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Histoplasmosis",
        symptoms: ["Coughing and chest pain", "Fever and chills", "Fatigue and weakness", "Headache and body aches", "Shortness of breath"],
        overviewText: "A fungal infection caused by Histoplasma capsulatum, often affecting the lungs.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hodgkin lymphoma",
        symptoms: ["Swollen lymph nodes", "Fever and night sweats", "Fatigue and weight loss", "Coughing and chest pain", "Itching and rash"],
        overviewText: "A type of cancer that affects the immune system, often causing swollen lymph nodes and fever.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hyperthyroidism",
        symptoms: ["Weight loss and anxiety", "Rapid heartbeat and tremors", "Increased sweating and heat intolerance", "Enlargement of the thyroid gland", "Changes in appetite and sleep"],
        overviewText: "A condition where the thyroid gland produces too much thyroxine, often causing weight loss and anxiety.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Hypothyroidism",
        symptoms: ["Weight gain and fatigue", "Cold intolerance and hair loss", "Dry skin and constipation", "Depression and memory problems", "Muscle weakness and cramps"],
        overviewText: "A condition where the thyroid gland produces too little thyroxine, often causing weight gain and fatigue.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Impetigo",
        symptoms: ["Red sores and crusting", "Itching and burning", "Swollen lymph nodes", "Fever and chills", "Pus-filled blisters"],
        overviewText: "A bacterial skin infection, often causing red sores and crusting.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Influenza",
        symptoms: ["Fever", "Cough", "Body aches"],
        overviewText: "A viral infection affecting the respiratory system.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Insuloma",
        symptoms: ["Hypoglycemia and hyperglycemia", "Abdominal pain and weight loss", "Diarrhea and vomiting", "Fatigue and weakness", "Confusion and irritability"],
        overviewText: "A rare tumor of the pancreas, often causing hypoglycemia or hyperglycemia.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Irritable bowel syndrome (IBS)",
        symptoms: ["Abdominal pain and cramping", "Diarrhea or constipation", "Bloating and gas", "Mucus in the stool", "Urgency and frequency"],
        overviewText: "A chronic condition affecting the large intestine, often causing abdominal pain and changes in bowel movements.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Juvenile idiopathic arthritis (JIA)",
        symptoms: ["Joint pain and swelling", "Stiffness and limited mobility", "Fever and rash", "Loss of appetite and fatigue", "Eye inflammation"],
        overviewText: "A chronic condition that causes inflammation in the joints, often affecting children and adolescents.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Jaundice",
        symptoms: ["Yellowing of the skin", "Fatigue", "Loss of appetite"],
        overviewText: "A condition characterized by high bilirubin levels in the blood.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Kawasaki disease",
        symptoms: ["Fever", "Rash", "Swollen lymph nodes"],
        overviewText: "A rare condition affecting children, causing inflammation of blood vessels.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Kaposi's sarcoma",
        symptoms: ["Purple or brown lesions", "Swollen lymph nodes", "Fever and weight loss", "Fatigue and weakness", "Coughing and shortness of breath"],
        overviewText: "A type of cancer that affects the blood vessels, often causing lesions and swollen lymph nodes.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Kidney stones",
        symptoms: ["Severe pain in the side or back", "Nausea and vomiting", "Frequent urination", "Painful urination", "Blood in the urine"],
        overviewText: "Small, hard mineral deposits that form in the kidneys, often causing severe pain and urinary symptoms.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Kleptomania",
        symptoms: ["Irresistible urge to steal", "Tension and anxiety", "Relief and pleasure after stealing", "Guilty feelings and shame", "Repetitive behavior"],
        overviewText: "A psychological disorder characterized by a recurring and irresistible urge to steal, often without a clear motivation or financial need.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Labyrinthitis",
        symptoms: ["Vertigo and dizziness", "Hearing loss and tinnitus", "Ear fullness and pressure", "Nausea and vomiting", "Fever and headache"],
        overviewText: "An inner ear infection that affects balance and hearing, often caused by a viral or bacterial infection.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Laryngitis",
        symptoms: ["Hoarseness and voice loss", "Sore throat and coughing", "Pain and discomfort", "Difficulty speaking", "Fever and headache"],
        overviewText: "An inflammation of the vocal cords, often caused by overuse, strain, or infection.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Leprosy",
        symptoms: ["Skin lesions and discoloration", "Numbness and tingling", "Muscle weakness and paralysis", "Eye problems and vision loss", "Disfiguration and disability"],
        overviewText: "A chronic bacterial infection that affects the nerves, skin, and mucous membranes, often causing discoloration and disfiguration.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Leukemia",
        symptoms: ["Fatigue and weakness", "Frequent infections", "Easy bleeding and bruising", "Weight loss and appetite loss", "Swollen lymph nodes"],
        overviewText: "A type of cancer that affects the blood and bone marrow, often causing abnormal white blood cell production.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Lymphangioleiomyomatosis (LAM)",
        symptoms: ["Shortness of breath and coughing", "Chest pain and lung collapse", "Abdominal pain and bleeding", "Fatigue and weight loss", "Skin lesions and lymph node enlargement"],
        overviewText: "A rare genetic disorder that affects the lungs, lymph nodes, and abdomen, often causing respiratory and abdominal symptoms.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Lymphoma",
        symptoms: ["Swollen lymph nodes and fever", "Fatigue and weight loss", "Itching and rash", "Coughing and chest pain", "Abdominal pain and bowel changes"],
        overviewText: "A type of cancer that affects the immune system, often causing swollen lymph nodes and fever.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Lupus",
        symptoms: ["Joint pain", "Skin rashes", "Fatigue"],
        overviewText: "A chronic autoimmune disease affecting various body parts.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Malaria",
        symptoms: ["Fever", "Chills", "Flu-like symptoms"],
        overviewText: "A disease caused by a parasite transmitted through mosquito bites.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      }, 
      {
        name: "Macular degeneration",
        symptoms: ["Blurred vision and blind spots", "Distorted vision and colors", "Difficulty reading and driving", "Dry or wet macular degeneration", "Vision loss and blindness"],
        overviewText: "A chronic eye condition that affects the macula, often causing vision loss and blindness.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Meniere's disease",
        symptoms: ["Vertigo and dizziness", "Tinnitus and hearing loss", "Ear fullness and pressure", "Nausea and vomiting", "Abnormal eye movements"],
        overviewText: "A disorder of the inner ear that affects balance and hearing, often causing vertigo and tinnitus.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Meningitis",
        symptoms: ["Severe headache and stiff neck", "Fever and vomiting", "Sensitivity to light and sound", "Confusion and disorientation", "Seizures and coma"],
        overviewText: "An inflammation of the membranes surrounding the brain and spinal cord, often caused by bacterial or viral infection.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Mental retardation",
        symptoms: ["Limited cognitive ability", "Delayed speech and language", "Learning difficulties", "Social and emotional challenges", "Physical disabilities"],
        overviewText: "A condition characterized by significantly below-average cognitive ability, often diagnosed before age 18.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Mesothelioma",
        symptoms: ["Shortness of breath and chest pain", "Coughing and difficulty swallowing", "Fatigue and weight loss", "Abdominal pain and fluid buildup", "Pleural effusion"],
        overviewText: "A rare and aggressive cancer affecting the lining of the lungs or abdomen, often caused by asbestos exposure.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Microcephaly",
        symptoms: ["Small head size and brain development", "Delayed cognitive and motor skills", "Vision and hearing problems", "Seizures and developmental delays", "Intellectual disability"],
        overviewText: "A rare neurological disorder characterized by a smaller-than-average head size and brain development.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Migraine",
        symptoms: ["Severe headache and sensitivity to light", "Nausea and vomiting", "Dizziness and vertigo", "Blurred vision and aura", "Pain and discomfort"],
        overviewText: "A chronic neurological disorder characterized by recurrent and severe headaches, often accompanied by sensory sensitivity.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Mitral regurgitation",
        symptoms: ["Shortness of breath and fatigue", "Swollen legs and feet", "Coughing and chest pain", "Rapid heartbeat and palpitations", "Heart failure"],
        overviewText: "A condition where the mitral valve doesn't close properly, allowing blood to flow backward into the heart.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Mononucleosis",
        symptoms: ["Fatigue and fever", "Sore throat and swollen lymph nodes", "Enlargement of the spleen", "Headache and body aches", "Rash and sore eyes"],
        overviewText: "A viral infection caused by Epstein-Barr virus, often affecting the lymph nodes and spleen.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Muscular dystrophy",
        symptoms: ["Progressive muscle weakness", "Muscle wasting and shrinkage", "Difficulty walking and standing", "Respiratory and cardiac problems", "Mental retardation"],
        overviewText: "A group of genetic disorders that result in progressive muscle weakness and degeneration.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Myasthenia gravis",
        symptoms: ["Muscle weakness and fatigue", "Double vision and drooping eyelids", "Difficulty speaking and swallowing", "Weakness in arms and legs", "Respiratory problems"],
        overviewText: "A chronic autoimmune disorder that affects the nerve-muscle connection, often causing muscle weakness and fatigue.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Multiple myeloma",
        symptoms: ["Bone pain and weakness", "Fatigue and infection", "Kidney damage and anemia", "Confusion and memory loss", "Weight loss and appetite loss"],
        overviewText: "A type of cancer that affects the plasma cells in the bone marrow, often causing bone damage and kidney problems.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Multiple sclerosis",
        symptoms: ["Vision problems and blindness", "Muscle weakness and paralysis", "Numbness and tingling", "Cognitive difficulties and memory loss", "Bladder and bowel problems"],
        overviewText: "A chronic autoimmune disease that affects the central nervous system, often causing vision, motor, and cognitive problems.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Myocardial infarction",
        symptoms: ["Chest pain and discomfort", "Shortness of breath and cold sweats", "Lightheadedness and fatigue", "Pain in the arm and jaw", "Nausea and vomiting"],
        overviewText: "A heart attack that occurs when the blood flow to the heart is blocked, often causing damage to the heart muscle.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Necrotizing fasciitis",
        symptoms: ["Severe pain and swelling", "Redness and warmth", "Blisters and skin sloughing", "Fever and chills", "Limited mobility"],
        overviewText: "A bacterial infection that affects the tissue beneath the skin, often causing severe pain and skin damage.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Neurofibromatosis",
        symptoms: ["Benign tumors on nerve tissue", "Skin changes and discoloration", "Bone deformities and pain", "Vision and hearing problems", "Learning disabilities"],
        overviewText: "A genetic disorder that causes tumors to grow on nerve tissue, often affecting the skin, bones, and vision.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Narcolepsy",
        symptoms: ["Excessive daytime sleepiness", "Sudden attacks of sleep", "Cataplexy"],
        overviewText: "A neurological disorder affecting the sleep-wake cycle.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Osteoporosis",
        symptoms: ["Weak bones", "Back pain", "Height loss"],
        overviewText: "A condition characterized by brittle and porous bones.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Obstructive sleep apnea",
        symptoms: ["Loud snoring and breathing pauses", "Morning headaches and fatigue", "Difficulty concentrating", "High blood pressure and cardiovascular disease", "Daytime sleepiness"],
        overviewText: "A sleep disorder that causes breathing interruptions during sleep, often leading to daytime sleepiness and cardiovascular problems.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Osteoarthritis",
        symptoms: ["Joint pain and stiffness", "Limited mobility and swelling", "Crepitus and bone spurs", "Loss of cartilage and bone damage", "Difficulty with daily activities"],
        overviewText: "A degenerative joint disease that causes cartilage wear and tear, often leading to bone damage and limited mobility.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Paget's disease",
        symptoms: ["Bone pain and deformity", "Enlarged bones and joint problems", "Nerve compression and paralysis", "Increased risk of osteosarcoma", "Family history"],
        overviewText: "A chronic bone disorder that causes bones to become enlarged and deformed, often leading to pain and nerve problems.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Pancreatitis",
        symptoms: ["Abdominal pain and tenderness", "Nausea and vomiting", "Fever and chills", "Loss of appetite and weight loss", "Diabetes and malabsorption"],
        overviewText: "An inflammation of the pancreas, often caused by gallstones or alcohol consumption.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Parkinson's disease",
        symptoms: ["Tremors and muscle rigidity", "Bradykinesia and balance problems", "Difficulty with walking and gait", "Mask-like facial expression", "Dementia and cognitive decline"],
        overviewText: "A neurodegenerative disorder that affects movement and balance, often causing tremors and muscle stiffness.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Pneumonia",
        symptoms: ["Cough and chest pain", "Fever and chills", "Shortness of breath and fatigue", "Confusion and disorientation", "Coughing up blood or yellow mucus"],
        overviewText: "An infection that inflames the air sacs in the lungs, often caused by bacteria or viruses.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Polycystic kidney disease",
        symptoms: ["High blood pressure and kidney pain", "Kidney stones and infections", "Blood in the urine and proteinuria", "Kidney failure and dialysis", "Family history"],
        overviewText: "A genetic disorder that causes cysts to form on the kidneys, often leading to kidney failure and hypertension.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Polycystic ovary syndrome",
        symptoms: ["Irregular periods and infertility", "Weight gain and acne", "Hirsutism and male pattern baldness", "Insulin resistance and diabetes", "Mental health problems"],
        overviewText: "A hormonal disorder that affects ovulation and metabolism, often causing infertility and weight gain.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Psoriasis",
        symptoms: ["Red and scaly skin patches", "Itching and burning sensations", "Dry skin and cracking", "Swollen joints and arthritis", "Family history"],
        overviewText: "A chronic autoimmune condition that causes skin inflammation and scaling, often affecting the elbows, knees, and scalp.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Parkinson's disease",
        symptoms: ["Tremors", "Rigidity", "Difficulty with movement"],
        overviewText: "A neurological disorder affecting movement and balance.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Quinsy",
        symptoms: ["Sore throat", "Swollen tonsils", "Difficulty swallowing"],
        overviewText: "A rare complication of tonsillitis.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Rabies",
        symptoms: ["Fever and agitation", "Confusion and hallucinations", "Fear of water and swallowing", "Paralysis and respiratory failure", "Death"],
        overviewText: "A deadly viral infection that affects the nervous system, often transmitted through animal bites.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Raynaud's phenomenon",
        symptoms: ["Discoloration and coldness in fingers and toes", "Numbness and tingling", "Pain and stiffness", "Difficulty moving affected areas", "Stress and cold temperature triggers"],
        overviewText: "A condition that affects blood flow to the fingers and toes, often causing discoloration and numbness.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Rheumatoid arthritis",
        symptoms: ["Joint pain", "Stiffness", "Swollen joints"],
        overviewText: "A chronic autoimmune disease affecting the joints.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Retinoblastoma",
        symptoms: ["White pupillary reflex", "Strabismus and crossed eyes", "Redness and inflammation", "Vision loss and blindness", "Family history"],
        overviewText: "A rare eye cancer that affects the retina, often causing vision loss and blindness in children.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Rosacea",
        symptoms: ["Facial redness and flushing", "Acne-like lesions and papules", "Visible blood vessels", "Swollen and sensitive skin", "Eye problems"],
        overviewText: "A chronic skin condition that affects the face, often causing redness and acne-like lesions.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Sarcoidosis",
        symptoms: ["Shortness of breath and coughing", "Fatigue and weight loss", "Skin lesions and rashes", "Enlarged lymph nodes", "Blindness and neurological problems"],
        overviewText: "A chronic inflammatory disease that affects various organs, often causing granulomas and organ damage.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Schizophrenia",
        symptoms: ["Delusions and hallucinations", "Disorganized thinking and speech", "Negative emotions and behaviors", "Cognitive impairment and social withdrawal", "Family history"],
        overviewText: "A severe mental disorder that affects thoughts, feelings, and behaviors, often causing hallucinations and delusions.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Scoliosis",
        symptoms: ["Abnormal spinal curvature", "Back pain and stiffness", "Breathing difficulties and fatigue", "Visible deformity and asymmetry", "Family history"],
        overviewText: "A condition that affects the spine, often causing abnormal curvature and deformity.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Sjogren's syndrome",
        symptoms: ["Dry eyes and mouth", "Fatigue and joint pain", "Swollen lymph nodes and fever", "Thyroid problems and anemia", "Family history"],
        overviewText: "A chronic autoimmune disorder that affects the exocrine glands, often causing dry eyes and mouth.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Staph infection",
        symptoms: ["Redness and swelling", "Pus and abscesses", "Fever and chills", "Pain and warmth", "Swollen lymph nodes"],
        overviewText: "A bacterial infection caused by Staphylococcus aureus, often affecting the skin and soft tissues.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Stomach cancer",
        symptoms: ["Abdominal pain and discomfort", "Nausea and vomiting", "Weight loss and loss of appetite", "Fatigue and weakness", "Blood in stool or vomit"],
        overviewText: "A malignant tumor that affects the stomach, often causing abdominal pain and weight loss.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Stroke",
        symptoms: ["Sudden weakness or numbness", "Difficulty speaking or understanding", "Vision changes and double vision", "Dizziness and loss of balance", "Severe headache"],
        overviewText: "A medical condition that occurs when blood flow to the brain is interrupted, often causing brain cell death.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Systemic lupus erythematosus",
        symptoms: ["Joint pain and swelling", "Fatigue and fever", "Skin rashes and lesions", "Hair loss and chest pain", "Kidney problems and seizures"],
        overviewText: "A chronic autoimmune disease that affects various body parts, often causing inflammation and organ damage.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Scleroderma",
        symptoms: ["Thickened skin", "Raynaud's phenomenon", "Digestive issues"],
        overviewText: "A chronic autoimmune disease affecting the skin and internal organs.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Tay-Sachs disease",
        symptoms: ["Developmental delays and blindness", "Seizures and loss of motor skills", "Cherry-red spot on the retina", "Family history", "Death in childhood"],
        overviewText: "A rare genetic disorder that affects the nervous system, often causing developmental delays and death in childhood.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Temporal arteritis",
        symptoms: ["Severe headache and scalp tenderness", "Jaw pain and difficulty chewing", "Vision changes and double vision", "Fever and fatigue", "Swollen and tender arteries"],
        overviewText: "A condition that affects the blood vessels, often causing headaches and vision problems.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Tendinitis",
        symptoms: ["Pain and stiffness in the tendons", "Warmth and swelling", "Redness and tenderness", "Difficulty moving the affected area", "Caused by injury or repetitive motion"],
        overviewText: "A condition that affects the tendons, often causing pain and stiffness.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Thyroid cancer",
        symptoms: ["Lump in the neck", "Hoarseness and voice changes", "Difficulty swallowing", "Pain in the neck and throat", "Weight changes and fatigue"],
        overviewText: "A malignant tumor that affects the thyroid gland, often causing a lump in the neck and hoarseness.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Thyroiditis",
        symptoms: ["Pain in the thyroid area", "Fever and fatigue", "Weight changes and mood swings", "Hair loss and dry skin", "Changes in appetite and bowel movements"],
        overviewText: "An inflammation of the thyroid gland, often causing pain and hormone imbalances.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Tourette's syndrome",
        symptoms: ["Vocal and motor tics", "Repetitive movements and sounds", "Facial grimacing and head jerking", "Difficulty with social interactions", "Family history"],
        overviewText: "A neurodevelopmental disorder that affects the brain, often causing tics and repetitive behaviors.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Toxoplasmosis",
        symptoms: ["Flu-like symptoms and fever", "Headache and sore throat", "Swollen lymph nodes and eyes", "Birth defects and miscarriage", "Infected cat feces or undercooked meat"],
        overviewText: "A parasitic infection caused by Toxoplasma gondii, often affecting the brain and eyes.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Trichomoniasis",
        symptoms: ["Abnormal vaginal discharge and itching", "Foul odor and redness", "Pain during urination and sex", "Lower abdominal pain and fever", "Sexually transmitted infection"],
        overviewText: "A sexually transmitted infection caused by Trichomonas vaginalis, often affecting the vagina and urethra.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Tuberculosis",
        symptoms: ["Coughing", "Chest pain", "Coughing up blood"],
        overviewText: "A bacterial infection affecting the lungs.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Ulcerative colitis",
        symptoms: ["Diarrhea", "Abdominal pain", "Blood in stool"],
        overviewText: "A chronic inflammatory bowel disease.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
      name: "Usher syndrome",
      symptoms: ["Hearing loss and vision changes", "Balance and coordination problems", "Difficulty with communication", "Mental health problems and cognitive impairment", "Family history"],
      overviewText: "A genetic disorder that affects the senses, often causing hearing loss and vision changes.",
      images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Vaginitis",
        symptoms: ["Abnormal vaginal discharge and itching", "Redness and swelling", "Pain during urination and sex", "Fever and chills", "Caused by bacterial or yeast infection"],
        overviewText: "An inflammation of the vagina, often causing discharge and itching.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Varicella",
        symptoms: ["Rash and itchy blisters", "Fever and headache", "Fatigue and loss of appetite", "Coughing and sneezing", "Contagious before rash appears"],
        overviewText: "A viral infection that causes chickenpox, often affecting children.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Vasculitis",
        symptoms: ["Inflammation and damage to blood vessels", "Fever and fatigue", "Weight loss and loss of appetite", "Pain and tenderness", "Caused by autoimmune disorder or infection"],
        overviewText: "A condition that affects the blood vessels, often causing inflammation and damage.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Von Willebrand disease",
        symptoms: ["Bleeding and bruising", "Prolonged bleeding from injuries", "Nosebleeds and heavy menstruation", "Joint pain and swelling", "Family history"],
        overviewText: "A genetic disorder that affects blood clotting, often causing bleeding and bruising.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Vitiligo",
        symptoms: ["White patches on skin", "Loss of skin pigment"],
        overviewText: "A condition causing the loss of skin pigment.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Wegener's granulomatosis",
        symptoms: ["Nosebleeds and sinus infections", "Coughing and shortness of breath", "Fatigue and weight loss", "Joint pain and swelling", "Kidney damage and failure"],
        overviewText: "A rare autoimmune disorder that affects the blood vessels, often causing nosebleeds and kidney damage.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Wilms tumor",
        symptoms: ["Abdominal mass and pain", "Fever and vomiting", "Blood in the urine", "High blood pressure", "Family history"],
        overviewText: "A rare childhood cancer that affects the kidneys, often causing abdominal mass and pain.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Wilson's disease",
        symptoms: ["Liver damage and cirrhosis", "Neurological problems and tremors", "Psychiatric disorders and mood changes", "Kayser-Fleischer rings in the eyes", "Family history"],
        overviewText: "A genetic disorder that affects copper metabolism, often causing liver damage and neurological problems.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Warts",
        symptoms: ["Small growths on skin", "Painful or itchy"],
        overviewText: "A viral infection causing skin growths.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Xeroderma pigmentosum",
        symptoms: ["Extreme sensitivity to sunlight", "Skin discoloration", "Eye problems"],
        overviewText: "A rare genetic disorder affecting the skin and eyes.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Yellow fever",
        symptoms: ["Fever and chills", "Headache and muscle pain", "Nausea and vomiting", "Diarrhea and abdominal pain", "Bleeding and hemorrhage"],
        overviewText: "A viral infection that affects the liver and kidneys, often causing fever and bleeding.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Zika virus",
        symptoms: ["Fever and rash", "Joint pain and swelling", "Red eyes and conjunctivitis", "Microcephaly and birth defects", "Mosquito-borne transmission"],
        overviewText: "A viral infection that affects the brain and nervous system, often causing fever and birth defects.",
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      },
      {
        name: "Zollinger-Ellison syndrome",
        symptoms: ["Severe peptic ulcers and diarrhea", "Abdominal pain and weight loss", "Vomiting and bleeding", "Elevated gastrin levels", "Tumors in the pancreas or duodenum"],
        overviewText: "A rare disorder that affects the digestive system, often causing severe peptic ulcers and diarrhea.", 
        images: ["", ""], 
        description: ["", "", ""], 
        treatment: ["", "", ""]
      }
    ]);
    const [testsData] = useState([
      {
        name: "A1C Test", 
        overview: "The A1C test, also known as the glycated hemoglobin (HbA1c) test, is a simple blood test that measures your average blood sugar levels over the past two to three months. It's used to diagnose and monitor diabetes, as well as determine how well your diabetes treatment plan is working. The test results show your average blood sugar levels as a percentage, with higher percentages indicating higher blood sugar levels. By taking this test, you can get a better understanding of your blood sugar control and make informed decisions about your health.",
        why: ["The A1C test is carried out to diagnose and monitor diabetes, a chronic condition characterized by high blood sugar levels. By measuring average blood sugar levels over a two- to three-month period, healthcare providers can determine if blood sugar levels are under control or if adjustments need to be made to a patient's treatment plan. Regular A1C testing helps identify potential complications and enables timely interventions to prevent long-term damage.", "The A1C test is also used to screen individuals at risk of developing type 2 diabetes, such as those with a family history, obesity, or other risk factors. Early detection and treatment can significantly improve outcomes and reduce the risk of complications. Additionally, the A1C test helps monitor the effectiveness of diabetes treatment plans, including lifestyle changes and medication, allowing healthcare providers to make informed decisions about adjustments to a patient's care.", "Furthermore, the A1C test provides valuable insights into blood sugar control over an extended period, helping healthcare providers identify patterns and trends that may not be apparent through single-point blood sugar measurements. This information enables healthcare providers to develop personalized treatment plans tailored to a patient's specific needs, promoting better disease management and improved quality of life for individuals with diabetes."],
        preparation: ["Patients can prepare for the A1C test by following a few simple steps. No special preparation is required, but it's recommended to: (1) fast (avoid eating or drinking) for at least 8 hours before the test, (2) avoid alcohol and strenuous exercise for 24 hours before the test, (3) continue to take any prescribed medications as usual, and (4) inform your healthcare provider if you have any hemoglobin variants or anemia, as these conditions may affect test results. By following these guidelines, patients can ensure accurate and reliable results from their A1C test."], 
        expectation: ["The A1C test is a quick and simple blood test that measures your average blood sugar levels over the past 2-3 months. During the test, a healthcare professional will prick your finger with a small needle to collect a small blood sample.", "The blood sample is then collected into a test strip or small tube and sent to a laboratory for analysis. The test results will show your average blood sugar levels as a percentage, with higher percentages indicating higher blood sugar levels.", "Your healthcare provider will discuss the results with you and use them to adjust your diabetes treatment plan as needed. The test results will also indicate if your blood sugar levels are within a healthy range, or if you need to make changes to your diet, exercise routine, or medication to better manage your diabetes."], 
        result: ["Your A1C result is given as a percentage, with higher percentages indicating higher average blood sugar levels.", "The results are usually categorized as follows: Normal: Below 5.7%, Prediabetes: 5.7% to 6.4%, Diabetes: 6.5% or higher.", "Your healthcare provider will discuss the results with you and use them to confirm a diagnosis of diabetes or prediabetes, monitor how well your diabetes treatment plan is working, adjust your treatment plan as needed, and identify potential complications and take preventive measures.", "The A1C result provides a comprehensive picture of your average blood sugar control over the past 2-3 months, helping your healthcare provider make informed decisions about your care.", "By regularly monitoring your A1C levels, you and your healthcare provider can work together to manage your diabetes and reduce the risk of long-term complications, such as heart disease, kidney damage, and nerve damage."],
        limitation: ["The A1C test is not perfect and has some limitations.", "It may not accurately reflect blood sugar control in certain individuals, such as those with anemia, vitamin deficiencies, or chronic diseases like kidney or liver disease.", "Pregnancy, recent blood transfusions, and certain medications can also affect A1C results.", "The test may not detect sudden changes in blood sugar levels, and results may be misleading if you have a hemoglobin variant or anemia.", "Your healthcare provider will consider these limitations when interpreting your A1C results and developing your diabetes management plan." ]
      }, 
      {
        name: "Abdominal Hysterectomy", 
        overview: "Abdominal hysterectomy is a surgical procedure to remove the uterus or womb, usually performed to treat conditions such as uterine fibroids, endometriosis, or uterine cancer. The surgery involves an incision in the lower abdomen, and the uterus is removed through the incision.",
        why: ["Abdominal hysterectomy is performed to treat conditions such as uterine fibroids, endometriosis, or uterine cancer.", "The surgery may also be performed in cases of severe bleeding or pain that has not responded to other treatments.", "Abdominal hysterectomy is usually considered a last resort, after other treatment options have been exhausted."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing abdominal hysterectomy.", "This may include avoiding certain medications, fasting, and preparing for a hospital stay.", "Patients may also need to have some tests done before the surgery, such as blood tests or imaging studies."],
        expectation: ["The surgery typically takes a few hours to complete.", "During the procedure, the surgeon will make an incision in the lower abdomen and remove the uterus through the incision.", "The patient will be under general anesthesia and will not feel any pain during the procedure."],
        result: ["After the surgery, the patient will need to rest and recover for several days.", "Pain medication may be prescribed to manage any discomfort or pain.", "The patient will need to follow a specific recovery plan, including follow-up appointments with their healthcare provider."],
        limitation: ["Abdominal hysterectomy is a major surgery and carries some risks and complications.", "These may include bleeding, infection, or injury to surrounding organs.", "The surgery may also affect sexual function and fertility."]
      }, 
      {
        name: "Abdominal Ultrasound",
        overview: "Abdominal ultrasound is a non-invasive imaging test that uses high-frequency sound waves to produce images of the organs in the abdominal cavity. It is used to evaluate the liver, gallbladder, pancreas, kidneys, and other organs in the abdomen.", 
        why: ["Abdominal ultrasound is performed to evaluate the organs in the abdominal cavity.", "It is used to diagnose conditions such as gallstones, liver disease, and kidney stones.", "The test is also used to monitor the progression of certain conditions and to guide treatment."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing abdominal ultrasound.", "This may include fasting, avoiding certain medications, and wearing loose clothing."],
        expectation: ["The test typically takes 30 minutes to an hour to complete.", "During the procedure, a probe called a transducer will be placed on the abdomen to produce images of the organs.", "The patient will need to lie still and hold their breath for short periods during the procedure."],
        result: ["The images produced by the ultrasound will be examined by a radiologist.", "The results will be discussed with the patient's healthcare provider, who will explain the findings and recommend further testing or treatment as needed."],
        limitation: ["Abdominal ultrasound is a non-invasive test and has no risks or complications.", "However, the test may not produce clear images if the patient has a lot of gas in the abdomen or if they are overweight.", "The test may also not detect certain conditions, such as small stones or tumors."]
      }, 
      {
        name: "Abscess Drainage", 
        overview: "Abscess drainage is a procedure to remove pus from an abscess, a pocket of infection that forms in the body. The procedure is usually performed by a surgeon or a radiologist.", 
        why: ["Abscess drainage is performed to remove the infection and promote healing.", "The procedure is usually necessary when the abscess does not respond to antibiotic treatment.", "Abscess drainage can also be used to relieve symptoms such as pain and swelling."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing abscess drainage.", "This may include fasting, avoiding certain medications, and preparing for a hospital stay."],
        expectation: ["The procedure typically takes 30 minutes to an hour to complete.", "During the procedure, the surgeon or radiologist will make an incision in the skin to drain the abscess.", "The patient may feel some discomfort or pain during the procedure."],
        result: ["The abscess will be drained and the infection will be removed.", "The patient will need to rest and recover for several days after the procedure.", "The patient may need to take antibiotics to prevent further infection."],
        limitation: ["Abscess drainage is a relatively safe procedure, but there are some risks and complications.", "These may include bleeding, infection, or injury to surrounding organs.", "The procedure may also not be effective in removing the entire infection."]
      }, 
      {
        name: "AChR Antibody Test",
        overview: "Acetylcholine Receptor antibody test is a blood test that measures the level of antibodies against the acetylcholine receptor in the blood. It is used to diagnose myasthenia gravis and other conditions that affect the nervous system.",
        why: ["AChR antibody test is performed to diagnose myasthenia gravis and other conditions that affect the nervous system.", "It is also used to monitor the progression of the disease and the effectiveness of treatment.", "The test may also be used to diagnose other conditions that may cause similar symptoms, such as Lambert-Eaton syndrome."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing AChR antibody test.", "This may include fasting, avoiding certain medications, and preparing for a blood draw."],
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw." ],
        result: ["The results of the test will be reported as positive or negative.", "A positive result indicates the presence of AChR antibodies in the blood.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."],
        limitation: ["AChR antibody test is a highly specific test, but it may not detect all cases of myasthenia gravis.", "There may be false positive results in patients with other conditions, such as rheumatoid arthritis or lupus.", "The test may also not detect the presence of other antibodies that may be associated with myasthenia gravis."]
      }, 
      {
        name: "Alanine Aminotransferase (ALT) Test",
        overview: "The Alanine Aminotransferase (ALT) test is a blood test that measures the level of ALT enzyme in the blood. It is used to diagnose and monitor liver disease or damage.", 
        why: ["The ALT test is performed to diagnose and monitor liver disease or damage.", "It is also used to monitor the effectiveness of treatment for liver disease.", "The test may also be used to screen for liver disease in people with risk factors such as alcohol abuse or viral hepatitis."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the ALT test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."], 
        result: ["The results of the test will be reported as a numerical value.", "A high level of ALT in the blood indicates liver damage or disease.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."], 
        limitation: ["The ALT test is not perfect and may not detect all cases of liver disease or damage.", "There may be false positive results in patients with other conditions such as muscle disease or heart disease.", "The test may also not detect the presence of other enzymes that may be associated with liver disease."]
      }, 
      {
        name: "Albumin Test",
        overview: "The albumin test is a blood test that measures the level of albumin in the blood. Albumin is a type of protein that helps to regulate fluid balance and transport vital nutrients and hormones throughout the body.", 
        why: ["The albumin test is performed to diagnose and monitor liver disease or damage.", "It is also used to monitor the effectiveness of treatment for liver disease.", "The test may also be used to screen for liver disease in people with risk factors such as alcohol abuse or viral hepatitis."], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the albumin test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."], 
        result: ["The results of the test will be reported as a numerical value.", "A low level of albumin in the blood indicates liver damage or disease.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."], 
        limitation: ["The albumin test is not perfect and may not detect all cases of liver disease or damage.", "There may be false positive results in patients with other conditions such as kidney disease or heart disease.", "The test may also not detect the presence of other proteins that may be associated with liver disease."]
      }, 
      {
        name: "Aldolase Test", 
        overview: "The aldolase test is a blood test that measures the level of aldolase enzyme in the blood. Aldolase is an enzyme that helps to break down sugars in the body.",
        why: ["The aldolase test is performed to diagnose and monitor muscle disease or damage.", "It is also used to monitor the effectiveness of treatment for muscle disease.", "The test may also be used to screen for muscle disease in people with risk factors such as muscle weakness or muscle cramps."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the aldolase test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."],
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."],
        result: ["The results of the test will be reported as a numerical value.", "A high level of aldolase in the blood indicates muscle damage or disease.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."],
        limitation: ["The aldolase test is not perfect and may not detect all cases of muscle disease or damage.", "There may be false positive results in patients with other conditions such as liver disease or heart disease.", "The test may also not detect the presence of other enzymes that may be associated with muscle disease."]
      }, 
      {
        name: "Alkaline Phosphatase (ALP) Test", 
        overview: "The alkaline phosphatase (ALP) test is a blood test that measures the level of ALP enzyme in the blood. ALP is an enzyme that helps to break down proteins and is found in many tissues throughout the body.", 
        why: ["The ALP test is performed to diagnose and monitor liver disease or damage.", "It is also used to monitor the effectiveness of treatment for liver disease.", "The test may also be used to screen for liver disease in people with risk factors such as alcohol abuse or viral hepatitis."], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the ALP test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."], 
        result: ["The results of the test will be reported as a numerical value.", "A high level of ALP in the blood indicates liver damage or disease.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."], 
        limitation: ["The ALP test is not perfect and may not detect all cases of liver disease or damage.", "There may be false positive results in patients with other conditions such as bone disease or kidney disease.", "The test may also not detect the presence of other enzymes that may be associated with liver disease."]
      }, 
      {
        name: "Alpha-Fetoprotein (AFP) Test", 
        overview: "The alpha-fetoprotein (AFP) test is a blood test that measures the level of AFP in the blood. AFP is a protein produced by the liver and yolk sac of a fetus during pregnancy.", 
        why: ["The AFP test is performed to screen for and diagnose liver cancer.", "It is also used to monitor the effectiveness of treatment for liver cancer.", "The test may also be used to screen for testicular cancer in men."], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the AFP test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."], 
        result: ["The results of the test will be reported as a numerical value.", "A high level of AFP in the blood indicates liver cancer or testicular cancer.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."], 
        limitation: ["The AFP test is not perfect and may not detect all cases of liver cancer or testicular cancer.", "There may be false positive results in patients with other conditions such as liver disease or kidney disease.", "The test may also not detect the presence of other proteins that may be associated with liver cancer or testicular cancer."]
      }, 
      {
        name: "Amylase Test", 
        overview: "The amylase test is a blood test that measures the level of amylase enzyme in the blood. Amylase is an enzyme that helps to break down carbohydrates into sugars.", 
        why: ["The amylase test is performed to diagnose and monitor pancreatitis or pancreatic damage.", "It is also used to monitor the effectiveness of treatment for pancreatitis.", "The test may also be used to screen for pancreatic disease in people with risk factors such as alcohol abuse or gallstones."], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the amylase test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."], 
        result: ["The results of the test will be reported as a numerical value.", "A high level of amylase in the blood indicates pancreatitis or pancreatic damage.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."], 
        limitation: ["The amylase test is not perfect and may not detect all cases of pancreatitis or pancreatic damage.", "There may be false positive results in patients with other conditions such as salivary gland disease or bowel obstruction.", "The test may also not detect the presence of other enzymes that may be associated with pancreatic disease."]
      }, 
      {
        name: "Androstenedione (Andro) Test", 
        overview: "The androstenedione (Andro) test is a blood test that measures the level of androstenedione, a hormone produced by the adrenal glands and ovaries, in the blood.", 
        why: ["The Andro test is performed to diagnose and monitor hormonal imbalances, such as congenital adrenal hyperplasia (CAH) or polycystic ovary syndrome (PCOS).", "It is also used to monitor the effectiveness of treatment for hormonal imbalances.", "The test may also be used to screen for adrenal gland disorders or ovarian cancer."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the Andro test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."], 
        result: ["The results of the test will be reported as a numerical value.", "A high level of androstenedione in the blood indicates a hormonal imbalance or adrenal gland disorder.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."], 
        limitation: ["The Andro test is not perfect and may not detect all cases of hormonal imbalances or adrenal gland disorders.", "There may be false positive results in patients with other conditions such as liver disease or kidney disease.", "The test may also not detect the presence of other hormones that may be associated with hormonal imbalances or adrenal gland disorders."]
      }, 
      {
        name: "Antinuclear Antibody (ANA) Test", 
        overview: "The antinuclear antibody (ANA) test is a blood test that measures the level of antinuclear antibodies in the blood. Antinuclear antibodies are autoantibodies that attack the body's own tissues, particularly the nucleus of cells.", 
        why: ["The ANA test is performed to diagnose and monitor autoimmune disorders, such as systemic lupus erythematosus (SLE) or rheumatoid arthritis (RA).", "It is also used to monitor the effectiveness of treatment for autoimmune disorders.", "The test may also be used to screen for autoimmune disorders in people with risk factors such as family history or symptoms such as joint pain or fatigue."], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the ANA test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."], 
        result: ["The results of the test will be reported as a numerical value.", "A high level of antinuclear antibodies in the blood indicates an autoimmune disorder.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."], 
        limitation: ["The ANA test is not perfect and may not detect all cases of autoimmune disorders.", "There may be false positive results in patients with other conditions such as infection or cancer.", "The test may also not detect the presence of other autoantibodies that may be associated with autoimmune disorders."]
      }, 
      {
        name: "Apolipoprotein A-1 (Apo A-1) Test", 
        overview: "The apolipoprotein A-1 (Apo A-1) test is a blood test that measures the level of apolipoprotein A-1, a protein that helps remove excess cholesterol from the bloodstream, in the blood.", 
        why: ["The Apo A-1 test is performed to assess cardiovascular risk and diagnose and monitor conditions such as high cholesterol or atherosclerosis.", "It is also used to monitor the effectiveness of treatment for high cholesterol or atherosclerosis.", "The test may also be used to screen for cardiovascular disease in people with risk factors such as family history or obesity."], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the Apo A-1 test.", "This may include fasting for 8-12 hours before the test.", "Patients should also avoid alcohol and certain medications that may interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete.", "During the test, a blood sample will be drawn from a vein in the arm.", "The patient may feel some discomfort or pain during the blood draw."], 
        result: ["The results of the test will be reported as a numerical value.", "A high level of apolipoprotein A-1 in the blood indicates a lower risk of cardiovascular disease.", "The patient's healthcare provider will discuss the results and recommend further testing or treatment as needed."], 
        limitation: ["The Apo A-1 test is not perfect and may not detect all cases of cardiovascular disease.", "There may be false positive results in patients with other conditions such as liver disease or kidney disease.", "The test may also not detect the presence of other proteins that may be associated with cardiovascular disease."]
      }, 
      {
        name: "Aspartate Aminotransferase (AST) Test",
        overview: ["The aspartate aminotransferase (AST) test is a blood test that measures the level of AST enzyme in the blood. AST is an enzyme that plays a crucial role in the metabolism of amino acids and is found in many tissues throughout the body, including the liver, heart, and muscles.", "The AST test is used to diagnose and monitor liver disease or damage, as well as to monitor the effectiveness of treatment for liver disease. It is also used to screen for liver disease in people with risk factors such as alcohol abuse or viral hepatitis.", "In addition to liver disease, the AST test may also be used to diagnose and monitor other conditions such as heart disease, muscle disease, and pancreatic disease. The test may also be used to monitor the effectiveness of treatment for these conditions." ],
        why: ["The AST test is performed to diagnose and monitor liver disease or damage, as well as to monitor the effectiveness of treatment for liver disease. It is also used to screen for liver disease in people with risk factors such as alcohol abuse or viral hepatitis.", "The test may also be used to diagnose and monitor other conditions such as heart disease, muscle disease, and pancreatic disease. The AST test is often performed in conjunction with other tests, such as the alanine aminotransferase (ALT) test, to confirm the diagnosis of liver disease or damage.", "The AST test may also be used to monitor the effectiveness of treatment for liver disease or other conditions. In some cases, the test may be used to monitor the progression of disease or to detect relapse." ],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the AST test. This may include fasting for 8-12 hours before the test, as well as avoiding alcohol and certain medications that may interfere with the test results.", "Patients should also inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have. This information can help the healthcare provider interpret the test results accurately.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test, as these can interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm. The patient may feel some discomfort or pain during the blood draw.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the AST test. The patient should ask their healthcare provider any questions they have about the test results and what they mean."],
        result: ["The results of the AST test will be reported as a numerical value. A high level of AST in the blood indicates liver damage or disease, while a low level indicates normal liver function.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean. In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the AST test.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean. It is important for the patient to understand the results of the test and any implications for their health."], 
        limitation: ["The AST test is not perfect and may not detect all cases of liver disease or damage. There may be false positive results in patients with other conditions such as heart disease or muscle disease.", "The test may also not detect the presence of other enzymes that may be associated with liver disease or damage. In some cases, the test may not be able to distinguish between different types of liver disease or damage.", "The healthcare provider will take these limitations into account when interpreting the results of the AST test. The patient should ask their healthcare provider any questions they have about the limitations of the test and what they mean."]
      }, 
      {
        name: "Basophil Count Test", 
        overview: ["The basophil count test is a blood test that measures the number of basophils in the blood. Basophils are a type of white blood cell that plays a role in inflammation and allergic reactions.", "The test is used to diagnose and monitor conditions such as allergies, asthma, and inflammatory disorders. It may also be used to monitor the effectiveness of treatment for these conditions.", "In addition to allergies and asthma, the basophil count test may also be used to diagnose and monitor other conditions such as leukemia and inflammatory bowel disease."], 
        why: ["The basophil count test is performed to diagnose and monitor allergies, asthma, and inflammatory disorders. It may also be used to monitor the effectiveness of treatment for these conditions.", "The test may also be used to diagnose and monitor other conditions such as leukemia and inflammatory bowel disease. The basophil count test is often performed in conjunction with other tests, such as the complete blood count (CBC) test, to confirm the diagnosis.", "The basophil count test may also be used to monitor the progression of disease or to detect relapse. In some cases, the test may be used to monitor the effectiveness of treatment for leukemia or other blood disorders." ], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the basophil count test. This may include fasting for 8-12 hours before the test, as well as avoiding alcohol and certain medications that may interfere with the test results.", "Patients should also inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have. This information can help the healthcare provider interpret the test results accurately.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test, as these can interfere with the test results."], 
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm. The patient may feel some discomfort or pain during the blood draw.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the basophil count test. The patient should ask their healthcare provider any questions they have about the test results and what they mean."], 
        result: [ "The results of the basophil count test will be reported as a numerical value. A high level of basophils in the blood indicates an allergic reaction or inflammation, while a low level indicates normal basophil function.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean. In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the basophil count test.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean. It is important for the patient to understand the results of the test and any implications for their health." ],
        limitation: [ "The basophil count test is not perfect and may not detect all cases of allergies or inflammation. There may be false positive results in patients with other conditions such as leukemia or inflammatory bowel disease.", "The test may also not detect the presence of other white blood cells that may be associated with allergies or inflammation. In some cases, the test may not be able to distinguish between different types of allergies or inflammation.", "The healthcare provider will take these limitations into account when interpreting the results of the basophil count test. The patient should ask their healthcare provider any questions they have about the limitations of the test and what they mean."]
      }, 
      {
        name: "Bicarbonate Test",
        overview: ["The bicarbonate test is a blood test that measures the level of bicarbonate in the blood. Bicarbonate is a electrolyte that helps regulate the body's acid-base balance.", "The test is used to diagnose and monitor conditions such as acidosis or alkalosis. It may also be used to monitor the effectiveness of treatment for these conditions.", "In addition to acid-base imbalance, the bicarbonate test may also be used to diagnose and monitor other conditions such as kidney disease or respiratory disorders." ],
        why: ["The bicarbonate test is performed to diagnose and monitor acidosis or alkalosis. It may also be used to monitor the effectiveness of treatment for these conditions.", "The test may also be used to diagnose and monitor other conditions such as kidney disease or respiratory disorders. The bicarbonate test is often performed in conjunction with other tests, such as the electrolyte panel, to confirm the diagnosis.", "The bicarbonate test may also be used to monitor the progression of disease or to detect relapse. In some cases, the test may be used to monitor the effectiveness of treatment for kidney disease or other conditions." ],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the bicarbonate test. This may include fasting for 8-12 hours before the test, as well as avoiding alcohol and certain medications that may interfere with the test results.", "Patients should also inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test." ], 
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the bicarbonate test." ], 
        result: ["The results of the bicarbonate test will be reported as a numerical value. A high level of bicarbonate in the blood indicates alkalosis, while a low level indicates acidosis.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean. In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the bicarbonate test.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean."],
        limitation: ["The bicarbonate test is not perfect and may not detect all cases of acid-base imbalance. There may be false positive results in patients with other conditions such as kidney disease or respiratory disorders.", "The test may also not detect the presence of other electrolytes that may be associated with acid-base imbalance. In some cases, the test may not be able to distinguish between different types of acid-base imbalance.", "The healthcare provider will take these limitations into account when interpreting the results of the bicarbonate test."]
      }, 
      {
        name: "Blood Culture Test", 
        overview: ["The blood culture test is a laboratory test that detects the presence of bacteria or fungi in the blood.", "The test is used to diagnose bloodstream infections such as sepsis or meningitis. It may also be used to monitor the effectiveness of treatment for these conditions.", "In addition to bloodstream infections, the blood culture test may also be used to diagnose and monitor other conditions such as endocarditis or osteomyelitis."],
        why: ["The blood culture test is performed to diagnose and monitor bloodstream infections such as sepsis or meningitis.", "The test may also be used to diagnose and monitor other conditions such as endocarditis or osteomyelitis. The blood culture test is often performed in conjunction with other tests, such as the complete blood count (CBC) test, to confirm the diagnosis.", "The blood culture test may also be used to monitor the progression of disease or to detect relapse. In some cases, the test may be used to monitor the effectiveness of treatment for bloodstream infections or other conditions."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the blood culture test.", "Patients should inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test."],
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the blood culture test." ], 
        result: ["The results of the blood culture test will be reported as a numerical value. A positive result indicates the presence of bacteria or fungi in the blood.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean. In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the blood culture test.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean." ], 
        limitation: ["The blood culture test is not perfect and may not detect all cases of bloodstream infections. There may be false positive results in patients with other conditions such as bacteremia or fungemia.", "The test may also not detect the presence of other microorganisms that may be associated with bloodstream infections. In some cases, the test may not be able to distinguish between different types of bloodstream infections.", "The healthcare provider will take these limitations into account when interpreting the results of the blood culture test." ]
      }, 
      {
        name: "Blood Urea Nitrogen (BUN) Test",
        overview: ["The blood urea nitrogen (BUN) test is a laboratory test that measures the level of urea nitrogen in the blood.", "The test is used to diagnose and monitor kidney function and disease. It may also be used to monitor the effectiveness of treatment for kidney disease.", "In addition to kidney disease, the BUN test may also be used to diagnose and monitor other conditions such as dehydration or heart failure." ], 
        why: ["The BUN test is performed to diagnose and monitor kidney function and disease.", "The test may also be used to diagnose and monitor other conditions such as dehydration or heart failure. The BUN test is often performed in conjunction with other tests, such as the creatinine test, to confirm the diagnosis.", "The BUN test may also be used to monitor the progression of disease or to detect relapse. In some cases, the test may be used to monitor the effectiveness of treatment for kidney disease or other conditions." ],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the BUN test.", "Patients should inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test."], 
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the BUN test." ],
        result: ["The results of the BUN test will be reported as a numerical value. A high level of urea nitrogen in the blood indicates kidney disease or dysfunction.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean. In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the BUN test.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean."],
        limitation: ["The BUN test is not perfect and may not detect all cases of kidney disease or dysfunction. There may be false positive results in patients with other conditions such as dehydration or heart failure.", "The test may also not detect the presence of other kidney function markers that may be associated with kidney disease or dysfunction. In some cases, the test may not be able to distinguish between different types of kidney disease or dysfunction.", "The healthcare provider will take these limitations into account when interpreting the results of the BUN test." ]
      }, 
      {
        name: "Bone Density Test", 
        overview: ["The bone density test is a noninvasive test that measures the density of bones.", "The test is used to diagnose and monitor osteoporosis, a condition characterized by brittle and fragile bones.", "In addition to osteoporosis, the bone density test may also be used to diagnose and monitor other conditions such as osteopenia or bone cancer." ], 
        why: ["The bone density test is performed to diagnose and monitor osteoporosis and other bone disorders.", "The test may also be used to assess the risk of fractures and monitor the effectiveness of treatment for osteoporosis.", "The bone density test is often performed in conjunction with other tests, such as blood tests and physical examinations, to confirm the diagnosis." ],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the bone density test.", "Patients should inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test."], 
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a machine will take X-ray images of the bones.", "After the test, the healthcare provider will discuss the results with the patient and explain what they mean.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the bone density test."], result: ["The results of the bone density test will be reported as a numerical value. A high value indicates strong bones, while a low value indicates weak bones.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean." ],
        limitation: ["The bone density test is not perfect and may not detect all cases of osteoporosis or other bone disorders.", "There may be false positive results in patients with other conditions such as arthritis or bone cancer.", "The healthcare provider will take these limitations into account when interpreting the results of the bone density test."]
      }, 
      {
        name: "Brain Natriuretic Peptide (BNP) Test", 
        overview: ["The brain natriuretic peptide (BNP) test is a blood test that measures the level of BNP in the blood.", "BNP is a hormone produced by the heart in response to heart failure or other conditions that affect the heart.", "The test is used to diagnose and monitor heart failure, and to distinguish it from other conditions that may have similar symptoms." ], 
        why: [ "The BNP test is performed to diagnose and monitor heart failure and other conditions that affect the heart.", "The test may also be used to assess the severity of heart failure and monitor the effectiveness of treatment.", "The BNP test is often performed in conjunction with other tests, such as echocardiography and electrocardiography, to confirm the diagnosis." ], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the BNP test.", "Patients should inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test."], 
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the BNP test." ], 
        result: ["The results of the BNP test will be reported as a numerical value. A high level of BNP in the blood indicates heart failure or other conditions that affect the heart.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean."], 
        limitation: ["The BNP test is not perfect and may not detect all cases of heart failure or other conditions that affect the heart.", "There may be false positive results in patients with other conditions such as kidney disease or pulmonary embolism.", "The healthcare provider will take these limitations into account when interpreting the results of the BNP test." ]
      }, 
      {
        name: "C-Reactive Protein (CRP) Test", 
        overview: ["The C-reactive protein (CRP) test is a blood test that measures the level of CRP in the blood.", "CRP is a protein produced by the liver in response to inflammation or infection.", "The test is used to diagnose and monitor conditions such as cardiovascular disease, rheumatoid arthritis, and lupus." ], 
        why: ["The CRP test is performed to diagnose and monitor conditions that cause inflammation or infection.", "The test may also be used to assess the risk of cardiovascular disease and monitor the effectiveness of treatment.", "The CRP test is often performed in conjunction with other tests, such as the erythrocyte sedimentation rate (ESR) test, to confirm the diagnosis."],
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the CRP test.", "Patients should inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test." ],
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the CRP test."], 
        result: ["The results of the CRP test will be reported as a numerical value. A high level of CRP in the blood indicates inflammation or infection.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean." ], 
        limitation: ["The CRP test is not perfect and may not detect all cases of inflammation or infection.", "There may be false positive results in patients with other conditions such as pregnancy or cancer.", "The healthcare provider will take these limitations into account when interpreting the results of the CRP test." ]
      }, 
      {
        name: "Calcium Test", 
        overview: ["The calcium test is a blood test that measures the level of calcium in the blood.", "Calcium is an essential mineral that plays a crucial role in many bodily functions, including muscle function and bone health.", "The test is used to diagnose and monitor conditions such as hypercalcemia (high calcium levels) and hypocalcemia (low calcium levels)." ], 
        why: ["The calcium test is performed to diagnose and monitor conditions that affect calcium levels in the blood.", "The test may also be used to assess the function of the parathyroid glands, which regulate calcium levels in the blood.", "The calcium test is often performed in conjunction with other tests, such as the parathyroid hormone (PTH) test, to confirm the diagnosis." ], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the calcium test.", "Patients should inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test." ], 
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the calcium test." ], 
        result: ["The results of the calcium test will be reported as a numerical value. A high level of calcium in the blood indicates hypercalcemia, while a low level indicates hypocalcemia.", "The healthcare provider will discuss the results of the test with the patient and explain what they mean.", "The patient should ask their healthcare provider any questions they have about the test results and what they mean." ], 
        limitation: ["The calcium test is not perfect and may not detect all cases of hypercalcemia or hypocalcemia.", "There may be false positive results in patients with other conditions such as kidney disease or certain medications.", "The healthcare provider will take these limitations into account when interpreting the results of the calcium test." ]
      }, 
      {
        name: "Complete Blood Count (CBC) Test", 
        overview: ["The complete blood count (CBC) test is a blood test that measures various components of your blood, including red blood cells, white blood cells, and platelets.", "The test is used to diagnose and monitor a wide range of conditions, including anemia, infection, inflammation, and bleeding disorders.", "The CBC test is often performed as part of a routine physical examination or to monitor the effectiveness of treatment for a particular condition." ], 
        why: ["The CBC test is performed to diagnose and monitor conditions that affect the blood, such as anemia, infection, and bleeding disorders.", "The test may also be used to assess the overall health of the patient and to monitor the effectiveness of treatment for a particular condition.", "The CBC test is often performed in conjunction with other tests, such as the blood differential test, to confirm the diagnosis." ], 
        preparation: ["Patients will need to follow a specific preparation plan before undergoing the CBC test.", "Patients should inform their healthcare provider of any medications they are taking, as well as any underlying medical conditions they have.", "In some cases, the healthcare provider may also recommend that patients avoid eating certain foods or taking certain supplements before the test."], 
        expectation: ["The test typically takes 15-30 minutes to complete. During the test, a blood sample will be drawn from a vein in the arm.", "After the blood sample is drawn, it will be sent to a laboratory for analysis. The results of the test will be reported as a numerical value, and the healthcare provider will discuss the results with the patient.", "In some cases, the healthcare provider may also recommend additional testing or treatment based on the results of the CBC test." ], 
      },
      {
        name: "Cardiac Catheterization",
        overview: [
          "Cardiac catheterization is a procedure used to diagnose and treat certain cardiovascular conditions.",
          "During the procedure, a long, thin tube called a catheter is inserted in an artery or vein in the groin, neck, or arm and threaded through your blood vessels to your heart.",
          "The procedure can help diagnose and treat conditions like coronary artery disease, heart valve disease, and other heart problems."
        ],
        why: [
          "Cardiac catheterization is performed to diagnose and treat cardiovascular conditions.",
          "It helps to determine the presence of heart disease, the severity of the disease, and the best treatment options.",
          "The procedure is also used to evaluate the effectiveness of previous treatments."
        ],
        preparation: [
          "Patients should inform their healthcare provider about any medications they are taking and any allergies they have.",
          "Patients may be asked to stop eating and drinking for a few hours before the procedure.",
          "In some cases, patients may need to stop taking certain medications before the procedure."
        ],
        expectation: [
          "The procedure typically takes about an hour to complete.",
          "Patients will be given a local anesthetic to numb the area where the catheter will be inserted.",
          "After the procedure, patients will need to rest for several hours and may need to stay in the hospital overnight."
        ],
        result: [
          "The results of the cardiac catheterization will provide detailed information about the heart and blood vessels.",
          "The healthcare provider will discuss the results with the patient and explain what they mean.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "Cardiac catheterization is generally safe, but there are risks, including bleeding, infection, and damage to the blood vessels.",
          "There may be limitations in detecting certain conditions, and additional tests may be needed.",
          "The healthcare provider will take these limitations into account when interpreting the results."
        ]
      },
      {
        name: "Cholesterol Test",
        overview: [
          "A cholesterol test measures the amount of cholesterol and triglycerides in your blood.",
          "Cholesterol is a type of fat found in your blood that is necessary for building cells, but high levels can increase the risk of heart disease.",
          "The test is used to assess your risk of developing cardiovascular disease."
        ],
        why: [
          "The cholesterol test is performed to assess the risk of heart disease.",
          "It helps to identify individuals at high risk who may benefit from lifestyle changes or medication.",
          "The test is also used to monitor the effectiveness of treatment for high cholesterol."
        ],
        preparation: [
          "Patients may need to fast for 9-12 hours before the test.",
          "They should inform their healthcare provider of any medications or supplements they are taking.",
          "Patients should avoid alcohol and certain foods before the test."
        ],
        expectation: [
          "The test typically takes about 5-10 minutes to complete.",
          "A blood sample is drawn from a vein in the arm and sent to a laboratory for analysis.",
          "The results are usually available within a few days."
        ],
        result: [
          "The results will include levels of total cholesterol, LDL cholesterol, HDL cholesterol, and triglycerides.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend lifestyle changes or medication."
        ],
        limitation: [
          "The cholesterol test may not accurately reflect cholesterol levels if the patient is ill or has recently undergone surgery.",
          "Certain medications and conditions can affect the accuracy of the test.",
          "The healthcare provider will consider these factors when interpreting the results."
        ]
      },
      {
        name: "CT Scan (Computed Tomography)",
        overview: [
          "A CT scan uses X-rays and computer technology to create detailed images of the inside of the body.",
          "It is used to diagnose and monitor various conditions, including cancers, cardiovascular disease, and internal injuries.",
          "The scan provides more detailed information than regular X-rays."
        ],
        why: [
          "The CT scan is performed to diagnose and monitor various medical conditions.",
          "It helps to detect abnormalities in the body that may not be visible on regular X-rays.",
          "The scan is also used to guide certain medical procedures."
        ],
        preparation: [
          "Patients may need to avoid eating or drinking for a few hours before the scan.",
          "They should inform their healthcare provider of any allergies, especially to contrast material.",
          "Patients may need to remove metal objects and wear a hospital gown during the scan."
        ],
        expectation: [
          "The scan typically takes about 10-30 minutes to complete.",
          "Patients will lie on a table that slides into the CT scanner.",
          "The scanner takes a series of X-ray images, which are combined to create detailed images of the inside of the body."
        ],
        result: [
          "The results of the CT scan will provide detailed images of the inside of the body.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The CT scan involves exposure to radiation, which may increase the risk of cancer over time.",
          "Certain conditions, such as obesity, can affect the quality of the images.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Cystoscopy",
        overview: [
          "Cystoscopy is a procedure that allows the doctor to examine the inside of the bladder and urethra.",
          "A thin, flexible tube called a cystoscope is inserted through the urethra into the bladder.",
          "The procedure is used to diagnose and treat conditions affecting the bladder and urethra."
        ],
        why: [
          "Cystoscopy is performed to diagnose and treat conditions affecting the bladder and urethra.",
          "It helps to identify conditions such as bladder stones, tumors, and infections.",
          "The procedure is also used to monitor the effectiveness of treatment."
        ],
        preparation: [
          "Patients should inform their healthcare provider of any medications they are taking.",
          "They may need to avoid eating and drinking for a few hours before the procedure.",
          "Patients should empty their bladder before the procedure."
        ],
        expectation: [
          "The procedure typically takes about 15-30 minutes to complete.",
          "Patients will be given a local anesthetic to numb the area.",
          "After the procedure, patients may experience some discomfort and may need to drink plenty of fluids to flush out the bladder."
        ],
        result: [
          "The results of the cystoscopy will provide detailed information about the bladder and urethra.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "Cystoscopy is generally safe, but there are risks, including infection and bleeding.",
          "There may be limitations in detecting certain conditions, and additional tests may be needed.",
          "The healthcare provider will take these limitations into account when interpreting the results."
        ]
      },
      {
        name: "D-dimer Test",
        overview: [
          "The D-dimer test is a blood test that measures the presence of a substance released when a blood clot breaks up.",
          "The test is used to help diagnose conditions related to abnormal blood clotting, such as deep vein thrombosis (DVT), pulmonary embolism (PE), and disseminated intravascular coagulation (DIC).",
          "A negative D-dimer test result usually means that a blood clot is unlikely."
        ],
        why: [
          "The D-dimer test is performed to help diagnose or rule out conditions related to abnormal blood clotting.",
          "It is often used in emergency situations to quickly assess the likelihood of conditions like DVT or PE.",
          "The test may also be used to monitor the effectiveness of treatment for blood clotting disorders."
        ],
        preparation: [
          "There is usually no special preparation required for the D-dimer test.",
          "Patients should inform their healthcare provider of any medications they are taking, especially blood thinners.",
          "The healthcare provider may provide specific instructions if additional tests are being performed."
        ],
        expectation: [
          "The test typically takes a few minutes to complete.",
          "A blood sample is drawn from a vein in the arm and sent to a laboratory for analysis.",
          "The results are usually available within a few hours to a day."
        ],
        result: [
          "The results of the D-dimer test will indicate whether there is an elevated level of D-dimer in the blood.",
          "A positive result suggests the presence of an abnormal blood clot, while a negative result makes a blood clot unlikely.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health."
        ],
        limitation: [
          "The D-dimer test is not specific and can be elevated in conditions other than blood clots, such as inflammation or infection.",
          "A positive result does not confirm the presence of a blood clot and may require additional testing.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Dialysis",
        overview: [
          "Dialysis is a treatment that performs the functions of the kidneys when they are no longer able to work properly.",
          "The treatment removes waste products and excess fluids from the blood.",
          "There are two main types of dialysis: hemodialysis and peritoneal dialysis."
        ],
        why: [
          "Dialysis is performed to remove waste products and excess fluids from the blood in patients with kidney failure.",
          "The treatment helps to maintain the balance of electrolytes and other substances in the blood.",
          "Dialysis is used as a long-term treatment for chronic kidney disease or as a temporary measure for acute kidney injury."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on diet and fluid intake before dialysis.",
          "Patients may need to avoid certain medications before the procedure.",
          "In the case of hemodialysis, a vascular access will need to be created if it has not already been done."
        ],
        expectation: [
          "Hemodialysis typically takes about 3-5 hours and is performed several times a week at a dialysis center or at home.",
          "Peritoneal dialysis involves the use of a catheter placed in the abdomen and can be performed at home, usually daily.",
          "Patients may experience some discomfort during the procedure and may feel tired afterwards."
        ],
        result: [
          "The results of dialysis include the removal of waste products and excess fluids from the blood.",
          "The healthcare provider will monitor the patient's blood pressure, weight, and blood tests to assess the effectiveness of the treatment.",
          "Based on the results, the healthcare provider may adjust the dialysis schedule or other aspects of the patient's treatment."
        ],
        limitation: [
          "Dialysis is not a cure for kidney disease and does not completely replace the function of the kidneys.",
          "Patients may experience complications such as infection, low blood pressure, or muscle cramps.",
          "The healthcare provider will take these limitations into account when managing the patient's treatment."
        ]
      },
      {
        name: "Diabetes Insipidus Test",
        overview: [
          "The diabetes insipidus test, also known as the water deprivation test, is used to diagnose diabetes insipidus, a condition that affects the body's ability to regulate fluid balance.",
          "The test involves withholding fluids for a period of time and measuring changes in urine output and concentration.",
          "The test helps to determine whether the condition is due to a lack of antidiuretic hormone (ADH) or the kidneys' response to ADH."
        ],
        why: [
          "The diabetes insipidus test is performed to diagnose diabetes insipidus and determine the underlying cause.",
          "It helps to distinguish between central diabetes insipidus (caused by a lack of ADH) and nephrogenic diabetes insipidus (caused by the kidneys' response to ADH).",
          "The test may also be used to monitor the effectiveness of treatment for diabetes insipidus."
        ],
        preparation: [
          "Patients should inform their healthcare provider of any medications they are taking, as some medications may affect the test results.",
          "Patients may need to stop taking certain medications before the test.",
          "The healthcare provider will provide specific instructions on fluid intake before the test."
        ],
        expectation: [
          "The test typically takes several hours to complete and is usually performed in a hospital or specialized clinic.",
          "Patients will be asked to withhold fluids for a period of time, and blood and urine samples will be collected at regular intervals.",
          "The healthcare provider will monitor the patient's weight, blood pressure, and overall condition during the test."
        ],
        result: [
          "The results of the diabetes insipidus test will indicate how the body responds to fluid deprivation.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The diabetes insipidus test can be uncomfortable and may cause dehydration.",
          "There may be limitations in detecting mild cases of diabetes insipidus, and additional tests may be needed.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Dual-energy X-ray Absorptiometry (DEXA) Scan",
        overview: [
          "A DEXA scan is a type of imaging test that measures bone density.",
          "The test is used to diagnose and monitor osteoporosis and other conditions that affect bone density.",
          "The scan uses low levels of X-rays to create images of the bones."
        ],
        why: [
          "The DEXA scan is performed to assess bone density and diagnose conditions like osteoporosis.",
          "It helps to determine the risk of fractures and monitor the effectiveness of treatment for bone-related conditions.",
          "The test may also be used to assess bone health in patients with certain medical conditions or undergoing certain treatments."
        ],
        preparation: [
          "Patients should inform their healthcare provider of any medications or supplements they are taking.",
          "They should avoid taking calcium supplements for at least 24 hours before the test.",
          "Patients should wear loose, comfortable clothing and avoid wearing metal objects during the scan."
        ],
        expectation: [
          "The scan typically takes about 10-20 minutes to complete.",
          "Patients will lie on a table while a scanner passes over the body to measure bone density.",
          "The procedure is painless and involves minimal exposure to radiation."
        ],
        result: [
          "The results of the DEXA scan will provide information about bone density and the risk of fractures.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend lifestyle changes, medication, or other treatments."
        ],
        limitation: [
          "The DEXA scan may not detect all cases of osteoporosis or other bone-related conditions.",
          "There may be limitations in measuring bone density in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Electrocardiogram (ECG or EKG)",
        overview: [
          "An electrocardiogram (ECG or EKG) is a test that measures the electrical activity of the heart.",
          "It is used to detect and monitor heart conditions such as arrhythmias, heart attacks, and other heart-related issues.",
          "The test involves placing electrodes on the skin to record the heart's electrical signals."
        ],
        why: [
          "The ECG is performed to detect and monitor heart conditions such as arrhythmias, heart attacks, and other heart-related issues.",
          "It helps to assess the overall health of the heart and identify any abnormalities in the heart's electrical activity.",
          "The test is often part of a routine physical examination or preoperative assessment."
        ],
        preparation: [
          "There is usually no special preparation required for an ECG.",
          "Patients should inform their healthcare provider of any medications they are taking, as some medications can affect the test results.",
          "Patients should avoid using lotions or oils on their skin before the test, as these can interfere with the electrodes."
        ],
        expectation: [
          "The test typically takes about 5-10 minutes to complete.",
          "Electrodes will be placed on the patient's chest, arms, and legs to record the heart's electrical signals.",
          "The procedure is painless and non-invasive."
        ],
        result: [
          "The results of the ECG will provide information about the heart's electrical activity, including heart rate and rhythm.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The ECG may not detect all heart conditions, especially those that occur intermittently.",
          "There may be limitations in interpreting the results in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Echocardiogram",
        overview: [
          "An echocardiogram is an ultrasound test that uses sound waves to create images of the heart.",
          "The test provides detailed information about the heart's structure and function.",
          "It is used to diagnose and monitor heart conditions such as heart valve disease, heart failure, and congenital heart defects."
        ],
        why: [
          "The echocardiogram is performed to diagnose and monitor heart conditions such as heart valve disease, heart failure, and congenital heart defects.",
          "It helps to assess the overall health of the heart and identify any abnormalities in the heart's structure and function.",
          "The test may be performed as part of a routine cardiac evaluation or to monitor the effectiveness of treatment for a particular condition."
        ],
        preparation: [
          "There is usually no special preparation required for an echocardiogram.",
          "Patients should inform their healthcare provider of any medications they are taking.",
          "Patients should wear loose, comfortable clothing to the appointment."
        ],
        expectation: [
          "The test typically takes about 30-60 minutes to complete.",
          "Patients will lie on a table while a technician uses a handheld device called a transducer to create images of the heart.",
          "The procedure is painless and non-invasive."
        ],
        result: [
          "The results of the echocardiogram will provide detailed information about the heart's structure and function.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The echocardiogram may not detect all heart conditions, especially those that are not visible on ultrasound.",
          "There may be limitations in obtaining clear images in patients with certain medical conditions or body types.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Electroencephalogram (EEG)",
        overview: [
          "An electroencephalogram (EEG) is a test that measures the electrical activity of the brain.",
          "The test is used to diagnose and monitor conditions that affect brain function, such as epilepsy, sleep disorders, and brain injuries.",
          "The EEG involves placing electrodes on the scalp to record the brain's electrical signals."
        ],
        why: [
          "The EEG is performed to diagnose and monitor conditions that affect brain function, such as epilepsy, sleep disorders, and brain injuries.",
          "It helps to assess the overall health of the brain and identify any abnormalities in the brain's electrical activity.",
          "The test may be performed as part of a neurological evaluation or to monitor the effectiveness of treatment for a particular condition."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on preparation for the EEG.",
          "Patients should inform their healthcare provider of any medications they are taking, as some medications can affect the test results.",
          "Patients should avoid using hair products such as gel or spray on the day of the test, as these can interfere with the electrodes."
        ],
        expectation: [
          "The test typically takes about 30-60 minutes to complete.",
          "Electrodes will be placed on the patient's scalp to record the brain's electrical signals.",
          "The procedure is painless and non-invasive."
        ],
        result: [
          "The results of the EEG will provide information about the brain's electrical activity, including patterns that may indicate epilepsy or other conditions.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The EEG may not detect all brain conditions, especially those that occur intermittently.",
          "There may be limitations in interpreting the results in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Electromyography (EMG)",
        overview: [
          "Electromyography (EMG) is a test that measures the electrical activity of muscles and the nerves that control them.",
          "The test is used to diagnose and evaluate conditions that affect muscle and nerve function, such as muscular dystrophy, carpal tunnel syndrome, and peripheral neuropathy.",
          "The EMG involves inserting a small needle electrode into the muscle to record electrical activity."
        ],
        why: [
          "The EMG is performed to diagnose and evaluate conditions that affect muscle and nerve function, such as muscular dystrophy, carpal tunnel syndrome, and peripheral neuropathy.",
          "It helps to assess the overall health of the muscles and nerves and identify any abnormalities in their function.",
          "The test may be performed as part of a neurological evaluation or to monitor the effectiveness of treatment for a particular condition."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on preparation for the EMG.",
          "Patients should inform their healthcare provider of any medications they are taking, as some medications can affect the test results.",
          "Patients should avoid using lotions or oils on their skin before the test, as these can interfere with the electrodes."
        ],
        expectation: [
          "The test typically takes about 30-60 minutes to complete.",
          "A small needle electrode will be inserted into the muscle to record electrical activity.",
          "The procedure may cause some discomfort, but it is generally well-tolerated."
        ],
        result: [
          "The results of the EMG will provide information about the electrical activity of the muscles and nerves.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The EMG may not detect all muscle and nerve conditions, especially those that are not causing symptoms at the time of the test.",
          "There may be limitations in interpreting the results in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Fasting Blood Sugar (FBS) Test",
        overview: [
          "The fasting blood sugar (FBS) test measures the level of glucose in the blood after an overnight fast.",
          "It is used to diagnose and monitor diabetes and prediabetes.",
          "The test involves taking a blood sample after the patient has fasted for at least 8 hours."
        ],
        why: [
          "The FBS test is performed to diagnose and monitor diabetes and prediabetes.",
          "It helps to assess the body's ability to regulate blood sugar levels.",
          "The test may be part of a routine physical examination or diabetes management plan."
        ],
        preparation: [
          "Patients should fast for at least 8 hours before the test.",
          "Patients should inform their healthcare provider of any medications they are taking.",
          "Patients should avoid consuming any food or drink, except water, during the fasting period."
        ],
        expectation: [
          "The test typically takes about 5-10 minutes to complete.",
          "A blood sample will be drawn from a vein in the arm.",
          "The procedure is quick and relatively painless."
        ],
        result: [
          "The results of the FBS test will provide information about the blood glucose level.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The FBS test may not detect all cases of diabetes or prediabetes.",
          "There may be limitations in interpreting the results in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      
      {
        name: "Fecal Occult Blood Test (FOBT)",
        overview: [
          "The fecal occult blood test (FOBT) detects hidden (occult) blood in the stool.",
          "It is used to screen for colorectal cancer and other gastrointestinal disorders.",
          "The test involves collecting stool samples and testing them for the presence of blood."
        ],
        why: [
          "The FOBT is performed to screen for colorectal cancer and other gastrointestinal disorders.",
          "It helps to detect bleeding in the digestive tract that may not be visible to the naked eye.",
          "The test is often part of routine colorectal cancer screening."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on preparation for the FOBT.",
          "Patients may need to avoid certain foods and medications that can affect the test results.",
          "Patients should collect stool samples as directed by their healthcare provider."
        ],
        expectation: [
          "The test typically involves collecting stool samples at home over several days.",
          "Patients will use a test kit provided by their healthcare provider to collect the samples.",
          "The samples will be sent to a laboratory for analysis."
        ],
        result: [
          "The results of the FOBT will indicate whether blood was detected in the stool.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The FOBT may not detect all cases of colorectal cancer or gastrointestinal bleeding.",
          "There may be limitations in interpreting the results in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Fluorescein Angiography",
        overview: [
          "Fluorescein angiography is a test that uses a special dye and camera to examine the blood vessels in the retina.",
          "It is used to diagnose and monitor eye conditions such as diabetic retinopathy and macular degeneration.",
          "The test involves injecting fluorescein dye into a vein and taking photographs of the retina."
        ],
        why: [
          "Fluorescein angiography is performed to diagnose and monitor eye conditions such as diabetic retinopathy and macular degeneration.",
          "It helps to visualize the blood flow in the retina and identify any abnormalities.",
          "The test is often part of a comprehensive eye examination for patients with diabetes or other risk factors for retinal disease."
        ],
        preparation: [
          "Patients should inform their healthcare provider of any medications they are taking.",
          "Patients may be asked to avoid certain medications or foods before the test.",
          "Patients should arrange for someone to drive them home after the test, as their vision may be temporarily affected."
        ],
        expectation: [
          "The test typically takes about 30 minutes to complete.",
          "A fluorescein dye will be injected into a vein in the arm, and a special camera will take photographs of the retina.",
          "Patients may experience temporary changes in vision or a yellow discoloration of the skin and urine after the test."
        ],
        result: [
          "The results of fluorescein angiography will provide detailed images of the blood vessels in the retina.",
          "The healthcare provider will discuss the results and what they mean for the patient’s eye health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "Fluorescein angiography may not detect all retinal conditions or abnormalities.",
          "There may be limitations in obtaining clear images in patients with certain eye conditions or other medical issues.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Fine Needle Aspiration (FNA) Biopsy",
        overview: [
          "Fine needle aspiration (FNA) biopsy is a procedure used to extract a small sample of tissue or fluid from a lump or mass.",
          "It is used to diagnose various conditions, including cancers and benign tumors.",
          "The test involves inserting a thin, hollow needle into the area of interest to collect cells for examination."
        ],
        why: [
          "FNA biopsy is performed to diagnose conditions such as cancers, benign tumors, and infections.",
          "It helps to determine the nature of a lump or mass and guide treatment decisions.",
          "The test is often part of the diagnostic workup for suspicious lumps or masses."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on preparation for the FNA biopsy.",
          "Patients should inform their healthcare provider of any medications they are taking, especially blood thinners.",
          "Patients may need to avoid eating or drinking for a certain period before the procedure."
        ],
        expectation: [
          "The test typically takes about 15-30 minutes to complete.",
          "A thin, hollow needle will be inserted into the lump or mass to collect a sample of cells.",
          "The procedure may cause some discomfort, but it is generally well-tolerated."
        ],
        result: [
          "The results of the FNA biopsy will provide information about the nature of the lump or mass.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The FNA biopsy may not provide a definitive diagnosis in all cases, especially if the sample size is small or non-representative.",
          "There may be limitations in interpreting the results in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Glucose Tolerance Test (GTT)",
        overview: [
          "The glucose tolerance test (GTT) measures the body's response to sugar (glucose).",
          "It is used to diagnose diabetes and gestational diabetes.",
          "The test involves drinking a glucose solution and having blood sugar levels tested at regular intervals."
        ],
        why: [
          "The GTT is performed to diagnose diabetes and gestational diabetes.",
          "It helps to assess how well the body processes glucose.",
          "The test is often recommended for pregnant women and individuals at risk of diabetes."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on preparation for the GTT.",
          "Patients should fast for at least 8 hours before the test.",
          "Patients should inform their healthcare provider of any medications they are taking."
        ],
        expectation: [
          "The test typically takes 2-3 hours to complete.",
          "Patients will drink a glucose solution and have blood samples taken at regular intervals.",
          "Patients may experience temporary side effects, such as nausea or dizziness."
        ],
        result: [
          "The results of the GTT will provide information about how the body processes glucose.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The GTT may not detect all cases of diabetes or gestational diabetes.",
          "There may be limitations in interpreting the results in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      
      {
        name: "Gastrointestinal Endoscopy",
        overview: [
          "Gastrointestinal endoscopy is a procedure used to examine the digestive tract using a flexible tube with a light and camera (endoscope).",
          "It is used to diagnose and treat conditions affecting the esophagus, stomach, and intestines.",
          "The test involves inserting the endoscope through the mouth or rectum to visualize the digestive tract."
        ],
        why: [
          "Gastrointestinal endoscopy is performed to diagnose and treat conditions affecting the digestive tract, such as ulcers, tumors, and inflammatory bowel disease.",
          "It helps to visualize the digestive tract and obtain tissue samples for biopsy.",
          "The test is often recommended for individuals with symptoms such as abdominal pain, bleeding, or difficulty swallowing."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on preparation for the endoscopy.",
          "Patients may need to avoid eating and drinking for a certain period before the procedure.",
          "Patients should inform their healthcare provider of any medications they are taking."
        ],
        expectation: [
          "The test typically takes 30-60 minutes to complete.",
          "Patients will be sedated during the procedure to minimize discomfort.",
          "The endoscope will be inserted through the mouth or rectum to visualize the digestive tract."
        ],
        result: [
          "The results of the endoscopy will provide detailed images of the digestive tract.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "Gastrointestinal endoscopy may not detect all conditions affecting the digestive tract.",
          "There may be limitations in obtaining clear images in patients with certain medical conditions or other medical issues.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      
      {
        name: "Genetic Testing",
        overview: [
          "Genetic testing involves analyzing DNA to identify changes or mutations that may be associated with certain diseases or conditions.",
          "It is used to diagnose genetic disorders, assess the risk of developing certain conditions, and guide treatment decisions.",
          "The test involves collecting a sample of blood, saliva, or other tissue for analysis."
        ],
        why: [
          "Genetic testing is performed to diagnose genetic disorders, assess the risk of developing certain conditions, and guide treatment decisions.",
          "It helps to identify individuals who may be at risk for inherited conditions or who may benefit from targeted therapies.",
          "The test is often recommended for individuals with a family history of genetic disorders or who are at risk for certain conditions."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on preparation for genetic testing.",
          "Patients should inform their healthcare provider of any medications they are taking and any family history of genetic disorders.",
          "Patients may need to provide a detailed medical history and undergo genetic counseling before the test."
        ],
        expectation: [
          "The test typically takes a few minutes to collect the sample, but the analysis may take several weeks.",
          "Patients will provide a sample of blood, saliva, or other tissue for analysis.",
          "The procedure is generally quick and painless."
        ],
        result: [
          "The results of genetic testing will provide information about changes or mutations in the patient's DNA.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing, treatment, or genetic counseling."
        ],
        limitation: [
          "Genetic testing may not detect all genetic disorders or mutations.",
          "There may be limitations in interpreting the results due to variations in genetic expression and other factors.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      
      {
        name: "Gonorrhea Test",
        overview: [
          "The gonorrhea test detects the presence of the bacteria Neisseria gonorrhoeae, which causes gonorrhea.",
          "It is used to diagnose and monitor gonorrhea infection.",
          "The test involves collecting a sample of urine, or a swab from the affected area, such as the cervix, urethra, throat, or rectum."
        ],
        why: [
          "The gonorrhea test is performed to diagnose and monitor gonorrhea infection.",
          "It helps to identify individuals who have gonorrhea so that they can receive appropriate treatment and prevent complications.",
          "The test is often recommended for individuals with symptoms of gonorrhea or who are at risk of sexually transmitted infections."
        ],
        preparation: [
          "Patients should follow their healthcare provider's instructions on preparation for the gonorrhea test.",
          "Patients should inform their healthcare provider of any medications they are taking.",
          "Patients may be advised to avoid urinating for at least 1 hour before providing a urine sample."
        ],
        expectation: [
          "The test typically takes a few minutes to collect the sample.",
          "Patients will provide a urine sample or a swab from the affected area for analysis.",
          "The procedure is generally quick and painless."
        ],
        result: [
          "The results of the gonorrhea test will indicate whether the bacteria Neisseria gonorrhoeae is present.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend treatment and follow-up testing."
        ],
        limitation: [
          "The gonorrhea test may not detect all cases of gonorrhea, especially in individuals with low bacterial load.",
          "There may be limitations in obtaining accurate results in patients with certain medical conditions or undergoing certain treatments.",
          "The healthcare provider will consider these limitations when interpreting the results."
        ]
      },
      {
        name: "Immunoglobulin (Ig) Test",
        overview: [
          "The immunoglobulin (Ig) test measures the levels of immunoglobulins, or antibodies, in the blood. Immunoglobulins are proteins produced by the immune system to help fight infections.",
          "There are several types of immunoglobulins, including IgA, IgG, IgM, IgD, and IgE. Each type plays a specific role in the immune response.",
          "The test is used to diagnose and monitor conditions related to immune system dysfunction, such as autoimmune diseases, infections, and immunodeficiencies."
        ],
        why: [
          "The immunoglobulin test is performed to evaluate the immune system's function and diagnose conditions such as autoimmune diseases, infections, and immunodeficiencies.",
          "It helps to identify abnormal levels of immunoglobulins, which can indicate an overactive or underactive immune system.",
          "The test is also used to monitor the effectiveness of treatments for conditions affecting the immune system."
        ],
        preparation: [
          "No special preparation is typically required for the immunoglobulin test.",
          "Patients should inform their healthcare provider of any medications they are taking and any underlying medical conditions they have.",
          "Patients should follow their healthcare provider's instructions regarding the procedure."
        ],
        expectation: [
          "The test typically takes a few minutes to complete and involves drawing a blood sample from a vein in the arm.",
          "The blood sample is sent to a laboratory for analysis, where the levels of various immunoglobulins are measured.",
          "The healthcare provider will discuss the results with the patient and explain what they mean."
        ],
        result: [
          "The results of the immunoglobulin test will provide information about the levels of different types of immunoglobulins in the blood.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The immunoglobulin test may not detect all cases of immune system dysfunction.",
          "There may be false positive or false negative results due to factors such as recent infections or medications.",
          "The healthcare provider will consider these limitations when interpreting the results and planning further evaluation or treatment."
        ]
      },
      
      {
        name: "Insulin Test",
        overview: [
          "The insulin test measures the level of insulin in the blood. Insulin is a hormone produced by the pancreas that helps regulate blood sugar levels.",
          "The test is used to diagnose and monitor conditions related to insulin production and blood sugar regulation, such as diabetes and insulin resistance.",
          "The test is often performed alongside other tests, such as the fasting blood glucose test or the oral glucose tolerance test."
        ],
        why: [
          "The insulin test is performed to evaluate insulin production and diagnose conditions such as diabetes and insulin resistance.",
          "It helps to identify abnormal levels of insulin, which can indicate issues with blood sugar regulation.",
          "The test is also used to monitor the effectiveness of treatments for conditions affecting insulin production and blood sugar levels."
        ],
        preparation: [
          "Patients may be asked to fast for several hours before the test to ensure accurate results.",
          "Patients should inform their healthcare provider of any medications they are taking and any underlying medical conditions they have.",
          "Patients should follow their healthcare provider's instructions regarding the procedure."
        ],
        expectation: [
          "The test typically takes a few minutes to complete and involves drawing a blood sample from a vein in the arm.",
          "The blood sample is sent to a laboratory for analysis, where the level of insulin is measured.",
          "The healthcare provider will discuss the results with the patient and explain what they mean."
        ],
        result: [
          "The results of the insulin test will provide information about the level of insulin in the blood.",
          "The healthcare provider will discuss the results and what they mean for the patient’s health.",
          "Based on the results, the healthcare provider may recommend additional testing or treatment."
        ],
        limitation: [
          "The insulin test may not detect all cases of insulin-related disorders.",
          "There may be false positive or false negative results due to factors such as recent food intake or medications.",
          "The healthcare provider will consider these limitations when interpreting the results and planning further evaluation or treatment."
        ]
      },
      
      {
        name: "Intravenous (IV) Therapy",
        overview: [
          "Intravenous (IV) therapy involves administering fluids, medications, or nutrients directly into a vein through a needle or catheter.",
          "IV therapy is commonly used for hydration, administering medications, and providing nutrition to patients who cannot take it orally.",
          "It is a vital procedure in emergency care, surgery, and for patients with severe infections or chronic conditions."
        ],
        why: [
          "IV therapy is used to quickly deliver fluids, medications, or nutrients to patients who need them urgently or cannot take them orally.",
          "It is essential in treating dehydration, administering antibiotics, pain medications, and chemotherapy, and providing total parenteral nutrition (TPN).",
          "IV therapy ensures precise control over the amount and rate of fluid or medication delivered."
        ],
        preparation: [
          "Preparation for IV therapy depends on the specific treatment and the patient's condition.",
          "Patients should inform their healthcare provider of any allergies, medications, and underlying health conditions.",
          "The healthcare provider will provide specific instructions based on the type of IV therapy being administered."
        ],
        expectation: [
          "The procedure involves inserting a needle or catheter into a vein, usually in the arm or hand.",
          "Patients may feel a slight pinch during insertion, and the IV line will be secured to prevent movement.",
          "The healthcare provider will monitor the IV site and the patient's response throughout the therapy."
        ],
        result: [
          "The effects of IV therapy are often immediate, especially in emergency situations or when administering medications.",
          "Patients will be monitored for any adverse reactions or complications during and after the therapy.",
          "The healthcare provider will assess the patient's response and adjust the treatment plan as needed."
        ],
        limitation: [
          "IV therapy carries risks such as infection, vein irritation, and allergic reactions.",
          "There may be complications related to the IV line, such as infiltration or phlebitis.",
          "The healthcare provider will take precautions to minimize risks and address any complications promptly."
        ]
      },
      
      {
        name: "Iron Studies",
        overview: [
          "Iron studies are a group of blood tests that measure different aspects of iron in the body, including serum iron, ferritin, total iron-binding capacity (TIBC), and transferrin saturation.",
          "These tests help assess the body's iron levels and diagnose conditions related to iron deficiency or overload.",
          "Iron studies are often performed when anemia or other symptoms suggest an issue with iron metabolism."
        ],
        why: [
          "Iron studies are performed to diagnose and monitor conditions related to iron deficiency, such as iron-deficiency anemia, and iron overload, such as hemochromatosis.",
          "They help determine the underlying cause of anemia and guide treatment decisions.",
          "The tests provide a comprehensive assessment of iron metabolism and storage in the body."
        ],
        preparation: [
          "Patients may be asked to fast for several hours before the blood sample is drawn.",
          "It is important to inform the healthcare provider of any medications or supplements being taken, as they can affect the test results.",
          "Follow specific instructions provided by the healthcare provider for accurate results."
        ],
        expectation: [
          "The test involves drawing a blood sample from a vein, typically in the arm.",
          "The sample is sent to a laboratory for analysis, and the results are usually available within a few days.",
          "The healthcare provider will discuss the results and their implications with the patient."
        ],
        result: [
          "The results of iron studies include measurements of serum iron, ferritin, TIBC, and transferrin saturation.",
          "These values help determine if the patient has normal, deficient, or excess iron levels.",
          "The healthcare provider will interpret the results and recommend appropriate treatment or further testing if needed."
        ],
        limitation: [
          "Iron studies may be affected by recent iron intake, medications, or other health conditions.",
          "The tests may not provide a complete picture of iron metabolism if there are interfering factors.",
          "The healthcare provider will consider these limitations and may order additional tests for a more accurate assessment."
        ]
      },
      
      {
        name: "Intravenous Pyelogram (IVP)",
        overview: [
          "An intravenous pyelogram (IVP) is an imaging test that uses X-rays and a special dye to visualize the kidneys, ureters, and bladder.",
          "The dye is injected into a vein, and X-rays are taken as the dye moves through the urinary tract, highlighting any abnormalities.",
          "The test is used to diagnose conditions affecting the urinary system, such as kidney stones, tumors, or blockages."
        ],
        why: [
          "IVP is performed to diagnose and evaluate conditions affecting the kidneys, ureters, and bladder.",
          "It helps detect kidney stones, tumors, structural abnormalities, and blockages in the urinary tract.",
          "The test provides detailed images that aid in planning treatment or further diagnostic procedures."
        ],
        preparation: [
          "Patients may be instructed to avoid eating or drinking for several hours before the test.",
          "A laxative or enema may be recommended to clear the bowels for better imaging results.",
          "Inform the healthcare provider of any allergies, especially to iodine or contrast dyes, and any medications being taken."
        ],
        expectation: [
          "The procedure involves injecting a contrast dye into a vein and taking X-rays at specific intervals.",
          "Patients may experience a warm sensation or metallic taste during the injection.",
          "The test typically takes about 30-60 minutes, and patients will be monitored for any adverse reactions to the dye."
        ],
        result: [
          "The X-ray images will show the flow of the dye through the urinary tract, highlighting any abnormalities.",
          "The healthcare provider will review the images and discuss the findings with the patient.",
          "Based on the results, further tests or treatments may be recommended."
        ],
        limitation: [
          "IVP carries a risk of allergic reactions to the contrast dye, especially in patients with iodine allergies.",
          "The test may not provide clear images in patients with poor kidney function or certain medical conditions.",
          "Alternative imaging tests, such as CT scans or ultrasounds, may be recommended if IVP is not suitable."
        ]
      },
      {
        name: "Intracranial Pressure (ICP) Monitoring",
        overview: [
          "Intracranial pressure (ICP) monitoring measures the pressure inside the skull, which can be affected by brain injury, infection, or other conditions.",
          "The test involves inserting a sensor into the skull to continuously measure the pressure.",
          "ICP monitoring is critical for managing patients with severe head injuries or conditions that can cause increased intracranial pressure."
        ],
        why: [
          "ICP monitoring is used to diagnose and manage conditions that cause increased pressure inside the skull, such as traumatic brain injury, hydrocephalus, or brain tumors.",
          "It helps guide treatment decisions and monitor the effectiveness of interventions aimed at reducing intracranial pressure.",
          "The test provides real-time data on intracranial pressure, which is crucial for preventing brain damage and improving patient outcomes."
        ],
        preparation: [
          "Preparation for ICP monitoring depends on the specific medical condition and the patient's overall health.",
          "Patients may undergo imaging tests, such as a CT scan or MRI, to assess the brain before the procedure.",
          "The healthcare provider will provide specific instructions regarding fasting, medications, and other preparations."
        ],
        expectation: [
          "The procedure involves inserting a sensor through the skull, either through a small hole drilled in the skull or through a burr hole.",
          "The sensor continuously measures intracranial pressure, and the data is monitored by healthcare professionals.",
          "Patients are closely monitored in an intensive care unit (ICU) during the procedure."
        ],
        result: [
          "The results of ICP monitoring provide real-time data on the pressure inside the skull.",
          "The healthcare provider will use this data to guide treatment decisions and monitor the effectiveness of interventions.",
          "Based on the results, further tests or treatments may be recommended to manage intracranial pressure."
        ],
        limitation: [
          "ICP monitoring is an invasive procedure that carries risks such as infection, bleeding, and damage to brain tissue.",
          "The test may not provide accurate results in certain medical conditions or if the sensor is not properly positioned.",
          "The healthcare provider will consider these limitations and take precautions to minimize risks."
        ]
      },
      
      {
        name: "Impedance Cardiography (ICG)",
        overview: [
          "Impedance cardiography (ICG) is a non-invasive test that measures the electrical conductivity of the thorax to assess cardiac function.",
          "The test involves placing electrodes on the chest and measuring changes in electrical impedance as the heart beats.",
          "ICG is used to evaluate cardiac output, fluid status, and other parameters related to heart function."
        ],
        why: [
          "ICG is performed to assess cardiac function, including cardiac output, stroke volume, and fluid status.",
          "It helps diagnose and monitor conditions such as heart failure, hypertension, and fluid overload.",
          "The test provides valuable information for managing patients with cardiovascular conditions and guiding treatment decisions."
        ],
        preparation: [
          "No special preparation is typically required for ICG.",
          "Patients should inform their healthcare provider of any medications they are taking and any underlying medical conditions they have.",
          "Follow specific instructions provided by the healthcare provider for accurate results."
        ],
        expectation: [
          "The procedure involves placing electrodes on the chest and connecting them to an ICG device.",
          "Patients may need to remain still during the test to ensure accurate measurements.",
          "The test typically takes about 30 minutes to complete, and results are available immediately."
        ],
        result: [
          "The results of ICG include measurements of cardiac output, stroke volume, and other parameters related to heart function.",
          "The healthcare provider will interpret the results and discuss their implications with the patient.",
          "Based on the results, further tests or treatments may be recommended to manage cardiovascular conditions."
        ],
        limitation: [
          "ICG may not provide accurate results in patients with certain medical conditions, such as severe obesity or arrhythmias.",
          "The test is not a substitute for other diagnostic tests, such as echocardiography or cardiac catheterization.",
          "The healthcare provider will consider these limitations and may recommend additional tests for a more comprehensive assessment."
        ]
      },
      
    ]);

    const fetchHealthServices = async () => {
      const healthUrl = 'https://oauthc.iccflifeskills.com.ng/v0.1/api/home/health';
      const token = localStorage.getItem('bearer_token');
  
      try {
          const response = await fetch(healthUrl, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
              }
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
  
          if (data && data.data && Array.isArray(data.data.data)) {
              const transformedHealthServices = data.data.data.map(service => ({
                  id: service.id,
                  dateCreated: service.created_at,
                  name: service.name,
                  servicesImage: service.servicesImage,
                  highlights: service.highlights,
                  texts: service.texts
              }));
              setHealthServices(transformedHealthServices);
          } else {
              console.error('Unexpected health services data format:', data);
          }
      } catch (error) {
          console.error('Error fetching health services data:', error);
      }
    };
  

    useEffect(() => {
        fetchHealthServices();
    }, []);

    const contextValue = {
        healthServices,
        diseasesData,
        testsData
    };

    return (
        <ServicesContext.Provider value={contextValue}>
            {children}
        </ServicesContext.Provider>
    );
};

export const useHealthServices = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error("useHealthServices must be used within a ServiceProvider");
    }
    return context.healthServices;
};

export const useDiseaseData = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error("useDiseaseData must be used within a ServiceProvider");
    }
    return context.diseasesData;
};

export const useTestsData = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error("useTestsData must be used within a ServiceProvider");
    }
    return context.testsData;
};
