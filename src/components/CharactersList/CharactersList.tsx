import { ICharacter } from "../../types/character";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from "react-router-dom";
interface ICharactersListProps {
    items: ICharacter[];
}

const CharactersList = ({ items }: ICharactersListProps) => {
    return (
        <Grid container spacing={2}>
            {items.map((character) => (
                <Grid item xs={6} key={character.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="300"
                            image={character.image}
                            title={character.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {character.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {character.species} - {character.status}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Grid container justifyContent="space-between">
                                <Grid item>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Link to={`/character/${character.id}`}><Button size="small">Подробнее</Button></Link>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default CharactersList;