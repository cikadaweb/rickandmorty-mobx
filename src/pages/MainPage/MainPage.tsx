import {useEffect, useState} from "react";

import CharactersFilter from "../../components/CharactersFilter";
import {ICharacter} from "../../types/character.ts";

import {Grid, Box, CircularProgress} from "@mui/material";
import {getAllCharacters} from "../../services";
import CharactersList from "../../components/CharactersList";

const MainPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setTimeout(async () => {
                    const data = await getAllCharacters();
                    setCharacters(data.results);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <Box sx={{ flexGrow: 1 }}>

            <CharactersFilter/>

            {loading
                ? (
                    <>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <CircularProgress />
                            </Grid>
                        </Grid>
                    </>
                )
                : <CharactersList items={characters}/>
            }
        </Box>
    );
}

export default MainPage;