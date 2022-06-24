import { Card, CardActionArea, CardContent, CardActions, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export interface ITimeLine {
    id: number
    user: string
    comment: string
    start: string
    duration: string
}

export const TimeLine: React.FC<ITimeLine> = ({id, user, comment, start, duration}) => { 
    const navigate = useNavigate()
    return (
        <>
        <Card sx={{ width: '100%-', m: 3, mb: 3}}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            <PersonIcon />{user}
            </Typography>
            <Typography variant="body1" color="text.secondary">
               {start} - {duration}   
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {comment ? comment : <em>Без коментария</em>}  
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