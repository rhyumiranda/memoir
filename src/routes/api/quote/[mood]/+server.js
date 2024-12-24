export async function GET({ params }) {
  const { mood } = params;
  try {
    const response = await fetch(`https://zenquotes.io/api/random/${mood}`);
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}