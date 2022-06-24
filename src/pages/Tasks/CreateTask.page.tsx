import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, SelectChangeEvent, Stack, TextField } from "@mui/material"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CreateTaskPage: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedType, setSelectedType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <>
        <Button variant="contained" size="medium" onClick={() => navigate(-1)}>Вернуться</Button>
        <Paper sx={{
            mt: 3,
            px: 4,
            pt: 1.5,
            pb: 3,
            maxWidth: 800
        }}>
        <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        >
            
            <TextField sx={{width:'100%'}} label="Название задачи*" variant="standard" />
            <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel>Категория задачи</InputLabel>
            <Select
                value={selectedCategory}
                onChange={(event: SelectChangeEvent) => {setSelectedCategory(event.target.value as string)}}
                input={<OutlinedInput label="Категория задачи" />}
            >
                <MenuItem value="">
                <em>Без категории</em>
                </MenuItem>
                <MenuItem value={1}>IT</MenuItem>
                <MenuItem value={2}>Образование</MenuItem>
                <MenuItem value={3}>Разное</MenuItem>
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel>Тип задачи</InputLabel>
            <Select
                value={selectedType}
                onChange={(event: SelectChangeEvent) => {setSelectedType(event.target.value as string)}}
                input={<OutlinedInput label="Тип задачи" />}
            >
                <MenuItem value="">
                <em>Без типа</em>
                </MenuItem>
                <MenuItem value={1}>Лекции</MenuItem>
                <MenuItem value={2}>Практика</MenuItem>
                <MenuItem value={3}>Проверка работ</MenuItem>
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
                <InputLabel>Исполнитель</InputLabel>
                <Select
                    value={selectedType}
                    onChange={(event: SelectChangeEvent) => {setSelectedType(event.target.value as string)}}
                    input={<OutlinedInput label="Исполнитель" />}
                >
                    <MenuItem value="">
                    <em>Оставить пустым</em>
                    </MenuItem>
                    <MenuItem value={1}>Иван Иванов</MenuItem>
                    <MenuItem value={2}>Иван2 Иванов</MenuItem>
                    <MenuItem value={3}>Иван3 Иванов</MenuItem>
                </Select>
                </FormControl>
            <TextField sx={{width:'100%'}} label="Описание задачи" multiline variant="standard" />
            <Button variant="contained" size="medium" onClick={() => navigate(-1)}>Создать</Button>
        </Stack>
        </Paper>
        </>
    )
}