import { Box, ListItemButton, ListItemText, Stack } from '@mui/material';
import { IMember, Member } from './Member';

export interface IMembersProps {
    group_id: number
}

function getMembers(group_id: number) {
 return [
     {id: 1, name: 'Базеева Наталья Алексеевна', role: 'Создатель'},
     {id: 2, name: 'Прокин Александр Александрович', role: 'Создатель'},
     {id: 3, name: 'Харитонов Виталий Игоревич', role: 'Участник'},
     {id: 4, name: 'Старушенкова Екатерина Евгеньевна', role: 'Участник'}
 ]
}

export const Members: React.FC<IMembersProps> = ({group_id}) => {
    const members: IMember[] = getMembers(group_id)

    return (
        <>
            <h3>Участники ({members.length})</h3>
            <Box
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: 180,
                overflow: 'auto',
                p: 1
            }}
            >
                {members.map((args) => <Member {...args}/>)}
            </Box>
          </>
    )

}