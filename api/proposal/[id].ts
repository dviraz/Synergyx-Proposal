import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  
  try {
    const response = await fetch(`http://89.167.95.255:3001/api/proposal/${id}`);
    if (!response.ok) {
      return res.status(404).json({ error: 'not found' });
    }
    const data = await response.json();
    
    // Track view — send Telegram notification
    const BOT = '8566921502:AAGPfwAEB8HmSFyF3fBIfkP_SuMMV4NF-5Q';
    const CHAT = '5696654956';
    const msg = `👁️ <b>הצעה נצפתה!</b>\n🏢 ${data.businessName}\n🌐 ${data.domain}\n📊 PS: ${data.ps}\n📦 ${data.services.join(', ')}\n⏰ ${new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}`;
    
    fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT, text: msg, parse_mode: 'HTML' })
    }).catch(() => {}); // fire and forget
    
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'server error' });
  }
}
