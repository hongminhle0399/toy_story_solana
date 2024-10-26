export const getProvider = () => {
  const provider = window.phantom?.solana;
  if (!provider || !provider?.isPhantom) return null;
  return provider;
};
