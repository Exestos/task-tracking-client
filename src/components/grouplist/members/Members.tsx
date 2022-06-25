import {
  Box,
  Button,
  Input,
  ListItemButton,
  ListItemText,
  Modal,
  Stack
} from '@mui/material'
import { useState } from 'react'
import { IMember, Member } from './Member'

export interface IMembersProps {
  group_id: number
}

function getMembers(group_id: number) {
  return [
    { id: 1, name: 'Базеева Наталья Алексеевна', role: 'Создатель' },
    { id: 2, name: 'Прокин Александр Александрович', role: 'Создатель' },
    { id: 3, name: 'Харитонов Виталий Игоревич', role: 'Участник' },
    { id: 4, name: 'Старушенкова Екатерина Евгеньевна', role: 'Участник' }
  ]
}

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

export const Members: React.FC<IMembersProps> = ({ group_id }) => {
  const members: IMember[] = getMembers(group_id)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleAddUser = () => {
    setOpen(false)
  }

  return (
    <>
      <h3>Участники ({members.length})</h3>
      <Button
        onClick={handleOpen}
        variant="contained"
        size="medium"
        sx={{ width: 300, mb: 2 }}
      >
        Добавить участника
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input placeholder="ID пользователя" sx={{ mb: 5 }} />
          <br />
          <Button onClick={handleAddUser} variant="contained" size="medium">
            Добавить
          </Button>
        </Box>
      </Modal>
      <Box
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: 180,
          overflow: 'auto',
          p: 1
        }}
      >
        {members.map(args => (
          <Member {...args} />
        ))}
      </Box>
    </>
  )
}
