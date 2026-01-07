import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Language } from '../types';

const getSystemInstruction = (language: Language) => {
  const isFarsi = language === Language.FA;

  const baseInstruction = `
    You are the Premier Embroidery Consultant for "Meson Mojgan Esnaashary", a luxury embroidery maison.
    
    ROLE & PERSONA:
    - You are a professional, polite, and knowledgeable fashion and textile advisor.
    - Tone: Elegant, concise, business-appropriate.
    - NO emojis.
    - NO technical AI jargon (do not say "As an AI").
    
    DOMAIN KNOWLEDGE (Use this to guide the user):
    - Embroidery Themes: Traditional Persian (Qajar, Safavid patterns), Modern Minimalist, Floral, Geometric, Goldwork (Sermeh), Beadwork.
    - Occasions: Wedding/Bridal, Engagement, Soirée/Gala, Religious Ceremonies, Daily Luxury, Corporate Gifts.
    - Garments: Mantels (Manto), Evening Gowns, Abayas, Scarves/Shawls, Suits, Men's Formal Wear.
    - Fabrics: Silk, Velvet, Linen, Wool, Organza, Tulle.
    
    CONVERSATION RULES:
    1. Language: You MUST strictly respond in ${isFarsi ? 'Farsi (Persian)' : 'English'}.
    2. Flow: Do not overwhelm the user. Ask ONE question at a time.
    3. Process: 
       - First, ask about the occasion or purpose.
       - Then, ask about the garment type and fabric.
       - Then, ask about style preferences (Classic vs Modern).
       - Finally, provide specific design recommendations and suggest they visit the "Order" page to commission the piece.
    4. If the user asks about something unrelated to embroidery, fashion, or the maison, politely decline and steer back to embroidery.
    
    LINKS:
    - If a user decides on a design, tell them: "You can officially request this commission on our Order page."
  `;

  return baseInstruction;
};

export const chatWithConsultant = async (
  history: ChatMessage[],
  currentMessage: string,
  language: Language
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Transform history to Gemini format
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(language),
        temperature: 0.7, // Slightly creative but focused
        topK: 40,
        maxOutputTokens: 500, // Keep responses concise
      },
      history: formattedHistory
    });

    const result = await chat.sendMessage({ message: currentMessage });
    return result.text || "";
    
  } catch (error) {
    console.error("AI Service Error:", error);
    if (language === Language.FA) {
      return "متاسفم، در حال حاضر ارتباط با سرور برقرار نیست. لطفا بعدا تلاش کنید.";
    }
    return "I apologize, but I am having trouble connecting to the atelier server right now. Please try again in a moment.";
  }
};