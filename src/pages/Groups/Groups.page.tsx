import { Box, Button, Input, Modal } from '@mui/material'
import { useState } from 'react'
import Group, { IGroupProps } from '../../components/grouplist/Group'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  borderRadius: '3px',
  boxShadow: 24,
  p: 4
}

const groups: IGroupProps[] = [
  { group_id: 1, title: 'ФДП и СПО' },
  { group_id: 2, title: 'СПО' }
]

const Groups = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleAddGroup = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        size="medium"
        sx={{ width: 300, mb: 5 }}
      >
        Создать группу
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input placeholder="Название группы" sx={{ mb: 5 }} />
          <br />
          <Button onClick={handleAddGroup} variant="contained" size="medium">
            Добавить
          </Button>
        </Box>
      </Modal>
      {groups.map(args => (
        <Group {...args} />
      ))}
    </>
  )
}

export default Groups
