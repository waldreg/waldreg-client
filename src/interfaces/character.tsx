export interface IPermission {
  permissions: [
    {
      permission_name: string;
      permission_status: boolean;
    }
  ];
}

export interface ICharacter {
  character_name: string;
  permissions: IPermission;
}
