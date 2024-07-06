import {useState} from 'react';
import {
    FormControl,
    Grid, Input,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";

const CharactersFilter = () => {
    const [age, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <>
            <Grid container sx={{ mb: 3 }} spacing={2} justifyContent="flex-end">
                <Grid item xs="auto">
                    <FormControl variant="standard">
                        <InputLabel htmlFor="characterName">Поиск героя по имени:</InputLabel>
                        <Input id="characterName" />
                    </FormControl>
                </Grid>
                <Grid item xs="auto">
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
};

export default CharactersFilter;