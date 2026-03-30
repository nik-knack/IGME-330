// const add = (a: string, b: string): string => {
//   return (a + b);  // unknown: could be any and all values
// }

// const message: string = add('1', '2');  // string not a number

// console.log(message);

// npm install to reintsall node_modules
// npm run dev to run vite project on browser

type GameEvents = 'key_press' | 'mouse_press' | 'point_gained' | 'bullet_collision';  // doesn't compile 
// // | type union operator

let evt: GameEvents = 'key_press';

type KeyPressEvent = {
  type: 'key_press',
  key: string,
  times: number
}

const keypressEvent: KeyPressEvent = {
  type: 'key_press',
  times: 34,
  key: 'A'
}