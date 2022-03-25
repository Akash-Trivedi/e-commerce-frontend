import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Chip, Box
} from '@mui/material'
import ApplicationContext from '../context/ApplicationContext';

function TagChip(props) {
  const navigate = useNavigate()
  return (
    <Chip sx={{ p: 1, m: 0.5 }} variant="outlined" onClick={() => { navigate('/', { label: props.tag.tagId }) }} label={props.tag.tagName} />
  );

}
export default function TagMenu() {
  const { appData } = useContext(ApplicationContext)
  console.log('tag menu component rendered');
  return (
    <div className="px-2 py-2">
      <Box display='flex' alignItems='center' justifyContent='center' flexWrap='wrap'>
        {
          appData.tags.map((tag) => {
            return <TagChip tag={tag} key={tag.tagId} />
          })
        }
      </Box>
    </div>
  )
}
