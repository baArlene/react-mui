import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell align="center">Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                tableData.map((row) => (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child- th': {border:0 }}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Avictor",
    last_name: "Klemmt",
    email: "aklemmt0@cloudflare.com",
    gender: "Male",
    ip_address: "138.223.110.19",
  },
  {
    id: 2,
    first_name: "De witt",
    last_name: "Eloy",
    email: "deloy1@cargocollective.com",
    gender: "Male",
    ip_address: "145.140.174.58",
  },
  {
    id: 3,
    first_name: "Ermentrude",
    last_name: "Moles",
    email: "emoles2@a8.net",
    gender: "Female",
    ip_address: "139.146.50.175",
  },
  {
    id: 4,
    first_name: "Trevar",
    last_name: "Sollon",
    email: "tsollon3@aboutads.info",
    gender: "Male",
    ip_address: "147.125.79.45",
  },
  {
    id: 5,
    first_name: "Claybourne",
    last_name: "Farragher",
    email: "cfarragher4@newsvine.com",
    gender: "Male",
    ip_address: "249.9.79.103",
  },
  {
    id: 6,
    first_name: "Cherri",
    last_name: "Bottlestone",
    email: "cbottlestone5@europa.eu",
    gender: "Female",
    ip_address: "137.100.80.153",
  },
  {
    id: 7,
    first_name: "Ewan",
    last_name: "Romaint",
    email: "eromaint6@jiathis.com",
    gender: "Male",
    ip_address: "2.153.144.72",
  },
  {
    id: 8,
    first_name: "Menard",
    last_name: "Gerred",
    email: "mgerred7@rakuten.co.jp",
    gender: "Male",
    ip_address: "34.53.97.43",
  },
  {
    id: 9,
    first_name: "Jacquetta",
    last_name: "Childes",
    email: "jchildes8@loc.gov",
    gender: "Female",
    ip_address: "141.55.22.32",
  },
  {
    id: 10,
    first_name: "Hailee",
    last_name: "Searight",
    email: "hsearight9@histats.com",
    gender: "Female",
    ip_address: "42.128.145.115",
  },
];

export default MuiTable;
