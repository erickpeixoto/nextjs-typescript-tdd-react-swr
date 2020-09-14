import { Column } from 'material-table'

interface Row {
  name: string
  surname: string
  birthYear: number
  birthCity: number
}

interface TableState {
  columns: Array<Column<Row>>
  data: Row[]
  onPost: any
  onDelete: any
  onUpdate: any
}
