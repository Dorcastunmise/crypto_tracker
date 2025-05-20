const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());  // Allow CORS for your frontend domain or '*'

// Your API key for CoinGecko
const API_KEY = 'CG-5LVveNhGUTVppYfGAwiJujBT';

// Proxy route for the coins markets
app.get('/api/coins/markets', async (req, res) => {
    try {
        const { vs_currency } = req.query;
        if (!vs_currency) {
            return res.status(400).json({ error: "Missing 'vs_currency' query parameter" });
        }

        const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}`;
        const response = await fetch(apiUrl, {
            headers: {
                'accept': 'application/json',
                'x-cg-demo-api-key': API_KEY
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching coin markets:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Proxy route for individual coin details
app.get('/api/coins/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const apiUrl = `https://api.coingecko.com/api/v3/coins/${id}`;
        const response = await fetch(apiUrl, {
            headers: {
                'accept': 'application/json',
                'x-cg-demo-api-key': API_KEY
            }
        });
        if (!response.ok) {
            return res.status(response.status).json({ error: `Failed to fetch coin ${id}` });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching coin details:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Proxy route for coin market charts
app.get('/api/coins/:id/market_chart', async (req, res) => {
    try {
        const { id } = req.params;
        const { vs_currency, days, interval } = req.query;

        if (!vs_currency || !days) {
            return res.status(400).json({ error: "Missing 'vs_currency' or 'days' query parameter" });
        }

        const intervalQuery = interval ? `&interval=${interval}` : '';
        const apiUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}${intervalQuery}`;

        const response = await fetch(apiUrl, {
            headers: {
                'accept': 'application/json',
                'x-cg-demo-api-key': API_KEY,
            }
        });
        if (!response.ok) {
            return res.status(response.status).json({ error: `Failed to fetch market chart for ${id}` });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching market chart:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
