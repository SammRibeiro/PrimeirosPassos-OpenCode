export function validateName(value) {
  return value.trim().length >= 2
    ? ""
    : "Digite um nome com pelo menos 2 caracteres.";
}
export function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ? ""
    : "Digite um e-mail válido.";
}
export function validateWaitlist(values) {
  return {
    name: validateName(values.name),
    email: validateEmail(values.email),
  };
}
