import { Avatar, Box, Button, Typography } from '@mui/material';

const Sidebar = () => (
  <Box sx={{ width: '100%', p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
    <Avatar
      alt="Ahmed"
      src="/profile.jpg"
      sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
    />
    <Typography align="center" variant="h6">Ahmed</Typography>
    <Typography align="center" variant="body2" color="text.secondary">
      Software Developer | React | Node.js
    </Typography>
    <Button
      variant="outlined"
      fullWidth
      href="/cv.pdf"
      sx={{ mt: 2 }}
    >
      Download Resume
    </Button>
  </Box>
);
export default Sidebar;
