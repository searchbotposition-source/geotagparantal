// Vercel Serverless Function: expone variables públicas necesarias en el cliente
// NO incluir secretos sensibles aquí. Solo claves públicas como la de Maps.

export default function handler(req, res){
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  // Permitir GET desde cualquier origen (opcional)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
    apiBase: process.env.API_BASE || ''
  });
}


