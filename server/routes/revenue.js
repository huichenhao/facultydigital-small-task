const express = require('express');
const router = express.Router();
const Revenue = require('../models/Revenue');

router.get('/revenue', async (req, res) => {
    const revenues = await Revenue.find({});
    res.json(revenues);
});

module.exports = router;