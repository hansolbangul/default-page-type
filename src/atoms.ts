// react state 관리 라이브러리 recoil
// isDarkAtom 이란 state를 생성 키는 isDark 로 받아야 하며 값은 false

// recoil의 값을 받아올 땐 useRecoilValue(isDarkAtom)
// recoil의 값을 수정할땐 useSetRecoilState(isDarkAtom) 로 function 을 호출해서 사용

import { atom } from 'recoil';

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});
