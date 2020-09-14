import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const { API_HOST, AUTH_TOKEN } = process.env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await axios
      .get(`${API_HOST}/users`, getAuth())
      .then(resp => resp.data)

    res.status(200).json({
      data: data.map(({ name, email, external_code, role, tags, id }) => ({
        name,
        email,
        role,
        external_code,
        tags,
        id
      }))
    })
  } catch (error) {
    throw new Error(error)
  }
}
const getAuth = () => ({
  headers: {
    Authorization: `Token ${AUTH_TOKEN}`
  }
})
