/* eslint-disable no-new */
import React from 'react'
import MaterialTable from 'material-table'
import { TableState } from './types'

const ListUi: React.FC<TableState> = (props): React.ReactElement => {
  const [state, setState] = React.useState([])
  const { columns, data, onDelete, onUpdate, onPost } = props

  return (
    <MaterialTable
      style={{ width: '100%' }}
      title=""
      columns={columns}
      data={data}
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
          addTooltip: 'Novo Usuário',
          emptyDataSourceMessage: 'Não há registros para serem listados :/'
        },
        toolbar: {
          searchPlaceholder: 'Pesquisar...',
          searchTooltip: 'Pesquisar...',
          exportPDFName: 'Exportar PDF',
          exportCSVName: 'Exportar CSV',
          exportAriaLabel: 'Exportar',
          exportTitle: 'Exportar'
        },
        pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'Linhas',
          firstTooltip: 'Primeira',
          firstAriaLabel: 'Primeira',
          lastAriaLabel: 'Última',
          lastTooltip: 'Última',
          nextAriaLabel: 'Próxima',
          nextTooltip: 'Próxima',
          previousAriaLabel: 'Anterior',
          previousTooltip: 'Anterior'
        }
      }}
      options={{
        exportButton: true
      }}
      editable={{
        onRowAdd: newData => onPost(newData),
        onRowUpdate: (newData, oldData) => onUpdate(newData, oldData),
        onRowDelete: oldData => onDelete(oldData)
      }}
    />
  )
}

export default ListUi
