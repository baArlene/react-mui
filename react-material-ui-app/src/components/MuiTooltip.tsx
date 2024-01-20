import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const MuiTooltip = () => {
  return (
    <Tooltip title="Edit" placement="right" arrow enterDelay={500} leaveDelay={200}>
      <IconButton>
        <EditIcon color="success" />
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;
