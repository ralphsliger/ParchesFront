export const validaciones = (nombre, email, password, confPassword) => {
  const expRegPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)\-\+\;\~\,\}\{\[\]\^\>\<\/\=$-$_])[A-Za-z\d$@$!%*?&#.$($)\/\=\<\>\^\[\]\{\}\,\~\+\-\;$-$_]{6,20}$/
  const resultPassword = expRegPassword.test(password)

  const expRegEmail = new RegExp('^[^@]+@[^@]+\\.[a-zA-Z]{2,50}$')
  const resultEmail = expRegEmail.test(email)

  const expRegNombre = /^[A-Za-z0-9À-ÿ\s\u00f1\u00d1\u00E0-\u00FC]+$/g;
  const resultNombre = expRegNombre.test(nombre)

  if (!resultNombre) {
    return 'El nombre debe contar con letras y/o carácteres numéricos solamente y debe tener como máximo 50 carácteres'
  }

  if (!resultEmail) {
    return 'El email debe tener la siguiente estructura: correo@email.com'
  }

  if (!resultPassword){
    return 'La contraseña debe contener minimo 1 MAYUS, 1 MINUS, 1 caracter especial al INICIO o al FINAL, 1 NUM, MIN 6 caracteres y MAX 20 en total'
  }

  if (password !== confPassword) {
    return 'Las contraseñas deben coincidir'
  }

  return true
}
