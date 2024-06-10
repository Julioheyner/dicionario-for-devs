/*Javascript do NAVEGADOR  no modo MOBILE*/ 
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./assets/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./assets/close_white_36dp.svg";
    }
}

/* JavaScript da PÁGINA DICIONÁRIO */ 
document.addEventListener("DOMContentLoaded", () => {
  const dictionary = {
      "abstract": {
          pt: {
              definition: "A palavra-chave <strong>abstract</strong> em Java é usada para declarar uma classe ou método que não pode ser instanciado diretamente. Uma classe abstrata serve como um modelo para outras classes, podendo conter métodos abstratos (sem implementação) e métodos concretos (com implementação). Métodos abstratos devem ser implementados pelas subclasses.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
abstract class Forma {
  abstract double calcularArea(); // Método abstrato, sem implementação
  void desenhar() {
      System.out.println("Desenhando uma forma.");
  }
}

class Circulo extends Forma {
  double raio;
  Circulo(double raio) {
      this.raio = raio;
  }
  double calcularArea() {
      return Math.PI * raio * raio;
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
abstract class Animal {
  abstract void emitirSom(); // Método abstrato, sem implementação
  void dormir() {
      System.out.println("O animal está dormindo.");
  }
}

class Cachorro extends Animal {
  void emitirSom() {
      System.out.println("O cachorro late.");
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>abstract</strong> en Java se utiliza para declarar una clase o método que no puede ser instanciado directamente. Una clase abstracta sirve como un modelo para otras clases, pudiendo contener métodos abstractos (sin implementación) y métodos concretos (con implementación). Los métodos abstractos deben ser implementados por las subclases.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
abstract class Forma {
  abstract double calcularArea(); // Método abstracto, sin implementación
  void dibujar() {
      System.out.println("Dibujando una forma.");
  }
}

class Circulo extends Forma {
  double radio;
  Circulo(double radio) {
      this.radio = radio;
  }
  double calcularArea() {
      return Math.PI * radio * radio;
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
abstract class Animal {
  abstract void emitirSonido(); // Método abstracto, sin implementación
  void dormir() {
      System.out.println("El animal está durmiendo.");
  }
}

class Perro extends Animal {
  void emitirSonido() {
      System.out.println("El perro ladra.");
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>abstract</strong> keyword in Java is used to declare a class or method that cannot be instantiated directly. An abstract class serves as a blueprint for other classes, and it may contain abstract methods (without implementation) and concrete methods (with implementation). Abstract methods must be implemented by subclasses.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
abstract class Shape {
  abstract double calculateArea(); // Abstract method, no implementation
  void draw() {
      System.out.println("Drawing a shape.");
  }
}

class Circle extends Shape {
  double radius;
  Circle(double radius) {
      this.radius = radius;
  }
  double calculateArea() {
      return Math.PI * radius * radius;
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
abstract class Animal {
  abstract void makeSound(); // Abstract method, no implementation
  void sleep() {
      System.out.println("The animal is sleeping.");
  }
}

class Dog extends Animal {
  void makeSound() {
      System.out.println("The dog barks.");
  }
}`
                  }
              ]
          }
      },
"boolean": {
          pt: {
              definition: "A palavra-chave <strong>boolean</strong> em Java é utilizada para declarar variáveis que podem armazenar um dos dois valores lógicos: true (verdadeiro) ou false (falso). Esse tipo de dado é usado principalmente em expressões condicionais e controle de fluxo, permitindo que o programa tome decisões baseadas em condições lógicas.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class Maioridade {
  public static void main(String[] args) {
      int idade = 20;
      boolean maiorDeIdade = idade >= 18;
      
      if (maiorDeIdade) {
          System.out.println("A pessoa é maior de idade.");
      } else {
          System.out.println("A pessoa não é maior de idade.");
      }
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class NumeroPar {
  public static void main(String[] args) {
      int numero = 8;
      boolean ehPar = (numero % 2 == 0);
      
      if (ehPar) {
          System.out.println("O número " + numero + " é par.");
      } else {
          System.out.println("O número " + numero + " é ímpar.");
      }
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>boolean</strong> en Java se utiliza para declarar variables que pueden almacenar uno de dos valores lógicos: verdadero o falso. Este tipo de datos se utiliza principalmente en expresiones condicionales y control de flujo, permitiendo al programa tomar decisiones basadas en condiciones lógicas.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class MayoríaDeEdad {
  public static void main(String[] args) {
      int edad = 20;
      boolean esMayorDeEdad = edad >= 18;
      
      if (esMayorDeEdad) {
          System.out.println("La persona es mayor de edad.");
      } else {
          System.out.println("La persona no es mayor de edad.");
      }
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class NúmeroPar {
  public static void main(String[] args) {
      int número = 8;
      boolean esPar = (número % 2 == 0);
      
      if (esPar) {
          System.out.println("El número " + número + " es par.");
      } else {
          System.out.println("El número " + número + " es impar.");
      }
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>boolean</strong> keyword in Java is used to declare variables that can store one of two logical values: true or false. This type of data is mainly used in conditional expressions and flow control, allowing the program to make decisions based on logical conditions.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class LegalAge {
  public static void main(String[] args) {
      int age = 20;
      boolean isLegalAge = age >= 18;
      
      if (isLegalAge) {
          System.out.println("The person is of legal age.");
      } else {
          System.out.println("The person is not of legal age.");
      }
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class EvenNumber {
  public static void main(String[] args) {
      int number = 8;
      boolean isEven = (number % 2 == 0);
      
      if (isEven) {
          System.out.println("The number " + number + " is even.");
      } else {
          System.out.println("The number " + number + " is odd.");
      }
  }
}`
                  }
              ]
          }
      },
"break": {
          pt: {
              definition: "A palavra-chave <strong>break</strong> em Java é utilizada para interromper a execução de loops (como for, while e do-while) ou switch statements (estrutura de seleção múltipla). Quando o programa encontra a instrução break, ele sai imediatamente do loop ou do switch statement em que está contido, continuando a execução a partir da próxima instrução após o loop ou switch.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploBreakFor {
  public static void main(String[] args) {
      for (int i = 0; i < 10; i++) {
          System.out.println("Contador: " + i);
          if (i == 5) {
              System.out.println("Loop interrompido em i = 5");
              break; // interrompe o loop quando i atinge 5
          }
      }
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class ExemploBreakWhile {
  public static void main(String[] args) {
      int contador = 0;
      while (true) {
          System.out.println("Contador: " + contador);
          contador++;
          if (contador == 5) {
              System.out.println("Loop interrompido em contador = 5");
              break; // interrompe o loop quando contador atinge 5
          }
      }
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>break</strong> en Java se utiliza para interrumpir la ejecución de bucles (como for, while y do- while) o declaraciones de cambio (estructura de selección múltiple). Cuando el programa encuentra la instrucción break, sale inmediatamente del bucle o instrucción switch en el que está contenida y continúa la ejecución desde la siguiente instrucción después del bucle o cambio.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploBreakFor {
  public static void main(String[] args) {
      for (int i = 0; i < 10; i++) {
          System.out.println("Contador: " + i);
          if (i == 5) {
              System.out.println("Bucle interrumpido en i = 5");
              break; // interrumpe el bucle cuando i alcanza 5
          }
      }
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class EjemploBreakWhile {
  public static void main(String[] args) {
      int contador = 0;
      while (true) {
          System.out.println("Contador: " + contador);
          contador++;
          if (contador == 5) {
              System.out.println("Bucle interrumpido en contador = 5");
              break; // interrumpe el bucle cuando el contador alcanza 5
          }
      }
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>break</strong> keyword in Java is used to interrupt the execution of loops (such as for, while and do-while) or switch statements (multiple selection structure). When the program encounters the break statement, it immediately exits the loop or switch statement in which it is contained, continuing execution from the next statement after the loop or switch.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class ExampleBreakFor {
  public static void main(String[] args) {
      for (int i = 0; i < 10; i++) {
          System.out.println("Counter: " + i);
          if (i == 5) {
              System.out.println("Loop interrupted at i = 5");
              break; // breaks the loop when i reaches 5
          }
      }
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class ExampleBreakWhile {
  public static void main(String[] args) {
      int counter = 0;
      while (true) {
          System.out.println("Counter: " + counter);
          counter++;
          if (counter == 5) {
              System.out.println("Loop interrupted at counter = 5");
              break; // breaks the loop when counter reaches 5
          }
      }
  }
}`
                  }
              ]
          }
      },
     "byte": {
          pt: {
              definition: "A palavra-chave <strong>byte</strong> em Java é utilizada para declarar uma variável que pode armazenar um valor de dados de 8 bits. Os valores que uma variável do tipo byte pode conter variam de -128 a 127. Este tipo de dado é útil quando se deseja economizar memória em grandes arrays, onde os limites dos valores se ajustam ao intervalo de 8 bits, ou quando se trabalha com dados binários.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploByte {
  public static void main(String[] args) {
      byte idade = 25;
      System.out.println("Idade: " + idade);
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class OperacoesComByte {
  public static void main(String[] args) {
      byte a = 10;
      byte b = 20;
      byte c = (byte) (a + b); // A soma de dois bytes deve ser convertida de volta para byte
      
      System.out.println("a: " + a);
      System.out.println("b: " + b);
      System.out.println("a + b = " + c);
      
      byte d = (byte) (a * 2); // A multiplicação de byte deve ser convertida de volta para byte
      System.out.println("a * 2 = " + d);
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>byte</strong> en Java se utiliza para declarar una variable que puede almacenar un valor de datos de 8 bits. Los valores que puede contener una variable de tipo byte varían de -128 a 127. Este tipo de datos es útil cuando se desea ahorrar memoria en matrices grandes, donde los límites de los valores encajan dentro del rango de 8 bits, o cuando se trabaja con datos binarios.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploByte {
  public static void main(String[] args) {
      byte edad = 25;
      System.out.println("Edad: " + edad);
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class OperacionesConByte {
  public static void main(String[] args) {
      byte a = 10;
      byte b = 20;
      byte c = (byte) (a + b); // La suma de dos bytes debe ser convertida de vuelta a byte
      
      System.out.println("a: " + a);
      System.out.println("b: " + b);
      System.out.println("a + b = " + c);
      
      byte d = (byte) (a * 2); // La multiplicación de byte debe ser convertida de vuelta a byte
      System.out.println("a * 2 = " + d);
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>byte</strong> keyword in Java is used  to declare a variable that can store an 8-bit data value. The values ​​that a byte type variable can contain vary from -128 to 127. This data type is useful when you want to save memory in large arrays, where the limits of the values ​​fit within the 8-bit range, or when working with binary data.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class ExampleByte {
  public static void main(String[] args) {
      byte age = 25;
      System.out.println("Age: " + age);
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class ByteOperations {
  public static void main(String[] args) {
      byte a = 10;
      byte b = 20;
      byte c = (byte) (a + b); // The sum of two bytes must be cast back to byte
      
      System.out.println("a: " + a);
      System.out.println("b: " + b);
      System.out.println("a + b = " + c);
      
      byte d = (byte) (a * 2); // The product of byte must be cast back to byte
      System.out.println("a * 2 = " + d);
  }
}`
                  }
              ]
          }
      },
      "case": {
          pt: {
              definition: "A palavra-chave <strong>case</strong> em Java é utilizada dentro de uma instrução switch para definir ramificações individuais que a instrução pode executar com base no valor de uma expressão. Cada case representa uma correspondência potencial para o valor que está sendo verificado, e quando uma correspondência é encontrada, o código associado a esse case é executado.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploSwitch {
  public static void main(String[] args) {
      int diaDaSemana = 3;

      switch (diaDaSemana) {
          case 1:
              System.out.println("Domingo");
              break;
          case 2:
              System.out.println("Segunda-feira");
              break;
          case 3:
              System.out.println("Terça-feira");
              break;
          case 4:
              System.out.println("Quarta-feira");
              break;
          case 5:
              System.out.println("Quinta-feira");
              break;
          case 6:
              System.out.println("Sexta-feira");
              break;
          case 7:
              System.out.println("Sábado");
              break;
          default:
              System.out.println("Dia inválido");
              break;
      }
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class ExemploSwitchString {
  public static void main(String[] args) {
      String fruta = "Maçã";

      switch (fruta) {
          case "Maçã":
              System.out.println("Maçã é vermelha.");
              break;
          case "Banana":
              System.out.println("Banana é amarela.");
              break;
          case "Laranja":
              System.out.println("Laranja é laranja.");
              break;
          default:
              System.out.println("Fruta desconhecida.");
              break;
      }
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>case</strong> en Java se utiliza  dentro de una instrucción switch para definir ramificaciones individuales que el switch puede ejecutar según el valor de una expresión. Cada case representa una posible coincidencia con el valor que se está evaluando y, cuando se encuentra una coincidencia, se ejecuta el código asociado a ese case.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploSwitch {
  public static void main(String[] args) {
      int diaDeLaSemana = 3;

      switch (diaDeLaSemana) {
          case 1:
              System.out.println("Domingo");
              break;
          case 2:
              System.out.println("Lunes");
              break;
          case 3:
              System.out.println("Martes");
              break;
          case 4:
              System.out.println("Miércoles");
              break;
          case 5:
              System.out.println("Jueves");
              break;
          case 6:
              System.out.println("Viernes");
              break;
          case 7:
              System.out.println("Sábado");
              break;
          default:
              System.out.println("Día inválido");
              break;
      }
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class EjemploSwitchString {
  public static void main(String[] args) {
      String fruta = "Manzana";

      switch (fruta) {
          case "Manzana":
              System.out.println("La manzana es roja.");
              break;
          case "Banana":
              System.out.println("La banana es amarilla.");
              break;
          case "Naranja":
              System.out.println("La naranja es naranja.");
              break;
          default:
              System.out.println("Fruta desconocida.");
              break;
      }
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>case</strong> keyword in Java is used  within a switch statement to define individual branches that the switch can execute based on the value of an expression. Each case represents a potential match for the value being switched on, and when a match is found, the code associated with that case is executed.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class SwitchExample {
  public static void main(String[] args) {
      int dayOfWeek = 3;

      switch (dayOfWeek) {
          case 1:
              System.out.println("Sunday");
              break;
          case 2:
              System.out.println("Monday");
              break;
          case 3:
              System.out.println("Tuesday");
              break;
          case 4:
              System.out.println("Wednesday");
              break;
          case 5:
              System.out.println("Thursday");
              break;
          case 6:
              System.out.println("Friday");
              break;
          case 7:
              System.out.println("Saturday");
              break;
          default:
              System.out.println("Invalid day");
              break;
      }
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class SwitchStringExample {
  public static void main(String[] args) {
      String fruit = "Apple";

      switch (fruit) {
          case "Apple":
              System.out.println("Apple is red.");
              break;
          case "Banana":
              System.out.println("Banana is yellow.");
              break;
          case "Orange":
              System.out.println("Orange is orange.");
              break;
          default:
              System.out.println("Unknown fruit.");
              break;
      }
  }
}`
                  }
              ]
          }
      },
      "catch": {
          pt: {
              definition: "A palavra-chave <strong>catch</strong> em Java é utilizada em conjunto com a instrução try para tratar exceções. Um bloco catch captura e lida com exceções que ocorrem dentro do bloco try. Isso permite que o programa continue executando de forma controlada, mesmo quando ocorrem erros.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploCatch {
  public static void main(String[] args) {
      try {
          int resultado = 10 / 0; // Isso lançará ArithmeticException
      } catch (ArithmeticException e) {
          System.out.println("Erro: Divisão por zero não é permitida.");
      }
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
import java.util.Scanner;

public class ExemploCatchScanner {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.print("Digite um número: ");
      
      try {
          int numero = Integer.parseInt(scanner.nextLine());
          System.out.println("Você digitou: " + numero);
      } catch (NumberFormatException e) {
          System.out.println("Erro: Entrada inválida, por favor, digite um número.");
      }
      
      scanner.close();
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>catch</strong> en Java se utiliza  junto con la instrucción try para manejar excepciones. Un bloque catch captura y maneja excepciones que ocurren dentro del bloque try. Esto permite que el programa continúe ejecutándose de manera controlada, incluso cuando ocurren errores.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploCatch {
  public static void main(String[] args) {
      try {
          int resultado = 10 / 0; // Esto lanzará ArithmeticException
      } catch (ArithmeticException e) {
          System.out.println("Error: No se permite la división por cero.");
      }
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
import java.util.Scanner;

public class EjemploCatchScanner {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.print("Ingrese un número: ");
      
      try {
          int numero = Integer.parseInt(scanner.nextLine());
          System.out.println("Usted ingresó: " + numero);
      } catch (NumberFormatException e) {
          System.out.println("Error: Entrada inválida, por favor ingrese un número.");
      }
      
      scanner.close();
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>catch</strong> keyword in Java is used  together with the try statement to handle exceptions. A catch block captures and processes exceptions that occur within the try block. This allows the program to continue running in a controlled manner, even when errors occur.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class CatchExample {
  public static void main(String[] args) {
      try {
          int result = 10 / 0; // This will throw ArithmeticException
      } catch (ArithmeticException e) {
          System.out.println("Error: Division by zero is not allowed.");
      }
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
import java.util.Scanner;

public class CatchExampleScanner {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.print("Enter a number: ");
      
      try {
          int number = Integer.parseInt(scanner.nextLine());
          System.out.println("You entered: " + number);
      } catch (NumberFormatException e) {
          System.out.println("Error: Invalid input, please enter a number.");
      }
      
      scanner.close();
  }
}`
                  }
              ]
          }
      },
     "char": {
          pt: {
              definition: "A palavra-chave <strong>char</strong> em Java é utilizada para declarar uma variável que pode armazenar um único caractere Unicode. Caracteres Unicode incluem letras, dígitos, símbolos e caracteres especiais de vários idiomas e sistemas de escrita.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploChar {
  public static void main(String[] args) {
      char letra = 'A';
      System.out.println("Letra: " + letra);
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class OperacoesComChar {
  public static void main(String[] args) {
      char letra1 = 'A';
      char letra2 = 'B';
      
      // Concatenando caracteres para formar uma string
      String str = "" + letra1 + letra2;
      System.out.println("Concatenação: " + str);
      
      // Convertendo um char em um número inteiro
      int valorAscii = (int) letra1;
      System.out.println("Valor ASCII de 'A': " + valorAscii);
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>char</strong> en Java se utiliza  para declarar una variable que puede almacenar un único carácter Unicode. Los caracteres Unicode incluyen letras, dígitos, símbolos y caracteres especiales de varios idiomas y sistemas de escritura.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploChar {
  public static void main(String[] args) {
      char letra = 'A';
      System.out.println("Letra: " + letra);
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class OperacionesConChar {
  public static void main(String[] args) {
      char letra1 = 'A';
      char letra2 = 'B';
      
      // Concatenación de caracteres para formar una cadena
      String cadena = "" + letra1 + letra2;
      System.out.println("Concatenación: " + cadena);
      
      // Convertir un char a un número entero
      int valorAscii = (int) letra1;
      System.out.println("Valor ASCII de 'A': " + valorAscii);
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>char</strong> keyword in Java is used  to declare a variable that can store a single Unicode character. Unicode characters include letters, digits, symbols, and special characters from various languages and writing systems.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class CharExample {
  public static void main(String[] args) {
      char letter = 'A';
      System.out.println("Letter: " + letter);
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class CharOperations {
  public static void main(String[] args) {
      char letter1 = 'A';
      char letter2 = 'B';
      
      // Concatenating characters to form a string
      String str = "" + letter1 + letter2;
      System.out.println("Concatenation: " + str);
      
      // Converting a char to an integer number
      int asciiValue = (int) letter1;
      System.out.println("ASCII value of 'A': " + asciiValue);
  }
}`
                  }
              ]
          }
      },
      "class": {
          pt: {
              definition: "A palavra-chave <strong>class</strong> em Java é utilizada para definir a estrutura de uma classe, que é um molde para a criação de objetos. Uma classe em Java pode conter campos (variáveis), métodos (funções) e construtores para inicializar objetos.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class Pessoa {
  // Campos
  String nome;
  int idade;
  
  // Construtor
  public Pessoa(String nome, int idade) {
      this.nome = nome;
      this.idade = idade;
  }
  
  // Método
  public void apresentar() {
      System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class Main {
  public static void main(String[] args) {
      // Criando um objeto da classe Pessoa
      Pessoa pessoa1 = new Pessoa("João", 30);
      
      // Chamando um método da classe Pessoa
      pessoa1.apresentar();
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>class</strong> en Java se usa para definir la estructura de una clase, que es una plantilla para la creación de objetos. Una clase en Java puede contener campos (variables), métodos (funciones) y constructores para inicializar objetos.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class Persona {
  // Campos
  String nombre;
  int edad;
  
  // Constructor
  public Persona(String nombre, int edad) {
      this.nombre = nombre;
      this.edad = edad;
  }
  
  // Método
  public void presentarse() {
      System.out.println("Hola, me llamo " + nombre + " y tengo " + edad + " años.");
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class Principal {
  public static void main(String[] args) {
      // Creando un objeto de la clase Persona
      Persona persona1 = new Persona("Juan", 30);
      
      // Llamando a un método de la clase Persona
      persona1.presentarse();
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>class</strong> keyword in Java is used  to define the structure of a class, which serves as a blueprint for creating objects. A class in Java can contain fields (variables), methods (functions), and constructors for initializing objects.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class Person {
  // Fields
  String name;
  int age;
  
  // Constructor
  public Person(String name, int age) {
      this.name = name;
      this.age = age;
  }
  
  // Method
  public void introduce() {
      System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class Main {
  public static void main(String[] args) {
      // Creating an object of the Person class
      Person person1 = new Person("John", 30);
      
      // Calling a method of the Person class
      person1.introduce();
  }
}`
                  }
              ]
          }
      },
      "continue": {
          pt: {
              definition: "A palavra-chave <strong>continue</strong> em Java é utilizada dentro de loops (for, while, do-while) para interromper a iteração atual e avançar para a próxima iteração do loop. Quando o continue é encontrado, o restante do código dentro do loop é ignorado para aquela iteração específica, e o controle é transferido de volta para a condição de teste do loop.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploContinueFor {
  public static void main(String[] args) {
      for (int i = 1; i <= 10; i++) {
          if (i % 2 == 0) {
              continue; // Pula a iteração atual se o número for par
          }
          System.out.println("Número ímpar: " + i);
      }
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class ExemploContinueWhile {
  public static void main(String[] args) {
      int i = 1;
      while (i <= 10) {
          i++;
          if (i % 2 == 0) {
              continue; // Pula a iteração atual se o número for par
          }
          System.out.println("Número ímpar: " + i);
      }
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>continue</strong> en Java se usa dentro de bucles (for, while, do-while) para interrumpir la iteración actual y avanzar a la siguiente iteración del bucle. Cuando se encuentra el continue, el resto del código dentro del bucle se ignora para esa iteración específica y el control se transfiere de vuelta a la condición de prueba del bucle.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploContinueFor {
  public static void main(String[] args) {
      for (int i = 1; i <= 10; i++) {
          if (i % 2 == 0) {
              continue; // Salta la iteración actual si el número es par
          }
          System.out.println("Número impar: " + i);
      }
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class EjemploContinueWhile {
  public static void main(String[] args) {
      int i = 1;
      while (i <= 10) {
          i++;
          if (i % 2 == 0) {
              continue; // Salta la iteración actual si el número es par
          }
          System.out.println("Número impar: " + i);
      }
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>continue</strong> keyword in Java is used  within loops (for, while, do-while) to skip the current iteration and proceed to the next iteration of the loop. When continue is encountered, the remaining code within the loop for that specific iteration is ignored, and control is transferred back to the loop's test condition.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class ContinueExampleFor {
  public static void main(String[] args) {
      for (int i = 1; i <= 10; i++) {
          if (i % 2 == 0) {
              continue; // Skip the current iteration if the number is even
          }
          System.out.println("Odd number: " + i);
      }
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class ContinueExampleWhile {
  public static void main(String[] args) {
      int i = 1;
      while (i <= 10) {
          i++;
          if (i % 2 == 0) {
              continue; // Skip the current iteration if the number is even
          }
          System.out.println("Odd number: " + i);
      }
  }
}`
                  }
              ]
          }
      },
      "default": {
          pt: {
              definition: "A palavra-chave <strong>default</strong> em Java é em uma instrução switch para especificar o bloco de código que deve ser executado quando nenhuma das correspondências case é encontrada.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploDefaultCores {
  public static void main(String[] args) {
      String cor = "azul";

      switch (cor) {
          case "vermelho":
              System.out.println("A cor é vermelho");
              break;
          case "verde":
              System.out.println("A cor é verde");
              break;
          case "azul":
              System.out.println("A cor é azul");
              break;
          default:
              System.out.println("Cor desconhecida");
              break;
      }
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class ExemploDefaultFrutas {
  public static void main(String[] args) {
      String fruta = "Manga";

      switch (fruta) {
          case "Maçã":
              System.out.println("Fruta é Maçã");
              break;
          case "Banana":
              System.out.println("Fruta é Banana");
              break;
          default:
              System.out.println("Fruta desconhecida");
              break;
      }
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>default</strong> en Java se usa en una instrucción switch para especificar el bloque de código que debe ejecutarse cuando no se encuentra ninguna de las coincidencias case.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploDefaultColores {
  public static void main(String[] args) {
      String color = "azul";

      switch (color) {
          case "rojo":
              System.out.println("El color es rojo");
              break;
          case "verde":
              System.out.println("El color es verde");
              break;
          case "azul":
              System.out.println("El color es azul");
              break;
          default:
              System.out.println("Color desconocido");
              break;
      }
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class EjemploDefaultFrutas {
  public static void main(String[] args) {
      String fruta = "Mango";

      switch (fruta) {
          case "Manzana":
              System.out.println("La fruta es Manzana");
              break;
          case "Banana":
              System.out.println("La fruta es Banana");
              break;
          default:
              System.out.println("Fruta desconocida");
              break;
      }
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>default</strong> keyword in Java  is used in a switch statement to specify the block of code that should be executed when none of the case matches are found.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class DefaultExampleColors {
  public static void main(String[] args) {
      String color = "blue";

      switch (color) {
          case "red":
              System.out.println("The color is red");
              break;
          case "green":
              System.out.println("The color is green");
              break;
          case "blue":
              System.out.println("The color is blue");
              break;
          default:
              System.out.println("Unknown color");
              break;
      }
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class DefaultExampleFruits {
  public static void main(String[] args) {
      String fruit = "Mango";

      switch (fruit) {
          case "Apple":
              System.out.println("The fruit is Apple");
              break;
          case "Banana":
              System.out.println("The fruit is Banana");
              break;
          default:
              System.out.println("Unknown fruit");
              break;
      }
  }
}`
                  }
              ]
          }
      },
      "do": {
          pt: {
              definition: "A palavra-chave <strong>do</strong> em Java é usada para criar um loop do-while. Este loop executa um bloco de código pelo menos uma vez, e então repete a execução enquanto uma condição especificada for verdadeira.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploDoWhile {
  public static void main(String[] args) {
      int contador = 1;

      do {
          System.out.println("Contador: " + contador);
          contador++;
      } while (contador <= 5);
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
import java.util.Scanner;

public class ExemploDoWhileEntrada {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      String entrada;

      do {
          System.out.print("Digite uma palavra (digite 'sair' para parar): ");
          entrada = scanner.nextLine();
          System.out.println("Você digitou: " + entrada);
      } while (!entrada.equalsIgnoreCase("sair"));

      scanner.close();
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>do</strong> en Java se usa para crear un bucle do-while. Este bucle ejecuta un bloque de código al menos una vez y luego repite la ejecución mientras una condición especificada sea verdadera.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploDoWhile {
  public static void main(String[] args) {
      int contador = 1;

      do {
          System.out.println("Contador: " + contador);
          contador++;
      } while (contador <= 5);
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
import java.util.Scanner;

public class EjemploDoWhileEntrada {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      String entrada;

      do {
          System.out.print("Escribe una palabra (escribe 'salir' para detener): ");
          entrada = scanner.nextLine();
          System.out.println("Tú escribiste: " + entrada);
      } while (!entrada.equalsIgnoreCase("salir"));

      scanner.close();
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>do</strong> keyword in Java is used to create a do-while loop. This loop executes a block of code at least once, and then repeatedly executes the block as long as a specified condition is true.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class DoWhileExample {
  public static void main(String[] args) {
      int count = 1;

      do {
          System.out.println("Count: " + count);
          count++;
      } while (count <= 5);
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
import java.util.Scanner;

public class DoWhileExampleInput {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      String input;

      do {
          System.out.print("Enter a word (type 'exit' to stop): ");
          input = scanner.nextLine();
          System.out.println("You entered: " + input);
      } while (!input.equalsIgnoreCase("exit"));

      scanner.close();
  }
}`
                  }
              ]
          }
      },
      "double": {
          pt: {
              definition: "A palavra-chave <strong>double</strong> em Java é usada para declarar uma variável que pode armazenar números de ponto flutuante de dupla precisão, que têm uma maior capacidade e precisão do que os números de ponto flutuante de precisão simples (float).",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploDoubleArea {
  public static void main(String[] args) {
      double raio = 7.5;
      double area = Math.PI * raio * raio;
      System.out.println("A área do círculo é: " + area);
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class ExemploDoubleMedia {
  public static void main(String[] args) {
      double nota1 = 8.5;
      double nota2 = 7.0;
      double nota3 = 9.5;
      double media = (nota1 + nota2 + nota3) / 3;
      System.out.println("A média das notas é: " + media);
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>double</strong> en Java se usa para declarar una variable que puede almacenar números de punto flotante de doble precisión, que tienen mayor capacidad y precisión que los números de punto flotante de precisión simple (float).",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploDoubleArea {
  public static void main(String[] args) {
      double radio = 7.5;
      double area = Math.PI * radio * radio;
      System.out.println("El área del círculo es: " + area);
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class EjemploDoubleMedia {
  public static void main(String[] args) {
      double nota1 = 8.5;
      double nota2 = 7.0;
      double nota3 = 9.5;
      double promedio = (nota1 + nota2 + nota3) / 3;
      System.out.println("El promedio de las notas es: " + promedio);
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>double</strong> keyword in Java is used to declare a variable that can store double-precision floating-point numbers, which have greater capacity and precision than single-precision floating-point numbers (float).",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class DoubleExampleArea {
  public static void main(String[] args) {
      double radius = 7.5;
      double area = Math.PI * radius * radius;
      System.out.println("The area of the circle is: " + area);
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class DoubleExampleAverage {
  public static void main(String[] args) {
      double grade1 = 8.5;
      double grade2 = 7.0;
      double grade3 = 9.5;
      double average = (grade1 + grade2 + grade3) / 3;
      System.out.println("The average grade is: " + average);
  }
}`
                  }
              ]
          }
      },
       "else": {
          pt: {
              definition: "A palavra-chave <strong>else</strong> em Java é usada em conjunto com a instrução if para especificar um bloco de código que deve ser executado quando a condição do if é falsa.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
public class ExemploElse {
  public static void main(String[] args) {
      int numero = 7;

      if (numero % 2 == 0) {
          System.out.println("O número é par.");
      } else {
          System.out.println("O número é ímpar.");
      }
  }
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
public class ExemploElseIdade {
  public static void main(String[] args) {
      int idade = 16;

      if (idade >= 18) {
          System.out.println("Você é maior de idade.");
      } else {
          System.out.println("Você é menor de idade.");
      }
  }
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>else</strong> en Java se usa junto con la instrucción if para especificar un bloque de código que debe ejecutarse cuando la condición del if es falsa.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
public class EjemploElse {
  public static void main(String[] args) {
      int numero = 7;

      if (numero % 2 == 0) {
          System.out.println("El número es par.");
      } else {
          System.out.println("El número es impar.");
      }
  }
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
public class EjemploElseEdad {
  public static void main(String[] args) {
      int edad = 16;

      if (edad >= 18) {
          System.out.println("Eres mayor de edad.");
      } else {
          System.out.println("Eres menor de edad.");
      }
  }
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>else</strong> keyword in Java is used in conjunction with the if statement to specify a block of code that should be executed when the if condition is false.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
public class ElseExample {
  public static void main(String[] args) {
      int number = 7;

      if (number % 2 == 0) {
          System.out.println("The number is even.");
      } else {
          System.out.println("The number is odd.");
      }
  }
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
public class ElseExampleAge {
  public static void main(String[] args) {
      int age = 16;

      if (age >= 18) {
          System.out.println("You are an adult.");
      } else {
          System.out.println("You are a minor.");
      }
  }
}`
                  }
              ]
          }
      },
       "auto": {
          pt: {
              definition: "A palavra-chave <strong>auto</strong> em linguagem C, embora tenha sido uma característica, é agora considerada obsoleta e seu uso é desencorajado. Era usada para declarar variáveis locais com duração de armazenamento automático, mas na programação C moderna, variáveis locais são implicitamente auto e especificá-lo explicitamente é desnecessário e redundante.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
#include <stdio.h>
int main() {
  auto int x = 10; // Declaração de variável usando auto (forma obsoleta)
  
  printf("O valor de x é: %d\n", x);
  
  return 0;
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
#include <stdio.h>
int main() {
  int y = 20; // Declaração implícita de variável local
  
  printf("O valor de y é: %d\n", y);
  
  return 0;
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>auto</strong> en el lenguaje C, aunque alguna vez fue una característica, ahora se considera obsoleta y su uso está desaconsejado. Se utilizaba para declarar variables locales con duración de almacenamiento automático, pero en la programación C moderna, las variables locales son implícitamente auto y especificarlo explícitamente es innecesario y redundante.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
#include <stdio.h>
int main() {
  auto int x = 10; // Declaración de variable usando auto (forma obsoleta)
  
  printf("El valor de x es: %d\n", x);
  
  return 0;
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
#include <stdio.h>
int main() {
  int y = 20; // Declaración implícita de variable local
  
  printf("El valor de y es: %d\n", y);
  
  return 0;
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>auto</strong> keyword in the C language, although once a feature, is now considered obsolete and its use is discouraged. It was used to declare local variables with automatic storage duration, but in modern C programming, local variables are implicitly auto and explicitly specifying it is unnecessary and redundant.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
#include <stdio.h>
int main() {
  auto int x = 10; // Declaration of variable using auto (obsolete form)
  
  printf("The value of x is: %d\n", x);
  
  return 0;
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
#include <stdio.h>
int main() {
  int y = 20; // Implicit declaration of local variable
  
  printf("The value of y is: %d\n", y);
  
  return 0;
}`
                  }
              ]
          }
      },
       "variável": {
          pt: {
              definition: "A palavra-chave <strong>variável</strong> em linguagem C,  uma variável é um espaço na memória do computador que é identificado por um nome e usado para armazenar dados. Antes de usar uma variável em C, é necessário declará-la, especificando seu tipo e nome. As variáveis em C podem armazenar diferentes tipos de dados, como inteiros, números de ponto flutuante, caracteres, entre outros.",
              examples: [
                  {
                      title: "Exemplo 1: ",
                      code: `
#include <stdio.h>
int main() {
  int idade; // Declaração da variável idade
  idade = 25; // Atribuição de valor à variável idade
  
  printf("A idade é: %d\n", idade);
  
  return 0;
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
#include <stdio.h>
int main() {
  char nome[20]; // Declaração da variável nome
  strcpy(nome, "João"); // Atribuição de valor à variável nome
  
  printf("O nome é: %s\n", nome);
  
  return 0;
}`
                  }
              ]
          },
          es: {
              definition: "La palabra clave <strong>variable</strong> en el lenguaje C, una variable es un espacio en la memoria de la computadora que está identificado por un nombre y se utiliza para almacenar datos. Antes de utilizar una variable en C, es necesario declararla, especificando su tipo y nombre. Las variables en C pueden almacenar diferentes tipos de datos, como enteros, números de punto flotante, caracteres, entre otros.",
              examples: [
                  {
                      title: "Ejemplo 1: ",
                      code: `
#include <stdio.h>
int main() {
  int edad; // Declaración de la variable edad
  edad = 25; // Asignación de valor a la variable edad
  
  printf("La edad es: %d\n", edad);
  
  return 0;
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
#include <stdio.h>
#include <string.h>
int main() {
  char nombre[20]; // Declaración de la variable nombre
  strcpy(nombre, "Juan"); // Asignación de valor a la variable nombre
  
  printf("El nombre es: %s\n", nombre);
  
  return 0;
}`
                  }
              ]
          },
          en: {
              definition: "The <strong>variable</strong> keyword in the C language, a variable is a space in the computer's memory that is identified by a name and used to store data. Before using a variable in C, it is necessary to declare it, specifying its type and name. Variables in C can store different types of data, such as integers, floating-point numbers, characters, among others.",
              examples: [
                  {
                      title: "Example 1: ",
                      code: `
#include <stdio.h>
int main() {
  int age; // Declaration of the age variable
  age = 25; // Assigning value to the age variable
  
  printf("The age is: %d\n", age);
  
  return 0;
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
#include <stdio.h>
#include <string.h>
int main() {
  char name[20]; // Declaration of the name variable
  strcpy(name, "John"); // Assigning value to the name variable
  
  printf("The name is: %s\n", name);
  
  return 0;
}`
                  }
              ]
          }
      },

      /* Adicionar mais palavras e exemplos aqui*/
  };

  const searchButton = document.getElementById('search-button');
  const clearButton = document.getElementById('clear-button');
  const speakButton = document.getElementById('speak-button');
  const searchInput = document.getElementById('search-input');
  const languageSelect = document.getElementById('language-select');
  const resultContainer = document.getElementById('result');

  let currentDefinition = '';

  searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      const language = languageSelect.value;
      const entry = dictionary[query];

      if (entry && entry[language]) {
          const { definition, examples } = entry[language];
          currentDefinition = definition.replace(/<[^>]+>/g, ''); /* Remover tags HTML para a síntese de fala*/
          resultContainer.innerHTML = `
              <h2>${query.toUpperCase()}</h2>
              <p>${definition}</p>
              ${examples.map(example => `
                  <div class="code-block">
                      <h3>${example.title}</h3>
                      <pre><code class="java">${example.code}</code></pre>
                  </div>
              `).join('')}
          `;
          document.querySelectorAll('pre code').forEach((block) => {
              hljs.highlightBlock(block);
          });
          resultContainer.style.display = 'block';
          speakButton.disabled = false;
      } else {
          resultContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
          resultContainer.style.display = 'block';
          speakButton.disabled = true;
          currentDefinition = '';
      }
  });

  clearButton.addEventListener('click', () => {
      searchInput.value = '';
      resultContainer.style.display = 'none';
      resultContainer.innerHTML = '';
      speakButton.disabled = true;
      currentDefinition = '';
  });

  speakButton.addEventListener('click', () => {
      if (currentDefinition) {
          const utterance = new SpeechSynthesisUtterance(currentDefinition);
          utterance.lang = languageSelect.value === 'pt' ? 'pt-BR' :
                           languageSelect.value === 'es' ? 'es-ES' : 'en-US';
          speechSynthesis.speak(utterance);
      }
  });
});

/*JavaScript da PÁGINA DEPOIMENTOS */
var testimonials = document.querySelectorAll('.testimonial'); /* Seleciona todos os depoimentos */
var currentTestimonialIndex = 0; /* Índice do depoimento atual */
function showNextTestimonial() {
    /* Oculta o depoimento atual */
    testimonials[currentTestimonialIndex].style.display = 'none';
    /* Incrementa o índice para mostrar o próximo depoimento */
    currentTestimonialIndex++;
    /* Se o índice ultrapassar o número de depoimentos, volta para o primeiro */
    if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    /* Exibe o próximo depoimento */
    testimonials[currentTestimonialIndex].style.display = 'block';
}

/* JavaScript da PÁGINA PROFISSÃO DESENVOLVEDOR */ 

function searchBySelection() {
  var selectedProfession = document.getElementById("profissaoSelect").value;
  var resultDiv = document.getElementById("result");
  var professionInfo = getProfessionInfo(selectedProfession);

  if (professionInfo) {
      resultDiv.innerHTML = "<img src='./assets/" + professionInfo.image + "' alt='" + selectedProfession + "'><p>" + professionInfo.description + "</p>";
      resultDiv.style.display = "block";
  } else {
      resultDiv.innerHTML = "Profissão não encontrada.";
      resultDiv.style.display = "block";
  }
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.display = "none";
}

function getProfessionInfo(searchTerm) {
  var professions = {
      "ia_ml": {
          "image": "ia_ml.jpg",
          "description": "Profissional que desenvolve modelos e algoritmos de inteligência artificial e machine learning, utilizando tecnologias como Python, TensorFlow, Keras, PyTorch, Scikit-learn, R, Jupyter Notebooks, Google Cloud AI, IBM Watson e AWS SageMaker."
      },
      "cientista_dados": {
          "image": "cientista_dados.jpg",
          "description": "Profissional que analisa e interpreta dados complexos para apoiar a tomada de decisões, utilizando tecnologias como Python, R, SQL, Hadoop, Spark, Tableau, Power BI, SAS, Jupyter Notebooks e Apache Kafka."
      },
      "devops": {
          "image": "devops.jpg",
          "description": "Profissional que promove a integração contínua e entrega contínua (CI/CD) de software, automatizando e monitorando a infraestrutura com tecnologias como Docker, Kubernetes,                        Jenkins, Git, Ansible, Terraform, AWS, Azure, Google Cloud, Prometheus e Grafana."
      },
      "frontend": {
          "image": "frontend.jpg",
          "description": "Profissional responsável por desenvolver a interface de usuário de um site ou aplicativo web, utilizando tecnologias como HTML, CSS, JavaScript, React, Angular, Vue.js, SASS, Bootstrap, Webpack e TypeScript."
      },
      "mobile": {
          "image": "mobile.jpg",
          "description": "Profissional que cria e mantém aplicativos móveis para plataformas como iOS e Android, utilizando tecnologias como Swift, Kotlin, Java, Flutter, React Native, Xamarin, Objective-C e Firebase."
      },
      "backend": {
          "image": "backend.jpg",
          "description": "Profissional que desenvolve e mantém a lógica do lado do servidor de aplicações web, utilizando tecnologias como Node.js, Java, Python, Ruby on Rails, PHP, .NET, SQL, PostgreSQL, MongoDB, Redis e GraphQL."
      },
      "robotica": {
          "image": "robotica.jpg",
          "description": "Profissional que projeta, constrói e programa robôs para realizar tarefas específicas, utilizando tecnologias como ROS, Python, C++, MATLAB, Arduino, Raspberry Pi, V-REP, Gazebo e SolidWorks."
      },
      "cloud_computing": {
          "image": "computing.jpg",
          "description": "Profissional que gerencia serviços e infraestruturas de TI na nuvem, utilizando tecnologias como AWS, Azure, Google Cloud Platform, Docker, Kubernetes, OpenStack, Terraform, Ansible e CloudFormation."
      },
      "ciberseguranca": {
          "image": "ciberseguranca.jpg",
          "description": "Profissional que protege sistemas de informação contra ameaças cibernéticas, utilizando tecnologias como firewalls, SIEM, IDS/IPS, Wireshark, Metasploit, Kali Linux, Splunk, Nessus e Nmap."
      },
      "software": {
          "image": "desenvolvedor_de_software.jpg",
          "description": "Profissional que cria, testa e mantém software para diversas plataformas, utilizando tecnologias como Python, Java, C#, C++, JavaScript, Git, SQL, Docker, Agile/Scrum e Visual Studio."
      },
      "arquiteto_infra": {
          "image": "especialista_redes.jpg",
          "description": "Profissional que planeja e projeta a infraestrutura de redes e sistemas de TI, utilizando tecnologias como Cisco, Juniper, VMware, AWS, Azure, SD-WAN, Fortinet, Palo Alto Networks, Ansible e Terraform."
      },
      "design_ux_ui": {
          "image": "especialista_ux_ui.jpg",
          "description": "Profissional que cria interfaces de usuário atraentes e intuitivas, focando na experiência do usuário, utilizando tecnologias como Adobe XD, Figma, Sketch, InVision, Axure, HTML, CSS, JavaScript, Balsamiq e Zeplin."
      },
      "fullstack": {
          "image": "fullstack.jpg",
          "description": "Profissional que desenvolve tanto a parte frontend quanto backend de aplicações web, utilizando tecnologias como HTML, CSS, JavaScript, React, Angular, Vue.js, Node.js, Python, Ruby on Rails, Java, PHP, .NET, SQL, MongoDB, Docker, Git, RESTful APIs, GraphQL, AWS, Azure e Firebase."
      },
      "analista_e_desenvolvedor_de_sistemas": {
        "image": "analista_sistemas.jpg",
        "description": "Profissional que analisa, projeta, desenvolve, testa e mantém software e sistemas informáticos, utilizando tecnologias como Java, C#, Python, JavaScript, SQL, HTML, CSS, Angular, React, Node.js, Git, Docker, RESTful APIs, Agile e Scrum. Atua em áreas como finanças, saúde, educação, e-commerce e tecnologia, garantindo a funcionalidade e eficiência das soluções tecnológicas."
    },
    "analista_de_sistemas": {
      "image": "analista_sistemas_informacao.jpg",
      "description": "Profissional que analisa e modela sistemas de informação, define requisitos, realiza testes e implementa soluções tecnológicas. Utiliza ferramentas e linguagens como Java, C#, Python, SQL, HTML, CSS, JavaScript, Angular e React. Atua em áreas como finanças, saúde, educação e e-commerce, garantindo que os sistemas atendam às necessidades dos usuários e sejam eficientes e seguros."
  }
  
    
  };

  return professions[searchTerm];
}

/* JavaScript da Página Contato */
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); /* Impede o envio do formulário padrão */
  /* Exibe a mensagem ao usuário */
  alert("Mensagem enviada com sucesso!");
});

