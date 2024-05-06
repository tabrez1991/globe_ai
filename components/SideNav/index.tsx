import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';

export default function SideNav(props: any) {
  const { open, handleNav } = props;

  const router = useRouter();

  const menu = [
    {
      id: 0,
      name: 'Home',
      link: "/"
    }, {
      id: 1,
      name: 'Health',
      link: "/health"
    }]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleNav}>
      <List>
        {menu.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton onClick={() => router.push(text.link)}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={handleNav} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}