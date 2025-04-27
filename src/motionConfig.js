// original directory: src/motionConfig.js
export const pageVariants = {
    initial: { x: '100vw', opacity: 0 },
    in:      { x:   0,    opacity: 1 },
    out:     { x: '-100vw',opacity: 0 }
  };
  export const pageTransition = {
    type: 'spring',
    stiffness: 100,
    damping: 20
  };
  
