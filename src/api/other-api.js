module.exports = async (req, res) => {
    if (req.method === 'GET') {
        res.json({ message: 'This is another API endpoint' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
