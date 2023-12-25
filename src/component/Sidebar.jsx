import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";

const iconMap = {
  Users: <PersonIcon />,
  Inbox: <InboxIcon />,
  Dashboard: <DashboardIcon />,
  Analytics: <BarChartIcon />,
  Settings: <SettingsIcon />,
};

const listItems = ["Users", "Inbox", "Dashboard", "Analytics", "Settings"];

const Sidebar = () => {
  return (
    <List>
      {listItems.map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{iconMap[text]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;