export interface IOption {
  label: string;
  value: string;
}

export interface IFilter<T> {
  key: keyof T;
  label: string;
  options: IOption[];
}

export type FilterValue<T> = {
  [key in keyof T]?: string;
};
