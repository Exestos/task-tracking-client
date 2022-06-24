import { Box, Grid, ListItemButton, ListItemText, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ITaskListItem, TaskListItem } from './TaskListItem';

interface ITaskList {
    tasks: ITaskListItem[]
}

export const TaskList: React.FC<ITaskList> = ({tasks}) => {
    return (
        <>
            <Grid container>
            {tasks.map((args) => <TaskListItem {...args}/>)}
            </Grid> 
        </>
    )
}