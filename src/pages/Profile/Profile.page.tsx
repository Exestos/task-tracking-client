import { Box } from '@mui/material'
import { FC, useContext, useEffect } from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { IPageProps } from '../pages.types'

const Profile: FC<IPageProps> = props => {
  const { token, userId } = useAuth()

  useEffect(() => {
    document.title = 'Профиль'
  }, [])
  return (
    <Box sx={{ fontSize: '1.5rem' }}>
      <div>
        <div style={{ fontWeight: 'bold' }}>ФИО:</div> Сайгин Денис Витальевич
      </div>
      <div>
        <div style={{ fontWeight: 'bold' }}>Логин:</div> denis
      </div>
      <div>
        <div style={{ fontWeight: 'bold' }}>Идентификатор в системе:</div>{' '}
        qwerty-qwerty-qwerty
      </div>
    </Box>
  )
}

export default Profile
