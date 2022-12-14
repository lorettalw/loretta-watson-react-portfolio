import React from 'react';
import PortfolioItem from './portfolio-item';

const PortfolioSidebarList = (props) => {
  const PortfolioList = props.data.map(portfolioItem => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
            <img src={portfolioItem.thumb_image_url} />
        </div>
        <h1 className="title">{portfolioItem.name}</h1>
        <h2>{portfolioItem.id}</h2>
      </div>  
    );
  });

    return <div className="portfolio-sidebar-list-wrapper">{PortfolioList}</div>;
};


export default PortfolioSidebarList;