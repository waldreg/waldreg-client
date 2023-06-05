export type CharErrorCode =
  | 'CHARACTER-403'
  | 'CHARACTER-410'
  | 'CHARACTER-411'
  | 'CHARACTER-412'
  | 'CHARACTER-413'
  | 'CHARACTER-414'
  | 'CHARACTER-415'
  | 'CHARACTER-416'
  | 'CHARACTER-417'
  | 'CHARACTER-418'
  | 'CHARACTER-420'
  | 'CHARACTER-421';

export const CharErrorMessage = {
  'CHARACTER-403': '접근 권한이 없어요!',
  'CHARACTER-410': '해당 권한이 없어요!',
  'CHARACTER-411': '잠시 뒤에 다시 시도해주세요',
  'CHARACTER-412': '이미 있는 역할 이름이에요!',
  'CHARACTER-413': '역할 이름을 입력해 주세요',
  'CHARACTER-414': '역할에 부여할 권한을 선택해주세요',
  'CHARACTER-415': '다시 시도해 주세요',
  'CHARACTER-416': '권한 이름을 입력해 주세요',
  'CHARACTER-417': '다시 시도해 주세요',
  'CHARACTER-418': '역할 이름은 최대 25자에요!',
  'CHARACTER-420': '해당 이름의 역할이 없어요',
  'CHARACTER-421': '다시 시도해 주세요',
};
