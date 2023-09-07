import React from 'react';

interface TitleDataNotLoadedProps {
  children: React.ReactNode;
}

const TitleDataNotLoaded: React.FC<TitleDataNotLoadedProps> = ({
  children,
}) => {
  return <h1 className="mb-3">{children}</h1>;
};

export default TitleDataNotLoaded;
