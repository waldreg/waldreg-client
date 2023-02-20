import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface UseInput {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  reset: MouseEventHandler<HTMLDivElement> | undefined;
}
