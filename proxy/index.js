import express from 'express'
import axios from 'axios';
import cors from 'cors'
const app = express();

app.use(cors())
app.get('/timezone', async (req, res) => {
    try {
        const response = await axios.get('http://api.geonames.org/timezoneJSON', {
            params: {
                lat: req.query.lat,
                lng: req.query.lng,
                username: 'shinzoo_if'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Proxy running on port 3000');
});
