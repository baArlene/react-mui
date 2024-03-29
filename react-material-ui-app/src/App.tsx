import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import AdapterDatefns from '@mui/lab/AdapterDateFns'
// import MuiAlert from './components/MuiAlert';
import MuiBadge from "./components/MuiBadge";
import MuiMasonry from "./components/MuiMasonry";
import MuiResponsiveness from "./components/MuiResponsiveness";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";
// import MuiChip from './components/MuiChip';
// import MuiDialog from './components/MuiDialog';
// import MuiList from './components/MuiList';
//import MuiLoadingButton from './components/MuiLoadingButton';
// import MuiPicker from './components/MuiPicker';
// import MuiProgress from './components/MuiProgress';
// import MuiSkeleton from './components/MuiSkeleton';
// import MuiSnackbar from './components/MuiSnackbar';
// import MuiTable from './components/MuiTable';
// import MuiTooltip from './components/MuiTooltip';
// import MuiAvatar from './components/MuiAvatar';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiDrawer from './components/MuiDrawer';
// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiLink from './components/MuiLink';
// import MuiImageList from './components/MuiImageList';
// import MuiNavbar from './components/MuiNavbar';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiAccordion from './components/MuiAccordion';
// import MuiCard from './components/MuiCard';
// import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiLayout from './components/MuiLayout';
// import MuiRating from './components/MuiRating';
// import MuiSwitch from './components/MuiSwitch';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiSelect from './components/MuiSelect';
// import MuiTextField from './components/MuiTextField';
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*<MuiTypography />*/}
        {/*<MuiButton />*/}
        {/*<MuiTextField /> */}
        {/*<MuiSelect />*/}
        {/*<MuiRadioButton />*/}
        {/*<MuiCheckbox />*/}
        {/*<MuiSwitch />*/}
        {/*<MuiRating />*/}
        {/*<MuiAutocomplete />*/}
        {/*<MuiLayout />*/}
        {/*<MuiCard />*/}
        {/*<MuiAccordion />*/}
        {/*<MuiImageList />*/}
        {/*<MuiNavbar />*/}
        {/*<MuiLink />*/}
        {/*<MuiBreadcrumbs />*/}
        {/*<MuiDrawer />*/}
        {/*<MuiSpeedDial />*/}
        {/*<MuiBottomNavigation />*/}
        {/*<MuiAvatar />*/}
        <MuiBadge />
        {/*<MuiList />*/}
        {/*<MuiChip />*/}
        {/*<MuiTooltip />*/}
        {/*<MuiTable />*/}
        {/*<MuiAlert />*/}
        {/*<MuiSnackbar />*/}
        {/*<MuiDialog />*/}
        {/*<MuiProgress />*/}
        {/*<MuiSkeleton />*/}
        {/*<MuiLoadingButton />*/}
        {/*<MuiPicker />*/}
        <MuiTabs />
        <MuiTimeline />
        <MuiMasonry />
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
