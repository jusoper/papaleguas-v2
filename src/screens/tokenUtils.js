// tokenUtils.js

export const generateVerificationToken = () => {
  const token = Math.floor(1000 + Math.random() * 9000); // Gera um número aleatório entre 1000 e 9999
  return token.toString(); // Converte o número para uma string
};  
