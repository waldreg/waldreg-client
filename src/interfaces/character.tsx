export interface IPermission {
  permissions: [
    {
      permission_id: number;
      permission_name: string;
      permission_status: boolean;
    }
  ];
}

export interface ICharacters {
  id: number;
  character_name: string;
}

export interface ICharacter {
  character_name: string;
  permissions: IPermission;
}
