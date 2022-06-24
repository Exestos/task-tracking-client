import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItemButton, ListItemText, Stack, Paper } from '@mui/material';
import PendingIcon from '@mui/icons-material/Pending';


export interface ITask {
    id: number
    name: string
    type: string
    user: string
    status: string
}

export const Task: React.FC<ITask> = ({id, name, type, user, status}) => {
    return (
        <>
        <Paper
            sx={{
            px: 3,
            pb: 2,
            m: 2,
            display: 'flex',
            flexDirection: 'column',
            }}
        >  
            <Stack
            direction="column"
            spacing={0}
            >
                <Stack
                direction="row"
                spacing={0}
                sx={{mt: 1}}
                >
                <span>Исполнитель: </span>
                <AccountCircleIcon sx={{
                    mr: 2,
                }}/>
                {user}
                </Stack>
                <ListItemText primary={'Название: ' + name} />
                <ListItemText primary={'Тип задачи: ' + type} />
                <ListItemText primary={'Статус: ' + status} />
            </Stack>
            </Paper>
        </>
    )
} 