
import { GoogleGenAI } from "@google/genai";

export const getColorAdvice = async (userQuery: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    // Inicialização correta conforme diretrizes
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: "Você é o Consultor de Cores de IA da GP Pintura. Ajude os usuários a escolher cores de tinta para seus espaços residenciais ou comerciais. Seja profissional, criativo e conciso. Sugira paletas complementares e considere a iluminação e o tamanho do espaço. Se o usuário perguntar sobre os serviços da GP Pintura, mencione que realizamos trabalhos residenciais e comerciais com excelência.",
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estou com um pouco de dificuldade para acessar meu banco de dados de cores agora. Por favor, tente novamente ou entre em contato diretamente com a GP Pintura para um aconselhamento especializado!";
  }
};
