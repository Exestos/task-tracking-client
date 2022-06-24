import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { ListItemButton, ListItemText, Stack, Card, IconButton } from '@mui/material';

export interface IMember {
    id: number
    name: string
    role: string
}

export const Member: React.FC<IMember> = ({id, name, role}) => {
    return (
        <>
        <Card sx={{ width: '100%-' , m: 1}}>
        <Stack
            direction="row"
            alignItems="center"
            spacing={0}
            >
                <ListItemButton >
                <AccountCircleIcon sx={{
                    mr: 2,
                }}/>
                <ListItemText primary={name} />
                </ListItemButton>
                <span>{role}</span>
                <IconButton aria-label="delete">
                <SettingsIcon />
                </IconButton> 
            </Stack>
        </Card>
        </>
    )
} 