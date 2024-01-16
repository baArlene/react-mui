import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">H1 Heading</Typography>
        <Typography variant="h2">H2 Heading</Typography>
        <Typography variant="h3">H3 Heading</Typography>
        <Typography variant="h4"component='h1' gutterBottom>H4 Heading</Typography>
        <Typography variant="h5">H5 Heading</Typography>
        <Typography variant="h6">H6 Heading</Typography>

        <Typography variant="subtitle1">Sub Title 1</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>

        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt temporibus aperiam labore voluptate perspiciatis? Ipsam voluptatem harum quam laudantium reprehenderit.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero corrupti maiores ducimus, sapiente ipsam culpa.</Typography>

    </div>
  )
}

export default MuiTypography