import { IEntity } from '@/shared/model';

export interface IPricePlan extends IEntity {
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
}
