import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Switch,
  TextField
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ITimeLine, TimeLine } from '../../components/tasks/TimeLine'

function getTime(task_id: string | undefined): ITimeLine[] {
  return [
    {
      id: 1,
      user: 'Базеева Н.А.',
      comment: '',
      start: '13.06.2022',
      duration: '8h'
    },
    {
      id: 2,
      user: 'Базеева Н.А.',
      comment: 'Что-то пошло не по палну и т.п.',
      start: '14.06.2022',
      duration: '8h'
    },
    {
      id: 3,
      user: 'Базеева Н.А.',
      comment: '',
      start: '15.06.2022',
      duration: '8h'
    },
    {
      id: 4,
      user: 'Базеева Н.А.',
      comment: '',
      start: '16.06.2022',
      duration: '8h'
    }
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

export const EditTaskPage: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const times: ITimeLine[] = getTime(id)
  const [showTime, setShowTime] = useState(false)
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState('')
  const [comment, setComment] = useState('')

  const handleAddTime = () => {
    console.log('Время', time)
    console.log('Комментарий', comment)
    setOpen(false)
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant="contained" size="medium" onClick={() => navigate(-1)}>
        Вернуться
      </Button>
      <Paper
        sx={{
          mt: 3,
          px: 4,
          pt: 1.5,
          pb: 3,
          maxWidth: 800
        }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <TextField
            sx={{ width: '100%' }}
            label="Название задачи*"
            variant="standard"
          />
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel>Категория задачи</InputLabel>
            <Select
              value={selectedCategory}
              onChange={(event: SelectChangeEvent) => {
                setSelectedCategory(event.target.value as string)
              }}
              input={<OutlinedInput label="Категория задачи" />}
            >
              <MenuItem value="">
                <em>Без категории</em>
              </MenuItem>
              <MenuItem value={1}>IT</MenuItem>
              <MenuItem value={2}>Образование</MenuItem>
              <MenuItem value={3}>Разное</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel>Тип задачи</InputLabel>
            <Select
              value={selectedType}
              onChange={(event: SelectChangeEvent) => {
                setSelectedType(event.target.value as string)
              }}
              input={<OutlinedInput label="Тип задачи" />}
            >
              <MenuItem value="">
                <em>Без типа</em>
              </MenuItem>
              <MenuItem value={1}>Лекции</MenuItem>
              <MenuItem value={2}>Практика</MenuItem>
              <MenuItem value={3}>Проверка работ</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel>Исполнитель</InputLabel>
            <Select
              value={selectedType}
              onChange={(event: SelectChangeEvent) => {
                setSelectedType(event.target.value as string)
              }}
              input={<OutlinedInput label="Исполнитель" />}
            >
              <MenuItem value="">
                <em>Оставить пустым</em>
              </MenuItem>
              <MenuItem value={1}>Иван Иванов</MenuItem>
              <MenuItem value={2}>Иван2 Иванов</MenuItem>
              <MenuItem value={3}>Иван3 Иванов</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ width: '100%' }}
            label="Описание задачи"
            multiline
            variant="standard"
          />
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Button
              variant="contained"
              size="medium"
              onClick={() => navigate(-1)}
            >
              Сохранить
            </Button>
            <Button
              variant="contained"
              size="medium"
              color="error"
              onClick={() => navigate(-1)}
            >
              Удалить
            </Button>
          </Stack>
          <h3>Затраченное время</h3>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Button variant="contained" size="medium" onClick={handleOpen}>
              Добавить время
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Input
                  placeholder="Время"
                  sx={{ mb: 5 }}
                  value={time}
                  onChange={event => setTime(event.target.value)}
                />
                <Input
                  placeholder="Комментарий"
                  sx={{ mb: 5 }}
                  value={comment}
                  onChange={event => setComment(event.target.value)}
                />
                <br />
                <Button
                  onClick={handleAddTime}
                  variant="contained"
                  size="medium"
                >
                  Добавить
                </Button>
              </Box>
            </Modal>
            <FormControlLabel
              sx={{
                display: 'block'
              }}
              control={
                <Switch
                  checked={showTime}
                  onChange={() => setShowTime(!showTime)}
                  name="show"
                  color="primary"
                />
              }
              label="Показать"
            />
          </Stack>
        </Stack>
        {showTime ? (
          <Box
            sx={{
              mt: 2,
              backgroundColor: theme =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              maxHeight: 300,
              overflow: 'auto'
            }}
          >
            {times.map(args => (
              <TimeLine {...args} />
            ))}
          </Box>
        ) : null}
      </Paper>
    </>
  )
}
