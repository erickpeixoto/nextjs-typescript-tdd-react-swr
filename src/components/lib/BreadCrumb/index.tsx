import React from 'react'
import { emphasize, withStyles, Theme } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Chip from '@material-ui/core/Chip'
import HomeIcon from '@material-ui/icons/Home'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from 'next/link'

const StyledBreadcrumb = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300]
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12)
    }
  }
}))(Chip) as typeof Chip

const BreadC: React.FC = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/" as="/app">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Início"
          icon={<HomeIcon fontSize="small" />}
        />
      </Link>
      <Link href="/user">
        <StyledBreadcrumb component="a" href="#" label="Usuários" />
      </Link>
      <Link href="/user">
        <StyledBreadcrumb label="Listagem" deleteIcon={<ExpandMoreIcon />} />
      </Link>
    </Breadcrumbs>
  )
}
export default BreadC
