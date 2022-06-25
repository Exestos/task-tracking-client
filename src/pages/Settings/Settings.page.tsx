import { Box, Button, TextField } from '@mui/material'
import { FC, useEffect } from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { IPageProps } from '../pages.types'

const Settings: FC<IPageProps> = ({ updateTitle, title }) => {
  const { token } = useAuth()
  useEffect(() => {
    document.title = 'Настройки'
  }, [])

  return (
    <>
      <Box sx={{ maxWidth: '50%' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Сменить никнейм"
          autoFocus
        />
        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Сменить никнейм
        </Button>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Сменить пароль"
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Сменить пароль
        </Button>
      </Box>
    </>
  )
}

export default Settings
