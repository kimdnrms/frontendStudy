////////////////////////////// Base ///////////////////////////////////// 
console.log('........ Base ........');

let count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열
// messages.push(1); // 숫자 넣으려고 하면.. 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

// let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
// color = 'yellow';
// color = 'green'; // 에러 발생

////////////////////////////// function ///////////////////////////////////// 
console.log('........ function ........');

function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(1, 2));


function sumTen(x: number, y: number): number | null {
  if (x + y > 10) {
    return null;
  }
  return x + y;
  // return null;
}
console.log(sumTen(1, 2));
console.log(sumTen(10, 2));

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

////////////////////////////// interface ///////////////////////////////////// 
console.log('........ interface ........');

// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.

  radius: number; // 멤버 변수 radius 값을 설정합니다.

  constructor(radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius); // 에러 없이 작동
// console.log(rectangle.width); // width 가 private 이기 때문에 에러 발생!

// interface Person {
//   name: string;
//   age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// }
// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }

// const person: Person = {
//   name: '김사람',
//   age: 20
// };

// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react']
// };

////////////////////
// interface Person {
//   name: string;
//   age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// }
// interface Developer extends Person {
//   skills: string[];
// }

// const person: Person = {
//   name: '김사람',
//   age: 20
// };

// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react']
// };

// const people: Person[] = [person, expert];

////////////////////
type Person = {
  name: string;
  age?: number;
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name:'김개발'
}

const expert: Developer = {
  name:'김개발',
  skills: ['javascript', 'react']
}

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

/*****************************
type 과 interface는 용도 상관 없이 일관성 있게만 쓰시면 됩니다. 구
버전의 타입스크립트에서는 type 과 interface 의 차이가 많이 존재했었는데 이제는 큰 차이는 없습니다. 
다만 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성하게 될 때는 interface를 사용하는것이 권장 되고 있습니다.
********************************/

////////////////////////////// generics ///////////////////////////////////// 
console.log('........ generics ........');
