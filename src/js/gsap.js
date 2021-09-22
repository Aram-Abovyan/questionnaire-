import { gsap, Draggable } from 'gsap/all';

gsap.registerPlugin(Draggable);

export const setRandomMovementTo = (selector) => {
  const tl = gsap.timeline()
    .to(selector,{
      x: "random(-20, 20, 5)",
      y: "random(-20, 10, 3)",
      duration:1,
      ease:"none",
      repeat:-1,
      repeatRefresh:true,
    });

  return tl;
};

export const makeDraggable = (selector, onDragEnd, onDragStart) => {
  Draggable.create(selector, {
    onDragEnd,
    onDragStart,
  });
};