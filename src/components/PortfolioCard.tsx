import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface PortfolioCardProps {
  title: string;
  description: string;
  role: string;
  image: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  role,
  image,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
