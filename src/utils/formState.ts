import { atom } from 'recoil';

export const formDataState = atom({
  key: 'formDataState',
  default: {
    name: "",
    phone: "",
    email: "",
    note: "",
  },
});
