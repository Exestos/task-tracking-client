import {Routes, Route} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout/AppLayout.layout'
import AuthLayout from '../layouts/AuthLayout/AuthLayout.layout'
import Login from '../pages/Login/Login.page'
import Register from '../pages/Register/Register.page'
import Profile from '../pages/Profile/Profile.page'
import Settings from '../pages/Settings/Settings.page'
import Groups from '../pages/Groups/Groups.page'
import { TasksPage } from '../pages/Tasks/Tasks.page'
import { EditTaskPage } from '../pages/Tasks/EditTask.page'
import { CreateTaskPage } from '../pages/Tasks/CreateTask.page'
import { useAuth } from '../hooks/auth.hook'

export default function routes() {
  const {token} = useAuth();
  return (
    <Routes>        
      {!!token ?
      <>
      <Route path="/" element={<AppLayout />}>
      <Route index element={<Profile />} />
      <Route path="groups" element={<Groups />} />
      <Route path="tasks/"> 
        <Route path="group/:id" element={<TasksPage type='group'/>} />
        <Route path="user/:id" element={<TasksPage type='user'/>} />
        <Route path="edit/:id" element={<EditTaskPage />} />
        <Route path="create" element={<CreateTaskPage />} />
      </Route>
      <Route path="settings" element={<Settings />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Profile />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
      <Route index element={<Login />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>
      </>
      : 
      <Route path="*" element={<AuthLayout />}>
        <Route path="*" element={<Login />} />
      </Route>}
    </Routes>
  )
}
