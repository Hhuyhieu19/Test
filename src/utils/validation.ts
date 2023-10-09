import { selector } from 'recoil';

export const validationFunctions = selector({
  key: 'validationFunctions',
  get: () => ({
    isValidPhone: (phone: string) => {
      const regex = /^\d{10}$/;
      return regex.test(phone);
    },
    isValidEmail: (email: string) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
    }
  })
});
