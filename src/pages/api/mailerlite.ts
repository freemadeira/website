import axios from 'axios';

export default async function handler(req, res) {
  const { email } = req.body;

  const headers = {
    Authorization: `Bearer ${process.env.MAILERLITE_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  try {
    const response = await axios.post(
      'https://connect.mailerlite.com/api/subscribers',
      { email },
      { headers },
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(error.response.status).json({ message: error.response.statusText });
  }
}
