const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db');
const authRoutes = require('./routes/auth'); // ✅ Import auth routes

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // ✅ Mount auth routes here
const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);

// Default route to test DB connection
app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    console.log('✅ DB TIME RESULT:', result.rows[0].now);
    res.send(`Hello from backend! Time: ${result.rows[0].now}`);
  } catch (err) {
    console.error('❌ DB Error:', err.message);
    res.status(500).send('Database error');
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});