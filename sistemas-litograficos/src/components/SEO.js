import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Sistemas Litográficos` : 'Sistemas Litográficos'}</title>
      <meta name="description" content={description || "Servicios profesionales de impresión y litografía para todas tus necesidades de comunicación visual."} />
    </Helmet>
  );
};

export default SEO;
