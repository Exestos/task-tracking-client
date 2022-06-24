import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { useMessage } from '../../hooks/message.hook'
import { useContext, useEffect } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useAuth } from '../../hooks/auth.hook';

const Register = () => {
  const message = useMessage()
  const auth = useAuth()
  const { loading, request, error, clearError } = useHttp()
  useEffect(() => {
    document.title = "Регистрация"
  }, []);
  useEffect(() => {
    message(error, true)
    clearError()
  }, [error, message, clearError])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)

    try {
      const data = await request('/api/auth/register/', 'POST', {
        user: {
          email: values.get('email'),
          username: values.get('username'),
          password: values.get('password'),
          isAdmin: values.get('isAdmin')
        }
      })

      message('Вы успешно зарегистрировали пользователя!', false)

      auth.signin(data.user.token, data.user.username)
    } catch (e) {
      message(error, true)
    }
  }

  return (
    <>
      <Box
        sx={{
          my: 5,
          mx: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#0C0F18' }}>
          <PersonAddAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Зарегистрировать
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, maxWidth: 400}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Адрес электронной почты"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Никнейм"
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Зарегистрировать
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Register
