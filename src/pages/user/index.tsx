/* eslint-disable react/display-name */
/* eslint-disable no-new */
import React from 'react'
import { List } from '@style/pages/user'
import useSWR, { mutate, trigger } from 'swr'
import axios from 'axios'
import { MultipleSelect } from 'react-select-material-ui'

const User: React.FC = _props => {
  const {
    data: { data }
  } = useSWR('api/users', {
    initialData: { data: [], columns: [] }
  })

  const onPost = async (item: any) => {
    const url = 'api/users'
    mutate(
      url,
      data.filter(c => c.id !== item.id),
      false
    )
    await axios.post('api/users/post', item)
    trigger(url)
  }
  const onUpdate = async (item, old) => {
    console.info(item, old)
  }
  const onDelete = async (item: any) => {
    const url = 'api/users'
    mutate(
      url,
      data.filter(c => c.id !== item.id),
      false
    )
    await axios.delete(`api/users/delete/?id=${item.id}`)
    trigger(url)
  }
  const columns = [
    {
      title: 'Nome',
      field: 'name'
    },
    {
      title: 'E-mail',
      field: 'email'
    },
    {
      title: 'Código Externo',
      field: 'external_code'
    },
    {
      title: '',
      field: 'role',
      render: () => null
    },
    {
      title: '',
      field: 'tags',
      filterCellStyle: 'qualquer coisa',
      render: () => null,
      editComponent: _props => (
        <MultipleSelect
          label="Tags"
          name="tags"
          values={_props.value}
          options={_props.value}
          helperText="Você pode adicionar Tags digitando o nome desejado"
          onChange={teste => console.info(teste)}
          SelectProps={{
            isCreatable: true,
            msgNoOptionsAvailable: 'All cities are selected',
            msgNoOptionsMatchFilter: 'No city name matches the filter'
          }}
        />
      )
    }
  ]
  return (
    <List
      data={data}
      columns={columns}
      onPost={onPost}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  )
}

export default User
