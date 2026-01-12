
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const genAI = new GoogleGenAI({ apiKey });

export const getColorAdvice = async (userQuery: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: "You are the GP Pintura AI Color Consultant. Help users choose paint colors for their residential or commercial spaces. Be professional, creative, and concise. Suggest complementary palettes and consider lighting and space size. If the user asks for GP Pintura services, mention we do both residential and commercial work.",
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my color database right now. Please try again or contact GP Pintura directly for expert advice!";
  }
};
