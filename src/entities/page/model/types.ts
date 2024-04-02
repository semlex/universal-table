import { IEntity } from '@/shared/model';

export interface IPage extends IEntity {
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
}
