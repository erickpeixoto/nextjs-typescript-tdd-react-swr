import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const { API_HOST, AUTH_TOKEN } = process.env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const { id } = req.query

      await axios
        .delete(`${API_HOST}/users/${id}`, getAuth())
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
