import React from 'react'
import { List } from './style'
import useSWR from 'swr'

const User: React.FC = props => {
  const { data } = useSWR('/users')
  return <List data={[]} columns={[]} />
}

export default User
