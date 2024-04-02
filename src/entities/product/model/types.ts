import { IEntity } from '@/shared/model';

interface IOption {
  size: string;
  amount: number;
}

export interface IProduct extends IEntity {
  name: string;
  options: IOption;
  active: boolean;
  createdAt: string;
}
