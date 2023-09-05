import dynamic from 'next/dynamic';

export const renderCheckoutButton = (preferenceId: string) => {
  if (!preferenceId) return null;
  const Wallet = dynamic(
    () => import('@mercadopago/sdk-react').then((module) => module.Wallet),
    {
      ssr: false,
    },
  );

  return <Wallet initialization={{ preferenceId: preferenceId }} />;
};
