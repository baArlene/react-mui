import { Link, Stack } from "@mui/material"


const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Primary</Link>
        <Link href='#' color='secondary'underline="hover">Secondary</Link>
    </Stack>
  )
}

export default MuiLink