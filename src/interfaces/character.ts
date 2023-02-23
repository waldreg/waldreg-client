export interface Permission {
  permission_id: number;
  permission_name: string;
  permission_service: string;
  permission_info: string;
  permission_status: string;
}

export interface Characters {
  id: number;
  character_name: string;
}

export interface Character {
  id: number;
  character_name: string;
  permissions?: Permission[];
}
