import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type PortfolioCardProps = {
  title: string;
  description: string;
};

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.spacing(1),
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const PortfolioCard = ({ title, description }: PortfolioCardProps) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default PortfolioCard;
