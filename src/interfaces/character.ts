export interface IPermission {
  permission_id: number;
  permission_name: string;
  permission_status: string;
}

export interface ICharacters {
  id: number;
  character_name: string;
}

export interface ICharacter {
  id: number;
  character_name: string;
  permissions?: IPermission[];
}
