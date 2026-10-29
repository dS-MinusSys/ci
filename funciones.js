/*
 * ═══════════════════════════════════════════════════════════════
 *  PRÁCTICA DE PRUEBAS UNITARIAS CON VITEST
 *  26 funciones para probar
 * ═══════════════════════════════════════════════════════════════
 *
 *  Instrucciones:
 *  1. Crea el archivo funciones.test.js en esta misma carpeta.
 *  2. Escribe al menos un test por función.
 *  3. Prueba también los casos borde y los errores (throw).
 *  4. Corre "npm test" para ejecutar las pruebas.
 *  5. Corre "npm run coverage" y trata de llegar al 100%.
 *     Las líneas en rojo del reporte son las que te faltan probar.
 */

// ───────────────────────────────────────────────────────────────
// BLOQUE 1: NÚMEROS
// ───────────────────────────────────────────────────────────────

/**
 * 1. sumar(a, b)
 * Devuelve la suma de dos números.
 * Lanza un error si alguno de los valores no es un número.
 *   sumar(2, 3)   → 5
 *   sumar('2', 3) → Error: "Ambos valores deben ser números"
 */
export function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos valores deben ser números')
  }
  return a + b
}

/**
 * 2. dividir(a, b)
 * Devuelve el resultado de dividir a entre b.
 * Lanza un error si b es cero.
 *   dividir(10, 2) → 5
 *   dividir(5, 0)  → Error: "No se puede dividir entre cero"
 */
export function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero')
  }
  return a / b
}

/**
 * 3. esPar(numero)
 * Devuelve true si el número es par y false si es impar.
 * Lanza un error si el número no es entero.
 *   esPar(4)   → true
 *   esPar(7)   → false
 *   esPar(2.5) → Error: "El número debe ser entero"
 */
export function esPar(numero) {
  if (!Number.isInteger(numero)) {
    throw new Error('El número debe ser entero')
  }
  return numero % 2 === 0
}

/**
 * 4. signoNumero(numero)
 * Devuelve "positivo", "negativo" o "cero" según el número.
 *   signoNumero(5)  → "positivo"
 *   signoNumero(-3) → "negativo"
 *   signoNumero(0)  → "cero"
 */
export function signoNumero(numero) {
  if (numero > 0) {
    return 'positivo'
  }
  if (numero < 0) {
    return 'negativo'
  }
  return 'cero'
}

/**
 * 5. mayorDeArreglo(numeros)
 * Devuelve el número más grande de un arreglo.
 * Lanza un error si el arreglo está vacío.
 *   mayorDeArreglo([3, 9, 2]) → 9
 *   mayorDeArreglo([])        → Error: "El arreglo no puede estar vacío"
 */
export function mayorDeArreglo(numeros) {
  if (numeros.length === 0) {
    throw new Error('El arreglo no puede estar vacío')
  }
  let mayor = numeros[0]
  for (const n of numeros) {
    if (n > mayor) {
      mayor = n
    }
  }
  return mayor
}

/**
 * 6. promedio(numeros)
 * Devuelve el promedio de un arreglo de números.
 * Lanza un error si el arreglo está vacío.
 *   promedio([8, 9, 10]) → 9
 *   promedio([])         → Error: "El arreglo no puede estar vacío"
 */
export function promedio(numeros) {
  if (numeros.length === 0) {
    throw new Error('El arreglo no puede estar vacío')
  }
  let suma = 0
  for (const n of numeros) {
    suma += n
  }
  return suma / numeros.length
}

/**
 * 7. factorial(n)
 * Devuelve el factorial de n (n! = 1 × 2 × 3 × ... × n).
 * El factorial de 0 es 1.
 * Lanza un error si n es negativo o no es entero.
 *   factorial(5)  → 120
 *   factorial(0)  → 1
 *   factorial(-1) → Error: "El número debe ser un entero mayor o igual a cero"
 */
export function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('El número debe ser un entero mayor o igual a cero')
  }
  if (n === 0) {
    return 1
  }
  let resultado = 1
  for (let i = 1; i <= n; i++) {
    resultado *= i
  }
  return resultado
}

/**
 * 8. esPrimo(n)
 * Devuelve true si n es un número primo.
 * Los números menores que 2 no son primos.
 *   esPrimo(7) → true
 *   esPrimo(8) → false
 *   esPrimo(1) → false
 */
export function esPrimo(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

/**
 * 9. fizzBuzz(n)
 * Devuelve "FizzBuzz" si n es múltiplo de 3 y de 5,
 * "Fizz" si solo es múltiplo de 3, "Buzz" si solo es múltiplo de 5,
 * y en cualquier otro caso el número como texto.
 *   fizzBuzz(15) → "FizzBuzz"
 *   fizzBuzz(9)  → "Fizz"
 *   fizzBuzz(10) → "Buzz"
 *   fizzBuzz(7)  → "7"
 */
export function fizzBuzz(n) {
  if (n % 15 === 0) {
    return 'FizzBuzz'
  }
  if (n % 3 === 0) {
    return 'Fizz'
  }
  if (n % 5 === 0) {
    return 'Buzz'
  }
  return String(n)
}

// ───────────────────────────────────────────────────────────────
// BLOQUE 2: REGLAS DE NEGOCIO
// ───────────────────────────────────────────────────────────────

/**
 * 10. esMayorDeEdad(edad)
 * Devuelve true si la edad es 18 o más.
 * Lanza un error si la edad es negativa.
 *   esMayorDeEdad(18) → true
 *   esMayorDeEdad(17) → false
 *   esMayorDeEdad(-1) → Error: "La edad no puede ser negativa"
 */
export function esMayorDeEdad(edad) {
  if (edad < 0) {
    throw new Error('La edad no puede ser negativa')
  }
  return edad >= 18
}

/**
 * 11. clasificarEdad(edad)
 * Devuelve la etapa de vida según la edad:
 *   0 a 11  → "niño"
 *   12 a 17 → "adolescente"
 *   18 a 64 → "adulto"
 *   65 o más → "adulto mayor"
 * Lanza un error si la edad es negativa.
 */
export function clasificarEdad(edad) {
  if (edad < 0) {
    throw new Error('La edad no puede ser negativa')
  }
  if (edad < 12) {
    return 'niño'
  }
  if (edad < 18) {
    return 'adolescente'
  }
  if (edad < 65) {
    return 'adulto'
  }
  return 'adulto mayor'
}

/**
 * 12. calcularDescuento(precio, porcentaje)
 * Devuelve el precio final después de aplicar el descuento.
 * Lanza un error si el precio es negativo
 * o si el porcentaje no está entre 0 y 100.
 *   calcularDescuento(200, 10)  → 180
 *   calcularDescuento(-5, 10)   → Error: "El precio no puede ser negativo"
 *   calcularDescuento(200, 150) → Error: "El porcentaje debe estar entre 0 y 100"
 */
export function calcularDescuento(precio, porcentaje) {
  if (precio < 0) {
    throw new Error('El precio no puede ser negativo')
  }
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error('El porcentaje debe estar entre 0 y 100')
  }
  return precio - (precio * porcentaje) / 100
}

/**
 * 13. aplicarIVA(precio)
 * Devuelve el precio con el 16% de IVA incluido.
 * Lanza un error si el precio es negativo.
 *   aplicarIVA(100) → 116
 *   aplicarIVA(-1)  → Error: "El precio no puede ser negativo"
 * Pista: revisa qué pasa si usas toBe con el resultado.
 */
export function aplicarIVA(precio) {
  if (precio < 0) {
    throw new Error('El precio no puede ser negativo')
  }
  return precio * 1.16
}

/**
 * 14. calificacionTexto(calificacion)
 * Convierte una calificación de 0 a 10 en texto:
 *   9 a 10    → "Excelente"
 *   8 a 8.9   → "Muy bien"
 *   7 a 7.9   → "Bien"
 *   6 a 6.9   → "Suficiente"
 *   menos de 6 → "Reprobado"
 * Lanza un error si la calificación es menor que 0 o mayor que 10.
 */
export function calificacionTexto(calificacion) {
  if (calificacion < 0 || calificacion > 10) {
    throw new Error('La calificación debe estar entre 0 y 10')
  }
  if (calificacion >= 9) {
    return 'Excelente'
  }
  if (calificacion >= 8) {
    return 'Muy bien'
  }
  if (calificacion >= 7) {
    return 'Bien'
  }
  if (calificacion >= 6) {
    return 'Suficiente'
  }
  return 'Reprobado'
}

/**
 * 15. esBisiesto(anio)
 * Devuelve true si el año es bisiesto.
 * Regla: es bisiesto si es divisible entre 4,
 * excepto los divisibles entre 100, salvo que también lo sean entre 400.
 *   esBisiesto(2024) → true
 *   esBisiesto(1900) → false
 *   esBisiesto(2000) → true
 */
export function esBisiesto(anio) {
  if (anio % 400 === 0) {
    return true
  }
  if (anio % 100 === 0) {
    return false
  }
  if (anio % 4 === 0) {
    return true
  }
  return false
}

/**
 * 16. celsiusAFahrenheit(celsius)
 * Convierte grados Celsius a Fahrenheit (F = C × 9/5 + 32).
 * Lanza un error si la temperatura es menor al cero absoluto (-273.15 °C).
 *   celsiusAFahrenheit(0)    → 32
 *   celsiusAFahrenheit(100)  → 212
 *   celsiusAFahrenheit(-300) → Error: "Temperatura por debajo del cero absoluto"
 */
export function celsiusAFahrenheit(celsius) {
  if (celsius < -273.15) {
    throw new Error('Temperatura por debajo del cero absoluto')
  }
  return (celsius * 9) / 5 + 32
}

/**
 * 17. calcularIMC(peso, altura)
 * Devuelve el índice de masa corporal: peso / (altura × altura).
 * El peso va en kilogramos y la altura en metros.
 * Lanza un error si el peso o la altura son cero o negativos.
 *   calcularIMC(70, 1.75) → 22.86 (aproximadamente)
 *   calcularIMC(0, 1.75)  → Error: "El peso y la altura deben ser mayores a cero"
 */
export function calcularIMC(peso, altura) {
  if (peso <= 0 || altura <= 0) {
    throw new Error('El peso y la altura deben ser mayores a cero')
  }
  return peso / (altura * altura)
}

/**
 * 18. clasificarIMC(imc)
 * Devuelve la categoría del IMC:
 *   menos de 18.5   → "Bajo peso"
 *   18.5 a 24.9     → "Normal"
 *   25 a 29.9       → "Sobrepeso"
 *   30 o más        → "Obesidad"
 */
export function clasificarIMC(imc) {
  if (imc < 18.5) {
    return 'Bajo peso'
  }
  if (imc < 25) {
    return 'Normal'
  }
  if (imc < 30) {
    return 'Sobrepeso'
  }
  return 'Obesidad'
}

/**
 * 19. tipoTriangulo(a, b, c)
 * Devuelve el tipo de triángulo según sus lados:
 *   tres lados iguales → "equilátero"
 *   dos lados iguales  → "isósceles"
 *   ningún lado igual  → "escaleno"
 * Lanza un error si algún lado es cero o negativo,
 * o si los lados no pueden formar un triángulo
 * (la suma de dos lados debe ser mayor que el tercero).
 *   tipoTriangulo(3, 3, 3)  → "equilátero"
 *   tipoTriangulo(1, 2, 10) → Error: "Los lados no forman un triángulo"
 */
export function tipoTriangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Los lados deben ser mayores a cero')
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('Los lados no forman un triángulo')
  }
  if (a === b && b === c) {
    return 'equilátero'
  }
  if (a === b || b === c || a === c) {
    return 'isósceles'
  }
  return 'escaleno'
}

/**
 * 20. calcularTotalCarrito(productos)
 * Recibe un arreglo de productos { nombre, precio, cantidad }
 * y devuelve el total a pagar.
 * Si el total es mayor a $1000, se aplica un 10% de descuento.
 * Lanza un error si algún producto tiene cantidad cero o negativa.
 *   calcularTotalCarrito([{ nombre: 'Lápiz', precio: 10, cantidad: 3 }]) → 30
 *   calcularTotalCarrito([{ nombre: 'Mochila', precio: 600, cantidad: 2 }]) → 1080
 */
export function calcularTotalCarrito(productos) {
  let total = 0
  for (const producto of productos) {
    if (producto.cantidad <= 0) {
      throw new Error('La cantidad debe ser mayor a cero')
    }
    total += producto.precio * producto.cantidad
  }
  if (total > 1000) {
    total = total * 0.9
  }
  return total
}

// ───────────────────────────────────────────────────────────────
// BLOQUE 3: TEXTO
// ───────────────────────────────────────────────────────────────

/**
 * 21. contarVocales(texto)
 * Devuelve cuántas vocales tiene el texto.
 * Cuenta mayúsculas, minúsculas y vocales con acento.
 *   contarVocales('murciélago') → 5
 *   contarVocales('xyz')        → 0
 */
export function contarVocales(texto) {
  const vocales = 'aeiouáéíóú'
  let contador = 0
  for (const letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
      contador++
    }
  }
  return contador
}

/**
 * 22. invertirTexto(texto)
 * Devuelve el texto al revés.
 * Lanza un error si lo que recibe no es un texto.
 *   invertirTexto('hola') → "aloh"
 *   invertirTexto(123)    → Error: "Se esperaba un texto"
 */
export function invertirTexto(texto) {
  if (typeof texto !== 'string') {
    throw new Error('Se esperaba un texto')
  }
  return texto.split('').reverse().join('')
}

/**
 * 23. esPalindromo(texto)
 * Devuelve true si el texto se lee igual al derecho y al revés,
 * sin importar mayúsculas ni espacios.
 * Un texto vacío o con solo espacios NO se considera palíndromo.
 *   esPalindromo('oso')                → true
 *   esPalindromo('Anita lava la tina') → true
 *   esPalindromo('hola')               → false
 */
export function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replaceAll(' ', '')
  if (limpio.length === 0) {
    return false
  }
  return limpio === limpio.split('').reverse().join('')
}

/**
 * 24. capitalizar(texto)
 * Devuelve el texto con la primera letra en mayúscula
 * y el resto en minúsculas.
 *   capitalizar('hOLA') → "Hola"
 *   capitalizar('')     → ""
 */
export function capitalizar(texto) {
  if (texto === '') {
    return ''
  }
  return texto[0].toUpperCase() + texto.slice(1).toLowerCase()
}

/**
 * 25. contarPalabras(texto)
 * Devuelve cuántas palabras tiene el texto.
 * Ignora los espacios de más al inicio, al final y entre palabras.
 *   contarPalabras('hola mundo')       → 2
 *   contarPalabras('  hola    mundo ') → 2
 *   contarPalabras('')                 → 0
 */
export function contarPalabras(texto) {
  const limpio = texto.trim()
  if (limpio === '') {
    return 0
  }
  return limpio.split(/\s+/).length
}

/**
 * 26. validarPassword(password)
 * Devuelve true si la contraseña cumple TODAS las reglas:
 *   - Tiene al menos 8 caracteres
 *   - Tiene al menos una letra mayúscula
 *   - Tiene al menos un número
 * Si no cumple alguna, devuelve false.
 *   validarPassword('Secreto123') → true
 *   validarPassword('secreto123') → false (no tiene mayúscula)
 */
export function validarPassword(password) {
  if (password.length < 8) {
    return false
  }
  if (!/[A-Z]/.test(password)) {
    return false
  }
  if (!/[0-9]/.test(password)) {
    return false
  }
  return true
}