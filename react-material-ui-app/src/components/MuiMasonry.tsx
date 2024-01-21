import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Masonry } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";

const heights = [150, 200, 90, 30, 70, 110, 130, 80, 50, 90, 100, 30, 50, 80];

const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   height,
              border: "1px solid",
            }}
          >
            <Accordion sx={{minHeight: height}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
            </Accordion>
            
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
