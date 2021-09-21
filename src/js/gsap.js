import { gsap, Draggable } from 'gsap/all';

gsap.registerPlugin(Draggable);

export const setRandomMovementTo = (selector) => {
  gsap.timeline()
    .to(selector,{
      x: "random(-20, 20, 5)",
      y: "random(-20, 10, 3)",
      duration:1,
      ease:"none",
      repeat:-1,
      repeatRefresh:true,
    });
};

export const makeDraggable = (selector) => {
  Draggable.create(selector, {
    bounds: 'body',
  });
};