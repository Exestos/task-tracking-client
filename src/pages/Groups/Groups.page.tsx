import Group, {IGroupProps} from '../../components/grouplist/Group';


const groups: IGroupProps[] = [
  {group_id: 1, title: 'ФДП и СПО'},
  {group_id: 2, title: 'СПО'},
]


const Groups = () => {
  return (
      <>
        {groups.map((args) => <Group {...args}/>)}
      </>
  )
}

export default Groups
