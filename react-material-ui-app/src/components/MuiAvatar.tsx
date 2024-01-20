import { Avatar, AvatarGroup, Stack } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <AvatarGroup>
          <Avatar sx={{ bgcolor: "primary.light" }}>CC</Avatar>
          <Avatar sx={{ bgcolor: "secondary.light" }}>AC</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>MC</Avatar>
          <Avatar sx={{ bgcolor: "secondary.light" }}>LC</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/lego/3.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/91.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt="John Doe"
          />
          <Avatar sx={{ bgcolor: "secondary.light" }}>LC</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
          <Avatar variant="rounded" sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>CC</Avatar>
          <Avatar variant="rounded" sx={{ bgcolor: "secondary.light", width: 48, height: 48 }}>AC</Avatar>
          <Avatar variant="rounded" sx={{ bgcolor: "success.light", width: 48, height: 48 }}>MC</Avatar>
          <Avatar variant="rounded" sx={{ bgcolor: "warning.light", width: 48, height: 48 }}>LC</Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
