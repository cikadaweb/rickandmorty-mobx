import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import CharactersFilter from "../../components/CharactersFilter";
import { Grid, Box, CircularProgress } from "@mui/material";
import CharactersList from "../../components/CharactersList";
import {useStores} from "../../stores/RootStore/RootStoreContext.ts";

const MainPage = observer(() => {
    const { characters } = useStores();

    useEffect(() => {
        characters.fetchCharacters();
    }, [characters.fetchCharacters]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CharactersFilter />

            {characters.isLoading ? (
                <Grid container justifyContent="center">
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                </Grid>
            ) : (
                <CharactersList items={characters.characters} />
            )}
        </Box>
    );
});

export default MainPage;