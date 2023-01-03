import React from 'react';
import Head from 'next/head';

export const MetaHead: React.FC<Props> = ({ title = "Lendsqr" }) => {
  
  const titleString = `${title || "Lendsqr"}`;
  
  const description = `Our Lending-as-a-Service solution powers lenders to launch in the shortest possible time, and scale their digital 
  lending business across multiple channels, at the lowest cost.`;

  const link = 'http://lendsqr.com';
  
  const logo = 'https://res.cloudinary.com/dsrsn7qj5/image/upload/v1672309672/lendsqr/android-chrome-512x512_bcvgix.png';

  const seoAttributes = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lensdqr Digital Bank ",
    "url": "http://www.lendsqr.com",
    "sameAs": ["http://www.facebook.com/lendsqr", "http://www.twitter.com/lendsqr"],

    "logo": "https://res.cloudinary.com/dsrsn7qj5/image/upload/v1672309672/lendsqr/android-chrome-512x512_bcvgix.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "*********",
      "contactType": "customer service"
    }
  }`;

  return (
    <>
      <Head>
        <title>{titleString}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={link} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logo} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={link} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={logo} />
      </Head>

      <link href={'/fonts/style.css'} rel="stylesheet" />

      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />

      <script>
        {process.env.NEXT_PUBLIC_NODE_ENV !== 'development'
          ? 'window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}'
          : ''}
      </script>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoAttributes }} />

    </>
  );
};

interface Props {

  title?: string

};
