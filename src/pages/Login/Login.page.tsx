import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './index.scss'
import { useMessage } from '../../hooks/message.hook'
import { useEffect } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useAuth } from '../../hooks/auth.hook'

const Login = () => {
  const message = useMessage()
  const auth = useAuth()
  const { loading, request, error, clearError } = useHttp()
  useEffect(() => {
    document.title = "Вход"
  }, []);
  useEffect(() => {
    message(error, true)
    clearError()
  }, [error, message, clearError])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)

    try {
      // const data = await request('/api/auth/login/', 'POST', {
      //   user: {
      //     email: values.get('email'),
      //     password: values.get('password')
      //   }
      // })
      // auth.login(data.user.token, data.user.id)
      auth.signin('login', '12313213')
    } catch (e) {
      message(error, true)
    }
  }

  return (
    <div className="Login">
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#0C0F18' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            Войти
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default Login
