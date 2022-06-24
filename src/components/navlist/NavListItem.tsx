import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

export interface INavListItem {
  key: string,
  icon: React.ReactElement
  pageUrl: string
  title: string
}

const NavListItem: React.FC<INavListItem> = ({icon, pageUrl, title}) => {  
    const navigate = useNavigate()

    return (
      <ListItemButton onClick={() => navigate(pageUrl)}>
        <ListItemIcon>
            {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    )
  }
  
export default NavListItem
  