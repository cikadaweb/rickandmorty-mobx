import {Link, useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCharacterById} from "../../services";
import {ICharacter} from "../../types/character.ts";
import {
    Breadcrumbs,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";

const CharacterPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [loading, setLoading] = useState<boolean>(false);
    const [character, setCharacter] = useState<ICharacter>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setTimeout(async () => {
                    if(id) {
                        const data = await getCharacterById(id);
                        setCharacter(data);
                    }
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="{/}">
                    The Rick and Morty
                </Link>
                <Link color="inherit" to="{/}">
                    Characters
                </Link>
                <Typography color="text.primary">{character?.name}</Typography>
            </Breadcrumbs>

            {loading
                ? (
                    <Grid container justifyContent="center">
                        <Grid item>
                            <CircularProgress />
                        </Grid>
                    </Grid>
                )
                : (
                    <Paper>
                        <Card sx={{ minWidth: 275, mt: 3 }}>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={character?.image}
                                    title={character?.name}
                                />
                                <TableContainer component={Paper} sx={{ mt: 3 }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>ID</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell>Species</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Gender</TableCell>
                                                <TableCell>Origin</TableCell>
                                                <TableCell>Location</TableCell>
                                                <TableCell>Created</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>{character?.id}</TableCell>
                                                <TableCell>{character?.name}</TableCell>
                                                <TableCell>{character?.status}</TableCell>
                                                <TableCell>{character?.species}</TableCell>
                                                <TableCell>{character?.type}</TableCell>
                                                <TableCell>{character?.gender}</TableCell>
                                                <TableCell>{character?.origin.name}</TableCell>
                                                <TableCell>{character?.location.name}</TableCell>
                                                <TableCell>{character?.created}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => navigate(`/`)}>Назад на главную</Button>
                            </CardActions>
                        </Card>
                    </Paper>
                )
            }
        </>
    );
}

export default CharacterPage;