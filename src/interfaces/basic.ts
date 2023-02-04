import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IUseInput {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  reset: MouseEventHandler<HTMLDivElement> | undefined;
}
