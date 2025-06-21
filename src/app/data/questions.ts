type Question = {
  id: number;
  topic: string;
  question: string;
  options: string[];
  answer: number;
  explanation?: {
    step_1: string;
    step_2: string;
    step_3: string;
    step_4: string;
    step_5: string;
    final_answer: string;
  };
};

const questionsByTopic: Question[] = [
  
  {
    "id": 0,
    "topic": "Pharmacy",
    "question": "How many grams of water are needed to make 150 g of 4% w/w solution of potassium acetate?",
    "options": ["100", "144", "130", "135"],
    "answer": 1,
    "explanation": {
      "step_1": "Total weight of the solution is 150 g.",
      "step_2": "A 4% w/w solution means 4 g of solute per 100 g of total solution.",
      "step_3": "So, potassium acetate = (4/100) × 150 = 6 g.",
      "step_4": "Water = Total solution – Potassium acetate = 150 g – 6 g.",
      "step_5": "Water required = 144 g.",
      "final_answer": "144 g of water is needed."
    }
  },
  {
    "id": 1,
    "topic": "Pharmacy",
    "question": "The recommended container for inhalations and sprays is?",
    "options": ["Colourless fluted bottles", "Amber coloured bottles", "Wide mouthed ribbed bottles", "Narrow mouthed bottles"],
    "answer": 1,
    "explanation": {
      "step_1": "Inhalations and sprays often contain light-sensitive medications.",
      "step_2": "Exposure to light can degrade the formulation’s stability and effectiveness.",
      "step_3": "Amber coloured bottles filter out harmful UV radiation.",
      "step_4": "Other container types do not provide adequate light protection.",
      "step_5": "Amber coloured bottles are the recommended choice.",
      "final_answer": "Amber coloured bottles are used for inhalations and sprays."
    }
  },
  {
    "id": 2,
    "topic": "Biochemistry",
    "question": "Tetany is due to the deficiency of?",
    "options": ["Calcium", "Magnesium", "Phosphorus", "Manganese"],
    "answer": 0,
    "explanation": {
      "step_1": "Tetany is a condition with involuntary muscle spasms and cramps.",
      "step_2": "This occurs due to increased neuromuscular excitability.",
      "step_3": "Calcium plays a key role in muscle and nerve function.",
      "step_4": "Deficiency of calcium (hypocalcemia) leads to tetany.",
      "step_5": "Other minerals do not cause this specific symptom.",
      "final_answer": "Tetany is caused by calcium deficiency."
    }
  },
  {
    "id": 3,
    "topic": "Biochemistry",
    "question": "Gluconeogenesis predominantly takes place in?",
    "options": ["Liver", "Brain", "Skeletal muscle", "Adipose tissue"],
    "answer": 0,
    "explanation": {
      "step_1": "Gluconeogenesis is the process of producing glucose from non-carbohydrate sources.",
      "step_2": "It maintains blood glucose levels during fasting.",
      "step_3": "The liver contains the enzymes required for this pathway.",
      "step_4": "Skeletal muscle and brain consume glucose but do not produce it.",
      "step_5": "Therefore, gluconeogenesis mainly occurs in the liver.",
      "final_answer": "Liver is the primary site for gluconeogenesis."
    }
  },
  {
    "id": 4,
    "topic": "Medicine",
    "question": "Glycosuria is seen in?",
    "options": ["Urinary tract infection", "Hypertension", "Diabetes", "Respiratory tract infections"],
    "answer": 2,
    "explanation": {
      "step_1": "Glycosuria refers to the presence of glucose in urine.",
      "step_2": "It occurs when blood glucose levels exceed the renal threshold (~180 mg/dL).",
      "step_3": "Excess glucose is filtered by the kidney and appears in the urine.",
      "step_4": "This is a hallmark of uncontrolled diabetes mellitus.",
      "step_5": "Other listed conditions do not usually cause glycosuria.",
      "final_answer": "Glycosuria is a symptom commonly seen in diabetes."
    }
  },
  {
    "id": 5,
    "topic": "Biochemistry",
    "question": "Pyuria is presence of - in urine.",
    "options": ["Increased number of red blood cells", "Increased number of pus cells", "Increased number of epithelial cells", "Increased number of platelets"],
    "answer": 1,
    "explanation": {
      "step_1": "Pyuria means pus in the urine.",
      "step_2": "Pus is primarily made up of white blood cells (WBCs).",
      "step_3": "This occurs commonly in urinary tract infections (UTIs).",
      "step_4": "It does not involve red blood cells or platelets.",
      "step_5": "Increased WBC count in urine = pyuria.",
      "final_answer": "Pyuria is defined by increased number of pus cells in urine."
    }
  },
  {
    "id": 6,
    "topic": "Biochemistry",
    "question": "Enzymes are - in nature.",
    "options": ["Fats", "Nucleic acids", "Proteins", "Carbohydrates"],
    "answer": 2,
    "explanation": {
      "step_1": "Enzymes act as biological catalysts for chemical reactions.",
      "step_2": "They speed up reactions without being consumed.",
      "step_3": "Structurally, enzymes are made of long chains of amino acids.",
      "step_4": "This composition classifies them as proteins.",
      "step_5": "Other biomolecules like fats or nucleic acids are not enzymatic by default.",
      "final_answer": "Enzymes are proteins in nature."
    }
  },
  {
    "id": 7,
    "topic": "Biochemistry",
    "question": "As the concentration of the enzyme is increased, the velocity of the reaction proportionately?",
    "options": ["Increases", "Decreases", "Remains same", "Attains zero"],
    "answer": 0,
    "explanation": {
      "step_1": "Enzymes increase the rate of biochemical reactions.",
      "step_2": "Reaction rate depends on enzyme and substrate concentrations.",
      "step_3": "As enzyme concentration increases, more substrate is converted to product.",
      "step_4": "This increases reaction velocity until substrate becomes limiting.",
      "step_5": "Hence, reaction velocity increases proportionately with enzyme concentration.",
      "final_answer": "The velocity of the reaction increases as enzyme concentration increases."
    }
  },
  {
    "id": 8,
    "topic": "Pharmacology",
    "question": "The following drugs are used in treatment of malaria EXCEPT?",
    "options": ["Chloroquine", "Primaquine", "Artesunate", "Chloramphenicol"],
    "answer": 3,
    "explanation": {
      "step_1": "Malaria is treated with antimalarial drugs targeting Plasmodium species.",
      "step_2": "Chloroquine, Primaquine, and Artesunate are widely used for this purpose.",
      "step_3": "Chloramphenicol is not used for malaria; it's an antibiotic.",
      "step_4": "It is used for bacterial infections, not parasitic ones.",
      "step_5": "Therefore, Chloramphenicol is the exception.",
      "final_answer": "Chloramphenicol is not used in the treatment of malaria."
    }
  },
  {
    "id": 9,
    "topic": "Parasitology",
    "question": "Quartan malaria fever is due to?",
    "options": ["Plasmodium ovale", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium falciparum"],
    "answer": 2,
    "explanation": {
      "step_1": "Malaria is caused by different species of Plasmodium.",
      "step_2": "Each species produces fever cycles at specific intervals.",
      "step_3": "Quartan fever recurs every 72 hours.",
      "step_4": "This 72-hour pattern is specific to Plasmodium malariae.",
      "step_5": "Other species cause tertian or irregular patterns.",
      "final_answer": "Plasmodium malariae causes quartan malaria fever."
    }
  },
  {
  "id": 10,
  "topic": "Environmental Science",
  "question": "Which of the following is not a source of surface water?",
  "options": ["Rivers and streams", "Ponds", "Shallow wells", "Impounding reservoir"],
  "answer": 2,
  "explanation": {
    "step_1": "Surface water sources include water bodies exposed directly to the atmosphere.",
    "step_2": "Rivers, ponds, and impounding reservoirs are classified as surface water sources.",
    "step_3": "Shallow wells access underground water sources, not surface ones.",
    "step_4": "Therefore, they fall under the category of groundwater.",
    "step_5": "Among the options, shallow wells are not surface water sources.",
    "final_answer": "Shallow wells are not a source of surface water."
  }
},
{
  "id": 11,
  "topic": "Medicine",
  "question": "Which of the following tests is used to determine the prevalence of tuberculosis infection?",
  "options": ["Sputum acid fast bacilli examination", "(CB NAAT) Cartridge Based Nucleic Acid Amplification Test", "Mantoux test", "Blood tests"],
  "answer": 2,
  "explanation": {
    "step_1": "Prevalence studies rely on identifying individuals who were exposed to tuberculosis bacteria.",
    "step_2": "The Mantoux test detects an immune response to Mycobacterium tuberculosis.",
    "step_3": "It involves injecting purified protein derivative (PPD) into the skin.",
    "step_4": "A raised induration indicates prior TB exposure, regardless of active disease.",
    "step_5": "Thus, it helps in assessing TB prevalence in a population.",
    "final_answer": "Mantoux test is used to determine tuberculosis prevalence."
  }
},
{
  "id": 12,
  "topic": "Nutrition",
  "question": "What % of total calories should be from fat?",
  "options": ["10%- 30%", "7% - 15%", "65%- 80%", "1%- 7%"],
  "answer": 0,
  "explanation": {
    "step_1": "Fats are essential nutrients that provide energy and support cellular function.",
    "step_2": "Nutrition guidelines recommend a balanced intake of dietary fats.",
    "step_3": "WHO suggests fats should contribute 20% to 30% of total daily calories.",
    "step_4": "Extremely low or high fat consumption may lead to health issues.",
    "step_5": "Among the options, only 10%-30% aligns with dietary recommendations.",
    "final_answer": "10%-30% of total daily calories should come from fat."
  }
},
{
  "id": 13,
  "topic": "Medicine",
  "question": "Burning feet syndrome is seen in the deficiency of?",
  "options": ["Riboflavin", "Pyridoxine", "Pantothenic acid", "Vitamin B 12"],
  "answer": 2,
  "explanation": {
    "step_1": "Burning feet syndrome is characterized by pain and burning sensations in the feet.",
    "step_2": "It is typically associated with nutritional deficiency affecting nerve health.",
    "step_3": "Pantothenic acid (Vitamin B5) plays a key role in nerve metabolism.",
    "step_4": "Deficiency of Vitamin B5 impairs nerve conduction and results in neuropathic symptoms.",
    "step_5": "Hence, deficiency of pantothenic acid causes burning feet syndrome.",
    "final_answer": "Burning feet syndrome is caused by pantothenic acid deficiency."
  }
},
{
  "id": 14,
  "topic": "Neuroscience",
  "question": "The neurotransmitter released in the neuromuscular junction is?",
  "options": ["Dopamine", "Serotonin", "Acetylcholine", "Adrenaline"],
  "answer": 2,
  "explanation": {
    "step_1": "The neuromuscular junction is where motor nerves communicate with muscle fibers.",
    "step_2": "This communication is essential for initiating muscle contraction.",
    "step_3": "Acetylcholine is the chemical messenger released by motor neurons.",
    "step_4": "It binds to nicotinic receptors on the muscle membrane to trigger contraction.",
    "step_5": "Other neurotransmitters like dopamine and serotonin are not involved here.",
    "final_answer": "Acetylcholine is released at the neuromuscular junction."
  }
},
{
  "id": 15,
  "topic": "Medicine",
  "question": "Loss of sense of smell is called as?",
  "options": ["Anosmia", "Aphasia", "Ageusia", "Photophobia"],
  "answer": 0,
  "explanation": {
    "step_1": "The loss or absence of the sense of smell is a clinically recognized symptom.",
    "step_2": "The medical term for loss of smell is anosmia.",
    "step_3": "Aphasia relates to speech; ageusia refers to loss of taste; photophobia means light sensitivity.",
    "step_4": "Anosmia can be caused by nasal infections, trauma, or neurological conditions.",
    "step_5": "Hence, anosmia is the correct term for loss of smell.",
    "final_answer": "Loss of sense of smell is called anosmia."
  }
},
{
  "id": 16,
  "topic": "Endocrinology",
  "question": "Beta cells of pancreas secrete?",
  "options": ["Insulin", "Glucagon", "Somatostatin", "Pancreatic polypeptide"],
  "answer": 0,
  "explanation": {
    "step_1": "The pancreas contains specialized cells in clusters known as islets of Langerhans.",
    "step_2": "Among these, beta cells are responsible for glucose homeostasis.",
    "step_3": "Beta cells detect elevated blood glucose and respond by secreting insulin.",
    "step_4": "Insulin facilitates the uptake of glucose into cells and storage as glycogen.",
    "step_5": "Hence, beta cells secrete insulin.",
    "final_answer": "Beta cells of the pancreas secrete insulin."
  }
},
{
  "id": 17,
  "topic": "Biochemistry",
  "question": "Lipase helps in digestion of?",
  "options": ["Protein", "Carbohydrate", "Fats", "Minerals"],
  "answer": 2,
  "explanation": {
    "step_1": "Digestion involves enzymes that act on specific macronutrients.",
    "step_2": "Lipase is an enzyme secreted by the pancreas and salivary glands.",
    "step_3": "It breaks down dietary fats (lipids) into fatty acids and glycerol.",
    "step_4": "Proteins are digested by proteases, and carbohydrates by amylases.",
    "step_5": "Hence, lipase is responsible for fat digestion.",
    "final_answer": "Lipase aids in digestion of fats."
  }
},
{
  "id": 18,
  "topic": "Nephrology",
  "question": "Anti diuretic hormone acts on?",
  "options": ["Proximal convoluted tubule", "Collecting duct", "Ascending limb of loop of Henle", "Descending limb of loop of Henle"],
  "answer": 1,
  "explanation": {
    "step_1": "Anti-diuretic hormone (ADH) regulates water reabsorption in the kidney.",
    "step_2": "It targets the last segment of the nephron to reduce water loss.",
    "step_3": "ADH increases water permeability in the collecting ducts using aquaporins.",
    "step_4": "This leads to reabsorption of water back into circulation.",
    "step_5": "Thus, ADH acts on the collecting duct.",
    "final_answer": "ADH acts primarily on the collecting duct."
  }
},
{
  "id": 19,
  "topic": "Cardiology",
  "question": "First heart sound is due to closure of?",
  "options": ["AV valves (Atrioventricular valve)", "Semilunar valves", "Atrial contraction", "Ventricular filling"],
  "answer": 0,
  "explanation": {
    "step_1": "The heart produces two primary sounds during the cardiac cycle.",
    "step_2": "The first heart sound, 'lub,' marks the beginning of systole.",
    "step_3": "It occurs due to closure of the atrioventricular (AV) valves—mitral and tricuspid.",
    "step_4": "This prevents backflow of blood into the atria during ventricular contraction.",
    "step_5": "Hence, the first heart sound is caused by closure of AV valves.",
    "final_answer": "Closure of AV valves produces the first heart sound."
  }
},
  {
  "id": 20,
  "topic": "Histology",
  "question": "Simple cuboidal epithelium is present in the below mentioned organ?",
  "options": ["Thyroid follicles", "Skin", "Uterus", "Trachea"],
  "answer": 0,
  "explanation": {
    "step_1": "Simple cuboidal epithelium consists of cube-shaped cells with central nuclei.",
    "step_2": "This epithelium is specialized for secretion and absorption.",
    "step_3": "It is commonly found in glandular ducts and endocrine structures.",
    "step_4": "Thyroid follicles are lined by this type for hormone production.",
    "step_5": "Other organs listed have different epithelial types.",
    "final_answer": "Simple cuboidal epithelium is found in thyroid follicles."
  }
},
{
  "id": 21,
  "topic": "Hematology",
  "question": "Lack of intrinsic factor with failure in the absorption of vitamin B12 results in?",
  "options": ["Haemolytic anemia", "Pernicious anemia", "Aplastic anemia", "Jaundice"],
  "answer": 1,
  "explanation": {
    "step_1": "Intrinsic factor is a glycoprotein secreted by the stomach lining.",
    "step_2": "It is essential for the absorption of vitamin B12 in the ileum.",
    "step_3": "Vitamin B12 is required for red blood cell maturation and DNA synthesis.",
    "step_4": "Without intrinsic factor, B12 absorption fails, leading to megaloblastic changes.",
    "step_5": "This condition is classified as pernicious anemia.",
    "final_answer": "Pernicious anemia results from vitamin B12 malabsorption due to intrinsic factor deficiency."
  }
},
{
  "id": 22,
  "topic": "Pharmacy Laws",
  "question": "As per the Poisons Act, license is granted by the Central Govt. of India for?",
  "options": ["Import", "Export", "Possession", "Sale"],
  "answer": 0,
  "explanation": {
    "step_1": "The Poisons Act regulates the handling and control of toxic substances.",
    "step_2": "Licensing authority is defined based on the type of activity (import, sale, etc.).",
    "step_3": "Import requires inter-country regulation and control.",
    "step_4": "Hence, the Central Government is responsible for issuing licenses for import.",
    "step_5": "Other activities are managed by state-level authorities.",
    "final_answer": "The Central Government grants licenses for import under the Poisons Act."
  }
},
{
  "id": 23,
  "topic": "Pharmacy Laws",
  "question": "All India Pharmaceutical Congress Association was started in?",
  "options": ["1940", "1932", "1936", "1948"],
  "answer": 2,
  "explanation": {
    "step_1": "The All India Pharmaceutical Congress is a major professional body for pharmacists.",
    "step_2": "It was founded to promote education, standards, and advancement in pharmacy.",
    "step_3": "Historical records show its inception during the pre-independence period.",
    "step_4": "The correct founding year of the organization was 1936.",
    "step_5": "Other years correspond to different pharmacy or national milestones.",
    "final_answer": "The All India Pharmaceutical Congress Association began in 1936."
  }
},
{
  "id": 24,
  "topic": "Pharmacy Laws",
  "question": "Central Register for Pharmacists is maintained by?",
  "options": ["Central Council", "Health Ministry", "University Grants Commission", "Medical Council of India"],
  "answer": 0,
  "explanation": {
    "step_1": "The Central Register is a national list of all registered pharmacists.",
    "step_2": "This register ensures uniformity and traceability across states.",
    "step_3": "The Pharmacy Council of India governs pharmacy education and registration.",
    "step_4": "The Central Council under this body maintains the Central Register.",
    "step_5": "Other organizations regulate different professions or sectors.",
    "final_answer": "The Central Council maintains the Central Register for Pharmacists."
  }
},
{
  "id": 25,
  "topic": "Pharmacy Laws",
  "question": "The punishment for contravention of the Drug and Magic Remedies Act on first conviction is?",
  "options": ["Imprisonment up to one month or fine or both", "Imprisonment up to eight months or fine or both", "Imprisonment up to one year or fine or both", "Imprisonment up to six months or fine or both"],
  "answer": 3,
  "explanation": {
    "step_1": "The Drug and Magic Remedies (Objectionable Advertisements) Act controls false drug claims.",
    "step_2": "It prohibits advertisements that promote magical cures or misleading treatments.",
    "step_3": "Legal provisions specify penalties for first and subsequent offenses.",
    "step_4": "For the first conviction, the penalty includes jail time up to six months, or fine, or both.",
    "step_5": "This ensures deterrence against deceptive health advertising.",
    "final_answer": "First conviction under the Act can lead to imprisonment up to six months or fine or both."
  }
},
{
  "id": 26,
  "topic": "Pharmacy Laws",
  "question": "Drugs Technical Advisory Board consists of how many Ex-officio members?",
  "options": ["5", "2", "8", "4"],
  "answer": 2,
  "explanation": {
    "step_1": "The DTAB is the highest technical body under the Drugs and Cosmetics Act.",
    "step_2": "It advises the government on technical drug-related matters.",
    "step_3": "Its structure includes both ex-officio and nominated members.",
    "step_4": "There are 8 ex-officio members representing key institutions.",
    "step_5": "Other options do not match the official count.",
    "final_answer": "DTAB consists of 8 ex-officio members."
  }
},
{
  "id": 27,
  "topic": "Pharmacy Laws",
  "question": "Any record, register, or other document seized by the drug inspector should be returned to the persons from whom they were seized within a period of?",
  "options": ["20 days", "30 days", "45 days", "60 days"],
  "answer": 1,
  "explanation": {
    "step_1": "Drug inspectors are authorized to seize certain documents during inspections.",
    "step_2": "To prevent misuse or delay, the law prescribes a return timeline.",
    "step_3": "This ensures due process and protects the rights of pharmacists or companies.",
    "step_4": "As per regulations, the maximum allowed period is 30 days.",
    "step_5": "Hence, the documents must be returned within that timeframe.",
    "final_answer": "Seized documents must be returned within 30 days."
  }
},
{
  "id": 28,
  "topic": "Business & Pharmacy",
  "question": "A drug store in a rural area can be started with which financial resource?",
  "options": ["Limited", "Unlimited", "Credit", "Daily wages"],
  "answer": 0,
  "explanation": {
    "step_1": "Starting a pharmacy requires capital to purchase stock and infrastructure.",
    "step_2": "Limited financial resources refer to modest, fixed startup funds.",
    "step_3": "In rural areas, the scale and demand are smaller, lowering capital requirements.",
    "step_4": "Limited resources are often sufficient if wisely invested.",
    "step_5": "Thus, such stores can operate on a limited budget.",
    "final_answer": "A drug store in a rural area can be started with limited financial resources."
  }
},
{
  "id": 29,
  "topic": "Business & Pharmacy",
  "question": "What happens to a partnership if one of the partners dies?",
  "options": ["Dissolved", "Not dissolved", "Continued", "Maintained"],
  "answer": 0,
  "explanation": {
    "step_1": "A partnership is a mutual agreement between two or more individuals.",
    "step_2": "Each partner has personal rights and responsibilities in the firm.",
    "step_3": "The death of a partner breaks the mutual legal contract.",
    "step_4": "Unless there is an agreement otherwise, the firm is dissolved.",
    "step_5": "So, partnerships typically dissolve when a partner dies.",
    "final_answer": "Partnership is dissolved if one of the partners dies."
  }
}

];

export default questionsByTopic; 