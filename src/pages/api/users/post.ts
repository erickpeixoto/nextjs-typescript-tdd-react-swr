import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const { API_HOST, AUTH_TOKEN } = process.env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { body } = req
    const data = await axios
      .post(`${API_HOST}/users`, body, getAuth())
      .then(resp => resp.data)

    res.status(200).json({ data })
  } catch (error) {
    throw new Error(error)
  }
}
const getAuth = () => ({
  headers: {
    Authorization: `Token ${AUTH_TOKEN}`
  }
})
