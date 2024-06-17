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
      "objeto": {
            pt: {
                definition: "A palavra-chave <strong>objeto</strong> em Java é construído a partir de uma classe. Ou seja, uma classe pode ser a base para a construção de diversos objetos.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
public class Main {
    public static void main(String[] args) {
       Gato thor = new Gato();
       Gato rambo = new Gato();
    }
}
class Gato { // Atributos e métodos da classe Gato 
}`
                    },
                    {
                        title: "Exemplo 2: ",
                        code: `
public class Main {
    public static void main(String[] args) {
       Cachorro rex = new Cachorro();
       Cachorro buddy = new Cachorro();
    }
}
class Cachorro {
    // Atributos e métodos da classe Cachorro
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave <strong>objeto</strong> en Java es construido a partir de una clase. Es decir, una clase puede ser la base para la construcción de varios objetos.",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
public class Main {
    public static void main(String[] args) {
       Gato thor = new Gato();
       Gato rambo = new Gato();
    }
}
class Gato { // Atributos y métodos de la clase Gato
}`
                    },
                    {
                        title: "Ejemplo 2: ",
                        code: `
public class Main {
    public static void main(String[] args) {
       Perro rex = new Perro();
       Perro buddy = new Perro();
    }
}
class Perro {
    // Atributos y métodos de la clase Perro
}`
                    }
                ]
            },
            en: {
                definition: "The object<strong> (objeto) </strong> keyword in Java is built from a class. In other words, a class can be the foundation for constructing various objects.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
public class Main {
    public static void main(String[] args) {
       Cat thor = new Cat();
       Cat rambo = new Cat();
    }
}
class Cat { // Cat class attributes and methods 
}`
                    },
                    {
                        title: "Example 2: ",
                        code: `
public class Main {
    public static void main(String[] args) {
       Dog rex = new Dog();
       Dog buddy = new Dog();
    }
}
class Dog {
    // Dog class attributes and methods
}`
                    }
                ]
            }
        },
       "herança": {
            pt: {
                definition: "A palavra-chave <strong>herança</strong> em Java é o mecanismo que pode ser utilizado para que uma classe herde informações de uma outra classe.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
// Classe base
class Animal {
    // Método da classe base
    void comer() {
        System.out.println("Este animal come comida.");
    }
}
// Classe derivada
class Cachorro extends Animal {
    // Método da classe derivada
    void latir() {
        System.out.println("O cachorro late.");
    }
}
// Classe principal para testar a herança
public class Principal {
    public static void main(String[] args) {
        Cachorro meuCachorro = new Cachorro();       
        // Chamar métodos da classe base e da classe derivada
        meuCachorro.comer();  // Chamando método da classe base
        meuCachorro.latir();  // Chamando método da classe derivada
    }
}`
                    },
                    {
                        title: "Exemplo 2: ",
                        code: `
// Classe base
class Veiculo {
    // Método da classe base
    void ligar() {
        System.out.println("O veículo está ligando.");
    }
}
// Classe derivada
class Carro extends Veiculo {
    // Método da classe derivada
    void buzinar() {
        System.out.println("O carro está buzinando.");
    }
}
// Classe principal para testar a herança
public class Principal {
    public static void main(String[] args) {
        Carro meuCarro = new Carro();       
        // Chamar métodos da classe base e da classe derivada
        meuCarro.ligar();   // Chamando método da classe base
        meuCarro.buzinar(); // Chamando método da classe derivada
    }
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave herencia <strong>(herança)</strong> en Java es  el mecanismo que puede ser utilizado para que una clase herede información de otra clase.",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
// Clase base
class Animal {
    // Método de la clase base
    void comer() {
        System.out.println("Este animal come comida.");
    }
}
// Clase derivada
class Perro extends Animal {
    // Método de la clase derivada
    void ladrar() {
        System.out.println("El perro ladra.");
    }
}
// Clase principal para probar la herencia
public class Principal {
    public static void main(String[] args) {
        Perro miPerro = new Perro();       
        // Llamar métodos de la clase base y de la clase derivada
        miPerro.comer();  // Llamando método de la clase base
        miPerro.ladrar(); // Llamando método de la clase derivada
    }
}`
                    },
                    {
                        title: "Ejemplo 2: ",
                        code: `
// Clase base
class Vehiculo {
    // Método de la clase base
    void encender() {
        System.out.println("El vehículo está encendiendo.");
    }
}
// Clase derivada
class Coche extends Vehiculo {
    // Método de la clase derivada
    void tocarBocina() {
        System.out.println("El coche está tocando la bocina.");
    }
}
// Clase principal para probar la herencia
public class Principal {
    public static void main(String[] args) {
        Coche miCoche = new Coche();
        
        // Llamar métodos de la clase base y de la clase derivada
        miCoche.encender();   // Llamando método de la clase base
        miCoche.tocarBocina(); // Llamando método de la clase derivada
    }
}`
                    }
                ]
            },
            en: {
                definition: "The inheritance <strong>(herança)</strong> keyword in Java is is the mechanism that can be used for a class to inherit information from another class.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
// Base class
class Animal {
    // Method in the base class
    void eat() {
        System.out.println("This animal eats food.");
    }
}
// Derived class
class Dog extends Animal {
    // Method in the derived class
    void bark() {
        System.out.println("The dog barks.");
    }
}
// Main class to test inheritance
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        // Call methods from the base class and the derived class
        myDog.eat();  // Calling method from the base class
        myDog.bark(); // Calling method from the derived class
    }
}`
                    },
                    {
                        title: "Example 2: ",
                        code: `
// Base class
class Vehicle {
    // Method in the base class
    void start() {
        System.out.println("The vehicle is starting.");
    }
}
// Derived class
class Car extends Vehicle {
    // Method in the derived class
    void honk() {
        System.out.println("The car is honking.");
    }
}
// Main class to test inheritance
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        
        // Call methods from the base class and the derived class
        myCar.start();   // Calling method from the base class
        myCar.honk();    // Calling method from the derived class
    }
}`
                    }
                ]
            }
        },
        "instância": {
            pt: {
                definition: "A palavra-chave <strong>instância</strong> em Java é o procidimento necessário para criar um objeto. Muito conhecido como dar um NEW em uma classe Java.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
// Definindo a classe Pessoa
class Pessoa {
    // Atributos da classe Pessoa
    String nome;
    int idade;
    // Método da classe Pessoa
    void apresentar() {
        System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
    }
}
// Classe principal para testar a criação de instâncias
public class Principal {
    public static void main(String[] args) {
        // Criando uma instância da classe Pessoa
        Pessoa pessoa1 = new Pessoa();
        
        // Inicializando os atributos da instância
        pessoa1.nome = "João";
        pessoa1.idade = 25;
        // Chamando o método da instância
        pessoa1.apresentar();
    }
}`
                    },
                    {
                        title: "Exemplo 2: ",
                        code: `
// Definindo a classe Carro
class Carro {
    // Atributos da classe Carro
    String marca;
    String modelo;
    // Método da classe Carro
    void exibirDetalhes() {
        System.out.println("Este é um " + marca + " " + modelo + ".");
    }
}
// Classe principal para testar a criação de instâncias
public class Principal {
    public static void main(String[] args) {
        // Criando uma instância da classe Carro
        Carro meuCarro = new Carro();
        // Inicializando os atributos da instância
        meuCarro.marca = "Toyota";
        meuCarro.modelo = "Corolla";
        // Chamando o método da instância
        meuCarro.exibirDetalhes();
    }
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave instancia <strong>(instância)</strong> en Java es el procedimiento necesario para crear un objeto. Muy conocido como dar un NEW en una clase Java",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
// Definiendo la clase Persona
class Persona {
    // Atributos de la clase Persona
    String nombre;
    int edad;
    // Método de la clase Persona
    void presentarse() {
        System.out.println("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");
    }
}
// Clase principal para probar la creación de instancias
public class Principal {
    public static void main(String[] args) {
        // Creando una instancia de la clase Persona
        Persona persona1 = new Persona();
        // Inicializando los atributos de la instancia
        persona1.nombre = "Juan";
        persona1.edad = 25;
        // Llamando al método de la instancia
        persona1.presentarse();
    }
}`
                    },
                    {
                        title: "Ejemplo 2: ",
                        code: `
// Definiendo la clase Coche
class Coche {
    // Atributos de la clase Coche
    String marca;
    String modelo;  
    // Método de la clase Coche
    void mostrarDetalles() {
        System.out.println("Este es un " + marca + " " + modelo + ".");
    }
}
// Clase principal para probar la creación de instancias
public class Principal {
    public static void main(String[] args) {
        // Creando una instancia de la clase Coche
        Coche miCoche = new Coche();
        // Inicializando los atributos de la instancia
        miCoche.marca = "Toyota";
        miCoche.modelo = "Corolla";
        // Llamando al método de la instancia
        miCoche.mostrarDetalles();
    }
}`
                    }
                ]
            },
            en: {
                definition: "The instance <strong>(instância)</strong> keyword in Java is the procedure necessary to create an object. Commonly known as creating a NEW instance of a Java class.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
// Defining the Person class
class Person {
    // Attributes of the Person class
    String name;
    int age;
    // Method of the Person class
    void introduce() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}
// Main class to test instance creation
public class Main {
    public static void main(String[] args) {
        // Creating an instance of the Person class
        Person person1 = new Person();
        // Initializing the attributes of the instance
        person1.name = "John";
        person1.age = 25;
        // Calling the method of the instance
        person1.introduce();
    }
}`
                    },
                    {
                        title: "Example 2: ",
                        code: `
// Defining the Car class
class Car {
    // Attributes of the Car class
    String make;
    String model;
    // Method of the Car class
    void displayDetails() {
        System.out.println("This is a " + make + " " + model + ".");
    }
}
// Main class to test instance creation
public class Main {
    public static void main(String[] args) {
        // Creating an instance of the Car class
        Car myCar = new Car();
        // Initializing the attributes of the instance
        myCar.make = "Toyota";
        myCar.model = "Corolla";
        // Calling the method of the instance
        myCar.displayDetails();
    }
}`
                    }
                ]
            }
        },
        "encapsulamento": {
            pt: {
                definition: "A palavra-chave <strong>encapsulamento</strong> em Java é a prática de esconder os detalhes de implementação de uma classe, e expor apenas uma interface pública para interagir com ela. Isso significa que os atributos de uma classe devem ser privados e o acesso a eles deve ser feito somente por meio de métodos públicos.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
// Definindo a classe Pessoa
class Pessoa {
    // Atributos privados
    private String nome;
    private int idade;  
    // Método getter para nome
    public String getNome() {
        return nome;
    }  
    // Método setter para nome
    public void setNome(String nome) {
        this.nome = nome;
    }  
    // Método getter para idade
    public int getIdade() {
        return idade;
    }   
    // Método setter para idade
    public void setIdade(int idade) {
        this.idade = idade;
    }
}
// Classe principal para testar o encapsulamento
public class Principal {
    public static void main(String[] args) {
        // Criando uma instância da classe Pessoa
        Pessoa pessoa1 = new Pessoa();        
        // Usando os setters para definir os atributos
        pessoa1.setNome("João");
        pessoa1.setIdade(30);        
        // Usando os getters para acessar os atributos
        System.out.println("Nome: " + pessoa1.getNome());
        System.out.println("Idade: " + pessoa1.getIdade());
    }
}`
                    },
                    {
                        title: "Exemplo 2: ",
                        code: `
// Definindo a classe ContaBancaria
class ContaBancaria {
    // Atributos privados
    private int numeroConta;
    private double saldo;
    
    // Método getter para numeroConta
    public int getNumeroConta() {
        return numeroConta;
    }    
    // Método setter para numeroConta
    public void setNumeroConta(int numeroConta) {
        this.numeroConta = numeroConta;
    }    
    // Método getter para saldo
    public double getSaldo() {
        return saldo;
    }    
    // Método setter para saldo
    public void depositar(double quantia) {
        if (quantia > 0) {
            saldo += quantia;
        }
    }    
    // Método para sacar dinheiro
    public boolean sacar(double quantia) {
        if (quantia > 0 && saldo >= quantia) {
            saldo -= quantia;
            return true;
        }
        return false;
    }
}
// Classe principal para testar o encapsulamento
public class Principal {
    public static void main(String[] args) {
        // Criando uma instância da classe ContaBancaria
        ContaBancaria minhaConta = new ContaBancaria();        
        // Usando os setters para definir os atributos
        minhaConta.setNumeroConta(12345);
        minhaConta.depositar(1000);        
        // Usando os getters para acessar os atributos
        System.out.println("Número da Conta: " + minhaConta.getNumeroConta());
        System.out.println("Saldo: " + minhaConta.getSaldo());     
        // Tentando sacar dinheiro
        if (minhaConta.sacar(200)) {
            System.out.println("Saque realizado com sucesso!");
        } else {
            System.out.println("Saldo insuficiente.");
        }    
        // Mostrando o saldo após o saque
        System.out.println("Saldo após saque: " + minhaConta.getSaldo());
    }
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave encapsulación <strong>(encapsulamento)</strong> en Java es la práctica de ocultar los detalles de implementación de una clase y exponer solo una interfaz pública para interactuar con ella. Esto significa que los atributos de una clase deben ser privados y el acceso a ellos sólo debe ser a través de métodos públicos.",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
// Definiendo la clase Persona
class Persona {
    // Atributos privados
    private String nombre;
    private int edad;  
    // Método getter para nombre
    public String getNombre() {
        return nombre;
    }    
    // Método setter para nombre
    public void setNombre(String nombre) {
        this.nombre = nombre;
    } 
    // Método getter para edad
    public int getEdad() {
        return edad;
    }    
    // Método setter para edad
    public void setEdad(int edad) {
        this.edad = edad;
    }
}
// Clase principal para probar el encapsulamiento
public class Principal {
    public static void main(String[] args) {
        // Creando una instancia de la clase Persona
        Persona persona1 = new Persona();       
        // Usando los setters para definir los atributos
        persona1.setNombre("Juan");
        persona1.setEdad(30);
        
        // Usando los getters para acceder a los atributos
        System.out.println("Nombre: " + persona1.getNombre());
        System.out.println("Edad: " + persona1.getEdad());
    }
}`
                    },
                    {
                        title: "Ejemplo 2: ",
                        code: `
// Definiendo la clase CuentaBancaria
class CuentaBancaria {
    // Atributos privados
    private int numeroCuenta;
    private double saldo;    
    // Método getter para numeroCuenta
    public int getNumeroCuenta() {
        return numeroCuenta;
    }    
    // Método setter para numeroCuenta
    public void setNumeroCuenta(int numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    }    
    // Método getter para saldo
    public double getSaldo() {
        return saldo;
    }    
    // Método para depositar dinero
    public void depositar(double cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
        }
    }    
    // Método para retirar dinero
    public boolean retirar(double cantidad) {
        if (cantidad > 0 && saldo >= cantidad) {
            saldo -= cantidad;
            return true;
        }
        return false;
    }
}
// Clase principal para probar el encapsulamiento
public class Principal {
    public static void main(String[] args) {
        // Creando una instancia de la clase CuentaBancaria
        CuentaBancaria miCuenta = new CuentaBancaria();        
        // Usando los setters para definir los atributos
        miCuenta.setNumeroCuenta(12345);
        miCuenta.depositar(1000);        
        // Usando los getters para acceder a los atributos
        System.out.println("Número de Cuenta: " + miCuenta.getNumeroCuenta());
        System.out.println("Saldo: " + miCuenta.getSaldo());        
        // Intentando retirar dinero
        if (miCuenta.retirar(200)) {
            System.out.println("¡Retiro realizado con éxito!");
        } else {
            System.out.println("Saldo insuficiente.");
        }       
        // Mostrando el saldo después del retiro
        System.out.println("Saldo después del retiro: " + miCuenta.getSaldo());
    }
}`
                    }
                ]
            },
            en: {
                definition: "The encapsulation <strong>(encapsulamento)</strong> keyword in Java is the practice of hiding the implementation details of a class, and exposing only a public interface to interact with it. This means that the attributes of a class must be private and access to them must only be through public methods.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
// Defining the Person class
class Person {
    // Private attributes
    private String name;
    private int age;   
    // Getter method for name
    public String getName() {
        return name;
    }    
    // Setter method for name
    public void setName(String name) {
        this.name = name;
    } 
    // Getter method for age
    public int getAge() {
        return age;
    }
    
    // Setter method for age
    public void setAge(int age) {
        this.age = age;
    }
}
// Main class to test encapsulation
public class Main {
    public static void main(String[] args) {
        // Creating an instance of the Person class
        Person person1 = new Person();        
        // Using setters to define the attributes
        person1.setName("John");
        person1.setAge(30);
        
        // Using getters to access the attributes
        System.out.println("Name: " + person1.getName());
        System.out.println("Age: " + person1.getAge());
    }
}`
                    },
                    {
                        title: "Example 2: ",
                        code: `
// Defining the BankAccount class
class BankAccount {
    // Private attributes
    private int accountNumber;
    private double balance;   
    // Getter method for accountNumber
    public int getAccountNumber() {
        return accountNumber;
    }    
    // Setter method for accountNumber
    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }   
    // Getter method for balance
    public double getBalance() {
        return balance;
    }
    // Method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    // Method to withdraw money
    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }
}
// Main class to test encapsulation
public class Main {
    public static void main(String[] args) {
        // Creating an instance of the BankAccount class
        BankAccount myAccount = new BankAccount();        
        // Using setters to define the attributes
        myAccount.setAccountNumber(12345);
        myAccount.deposit(1000);        
        // Using getters to access the attributes
        System.out.println("Account Number: " + myAccount.getAccountNumber());
        System.out.println("Balance: " + myAccount.getBalance());    
        // Trying to withdraw money
        if (myAccount.withdraw(200)) {
            System.out.println("Withdrawal successful!");
        } else {
            System.out.println("Insufficient balance.");
        }
        // Showing the balance after withdrawal
        System.out.println("Balance after withdrawal: " + myAccount.getBalance());
    }
}`
                    }
                ]
            }
        },
       "polimorfismo": {
            pt: {
                definition: "A palavra-chave <strong>polimorfismo</strong> em Java é um conceito fundamental na programação orientada a objetos que permite que uma interface ou um método possa ser utilizado para representar diferentes tipos de objetos. A palavra polimorfismo vem do grego e significa muitas formas. Em termos simples, o polimorfismo permite que você trate objetos de diferentes classes de uma maneira uniforme, facilitando a reutilização e a manutenção do código.",
                examples: [
                    {
                        title: "Exemplo 1: Polimorfismo através de Herança",
                        code: `
// Classe base
class Animal {
    void fazerSom() {
        System.out.println("O animal faz um som.");
    }
}
// Classe derivada Cachorro
class Cachorro extends Animal {
    @Override
    void fazerSom() {
        System.out.println("O cachorro late.");
    }
}
// Classe derivada Gato
class Gato extends Animal {
    @Override
    void fazerSom() {
        System.out.println("O gato mia.");
    }
}
// Classe principal para testar o polimorfismo
public class Principal {
    public static void main(String[] args) {
        Animal meuAnimal = new Cachorro(); // Polimorfismo
        meuAnimal.fazerSom(); // Saída: O cachorro late.
        
        meuAnimal = new Gato(); // Polimorfismo
        meuAnimal.fazerSom(); // Saída: O gato mia.
    }
}`
                    },
                    {
                        title: "Exemplo 2:  Polimorfismo através de Interfaces",
                        code: `
// Definindo a interface Forma
interface Forma {
    void desenhar();
}
// Implementação da interface Forma na classe Circulo
class Circulo implements Forma {
    @Override
    public void desenhar() {
        System.out.println("Desenhando um círculo.");
    }
}
// Implementação da interface Forma na classe Quadrado
class Quadrado implements Forma {
    @Override
    public void desenhar() {
        System.out.println("Desenhando um quadrado.");
    }
}
// Classe principal para testar o polimorfismo
public class Principal {
    public static void main(String[] args) {
        Forma minhaForma = new Circulo(); // Polimorfismo
        minhaForma.desenhar(); // Saída: Desenhando um círculo.
        
        minhaForma = new Quadrado(); // Polimorfismo
        minhaForma.desenhar(); // Saída: Desenhando um quadrado.
    }
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave <strong>polimorfismo</strong> en Java es un concepto fundamental en la programación orientada a objetos que permite utilizar una interfaz o método para representar diferentes tipos de objetos. La palabra polimorfismo proviene del griego y significa muchas formas. En términos simples, el polimorfismo le permite tratar objetos de diferentes clases de manera uniforme, haciendo que el código sea más fácil de reutilizar y mantener.",
                examples: [
                    {
                        title: "Ejemplo 1: Polimorfismo a través de Herencia",
                        code: `
// Clase base
class Animal {
    void hacerSonido() {
        System.out.println("El animal hace un sonido.");
    }
}

// Clase derivada Perro
class Perro extends Animal {
    @Override
    void hacerSonido() {
        System.out.println("El perro ladra.");
    }
}

// Clase derivada Gato
class Gato extends Animal {
    @Override
    void hacerSonido() {
        System.out.println("El gato maúlla.");
    }
}

// Clase principal para probar el polimorfismo
public class Principal {
    public static void main(String[] args) {
        Animal miAnimal;

        miAnimal = new Perro();
        miAnimal.hacerSonido(); // Salida: El perro ladra.

        miAnimal = new Gato();
        miAnimal.hacerSonido(); // Salida: El gato maúlla.
    }
}`
                    },
                    {
                        title: "Ejemplo 2: Polimorfismo a través de Interfaces",
                        code: `
// Definición de la interfaz Forma
interface Forma {
    void dibujar();
}

// Implementación de la interfaz Forma en la clase Circulo
class Circulo implements Forma {
    @Override
    public void dibujar() {
        System.out.println("Dibujando un círculo.");
    }
}

// Implementación de la interfaz Forma en la clase Cuadrado
class Cuadrado implements Forma {
    @Override
    public void dibujar() {
        System.out.println("Dibujando un cuadrado.");
    }
}

// Clase principal para probar el polimorfismo
public class Principal {
    public static void main(String[] args) {
        Forma miForma;

        miForma = new Circulo();
        miForma.dibujar(); // Salida: Dibujando un círculo.

        miForma = new Cuadrado();
        miForma.dibujar(); // Salida: Dibujando un cuadrado.
    }
}`
                    }
                ]
            },
            en: {
                definition: "The polymorphism<strong>(polimorfismo)</strong> keyword in Java is a fundamental concept in object-oriented programming that allows a single interface or method to represent different types of objects. The word polymorphism comes from the Greek, meaning many forms. Simply put, polymorphism allows you to treat objects of different classes in a uniform way, facilitating code reuse and maintenance.",
                examples: [
                    {
                        title: "Example 1: Polymorphism through Inheritance",
                        code: `
// Base class
class Animal {
    void makeSound() {
        System.out.println("The animal makes a sound.");
    }
}
// Derived class Dog
class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("The dog barks.");
    }
}
// Derived class Cat
class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("The cat meows.");
    }
}
// Main class to test polymorphism
public class Main {
    public static void main(String[] args) {
        Animal myAnimal;

        myAnimal = new Dog();
        myAnimal.makeSound(); // Output: The dog barks.

        myAnimal = new Cat();
        myAnimal.makeSound(); // Output: The cat meows.
    }
}`
                    },
                    {
                        title: "Example 2: Polymorphism through Interfaces",
                        code: `
// Definition of the Shape interface
interface Shape {
    void draw();
}
// Implementation of the Shape interface in the Circle class
class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle.");
    }
}
// Implementation of the Shape interface in the Square class
class Square implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a square.");
    }
}
// Main class to test polymorphism
public class Main {
    public static void main(String[] args) {
        Shape myShape;

        myShape = new Circle();
        myShape.draw(); // Output: Drawing a circle.

        myShape = new Square();
        myShape.draw(); // Output: Drawing a square.
    }
}`
                    }
                ]
            }
        },
        "abstração": {
            pt: {
                definition: "A palavra-chave <strong>abstração</strong> em Java é um princípio fundamental na programação orientada a objetos que permite que se foque nos aspectos essenciais de um objeto, ocultando os detalhes internos e a complexidade de sua implementação. Em Java, abstração é implementada através de classes abstratas e interfaces. Uma classe abstrata não pode ser instanciada diretamente e pode conter métodos abstratos (métodos sem implementação) que devem ser implementados pelas subclasses. As interfaces definem um conjunto de métodos que as classes devem implementar.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
// Classe abstrata Veiculo
abstract class Veiculo {
    private String marca;

    public Veiculo(String marca) {
        this.marca = marca;
    }
    public String getMarca() {
        return marca;
    }
    // Método abstrato
    public abstract void mover();
}
// Classe Carro que herda de Veiculo
class Carro extends Veiculo {
    public Carro(String marca) {
        super(marca);
    }

    @Override
    public void mover() {
        System.out.println("O carro está se movendo.");
    }
}
// Classe Bicicleta que herda de Veiculo
class Bicicleta extends Veiculo {
    public Bicicleta(String marca) {
        super(marca);
    }

    @Override
    public void mover() {
        System.out.println("A bicicleta está se movendo.");
    }
}
// Classe principal para testar a abstração
public class Principal {
    public static void main(String[] args) {
        Veiculo meuCarro = new Carro("Toyota");
        Veiculo minhaBicicleta = new Bicicleta("Giant");

        meuCarro.mover(); // Saída: O carro está se movendo.
        minhaBicicleta.mover(); // Saída: A bicicleta está se movendo.
    }
}`
                    },
                    {
                        title: "Exemplo 2: ",
                        code: `
// Definição da interface Animal
interface Animal {
    void emitirSom();
    void comer();
}
// Implementação da interface Animal na classe Cachorro
class Cachorro implements Animal {
    @Override
    public void emitirSom() {
        System.out.println("O cachorro late.");
    }

    @Override
    public void comer() {
        System.out.println("O cachorro está comendo.");
    }
}
// Implementação da interface Animal na classe Gato
class Gato implements Animal {
    @Override
    public void emitirSom() {
        System.out.println("O gato mia.");
    }

    @Override
    public void comer() {
        System.out.println("O gato está comendo.");
    }
}
// Classe principal para testar a abstração
public class Principal {
    public static void main(String[] args) {
        Animal meuCachorro = new Cachorro();
        Animal meuGato = new Gato();

        meuCachorro.emitirSom(); // Saída: O cachorro late.
        meuCachorro.comer(); // Saída: O cachorro está comendo.

        meuGato.emitirSom(); // Saída: O gato mia.
        meuGato.comer(); // Saída: O gato está comendo.
    }
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave abstracción <strong>(abstração)</strong> en Java  es un principio fundamental en la programación orientada a objetos que permite enfocarse en los aspectos esenciales de un objeto, ocultando los detalles internos y la complejidad de su implementación. En Java, la abstracción se implementa a través de clases abstractas e interfaces. Una clase abstracta no puede ser instanciada directamente y puede contener métodos abstractos (métodos sin implementación) que deben ser implementados por las subclases. Las interfaces definen un conjunto de métodos que las clases deben implementar.",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
// Clase abstracta Vehiculo
abstract class Vehiculo {
    private String marca;

    public Vehiculo(String marca) {
        this.marca = marca;
    }

    public String getMarca() {
        return marca;
    }

    // Método abstracto
    public abstract void mover();
}

// Clase Coche que hereda de Vehiculo
class Coche extends Vehiculo {
    public Coche(String marca) {
        super(marca);
    }

    @Override
    public void mover() {
        System.out.println("El coche se está moviendo.");
    }
}

// Clase Bicicleta que hereda de Vehiculo
class Bicicleta extends Vehiculo {
    public Bicicleta(String marca) {
        super(marca);
    }

    @Override
    public void mover() {
        System.out.println("La bicicleta se está moviendo.");
    }
}

// Clase principal para probar la abstracción
public class Principal {
    public static void main(String[] args) {
        Vehiculo miCoche = new Coche("Toyota");
        Vehiculo miBicicleta = new Bicicleta("Giant");

        miCoche.mover(); // Salida: El coche se está moviendo.
        miBicicleta.mover(); // Salida: La bicicleta se está moviendo.
    }
}`
                    },
                    {
                        title: "Ejemplo 2: ",
                        code: `
// Definición de la interfaz Animal
interface Animal {
    void emitirSonido();
    void comer();
}

// Implementación de la interfaz Animal en la clase Perro
class Perro implements Animal {
    @Override
    public void emitirSonido() {
        System.out.println("El perro ladra.");
    }

    @Override
    public void comer() {
        System.out.println("El perro está comiendo.");
    }
}

// Implementación de la interfaz Animal en la clase Gato
class Gato implements Animal {
    @Override
    public void emitirSonido() {
        System.out.println("El gato maúlla.");
    }

    @Override
    public void comer() {
        System.out.println("El gato está comiendo.");
    }
}

// Clase principal para probar la abstracción
public class Principal {
    public static void main(String[] args) {
        Animal miPerro = new Perro();
        Animal miGato = new Gato();

        miPerro.emitirSonido(); // Salida: El perro ladra.
        miPerro.comer(); // Salida: El perro está comiendo.

        miGato.emitirSonido(); // Salida: El gato maúlla.
        miGato.comer(); // Salida: El gato está comiendo.
    }
}`
                    }
                ]
            },
            en: {
                definition: "The abstraction <strong>(abstração)</strong> keyword in Java is a fundamental principle in object-oriented programming that allows focusing on the essential aspects of an object while hiding the internal details and complexity of its implementation. In Java, abstraction is implemented through abstract classes and interfaces. An abstract class cannot be instantiated directly and may contain abstract methods (methods without implementation) that must be implemented by subclasses. Interfaces define a set of methods that classes must implement.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
// Abstract class Vehicle
abstract class Vehicle {
    private String brand;

    public Vehicle(String brand) {
        this.brand = brand;
    }

    public String getBrand() {
        return brand;
    }

    // Abstract method
    public abstract void move();
}

// Car class that inherits from Vehicle
class Car extends Vehicle {
    public Car(String brand) {
        super(brand);
    }

    @Override
    public void move() {
        System.out.println("The car is moving.");
    }
}

// Bicycle class that inherits from Vehicle
class Bicycle extends Vehicle {
    public Bicycle(String brand) {
        super(brand);
    }

    @Override
    public void move() {
        System.out.println("The bicycle is moving.");
    }
}

// Main class to test abstraction
public class Main {
    public static void main(String[] args) {
        Vehicle myCar = new Car("Toyota");
        Vehicle myBicycle = new Bicycle("Giant");

        myCar.move(); // Output: The car is moving.
        myBicycle.move(); // Output: The bicycle is moving.
    }
}`
                    },
                    {
                        title: "Example 2: ",
                        code: `
// Definition of the Animal interface
interface Animal {
    void makeSound();
    void eat();
}

// Implementation of the Animal interface in the Dog class
class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog barks.");
    }

    @Override
    public void eat() {
        System.out.println("The dog is eating.");
    }
}

// Implementation of the Animal interface in the Cat class
class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows.");
    }

    @Override
    public void eat() {
        System.out.println("The cat is eating.");
    }
}

// Main class to test abstraction
public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound(); // Output: The dog barks.
        myDog.eat(); // Output: The dog is eating.

        myCat.makeSound(); // Output: The cat meows.
        myCat.eat(); // Output: The cat is eating.
    }
}`
                    }
                ]
            }
        },
        "c": {
            pt: {
                definition: "A linguagem de programação <strong>C</strong> é uma linguagem de programação de propósito geral e procedural, desenvolvida no início dos anos 1970 por Dennis Ritchie nos Laboratórios Bell. É uma das linguagens de programação mais amplamente usadas e serve como base para muitas outras linguagens, incluindo C++, C#, e Objective-C. C é conhecida por sua eficiência, controle e flexibilidade, sendo particularmente adequada para programação de sistemas, como desenvolvimento de sistemas operacionais, compiladores e sistemas embarcados.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
#include <stdio.h> // Arquivo de cabeçalho para funções de entrada/saída padrão
// Função principal - ponto de entrada de um programa em C
int main() {
    // Imprime uma mensagem no console
    printf("Olá, Mundo!");
    // Retorna 0 para indicar execução bem-sucedida
    return 0;
}`
                    },
                    {
                        title: "Exemplo 2: ",
                        code: `
#include <stdio.h>
int main() {
    float num1, num2, num3, media;
    // Lê três números do usuário
    printf("Digite três números: ");
    scanf("%f %f %f", &num1, &num2, &num3);
    // Calcula a média
    media = (num1 + num2 + num3) / 3;
    // Imprime a média
    printf("A média é: %.2f", media);
    return 0;
}`
                    }
                ]
            },
            es: {
                definition: "El lenguaje de programación C <strong>(c)</strong> es un lenguaje de programación de propósito general y procedural, desarrollado a principios de los años 1970 por Dennis Ritchie en los Laboratorios Bell. Es uno de los lenguajes de programación más ampliamente utilizados y sirve como base para muchos otros lenguajes, incluyendo C++, C#, y Objective-C. C es conocido por su eficiencia, control y flexibilidad, siendo particularmente adecuado para la programación de sistemas, como el desarrollo de sistemas operativos, compiladores y sistemas embebidos.",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
#include <stdio.h> // Archivo de encabezado para funciones de entrada/salida estándar
// Función principal - punto de entrada de un programa en C
int main() {
    // Imprime un mensaje en la consola
    printf("Hola, Mundo!");
    // Retorna 0 para indicar ejecución exitosa
    return 0;
}`
                    },
                    {
                        title: "Ejemplo 2: ",
                        code: `
#include <stdio.h>
int main() {
    float num1, num2, num3, promedio;
    // Lee tres números del usuario
    printf("Ingrese tres números: ");
    scanf("%f %f %f", &num1, &num2, &num3);
    // Calcula el promedio
    promedio = (num1 + num2 + num3) / 3;
    // Imprime el promedio
    printf("El promedio es: %.2f", promedio);
    return 0;
}`
                    }
                ]
            },
            en: {
                definition: "the C Programming Language <strong>(c)</strong> is a general-purpose, procedural programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It is one of the most widely used programming languages and serves as the foundation for many other languages, including C++, C#, and Objective-C. C is known for its efficiency, control, and flexibility, making it particularly well-suited for system programming, such as developing operating systems, compilers, and embedded systems.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
#include <stdio.h> // Header file for standard input/output functions
// Main function - the entry point of a C program
int main() {
    // Print a message to the console
    printf("Hello, World!");
    // Return 0 to indicate successful execution
    return 0;
}`
                    },
                    {
                        title: "Example 2: ",
                        code: `
#include <stdio.h>
int main() {
    float num1, num2, num3, average;
    // Read three numbers from the user
    printf("Enter three numbers: ");
    scanf("%f %f %f", &num1, &num2, &num3);
    // Calculate the average
    average = (num1 + num2 + num3) / 3;
    // Print the average
    printf("The average is: %.2f", average);
    return 0;
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
  printf("O valor de x é: %d", x);
  return 0;
}`
                  },
                  {
                      title: "Exemplo 2: ",
                      code: `
#include <stdio.h>
int main() {
  int y = 20; // Declaração implícita de variável local
  printf("O valor de y é: %d", y);
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
  printf("El valor de x es: %d", x);
  return 0;
}`
                  },
                  {
                      title: "Ejemplo 2: ",
                      code: `
#include <stdio.h>
int main() {
  int y = 20; // Declaración implícita de variable local
  printf("El valor de y es: %d", y);
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
  
  printf("The value of x is: %d", x);
  
  return 0;
}`
                  },
                  {
                      title: "Example 2: ",
                      code: `
#include <stdio.h>
int main() {
  int y = 20; // Implicit declaration of local variable
  
  printf("The value of y is: %d", y);
  
  return 0;
}`
                  }
              ]
          }
      },
      "variável": {
            pt: {
                definition: "A palavra-chave <strong>variável</strong> é um espaço na memória do computador que é identificado por um nome e usado para armazenar dados. Antes de usar uma variável em C, é necessário declará-la, especificando seu tipo e nome. As variáveis em C podem armazenar diferentes tipos de dados, como inteiros, números de ponto flutuante, caracteres, entre outros.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
#include <stdio.h>
int main() {
    int idade; // Declaração da variável idade
    idade = 25; // Atribuição de valor à variável idade
    
    printf("A idade é: %d", idade);   
    return 0;
}`
                    },
                    {
                        title: "Exemplo 2:",
                        code: `
#include <stdio.h>
int main() {
    char nome[20]; // Declaração da variável nome
    strcpy(nome, "João"); // Atribuição de valor à variável nome
    
    printf("O nome é: %s", nome);    
    return 0;
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave variable <strong>(variável)</strong> es un espacio en la memoria de la computadora que está identificado por un nombre y se utiliza para almacenar datos. Antes de utilizar una variable en C, es necesario declararla, especificando su tipo y nombre. Las variables en C pueden almacenar diferentes tipos de datos, como enteros, números de punto flotante, caracteres, entre otros.",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
#include <stdio.h>
int main() {
    int edad; // Declaración de la variable edad
    edad = 25; // Asignación de valor a la variable edad
    
    printf("La edad es: %d", edad);   
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
    
    printf("El nombre es: %s", nombre);    
    return 0;
}`
                    }
                ]
            },
            en: {
                definition: "The variable <strong>(variável)</strong> keyword is a space in the computer's memory that is identified by a name and used to store data. Before using a variable in C, it is necessary to declare it, specifying its type and name. Variables in C can store different types of data, such as integers, floating-point numbers, characters, among others.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
#include <stdio.h>
int main() {
    int age; // Declaration of the age variable
    age = 25; // Assigning value to the age variable
    
    printf("The age is: %d", age);    
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
    
    printf("The name is: %s", name);    
    return 0;
}`
                    }
                ]
            }
        },
        "struct": {
            pt: {
                definition: "Uma <strong>struct</strong> é uma abreviação de estrutura. Em C é uma construção de dados que permite agrupar diferentes tipos de dados sob um mesmo nome. Isso é útil para modelar objetos que possuem múltiplas propriedades. Cada elemento em uma struct é chamado de membro, e esses membros podem ser de diferentes tipos de dados. A struct permite agrupar esses diferentes tipos de dados de uma forma organizada.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
#include <stdio.h>
// Definição da estrutura Ponto
struct Ponto {
    int x;
    int y;
};
int main() {
    // Declaração e inicialização de uma variável do tipo struct Ponto
    struct Ponto p1;
    p1.x = 10;
    p1.y = 20;
    // Acessando e imprimindo os membros da struct
    printf("Ponto p1: (%d, %d)", p1.x, p1.y);
    return 0;
}`
                    },
                    {
                        title: "Exemplo 2: ",
                        code: `
#include <stdio.h>

// Definição da estrutura Aluno
struct Aluno {
    char nome[50];
    int idade;
    float media;
};

int main() {
    // Declaração e inicialização de uma variável do tipo struct Aluno
    struct Aluno aluno1;
    // Inicializando os membros da struct
    aluno1.idade = 20;
    aluno1.media = 8.5;
    snprintf(aluno1.nome, sizeof(aluno1.nome), "João");
    // Acessando e imprimindo os membros da struct
    printf("Nome do Aluno: %s", aluno1.nome);
    printf("Idade do Aluno: %d", aluno1.idade);
    printf("Média do Aluno: %.2f", aluno1.media);
    return 0;
}`
                    }
                ]
            },
            es: {
                definition: "Una <strong>struct</strong> es una abreviatura de estructura. En C es una construcción de datos que permite agrupar diferentes tipos de datos bajo un mismo nombre. Esto es útil para modelar objetos que tienen múltiples propiedades. Cada elemento en una struct se llama miembro, y estos miembros pueden ser de diferentes tipos de datos. La struct permite agrupar estos diferentes tipos de datos de una forma organizada.",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
#include <stdio.h>
// Definición de la estructura Punto
struct Punto {
    int x;
    int y;
};

int main() {
    // Declaración e inicialización de una variable del tipo struct Punto
    struct Punto p1;
    p1.x = 10;
    p1.y = 20;
    // Accediendo e imprimiendo los miembros de la struct
    printf("Punto p1: (%d, %d)\n", p1.x, p1.y);
    return 0;
}`
                    },
                    {
                        title: "Ejemplo 2: ",
                        code: `
#include <stdio.h>
// Definición de la estructura Estudiante
struct Estudiante {
    char nombre[50];
    int edad;
    float promedio;
};

int main() {
    // Declaración e inicialización de una variable del tipo struct Estudiante
    struct Estudiante estudiante1;
    // Inicializando los miembros de la struct
    estudiante1.edad = 20;
    estudiante1.promedio = 8.5;
    snprintf(estudiante1.nombre, sizeof(estudiante1.nombre), "Juan");
    // Accediendo e imprimiendo los miembros de la struct
    printf("Nombre del Estudiante: %s", estudiante1.nombre);
    printf("Edad del Estudiante: %d", estudiante1.edad);
    printf("Promedio del Estudiante: %.2f", estudiante1.promedio);
    return 0;
}`
                    }
                ]
            },
            en: {
                definition: "A <strong>struct</strong> is a short for structure. In C is a data construct that allows grouping different types of data under a single name. This is useful for modeling objects that have multiple properties. Each element in a struct is called a member, and these members can be of different data types. The struct enables organizing these different data types in a cohesive manner.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
#include <stdio.h>
// Definition of the Point structure
struct Point {
    int x;
    int y;
};

int main() {
    // Declaration and initialization of a variable of type struct Point
    struct Point p1;
    p1.x = 10;
    p1.y = 20;
    // Accessing and printing the members of the struct
    printf("Point p1: (%d, %d)", p1.x, p1.y);
    return 0;
}`
                    },
                    {
                        title: "Example 2: ",
                        code: `
#include <stdio.h>
// Definition of the Student structure
struct Student {
    char name[50];
    int age;
    float gpa;
};

int main() {
    // Declaration and initialization of a variable of type struct Student
    struct Student student1;
    // Initializing the members of the struct
    student1.age = 20;
    student1.gpa = 3.8;
    snprintf(student1.name, sizeof(student1.name), "Alice");
    // Accessing and printing the members of the struct
    printf("Student Name: %s", student1.name);
    printf("Student Age: %d", student1.age);
    printf("Student GPA: %.2f", student1.gpa);
    return 0;
}`
                    }
                ]
            }
        },
        "sizeof": {
            pt: {
                definition: "A palavra-chave <strong>sizeof</strong> em C é um operador que retorna o tamanho, em bytes, de uma variável ou tipo de dado. Esse operador é utilizado para determinar a quantidade de memória alocada para diferentes tipos de dados e estruturas. O valor retornado pelo operador sizeof é do tipo size_t, um tipo de dado definido em <stddef.h>.",
                examples: [
                    {
                        title: "Exemplo 1: ",
                        code: `
#include <stdio.h>
int main() {
    printf("Tamanho de int: %zu bytes", sizeof(int));
    printf("Tamanho de float: %zu bytes", sizeof(float));
    printf("Tamanho de double: %zu bytes", sizeof(double));
    printf("Tamanho de char: %zu bytes", sizeof(char));
    return 0;
}`
                    },
                    {
                        title: "Exemplo 2: ",
                        code: `
#include <stdio.h>
// Definição da estrutura Pessoa
struct Pessoa {
    char nome[50];
    int idade;
    float altura;
};

int main() {
    struct Pessoa pessoa1;
    printf("Tamanho da struct Pessoa: %zu bytes", sizeof(struct Pessoa));
    printf("Tamanho de pessoa1: %zu bytes", sizeof(pessoa1));
    return 0;
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave <strong>sizeof</strong> en C es un operador que devuelve el tamaño, en bytes, de una variable o tipo de dato. Este operador se utiliza para determinar la cantidad de memoria asignada a diferentes tipos de datos y estructuras. El valor devuelto por el operador sizeof es del tipo size_t, un tipo de dato definido en <stddef.h>.",
                examples: [
                    {
                        title: "Ejemplo 1: ",
                        code: `
#include <stdio.h>
int main() {
    printf("Tamaño de int: %zu bytes", sizeof(int));
    printf("Tamaño de float: %zu bytes", sizeof(float));
    printf("Tamaño de double: %zu bytes", sizeof(double));
    printf("Tamaño de char: %zu bytes", sizeof(char));
    return 0;
}`
                    },
                    {
                        title: "Ejemplo 2: ",
                        code: `
#include <stdio.h>
// Definición de la estructura Persona
struct Persona {
    char nombre[50];
    int edad;
    float altura;
};

int main() {
    struct Persona persona1;
    printf("Tamaño de struct Persona: %zu bytes", sizeof(struct Persona));
    printf("Tamaño de persona1: %zu bytes", sizeof(persona1));
    return 0;
}`
                    }
                ]
            },
            en: {
                definition: "The <strong>sizeof</strong> keyword in C is an operator that returns the size, in bytes, of a variable or data type. This operator is used to determine the amount of memory allocated for different data types and structures. The value returned by the sizeof operator is of type size_t, a data type defined in <stddef.h>.",
                examples: [
                    {
                        title: "Example 1: ",
                        code: `
#include <stdio.h>
int main() {
    printf("Size of int: %zu bytes", sizeof(int));
    printf("Size of float: %zu bytes", sizeof(float));
    printf("Size of double: %zu bytes", sizeof(double));
    printf("Size of char: %zu bytes", sizeof(char));
    return 0;
}`
                    },
                    {
                        title: "Example 2: ",
                        code: `
#include <stdio.h>
// Definition of the Person structure
struct Person {
    char name[50];
    int age;
    float height;
};

int main() {
    struct Person person1;
    printf("Size of struct Person: %zu bytes", sizeof(struct Person));
    printf("Size of person1: %zu bytes", sizeof(person1));
    return 0;
}`
                    }
                ]
            }
        },
        "queue": {
            pt: {
                definition: "A palavra-chave <strong>queue</strong>  significa  fila em português. Fila é uma estrutura de dados que segue o princípio FIFO (First In, First Out), ou seja, o primeiro elemento inserido é o primeiro a ser removido. As filas são usadas em várias aplicações, como gerenciamento de processos em sistemas operacionais, manipulação de tarefas em impressão e simulações de filas de espera. Temos: Fila Estática: é implementada usando um array de tamanho fixo. Esse tipo de fila tem um limite superior no número de elementos que pode armazenar. Fila Dinâmica: é implementada usando estruturas de dados dinâmicas, como listas encadeadas, que podem crescer conforme necessário.",
                examples: [
                    {
                        title: "Exemplo 1: Fila Estática. ",
                        code: `
#include <stdio.h>
#include <stdlib.h>
#define MAX 5  // Definindo o tamanho máximo da fila

typedef struct {
    int itens[MAX];
    int frente, tras;
} FilaEstatica;
void inicializaFila(FilaEstatica *f) {
    f->frente = 0;
    f->tras = -1;
}
int estaVazia(FilaEstatica *f) {
    return f->tras < f->frente;
}
int estaCheia(FilaEstatica *f) {
    return f->tras == MAX - 1;
}
void enfileirar(FilaEstatica *f, int valor) {
    if (estaCheia(f)) {
        printf("Fila cheia!");
    } else {
        f->tras++;
        f->itens[f->tras] = valor;
    }
}
int desenfileirar(FilaEstatica *f) {
    if (estaVazia(f)) {
        printf("Fila vazia!");
        return -1;
    } else {
        int valor = f->itens[f->frente];
        f->frente++;
        return valor;
    }
}
int main() {
    FilaEstatica fila;
    inicializaFila(&fila);

    enfileirar(&fila, 10);
    enfileirar(&fila, 20);
    enfileirar(&fila, 30);

    printf("Removido: %d", desenfileirar(&fila));
    printf("Removido: %d", desenfileirar(&fila));
    return 0;
}`
                    },
                    {
                        title: "Exemplo 2: Fila Dinâmica ",
                        code: `
#include <stdio.h>
#include <stdlib.h>
typedef struct Nodo {
    int valor;
    struct Nodo *proximo;
} Nodo;
typedef struct {
    Nodo *frente, *tras;
} FilaDinamica;
void inicializaFila(FilaDinamica *f) {
    f->frente = NULL;
    f->tras = NULL;
}
int estaVazia(FilaDinamica *f) {
    return f->frente == NULL;
}
void enfileirar(FilaDinamica *f, int valor) {
    Nodo *novoNodo = (Nodo*)malloc(sizeof(Nodo));
    if (novoNodo == NULL) {
        printf("Memória insuficiente!");
        return;
    }
    novoNodo->valor = valor;
    novoNodo->proximo = NULL;
    if (estaVazia(f)) {
        f->frente = novoNodo;
    } else {
        f->tras->proximo = novoNodo;
    }
    f->tras = novoNodo;
}
int desenfileirar(FilaDinamica *f) {
    if (estaVazia(f)) {
        printf("Fila vazia!");
        return -1;
    } else {
        Nodo *temp = f->frente;
        int valor = temp->valor;
        f->frente = f->frente->proximo;
        if (f->frente == NULL) {
            f->tras = NULL;
        }
        free(temp);
        return valor;
    }
}
int main() {
    FilaDinamica fila;
    inicializaFila(&fila);
    enfileirar(&fila, 10);
    enfileirar(&fila, 20);
    enfileirar(&fila, 30);
    printf("Removido: %d", desenfileirar(&fila));
    printf("Removido: %d", desenfileirar(&fila));
    return 0;
}`
                    }
                ]
            },
            es: {
                definition: "La palabra clave <strong>queue</strong> significa cola en español. La cola es una estructura de datos que sigue el principio FIFO (primero en entrar, primero en salir), es decir, el primer elemento insertado es el primero en eliminarse. Las colas se utilizan en diversas aplicaciones, como la gestión de procesos en sistemas operativos, la gestión de trabajos en impresión y simulaciones de colas. Tenemos: Cola Estática: se implementa utilizando una matriz de tamaño fijo. Este tipo de cola tiene un límite superior en la cantidad de elementos que puede almacenar. Cola Dinámica: se implementa utilizando estructuras de datos dinámicas, como listas vinculadas, que pueden crecer según sea necesario.",
                examples: [
                    {
                        title: "Ejemplo 1: Cola Estática ",
                        code: `
#include <stdio.h>
#include <stdlib.h>
#define MAX 5  // Definiendo el tamaño máximo de la cola
typedef struct {
    int items[MAX];
    int frente, atras;
} ColaEstatica;
void inicializaCola(ColaEstatica *c) {
    c->frente = 0;
    c->atras = -1;
}
int estaVacia(ColaEstatica *c) {
    return c->atras < c->frente;
}
int estaLlena(ColaEstatica *c) {
    return c->atras == MAX - 1;
}
void encolar(ColaEstatica *c, int valor) {
    if (estaLlena(c)) {
        printf("¡Cola llena!\n");
    } else {
        c->atras++;
        c->items[c->atras] = valor;
    }
}
int desencolar(ColaEstatica *c) {
    if (estaVacia(c)) {
        printf("¡Cola vacía!");
        return -1;
    } else {
        int valor = c->items[c->frente];
        c->frente++;
        return valor;
    }
}
int main() {
    ColaEstatica cola;
    inicializaCola(&cola);

    encolar(&cola, 10);
    encolar(&cola, 20);
    encolar(&cola, 30);
    printf("Removido: %d", desencolar(&cola));
    printf("Removido: %d", desencolar(&cola));
    return 0;
}`
                    },
                    {
                        title: "Ejemplo 2: Cola Dinámica ",
                        code: `
#include <stdio.h>
#include <stdlib.h>

typedef struct Nodo {
    int valor;
    struct Nodo *siguiente;
} Nodo;
typedef struct {
    Nodo *frente, *atras;
} ColaDinamica;
void inicializaCola(ColaDinamica *c) {
    c->frente = NULL;
    c->atras = NULL;
}
int estaVacia(ColaDinamica *c) {
    return c->frente == NULL;
}
void encolar(ColaDinamica *c, int valor) {
    Nodo *nuevoNodo = (Nodo*)malloc(sizeof(Nodo));
    if (nuevoNodo == NULL) {
        printf("¡Memoria insuficiente!\n");
        return;
    }
    nuevoNodo->valor = valor;
    nuevoNodo->siguiente = NULL;
    if (estaVacia(c)) {
        c->frente = nuevoNodo;
    } else {
        c->atras->siguiente = nuevoNodo;
    }
    c->atras = nuevoNodo;
}
int desencolar(ColaDinamica *c) {
    if (estaVacia(c)) {
        printf("¡Cola vacía!");
        return -1;
    } else {
        Nodo *temp = c->frente;
        int valor = temp->valor;
        c->frente = c->frente->siguiente;
        if (c->frente == NULL) {
            c->atras = NULL;
        }
        free(temp);
        return valor;
    }
}
int main() {
    ColaDinamica cola;
    inicializaCola(&cola);

    encolar(&cola, 10);
    encolar(&cola, 20);
    encolar(&cola, 30);
    printf("Removido: %d", desencolar(&cola));
    printf("Removido: %d", desencolar(&cola));
    return 0;
}`
                    }
                ]
            },
            en: {
                definition: "The <strong>queue</strong> keyword is a data structure that follows the FIFO (First In, First Out) principle, that is, the first element inserted is the first to be removed. Queues are used in various applications, such as process management in operating systems, job handling in printing, and queue simulations. We have: Static Queue: is implemented using a fixed-size array. This type of queue has an upper limit on the number of elements it can store. Dynamic Queue: is implemented using dynamic data structures such as linked lists, which can grow as needed.",
                examples: [
                    {
                        title: "Example 1: Static Queue",
                        code: `
#include <stdio.h>
#include <stdlib.h>
#define MAX 5  // Defining the maximum size of the queue

typedef struct {
    int items[MAX];
    int front, rear;
} StaticQueue;

void initializeQueue(StaticQueue *q) {
    q->front = 0;
    q->rear = -1;
}
int isEmpty(StaticQueue *q) {
    return q->rear < q->front;
}
int isFull(StaticQueue *q) {
    return q->rear == MAX - 1;
}
void enqueue(StaticQueue *q, int value) {
    if (isFull(q)) {
        printf("Queue is full!\n");
    } else {
        q->rear++;
        q->items[q->rear] = value;
    }
}
int dequeue(StaticQueue *q) {
    if (isEmpty(q)) {
        printf("Queue is empty!");
        return -1;
    } else {
        int value = q->items[q->front];
        q->front++;
        return value;
    }
}
int main() {
    StaticQueue queue;
    initializeQueue(&queue);
    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    printf("Removed: %d", dequeue(&queue));
    printf("Removed: %d", dequeue(&queue));
    return 0;
}`
                    },
                    {
                        title: "Example 2: Dynamic Queue",
                        code: `
#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int value;
    struct Node *next;
} Node;
typedef struct {
    Node *front, *rear;
} DynamicQueue;
void initializeQueue(DynamicQueue *q) {
    q->front = NULL;
    q->rear = NULL;
}
int isEmpty(DynamicQueue *q) {
    return q->front == NULL;
}
void enqueue(DynamicQueue *q, int value) {
    Node *newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("Insufficient memory!\n");
        return;
    }
    newNode->value = value;
    newNode->next = NULL;
    if (isEmpty(q)) {
        q->front = newNode;
    } else {
        q->rear->next = newNode;
    }
    q->rear = newNode;
}
int dequeue(DynamicQueue *q) {
    if (isEmpty(q)) {
        printf("Queue is empty!");
        return -1;
    } else {
        Node *temp = q->front;
        int value = temp->value;
        q->front = q->front->next;
        if (q->front == NULL) {
            q->rear = NULL;
        }
        free(temp);
        return value;
    }
}
int main() {
    DynamicQueue queue;
    initializeQueue(&queue);
    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    printf("Removed: %d", dequeue(&queue));
    printf("Removed: %d", dequeue(&queue));
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



