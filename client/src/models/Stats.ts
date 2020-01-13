export interface Stats {
  id: number;
  current: StatItem;
  5: StatItem;
  10: StatItem;
  15: StatItem;
  20: StatItem;
  25: StatItem;
  30: StatItem;
}

export interface StatItem {
  available: boolean;
  change?: number;
  price?: number;
}
