const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const checkEmail = (email: string):boolean => regexEmail.test(email);
export const checkPassword = (password:string):boolean => password.length >= 6;
export const checkConfirmPassword = (password:string,repeatPassword:string) => repeatPassword === password;