import React from 'react';

interface ContentDataNotLoadedProps {
  children: React.ReactNode;
}

const ContentDataNotLoaded: React.FC<ContentDataNotLoadedProps> = ({
  children,
}) => {
  return <p className="col-lg-5 col-12">{children}</p>;
};

export default ContentDataNotLoaded;
