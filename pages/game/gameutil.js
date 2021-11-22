const states = ["Stone", "Paper", "Scissor"];

export const generateRandom = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return states[randomIndex];
};

export const validateRound = (computerChoice, userChoice) => {
  if (computerChoice === "Thinking") return 0;
  if (computerChoice === userChoice) return 0;
  return 1;
};
