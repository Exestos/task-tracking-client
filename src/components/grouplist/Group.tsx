import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Members } from './members/Members';
import { Tasks } from './tasks/Tasks';

export interface IGroupProps {
    group_id: number
    title: string
}

const Group: React.FC<IGroupProps> = ({group_id, title}) => {

  return (
      <>
        <Paper
            sx={{
            px: 3,
            pb: 2,
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            }}
        >   
          <h2>{title}</h2> 
          <Members group_id={group_id}/>
          <Tasks group_id={group_id}/>
        </Paper>
      </>
  )
}

export default Group