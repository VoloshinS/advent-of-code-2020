export interface IBagInfo {
  color: string;
  bagsCount: number;
}

export interface IBag {
  [color: string]: (IBagInfo | null)[]
}
