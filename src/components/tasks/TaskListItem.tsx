import { Card, CardActionArea, CardContent, CardActions, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export interface ITaskListItem {
    id: number
    name: string
    type: string
    description: string
    user: string
}

export const TaskListItem: React.FC<ITaskListItem> = ({id, name, type, description, user}) => { 
    const navigate = useNavigate()
    return (
        <>
        <Card sx={{ maxWidth: 500, mr: 3, mb: 3}}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            <PersonIcon />{user}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Описание описание описание описание описание описание описание описание описание описание описание описание описание  
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={() => navigate('/tasks/edit/' + id)}>
            Изменить
            </Button>
            <Button size="small" color="error">
            Удалить
            </Button>
        </CardActions>
        </Card>        
        </>
    )
} 