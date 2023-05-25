export {};

declare global {
  interface Window {
    myNamespace: any,
    logger: (message?: any, ...optionalParams: any[]) => void
  }
}