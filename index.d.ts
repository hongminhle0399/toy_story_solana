export {};

declare global {
  interface Window {
    // injected phantom variable from phantom wallet
    phantom: any;
  }
}
