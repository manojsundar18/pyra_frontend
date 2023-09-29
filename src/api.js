
  // app.post('/api/login', async (req, res) => {
  //   const { email, password } = req.body;
  //   const getUserQuery = 'SELECT * FROM user_details WHERE email = ?';
  //   db.query(getUserQuery, [email], (error, results) => {
  //     if (error) {
  //       console.error(error);
  //       res.status(500).json({ error: 'Database error' });
  //       return;
  //     }
  //     if (results.length === 0) {
  //       res.status(401).json({ error: 'Invalid email or password' });
  //     } else {
  //       const user = results[0];
  //       if ( user.password === password) {
  //         res.status(200).json({  userId: user.id,message: 'Login successful' });
  //       } else {
  //         res.status(401).json({ error: 'Invalid email or password' });
  //       }
  //     }
  //   });
  //  });





  // app.post('/api/register', async (req, res) => {
  //   const { email, password } = req.body;
  //   const checkQuery = 'SELECT * FROM user_details WHERE email = ?';
  //   db.query(checkQuery, [email], async (error, results) => {
  //     if (error) {
  //       console.error(error);
  //       res.status(500).json({ error: 'Database error' });
  //       return;
  //     }
  //     if (results.length > 0) {
  //       res.status(409).json({ error: 'Email already registered' });
  //     } else {
  //       const insertQuery = 'INSERT INTO user_details (email, password, created_at, updated_at, is_deleted) VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ?)';
  //       db.query(insertQuery, [email, password, 0], (error, results) => {
  //         if (error) {
  //           console.error(error);
  //           res.status(500).json({ error: 'Database error' });
  //           return;
  //         }
  //         res.status(201).json({ message: 'User registered successfully' });
  //       });
  //     }
  //   });
  // });
  // app.post('/api/login', async (req, res) => {
  //   const { email, password } = req.body;
  //   const getUserQuery = 'SELECT * FROM user_details WHERE email = ?';
  //   db.query(getUserQuery, [email], (error, results) => {
  //     if (error) {
  //       console.error(error);
  //       res.status(500).json({ error: 'Database error' });
  //       return;
  //     }
  //     if (results.length === 0) {
  //       res.status(401).json({ error: 'Invalid email or password' });
  //     } else {
  //       const user = results[0];
  //       if ( user.password === password) {
  //         res.status(200).json({  userId: user.id,message: 'Login successful' });
  //       } else {
  //         res.status(401).json({ error: 'Invalid email or password' });
  //       }
  //     }
  //   });
  //  });
  
  
  
  
  
  
  