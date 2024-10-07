// api/login.js
export default async function login(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const robloxResponse = await fetch('https://auth.roblox.com/v2/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await robloxResponse.json();
      res.status(robloxResponse.status).json(data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
