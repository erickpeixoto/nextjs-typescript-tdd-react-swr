import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const { API_HOST, AUTH_TOKEN } = process.env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'PUT') {
      const { id } = req.body
      await axios
        .put(`${API_HOST}/users/${id}`, req.body, getAuth())
        .then(resp => resp.data)

      res.status(200).json({ id, message: 'Registro Excluído com Sucesso!' })
    }
  } catch (error) {
    throw new Error(error)
  }
}
const getAuth = () => ({
  headers: {
    Authorization: `Token ${AUTH_TOKEN}`
  }
})
