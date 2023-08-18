import React from 'react';

type HttpCallProps<T> = {
  url: string;
  options?: RequestInit;
  children: (data: T | null, error: Error | null) => React.ReactNode;
};

const HttpCall = <T,>({ url, options, children }: HttpCallProps<T>) => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err));
  }, [url, options]);

  return <>{children(data, error)}</>;
};

export default HttpCall;
