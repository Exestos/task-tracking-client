import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import NavListItem, { INavListItem } from './NavListItem';
import { useAuth } from '../../hooks/auth.hook';



interface INavList {
  role: string,
  items: INavListItem[]
}

function getUserItems(userId: number) : INavList {
  return { 
  role: 'user',
  items: [
    {key: 'profile', icon: <AccountCircleIcon />, pageUrl: 'profile', title: 'Профиль'},
    {key: 'groups', icon: <PeopleIcon />, pageUrl: 'groups', title: 'Группы'},
    {key: 'mytasks', icon: <DashboardIcon />, pageUrl: 'tasks/user/' + userId, title: 'Мои задачи'},
    {key: 'settings', icon: <SettingsIcon />, pageUrl: 'settings', title: 'Настройки'},
  ]
  }
}

function getAdminItems() : INavList {
  return { 
    role: 'admin',
    items: [
      {key: 'registration', icon: <PersonAddAltIcon />, pageUrl: 'register', title: 'Регистрация'},
    ]
  }
}


export default function NavList(): React.ReactElement {
  const { userId } = useAuth()
  const userItems = getUserItems(!!userId ? +userId : 0)
  const adminItems = getAdminItems() 

  return (
    <>
      {userItems.items.map((args) => <NavListItem {...args}/>)}
      {adminItems.items.map((args) => <NavListItem {...args}/>)}
    </>
  )
}