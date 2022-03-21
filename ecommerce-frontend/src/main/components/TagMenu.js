import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Chip
} from '@mui/material'


function TagMenu(props) {
  const navigate = useNavigate()
  const tag = props.tag
  return (
    <Chip variant="outlined" onClick={() => { navigate('/', { label: tag.tagId }) }} label={tag.tagName}/>
  )
}

export default TagMenu