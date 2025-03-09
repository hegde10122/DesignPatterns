//step 1: flyweight interface
export interface MarkerPoint {
  icon: string;
  color: string;
  display(x: number, y: number): void;
}
