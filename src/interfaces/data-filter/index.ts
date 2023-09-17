import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DataFilterInterface {
  id?: string;
  filter_name: string;
  filter_type: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DataFilterGetQueryInterface extends GetQueryInterface {
  id?: string;
  filter_name?: string;
  filter_type?: string;
  user_id?: string;
}
