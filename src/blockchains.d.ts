declare module '@storage/blockchains' {
  interface Blockchain {
    id: string;
    name: string;
    symbol: string;
    decimals: number;
    node: string;
    slip: number;
    scriptType: string;
    messagePrefix: string;
    pubKeyHash: string;
    scriptHash: string;
    wif: string;
    logo: string;
  }
  type blockchains = Record<string, Blockchain>;
  let blockchains: blockchains;
}
