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
      "step_1": "The total solution weight is 150 g.",
      "step_2": "A 4% w/w solution means 4 g of potassium acetate per 100 g of solution.",
      "step_3": "To find the potassium acetate in 150 g of solution: (4/100) × 150 = 6 g.",
      "step_4": "The remaining weight comes from water, so: Water needed = Total solution weight - Potassium acetate.",
      "step_5": "Water required = 150 g - 6 g = 144 g.",
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
      "step_1": "Inhalations and sprays require specific container characteristics.",
      "step_2": "Amber colored bottles protect light-sensitive medications.",
      "step_3": "The amber color helps prevent degradation of the medication.",
      "step_4": "This is especially important for medications that are sensitive to light.",
      "step_5": "Other bottle types don't provide the necessary protection.",
      "final_answer": "Amber coloured bottles are recommended for inhalations and sprays."
    }
  },
  {
    "id": 2,
    "topic": "Biochemistry",
    "question": "Tetany is due to the deficiency of?",
    "options": ["Calcium", "Magnesium", "Phosphorus", "Manganese"],
    "answer": 0,
    "explanation": {
      "step_1": "Tetany is a condition characterized by muscle spasms and cramps.",
      "step_2": "Calcium plays a crucial role in muscle contraction and nerve function.",
      "step_3": "When calcium levels are low, nerve cells become more excitable.",
      "step_4": "This increased excitability leads to involuntary muscle contractions.",
      "step_5": "Other minerals listed don't directly cause tetany.",
      "final_answer": "Tetany is due to calcium deficiency."
    }
  }
];

export default questionsByTopic; 