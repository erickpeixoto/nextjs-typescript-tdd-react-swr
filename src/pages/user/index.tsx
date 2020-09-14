import React, { useState } from 'react'
import { List } from '@style/pages/user'
import useSWR, { mutate, trigger } from 'swr'
import axios from 'axios'
import { MultipleSelect } from 'react-select-material-ui'
import { useToasts } from 'react-toast-notifications'

const User = _props => {
  const { addToast } = useToasts()
  const {
    data: { data }
  } = useSWR('api/users', {
    initialData: { data: _props.data, columns: [] }
  })
  const [tags, setTags] = useState<string[]>([])

  const onPost = async (item: any) => {
    const url = 'api/users'
    mutate(
      url,
      data.filter(c => c.id !== item.id),
      false
    )
    await axios.post('api/users/post', item)
    trigger(url)
    addToast('Cadastrado com Sucesso!', { appearance: 'success' })
  }

  const onUpdate = async (item, old) => {
    const url = 'api/users'
    mutate(
      url,
      data.filter(c => c.id !== item.id),
      false
    )
    await axios.put('api/users/edit', item)
    trigger(url)
    addToast('Alterado com Sucesso!', { appearance: 'success' })
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
    addToast('Excluído com Sucesso!', { appearance: 'success' })
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
      render: () => null,
      lookup: { 0: 'Gestor', 1: 'Agente', 2: 'Local' }
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
          helperText="Você pode adicionar Tags"
          onChange={items => setTags(items)}
          SelectProps={{
            isCreatable: true,
            msgNoOptionsAvailable: '',
            msgNoOptionsMatchFilter: ''
          }}
        />
      )
    }
  ]

  return (
    <>
      <List
        data={data}
        columns={columns}
        onPost={onPost}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </>
  )
}

export default User

User.getInitialProps = async ctx => {
  const res = await axios('/api/users')
  const json = res.data
  return json
}
