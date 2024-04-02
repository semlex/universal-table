import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Container>
            <Stack direction="row" spacing={3}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6">Products</Typography>
              </Link>
              <Link to="/price-plans" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6">Price plans</Typography>
              </Link>
              <Link to="/pages" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6">Pages</Typography>
              </Link>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ mt: '80px' }}>
          <Outlet />
        </Container>
      </main>
    </Box>
  );
};

export default BaseLayout;
