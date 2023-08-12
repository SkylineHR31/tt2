import { Grid } from '@mui/material';
// import logo from '../assets/images/cybellum-logo-vertical-black.svg';
import Styled from './styled';
import imac from "../../assets/images/imac_dig_twins.png";

function HomePage() {
  return (
    // <Styled.Box>
    //   <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
    //     <CardContent>
    //       <Styled.CardMedia component="img" alt="Cybellum" image={logo} />
    //       <Typography gutterBottom variant="h5" component="div" sx={{ mt: 4 }}>
    //         Cybellum Exercise
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Please read README.md and follow the instructions there
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </Styled.Box>
    <Grid container spacing={4} position="relative" minHeight="900px" overflow="hidden">
        <Grid item xs={12}>
            <Styled.Image src={imac} alt="imac" />
        </Grid>
    </Grid>
  );
}

export default HomePage;
