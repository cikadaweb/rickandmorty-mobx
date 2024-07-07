import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import CharactersFilter from "../../components/CharactersFilter";
import { Grid, Box, CircularProgress } from "@mui/material";
import CharactersList from "../../components/CharactersList";
import charactersStore from "../../stores/CharactersStore";

const MainPage = observer(() => {
    const { isLoading, characters, fetchCharacters } = charactersStore;

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CharactersFilter />

            {isLoading ? (
                <Grid container justifyContent="center">
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                </Grid>
            ) : (
                <CharactersList items={characters} />
            )}
        </Box>
    );
});

export default MainPage;