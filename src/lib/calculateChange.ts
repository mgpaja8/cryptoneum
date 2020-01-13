export function calculateChange(newPrice: number, oldPrice: number): number {
  return 100 * (newPrice - oldPrice) / oldPrice;
}
