const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });

		if (user && user.password === password) {
			res.json({ success: true, token: 'dummy-token' });
		} else {
			res.json({ success: false });
		}
	} catch (err) {
		console.error('Error during login:', err);
		res.status(500).json({ success: false });
	}
});

module.exports = router;
