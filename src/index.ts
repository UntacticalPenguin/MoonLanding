let world = 'world';
let bob = document.querySelector("body")
bob.style.backgroundColor = "green";

export function hello(kek = world): string {
  return `Hello ${kek}! `;
}