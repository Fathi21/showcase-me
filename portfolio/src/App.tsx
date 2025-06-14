import { AppBar, Toolbar, Typography, Button, Container, CssBaseline, Grid, Box } from '@mui/material';

import Sidebar from './components/Sidebar';
import ArticleCard from './components/ArticleCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';

import { articles } from './data/articles';
import { experiences } from './data/experience';
import { projects } from './data/projects';

function App() {
  return (
    <>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Experience Section */}
            <Box sx={{ mb: 5 }}>
              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </Box>

            {/* Projects Section */}
            <Box sx={{ mb: 5 }}>
              <Typography variant="h5" gutterBottom>
                Projects
              </Typography>
              {projects.map((proj, index) => (
                <ProjectCard key={index} {...proj} />
              ))}
            </Box>

            {/* Articles Section */}
            <Box>
              <Typography variant="h5" gutterBottom>
                Articles
              </Typography>
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
