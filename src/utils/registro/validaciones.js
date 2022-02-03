export const validaciones = (nombre, email, password, confPassword) => {
  const expRegPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/
  const resultPassword = expRegPassword.test(password)

  const expRegEmail = new RegExp('^[^@]+@[^@]+\\.[a-zA-Z]{2,50}$')
  const resultEmail = expRegEmail.test(email)

  const expRegNombre = /^[A-Za-z0-9\s]+$/g
  const resultNombre = expRegNombre.test(nombre)

  if (!resultNombre) {
    return 'El nombre debe contar con letras y/o carácteres numéricos solamente y debe tener como máximo 50 carácteres'
  }

  if (!resultEmail) {
    return 'El email debe tener la siguiente estructura: correo@email.com'
  }

  if (!resultPassword) {
    return 'La contraseña debe contener minimo 1 MAYUS, 1 MINUS y 1 caracter especial, MIN 6 caracteres y MAX 20 en total'
  }

  if (password !== confPassword) {
    return 'Las contraseñas deben coincidir'
  }

  return true
}
