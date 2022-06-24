import { Box, Button, FormControlLabel, ListItemButton, ListItemText, Stack, Switch } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITaskListItem, TaskListItem } from '../../tasks/TaskListItem';
import { ITask, Task } from './Task';

export interface IMembersProps {
    group_id: number
}

function getTasks(group_id: number) {
 return [
     {id: 1, name: 'Проведение лекций', description: 'Занятия', type: 'Занятия', user: 'Базеева Наталья Алексеевна', status: 'open'},
     {id: 2, name: 'Проведение лекций', description: 'Занятия', type: 'Занятия', user: 'Прокин Александр Александрович', status: 'open'},
     {id: 3, name: 'Проведение лекций', description: 'Занятия', type: 'Занятия', user: 'Харитонов Виталий Игоревич', status: 'open'},
     {id: 4, name: 'Проведение лекций', description: 'Занятия', type: 'Занятия', user: 'Старушенкова Екатерина Евгеньевна', status: 'open'}
 ]
}

export const Tasks: React.FC<IMembersProps> = ({group_id}) => {
    const tasks: ITaskListItem[] = getTasks(group_id)
    const [showTasks, setShowTasks] = useState(false)
    const navigate = useNavigate()
    const manageTasks = () => navigate('/tasks/group/' + group_id)

    return (
        <>
            <Stack direction="row" alignItems="center" spacing={2}>
                <h3>Задачи ({tasks.length})</h3>
                <Button variant="contained" size="small" onClick={manageTasks}>
                    Открыть управление
                </Button>
                <FormControlLabel
                    sx={{
                    display: 'block',
                    }}
                    control={
                    <Switch
                        checked={showTasks}
                        onChange={() => setShowTasks(!showTasks)}
                        name="show"
                        color="primary"
                    />
                    }
                    label="Показать"
                />
            </Stack>
            {showTasks ?
             <Box
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    maxHeight: 300,
                    overflow: 'auto',
                    p: 3
                }}
                >
                    {tasks.map((args) => <TaskListItem {...args}/>)}
              </Box> : null}
          </>
    )

}