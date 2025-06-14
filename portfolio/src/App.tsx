import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Sidebar from './components/Sidebar';
import ArticleCard from './components/ArticleCard';
import ExperienceCard from './components/ExperienceCard';
import { articles } from './data/articles';
import { experiences } from './data/experience';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid item={true} xs={12} md={4}>
            <Sidebar />
          </Grid>

          {/* Main Content */}
          <Grid item={true} xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Experience
            </Typography>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Articles
            </Typography>
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
