const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method === 'GET') {
        const { url } = req.query;

        if (!url || !url.includes('videy.co/v/?id=')) {
            return res.status(400).json({ error: 'Invalid Videy URL' });
        }

        try {
            // Ekstrak ID dari URL
            const videoId = url.split('id=')[1];
            const videoUrl = `https://cdn.videy.co/${videoId}.mp4`;

            // Verifikasi apakah video tersedia
            const response = await axios.head(videoUrl);
            if (response.status === 200) {
                res.json({ videoUrl });
            } else {
                res.status(404).json({ error: 'Video not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to scrape video' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
