const questionsByTopic = [
  {
    "id": 0,
    "topic": "Pharmacy",
    "question": "How many grams of water are needed to make 150 g of 4% w/w solution of potassium acetate?",
    "options": ["100", "144", "130", "135"],
    "answer": 1
  },
  {
    "id": 1,
    "topic": "Pharmacy",
    "question": "The recommended container for inhalations and sprays is?",
    "options": ["Colourless fluted bottles", "Amber coloured bottles", "Wide mouthed ribbed bottles", "Narrow mouthed bottles"],
    "answer": 1
  },
  {
    "id": 2,
    "topic": "Biochemistry",
    "question": "Tetany is due to the deficiency of?",
    "options": ["Calcium", "Magnesium", "Phosphorus", "Manganese"],
    "answer": 0
  },
  {
    "id": 3,
    "topic": "Biochemistry",
    "question": "Gluconeogenesis predominantly takes place in?",
    "options": ["Liver", "Brain", "Skeletal muscle", "Adipose tissue"],
    "answer": 0
  },
  {
    "id": 4,
    "topic": "Medicine",
    "question": "Glycosuria is seen in?",
    "options": ["Urinary tract infection", "Hypertension", "Diabetes", "Respiratory tract infections"],
    "answer": 2
  },
  {
    "id": 5,
    "topic": "Biochemistry",
    "question": "Pyuria is presence of - in urine.",
    "options": ["Increased number of red blood cells", "Increased number of pus cells", "Increased number of epithelial cells", "Increased number of platelets"],
    "answer": 1
  },
  {
    "id": 6,
    "topic": "Biochemistry",
    "question": "Enzymes are - in nature.",
    "options": ["Fats", "Nucleic acids", "Proteins", "Carbohydrates"],
    "answer": 2
  },
  {
    "id": 7,
    "topic": "Biochemistry",
    "question": "As the concentration of the enzyme is increased, the velocity of the reaction proportionately?",
    "options": ["Increases", "Decreases", "Remains same", "Attains zero"],
    "answer": 0
  },
  {
    "id": 8,
    "topic": "Pharmacology",
    "question": "The following drugs are used in treatment of malaria EXCEPT?",
    "options": ["Chloroquine", "Primaquine", "Artesunate", "Chloramphenicol"],
    "answer": 3
  },
  {
    "id": 9,
    "topic": "Parasitology",
    "question": "Quartan malaria fever is due to?",
    "options": ["Plasmodium ovale", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium falciparum"],
    "answer": 2
  },


   {
    "id": 10,
    "topic": "Environmental Science",
    "question": "Which of the following is not a source of surface water?",
    "options": ["Rivers and streams", "Ponds", "Shallow wells", "Impounding reservoir"],
    "answer": 2
  },
  {
    "id": 11,
    "topic": "Medicine",
    "question": "Which of the following tests is used to determine the prevalence of tuberculosis infection?",
    "options": ["Sputum acid fast bacilli examination", "(CB NAAT) Cartridge Based Nucleic Acid Amplification Test", "Mantoux test", "Blood tests"],
    "answer": 2
  },
  {
    "id": 12,
    "topic": "Nutrition",
    "question": "What % of total calories should be from fat?",
    "options": ["10%- 30%", "7% - 15%", "65%- 80%", "1%- 7%"],
    "answer": 0
  },
  {
    "id": 13,
    "topic": "Medicine",
    "question": "Burning feet syndrome is seen in the deficiency of?",
    "options": ["Riboflavin", "Pyridoxine", "Pantothenic acid", "Vitamin B 12"],
    "answer": 2
  },
  {
    "id": 14,
    "topic": "Neuroscience",
    "question": "The neurotransmitter released in the neuromuscular junction is?",
    "options": ["Dopamine", "Serotonin", "Acetylcholine", "Adrenaline"],
    "answer": 2
  },
  {
    "id": 15,
    "topic": "Medicine",
    "question": "Loss of sense of smell is called as?",
    "options": ["Anosmia", "Aphasia", "Ageusia", "Photophobia"],
    "answer": 0
  },
  {
    "id": 16,
    "topic": "Endocrinology",
    "question": "Beta cells of pancreas secrete?",
    "options": ["Insulin", "Glucagon", "Somatostatin", "Pancreatic polypeptide"],
    "answer": 0
  },
  {
    "id": 17,
    "topic": "Biochemistry",
    "question": "Lipase helps in digestion of?",
    "options": ["Protein", "Carbohydrate", "Fats", "Minerals"],
    "answer": 2
  },
  {
    "id": 18,
    "topic": "Nephrology",
    "question": "Anti diuretic hormone acts on?",
    "options": ["Proximal convoluted tubule", "Collecting duct", "Ascending limb of loop of Henle", "Descending limb of loop of Henle"],
    "answer": 1
  },
  {
    "id": 19,
    "topic": "Cardiology",
    "question": "First heart sound is due to closure of?",
    "options": ["AV valves (Atrioventricular valve)", "Semilunar valves", "Atrial contraction", "Ventricular filling"],
    "answer": 0
  },
  {
    "id": 20,
    "topic": "Histology",
    "question": "Simple cuboidal epithelium is present in the below mentioned organ?",
    "options": ["Thyroid follicles", "Skin", "Uterus", "Trachea"],
    "answer": 0
  },
  {
    "id": 21,
    "topic": "Hematology",
    "question": "Lack of intrinsic factor with failure in the absorption of vitamin B12 results in?",
    "options": ["Haemolytic anemia", "Pernicious anemia", "Aplastic anemia", "Jaundice"],
    "answer": 1
  },
  {
    "id": 22,
    "topic": "Pharmacy Laws",
    "question": "As per the Poisons Act, license is granted by the Central Govt. of India for?",
    "options": ["Import", "Export", "Possession", "Sale"],
    "answer": 0
  },
  {
    "id": 23,
    "topic": "Pharmacy Laws",
    "question": "All India Pharmaceutical Congress Association was started in?",
    "options": ["1940", "1932", "1936", "1948"],
    "answer": 2
  },
  {
    "id": 24,
    "topic": "Pharmacy Laws",
    "question": "Central Register for Pharmacists is maintained by?",
    "options": ["Central Council", "Health Ministry", "University Grants Commission", "Medical Council of India"],
    "answer": 0
  },
  {
    "id": 25,
    "topic": "Pharmacy Laws",
    "question": "The punishment for contravention of the Drug and Magic Remedies Act on first conviction is?",
    "options": ["Imprisonment up to one month or fine or both", "Imprisonment up to eight months or fine or both", "Imprisonment up to one year or fine or both", "Imprisonment up to six months or fine or both"],
    "answer": 3
  },
  {
    "id": 26,
    "topic": "Pharmacy Laws",
    "question": "Drugs Technical Advisory Board consists of how many Ex-officio members?",
    "options": ["5", "2", "8", "4"],
    "answer": 2
  },
  {
    "id": 27,
    "topic": "Pharmacy Laws",
    "question": "Any record, register, or other document seized by the drug inspector should be returned to the persons from whom they were seized within a period of?",
    "options": ["20 days", "30 days", "45 days", "60 days"],
    "answer": 1
  },
  {
    "id": 28,
    "topic": "Business & Pharmacy",
    "question": "A drug store in a rural area can be started with which financial resource?",
    "options": ["Limited", "Unlimited", "Credit", "Daily wages"],
    "answer": 0
  },
  {
    "id": 29,
    "topic": "Business & Pharmacy",
    "question": "What happens to a partnership if one of the partners dies?",
    "options": ["Dissolved", "Not dissolved", "Continued", "Maintained"],
    "answer": 0
  },{
    "id": 30,
    "topic": "Accounting",
    "question": "Which of the following is shown on the debit side of Trial balance?",
    "options": ["Commission received account", "Rent received account", "Discount allowed account", "Discount received account"],
    "answer": 2
  },
  {
    "id": 31,
    "topic": "Accounting",
    "question": "The process of finding the net amount from the total of debit and credit columns in a ledger is known as?",
    "options": ["Casting", "Posting", "Journalising", "Balancing"],
    "answer": 3
  },
  {
    "id": 32,
    "topic": "Finance",
    "question": "Commercial banks generally provide loans for?",
    "options": ["Long period", "Short period", "Medium term", "Installment"],
    "answer": 1
  },
  {
    "id": 33,
    "topic": "Pharmacy Management",
    "question": "In a drug store, the expiry dated drug formulations are called?",
    "options": ["Dormant materials", "Surplus items", "Scrap items", "Obsolete items"],
    "answer": 3
  },
  {
    "id": 34,
    "topic": "Hospital Management",
    "question": "Bedding capacity of large hospitals?",
    "options": ["1000 and above", "200 and above", "500 and above", "Between 800-1000"],
    "answer": 0
  },
  {
    "id": 35,
    "topic": "Pharmaceutical Regulations",
    "question": "Hathi committee has recommended that IV fluids manufacturing in hospitals should be done under the supervision of a person with qualification?",
    "options": ["M. Pharm", "B. Pharm", "Pharm D", "D. Pharm"],
    "answer": 1
  },
  {
    "id": 36,
    "topic": "Procurement & Supply Chain",
    "question": "Following are the objectives of the procurement of medicines, 'EXCEPT'?",
    "options": ["Select reliable suppliers", "Ensure timely delivery", "Achieve the lowest possible total cost", "Maximum stock level"],
    "answer": 3
  },
  {
    "id": 37,
    "topic": "Hospital Pharmacy",
    "question": "Charge and non-charge patient medications come under which system?",
    "options": ["Individual prescription order system for inpatient", "Individual prescription order system for outpatient", "The complete floor stock system for inpatient", "The complete floor stock system for outpatient"],
    "answer": 2
  },
  {
    "id": 38,
    "topic": "Infectious Diseases",
    "question": "Hepatitis 'B' is also called?",
    "options": ["Infectious hepatitis", "Delta hepatitis", "Serum hepatitis", "Infectious and delta hepatitis"],
    "answer": 2
  },
  {
    "id": 39,
    "topic": "Endocrinology",
    "question": "Polyuria, polyphagia, polydipsia are the symptoms of?",
    "options": ["Tuberculosis", "Arthritis", "Diabetes", "Ulcer"],
    "answer": 2
  },
  {
    "id": 40,
    "topic": "Pharmacology",
    "question": "Which anti-hypertensive drug can be taken during pregnancy?",
    "options": ["Nifedipine", "Propranolol", "Thiazides", "ACE inhibitors"],
    "answer": 0
  },
  {
    "id": 41,
    "topic": "Pharmacovigilance",
    "question": "Any noxious change which is suspected to be due to a drug, occurring at doses normally used in man is called as?",
    "options": ["Adverse drug reaction", "Drug interactions", "Medication error", "Life-threatening reaction"],
    "answer": 0
  },
  {
    "id": 42,
    "topic": "Pharmacology",
    "question": "Theophylline is a?",
    "options": ["Methyl xanthine derivative", "Beta 2 agonist", "Sympatholytic agent", "Parasympatholytic agent"],
    "answer": 0
  },
  {
    "id": 43,
    "topic": "Pharmacology",
    "question": "Latanoprost is a?",
    "options": ["Prostaglandin analogue", "α-adrenergic agonist", "Carbonic anhydrase inhibitor", "β-blocker"],
    "answer": 0
  },
  {
    "id": 44,
    "topic": "Pharmacology",
    "question": "Which of the following is a prodrug?",
    "options": ["Captopril", "Enalapril", "Hydralazine", "Clonidine"],
    "answer": 1
  },
  {
    "id": 45,
    "topic": "Pharmacology",
    "question": "Pharmacodynamics relates to?",
    "options": ["Drug elimination", "Drug excretion", "Drug absorption", "Mechanism of action"],
    "answer": 3
  },
  {
    "id": 46,
    "topic": "Pharmacology",
    "question": "High efficacious and most commonly used LDL-cholesterol lowering HMG-COA reductase inhibitor?",
    "options": ["Lovastatin", "Simvastatin", "Atorvastatin", "Pravastatin"],
    "answer": 2
  },
  {
    "id": 47,
    "topic": "Pharmacology",
    "question": "Prolonged use of hydralazine therapy is likely to develop?",
    "options": ["Thrombocytopenia", "Haemolytic anemia", "Gynecomastia", "Lupus erythematosus"],
    "answer": 3
  },
  {
    "id": 48,
    "topic": "Pharmacology",
    "question": "Which of the following drugs may cause reversible gynecomastia?",
    "options": ["Omeprazole", "Pirenzepine", "Cimetidine", "Sucralfate"],
    "answer": 2
  },
  {
    "id": 49,
    "topic": "Pharmacology",
    "question": "Which of the following glucocorticoids is a long-acting drug?",
    "options": ["Prednisolone", "Dexamethasone", "Triamcinolone", "Aldosterone"],
    "answer": 1
  },
  
  {
    "id": 50,
    "topic": "Pharmacology",
    "question": "Macrolide antibiotic?",
    "options": ["Erythromycin", "Pilocarpine", "Physostigmine", "Hyoscine"],
    "answer": 0
  },
  {
    "id": 51,
    "topic": "Pharmacology",
    "question": "Influenza anti-viral drug?",
    "options": ["Amlodipine", "Nifedipine", "Amantadine", "Felodipine"],
    "answer": 2
  },
  {
    "id": 52,
    "topic": "Botany",
    "question": "The following are botanical sources of cinchona EXCEPT?",
    "options": ["Cinchona succirubra", "Cinchona indica", "Cinchona calisaya", "Cinchona officinalis"],
    "answer": 1
  },
  {
    "id": 53,
    "topic": "Biochemistry",
    "question": "Keller-Kiliani test is used to detect?",
    "options": ["Digitoxigenin", "Gitoxigenin", "Digitoxose", "Digoxigenin"],
    "answer": 2
  },
  {
    "id": 54,
    "topic": "Botany",
    "question": "D. Linalool is the main constituent of?",
    "options": ["Coriander", "Fennel", "Ajowan", "Cardamom"],
    "answer": 0
  },
  {
    "id": 55,
    "topic": "Botany",
    "question": "Aldobionic acid is the main constituent of?",
    "options": ["Acacia", "Agar", "Asafoetida", "Isapaghula"],
    "answer": 1
  },
  {
    "id": 56,
    "topic": "Botany",
    "question": "A fruit which is used as a diuretic?",
    "options": ["Fennel", "Amla", "Gokhru", "Ajowan"],
    "answer": 2
  },
  {
    "id": 57,
    "topic": "Botany",
    "question": "Indole group of alkaloids are present in?",
    "options": ["Cinchona and Nuxvomica", "Nuxvomica and Rauwolfia", "Cinnamon and Cinchona", "Vasaka and Ipecac"],
    "answer": 1
  },
  {
    "id": 58,
    "topic": "Botany",
    "question": "Which one of the following drugs belongs to the Rubiaceae family?",
    "options": ["Cinchona", "Ergot", "Nuxvomica", "Ephedra"],
    "answer": 0
  },
  {
    "id": 59,
    "topic": "Botany",
    "question": "Chrysanthemum cinerarifolium is the botanical source of?",
    "options": ["Shankhpushpi", "Shatavari", "Pyrethrum", "Tobacco"],
    "answer": 2
  },
  {
    "id": 60,
    "topic": "Botany",
    "question": "The chemical constituents of Ipecac include the following EXCEPT?",
    "options": ["Cephaeline", "Emetine", "Psychotrine", "Linalool"],
    "answer": 3
  },
  {
    "id": 61,
    "topic": "Botany",
    "question": "In Fennel, lignified reticulate parenchyma is present in which region of the fruit?",
    "options": ["Epicarp", "Mesocarp", "Endocarp", "Endosperm"],
    "answer": 2
  },
  {
    "id": 62,
    "topic": "Chemistry",
    "question": "Sodium bicarbonate on heating gives?",
    "options": ["Sodium Carbonate + Carbon dioxide", "Sodium Chloride + Carbon dioxide", "Sodium Hydroxide + Carbon dioxide", "Sodium Sulphate + Carbon dioxide"],
    "answer": 0
  },
  {
    "id": 63,
    "topic": "Pharmaceutics",
    "question": "Aluminium hydroxide gel I.P. contains?",
    "options": ["Aluminium oxide", "Hydrated aluminium oxide", "Hydrated aluminium oxide with varying quantities of basic aluminium carbonate and bicarbonate", "Aluminium hydroxide"],
    "answer": 2
  },
  {
    "id": 64,
    "topic": "Pharmaceutics",
    "question": "A drug commonly used in shampoo for treating dandruff?",
    "options": ["Selenium sulphide", "Sulphur", "Yellow mercuric oxide", "Hydrogen sulphide"],
    "answer": 0
  },
  {
    "id": 65,
    "topic": "Pharmaceutics",
    "question": "Which is used to prepare styptic pencil?",
    "options": ["Zinc oxide", "Sodium sulphate", "Potassium permanganate", "Alum"],
    "answer": 3
  },
  {
    "id": 66,
    "topic": "Chemistry",
    "question": "Molecular weight of potassium acetate?",
    "options": ["95.03 g/mol", "98.15 g/mol", "97.02 g/mol", "96.09 g/mol"],
    "answer": 0
  },
  {
    "id": 67,
    "topic": "Chemistry",
    "question": "Synonym of ferrous sulphate is?",
    "options": ["White vitriol", "Yellow vitriol", "Orange vitriol", "Green vitriol"],
    "answer": 3
  },
  {
    "id": 68,
    "topic": "Chemistry",
    "question": "Tartar emetic is?",
    "options": ["Potassium tartrate", "Sodium tartrate", "Sodium potassium tartrate", "Antimony potassium tartrate"],
    "answer": 3
  },

  
  {
    "id": 69,
    "topic": "Radiopharmaceuticals",
    "question": "Iodinated (131 I) albumin injection is used for?",
    "options": ["Determination of blood volume and investigation of CVS function", "Investigation of liver function", "Renal function investigation", "Investigation of lung function"],
    "answer": 0
  },
  {
    "id": 70,
    "topic": "Chemistry",
    "question": "Vacuum salt made by purification of rock salt contains more than 99.9% of?",
    "options": ["Barium chloride", "Sodium chloride", "Potassium chloride", "Calcium chloride"],
    "answer": 1
  },
  {
    "id": 71,
    "topic": "Chemistry",
    "question": "If the drug melts sharply at the stated melting point, it means that the drug is?",
    "options": ["Pure drug", "Impure drug", "Adulterated drug", "Deteriorated drug"],
    "answer": 0
  },
  {
    "id": 72,
    "topic": "Pharmaceutics",
    "question": "Rifampicin is stored at a temperature not exceeding in an atmosphere of nitrogen in air-tight container?",
    "options": ["4°C", "15°C", "25°C", "30°C"],
    "answer": 2
  },
  {
    "id": 73,
    "topic": "Pharmaceutics",
    "question": "Liquified phenol contains?",
    "options": ["80% w/w phenol and water", "99% w/w phenol and water", "50% w/w phenol and water", "10% w/w phenol and water"],
    "answer": 0
  },
  {
    "id": 74,
    "topic": "Pharmacology",
    "question": "Caffeine contains which ring system?",
    "options": ["Phenothiazine", "Pyrazole", "Xanthine", "Piperidine"],
    "answer": 2
  },
  {
    "id": 75,
    "topic": "Pharmacology",
    "question": "'Analeptics' is a reference to?",
    "options": ["Antiepileptics", "Central nervous system depressants", "Anaesthetic agents", "Central nervous system stimulants"],
    "answer": 3
  },
  {
    "id": 76,
    "topic": "Pharmacology",
    "question": "Menadione used as a coagulant is?",
    "options": ["Quinoline derivative", "Naphthoquinone derivative", "Anthraquinone derivative", "Anthracene derivative"],
    "answer": 1
  },
  {
    "id": 77,
    "topic": "Pharmacology",
    "question": "An amide form of local anaesthetic drug also used as an anti-arrhythmic agent is?",
    "options": ["Procaine", "Benzocaine", "Cocaine", "Procainamide"],
    "answer": 3
  },
  {
    "id": 78,
    "topic": "Pharmacology",
    "question": "Daunorubicin contains?",
    "options": ["Pyrimidine nucleus", "Triazine nucleus", "Morpholine nucleus", "Anthracycline nucleus"],
    "answer": 3
  },
  {
    "id": 79,
    "topic": "Pharmacology",
    "question": "Isoniazid is always preferred to be used for the first 7 months in combination to avoid development of resistance against tubercle bacilli?",
    "options": ["Rifampicin", "Ethambutol", "Pyrimethamine", "Streptomycin"],
    "answer": 0
  },
  {
    "id": 80,
    "topic": "Pharmacology",
    "question": "Phenytoin is a derivative of?",
    "options": ["Hydantoin", "Benzodiazepine", "Succinimide", "Barbiturate"],
    "answer": 0
  },
  {
    "id": 81,
    "topic": "Radiology",
    "question": "Radiopaque materials have the ability to absorb?",
    "options": ["UV rays", "α-rays", "γ-rays", "X-rays"],
    "answer": 3
  },
  {
    "id": 82,
    "topic": "Pharmaceutics",
    "question": "The thickening agent used for mixtures containing resinous tinctures?",
    "options": ["Acacia", "Starch", "Tragacanth", "Sodium alginate"],
    "answer": 2
  },
  {
    "id": 83,
    "topic": "Pharmaceutics",
    "question": "Calamine lotion B.P is a?",
    "options": ["Suspension containing indiffusible solids", "Suspension containing precipitate forming liquid", "Suspension containing diffusible solids", "Suspension produced by chemical reaction"],
    "answer": 0
  },
  {
    "id": 84,
    "topic": "Pharmaceutics",
    "question": "White petrolatum is also known as?",
    "options": ["White Wax", "Yellow Wax", "Petrolatum", "White petroleum jelly"],
    "answer": 3
  },
  {
    "id": 85,
    "topic": "Pharmaceutics",
    "question": "Which method is used for preparation of ointment containing a solid medicament?",
    "options": ["Fusion", "Trituration", "Chemical reaction", "Emulsification"],
    "answer": 1
  },
  {
    "id": 86,
    "topic": "Pharmaceutics",
    "question": "During the preparation of parenteral products, all the containers and closures are thoroughly cleaned with?",
    "options": ["Alcohol", "Detergents", "Acetone", "Ether"],
    "answer": 0
  },
  {
    "id": 87,
    "topic": "Pharmaceutics",
    "question": "Which animals are used for pyrogen testing?",
    "options": ["Mice", "Guinea pigs", "Rabbits", "Rats"],
    "answer": 2
  },

  {
    "id": 88,
    "topic": "Pharmaceutics",
    "question": "Geometric dilution is used for?",
    "options": ["Mixing of potent drugs", "Mixing of dusting powders", "Mixing of snuffs", "Mixing of tooth powder"],
    "answer": 0
  },
  {
    "id": 89,
    "topic": "Pharmaceutics",
    "question": "Suppositories are most frequently prepared by which method on a small and industrial scale?",
    "options": ["Compression", "Molding from melt", "Hand rolling and shaping", "Rolling"],
    "answer": 1
  },
  {
    "id": 90,
    "topic": "Pharmacy Practice",
    "question": "Direction to the pharmacist for preparing the prescription is given in?",
    "options": ["Inscription", "Subscription", "Superscription", "Signature"],
    "answer": 1
  },
  {
    "id": 91,
    "topic": "Pharmacy Practice",
    "question": "The Latin term 'pulvis conspersus' refers to?",
    "options": ["Poultice", "Powder", "Ointment", "Dusting powder"],
    "answer": 3
  },
  {
    "id": 92,
    "topic": "Physics",
    "question": "Dalton's law may be mathematically expressed as?",
    "options": ["Total Pressure = PA + PB", "Total Pressure = TA + TB", "Partial Pressure = PA + PB", "Partial Pressure = TA + TB"],
    "answer": 2
  },
  {
    "id": 93,
    "topic": "Chemistry",
    "question": "A liquid is distilled at a temperature lower than its boiling point by the application of vacuum. This is called?",
    "options": ["Extractive distillation", "Distillation under reduced pressure", "Molecular distillation", "Steam distillation"],
    "answer": 1
  },
  {
    "id": 94,
    "topic": "Pharmaceutics",
    "question": "Thin coating applied to small particles of solids, droplets of liquids or dispersion is known as?",
    "options": ["Film coating", "Microencapsulation", "Polishing", "Enteric coating"],
    "answer": 1
  },
  {
    "id": 95,
    "topic": "Pharmaceutics",
    "question": "Most commonly used base for chewable tablets?",
    "options": ["Glucose", "Mannitol", "Lactose", "Sucrose"],
    "answer": 1
  },
  {
    "id": 96,
    "topic": "Pharmaceutics",
    "question": "Continuous hot extraction should be avoided when the drug constituent is?",
    "options": ["Porous", "Fragile", "Thermolabile", "Heat-resistant"],
    "answer": 2
  },
  {
    "id": 97,
    "topic": "Pharmaceutics",
    "question": "Film evaporator will yield only?",
    "options": ["Solid products", "Dry products", "Gritty products", "Liquid products"],
    "answer": 3
  },
  {
    "id": 98,
    "topic": "Pharmaceutics",
    "question": "Talc, kieselguhr, and fuller's earth are?",
    "options": ["Filter aids", "Diluents", "Glidants", "Lubricants"],
    "answer": 0
  },
  {
    "id": 99,
    "topic": "Pharmaceutics",
    "question": "Contamination of the milled parts is very low or negligible in?",
    "options": ["Ball mill", "Hammer mill", "Fluid energy mill", "Disintegrator"],
    "answer": 2
  }
];

export default questionsByTopic;

