export interface Currency {
  id: number;
  name: string;
  symbol: string;
  rank: number;
  selected: boolean;
  marketCap?: number;
  price?: number;
  updatedAt: number;
}
