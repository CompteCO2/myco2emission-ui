export interface EmmisionStore {
  emission: number;

  calculate(props: Record<string, unknown>): void;
}
