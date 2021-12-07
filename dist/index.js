"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
let world = 'world';
let bob = document.querySelector("body");
bob.style.backgroundColor = "green";
function hello(kek = world) {
    return `Hello ${kek}! `;
}
exports.hello = hello;
//# sourceMappingURL=index.js.map