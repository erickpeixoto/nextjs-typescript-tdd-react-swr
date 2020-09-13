import React from 'react'
import MaterialTable from 'material-table'
import { TableState } from './types'

const ListUi: React.FC<TableState> = (): React.ReactElement => {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'E-mail', field: 'email' },
      { title: 'Código Externo', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
      }
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34
      }
    ]
  })

  return (
    <MaterialTable
      style={{ width: '100%' }}
      title=""
      columns={state.columns}
      data={state.data}
      localization={{
        header: {
          actions: ''
        },
        body: {
          editRow: {
            deleteText: 'Confirma a exclusão do registro?',
            cancelTooltip: 'Cancelar',
            saveTooltip: 'Salvar'
          },
          addTooltip: 'Novo Usuário'
        },
        toolbar: {
          searchPlaceholder: 'Pesquisar...',
          searchTooltip: 'Pesquisar...',
          exportPDFName: 'Exportar PDF',
          exportCSVName: 'Exportar CSV'
        }
      }}
      options={{
        exportButton: true
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              setState(prevState => {
                const data = [...prevState.data]
                data.push(newData)
                return { ...prevState, data }
              })
            }, 600)
            resolve(true)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data]
                  data[data.indexOf(oldData)] = newData
                  return { ...prevState, data }
                })
              }
            }, 600)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              setState(prevState => {
                const data = [...prevState.data]
                data.splice(data.indexOf(oldData), 1)
                return { ...prevState, data }
              })
            }, 600)
          })
      }}
    />
  )
}

export default ListUi
