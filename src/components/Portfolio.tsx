import { Box, Typography } from '@mui/material';
import PortfolioCard from './PortfolioCard';

type PortfolioProps = {
  title: string;
  projects: {
    id: number;
    title: string;
    description: string;
    image: string;
    role: string;
  }[];
};

export const Portfolio = ({ title, projects }: PortfolioProps) => {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'grid', gap: 4 }}>
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            role={project.role}
          />
        ))}
      </Box>
    </Box>
  );
};
