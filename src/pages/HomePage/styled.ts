import GridMui from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import homePageBcg from '../../assets/images/imac_dig_twins.png';

const Grid = styled(GridMui)(() => ({
    backgroundImage: `url(${homePageBcg})`,
    minHeight: "934px",
    backgroundPositionX: "1752px"
}));

const Image = styled('img')(() => ({
    position: "absolute",
    right: "-232px",
    minHeight: "934px",
    width: "100%",
    maxWidth: "1237px",
    objectFit: "contain"
}));

export default {
  Grid,
  Image
};
