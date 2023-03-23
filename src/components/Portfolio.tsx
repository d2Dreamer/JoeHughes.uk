import { useState } from 'react';
import { Grid, Typography } from '@mui/material';

import PortfolioCard from './PortfolioCard';

const experience = [
  {
    title: 'Acme Inc.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'Full Stack Developer',
  },
  {
    title: 'XYZ Corp.',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    role: 'Frontend Developer',
  },
];

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardHover = (title: string) => {
    setHoveredCard(title);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Grid container spacing={2}>
      {experience.map(({ title, description, role }) => (
      <Grid item xs={12} sm={6} md={4} key={title}>
        <div onMouseEnter={() => handleCardHover(title)} onMouseLeave={handleCardLeave}>
            <PortfolioCard title={title} description={description} />
            {hoveredCard === title && (
                <Typography variant="caption" component="p" color="textSecondary">
                    {role}
                </Typography>
            )}
        </div>
  </Grid>
))}
    </Grid>
  );
}