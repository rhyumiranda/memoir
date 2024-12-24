// src/routes/api/quote.js
export async function get({ url }) {
  const keyword = url.searchParams.get('keyword');  // Get the keyword from the query parameters
  const zenQuotesUrl = `https://zenquotes.io/api/random/${keyword}`;

  try {
    const response = await fetch(zenQuotesUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch from ZenQuotes');
    }

    const data = await response.json();
    return {
      body: { quote: data[0]?.quote || 'No quote found.' },
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins for local testing
      }
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    };
  }
}
