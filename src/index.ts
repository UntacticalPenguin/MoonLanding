let world = 'world';
document.body.style.backgroundColor = "green";

export function hello(kek = world): string {
  return `Hello ${kek}! `;
}