import axios, { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      res
        .status(error.response?.status || 500)
        .json({ message: error.response?.statusText || 'Internal Server Error' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
