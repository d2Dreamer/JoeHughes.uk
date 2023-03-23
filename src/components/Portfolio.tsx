import { Grid } from '@mui/material';

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
  return (
    <Grid container spacing={2}>
      {experience.map(({ title, description, role }) => (
        <Grid item xs={12} sm={6} md={4} key={title}>
          <PortfolioCard title={title} description={description} role={role} />
        </Grid>
      ))}
    </Grid>
  );
}
