import { Button, Stack } from "@mui/material"
import { useParams, useNavigate } from "react-router-dom"
import { TaskList } from "../../components/tasks/TaskList"

interface ITasksPage {
    type: string
}

function getGroupName(id: number) {
    if (!id) return ''
    return 'ФДП'
   }

function getUserName(id: number) {
    if (!id) return ''
    return 'Базеева Н. А.'
   }

function getTasks(id: number) {
    if (!id) return []
    return [
        {id: 1, name: 'Проведение лекций', type: 'Занятия', user: 'Базеева Наталья Алексеевна', description: 'Базеева Наталья Алексеевна' },
        {id: 2, name: 'Проведение лекций', type: 'Занятия', user: 'Прокин Александр Александрович', description: 'Прокин Александр Александрович'},
        {id: 3, name: 'Проведение лекций', type: 'Занятия', user: 'Харитонов Виталий Игоревич', description: 'Харитонов Виталий Игоревич'},
        {id: 4, name: 'Проведение лекций', type: 'Занятия', user: 'Старушенкова Екатерина Евгеньевна', description: 'Старушенкова Екатерина Евгеньевна'}
    ]
   }

export const TasksPage: React.FC<ITasksPage> = ({type}) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const tasks = getTasks(!!id ? +id : 0)

    return (
        <>
            {type === 'group' ?
                <h2>Задачи группы: {getGroupName(!!id ? +id : 0)}</h2> :
                <h2>Задачи пользователя: {getUserName(!!id ? +id : 0)}</h2> 
            }
            <Stack direction="column" alignItems="flex-start" spacing={2}>
            <Button variant="contained" size="medium" onClick={() => navigate('/tasks/create')}>
            Создать задачу
            </Button>
            <TaskList tasks={tasks}/>
            </Stack>
        </>
    )
}