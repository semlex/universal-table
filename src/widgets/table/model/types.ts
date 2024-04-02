import { ReactElement } from 'react';

export interface IColumn<T> {
  key: keyof T;
  header: string;
  widthPercent?: number;
  onRender?: (item: T) => ReactElement;
}
