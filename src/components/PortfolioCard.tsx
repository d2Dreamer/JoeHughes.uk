import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HoverCard = styled(Card)({
  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
    transform: 'translateY(-5px)',
  },
});

interface CardProps {
  title: string;
  description: string;
  role: string;
}

export default function PortfolioCard({ title, description, role }: CardProps) {
  return (
    <HoverCard>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {description}
        </Typography>
        <Typography variant="caption" component="p" color="textSecondary">
          {role}
        </Typography>
      </CardContent>
    </HoverCard>
  );
}
