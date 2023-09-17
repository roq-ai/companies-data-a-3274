import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GraphicInterface {
  id?: string;
  graphic_name: string;
  graphic_type: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface GraphicGetQueryInterface extends GetQueryInterface {
  id?: string;
  graphic_name?: string;
  graphic_type?: string;
  user_id?: string;
}
