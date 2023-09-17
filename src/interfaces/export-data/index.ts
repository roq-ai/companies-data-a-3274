import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExportDataInterface {
  id?: string;
  export_name: string;
  export_type: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ExportDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  export_name?: string;
  export_type?: string;
  user_id?: string;
}
