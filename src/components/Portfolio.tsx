import React from 'react';
import PortfolioCard from './PortfolioCard';

interface PortfolioProps {
  portfolioData: {
    id: number;
    title: string;
    description: string;
    role: string;
    image: string;
  }[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioData }) => {
  return (
    <div>
      {portfolioData.map((data) => (
        <PortfolioCard 
          key={data.id} 
          title={data.title} 
          description={data.description} 
          role={data.role} 
          image={data.image} />
      ))}
    </div>
  );
};

export default Portfolio;
