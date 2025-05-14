export default function createInputSystem(buttonSelector = '.btn') {
  const downKeys = new Set();
  const pressedKeys = new Set();

  const keyMap = {
    w: 'w', a: 'a', s: 's', d: 'd',
  };

  function handleDown(key) {
    if (!downKeys.has(key)) {
      pressedKeys.add(key);
    }
    downKeys.add(key);
  }

  function handleUp(key) {
    downKeys.delete(key);
    pressedKeys.delete(key);
  }

  // Teclado
  function onKeyDown(e) {
    if (keyMap[e.key]) handleDown(e.key);
  }

  function onKeyUp(e) {
    if (keyMap[e.key]) handleUp(e.key);
  }

  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  // Touch
  const buttons = document.querySelectorAll(buttonSelector);
  buttons.forEach(btn => {
    const dir = btn.dataset.dir;
    btn.addEventListener("touchstart", e => {
      e.preventDefault();
      handleDown(dir);
    });
    btn.addEventListener("touchend", e => {
      e.preventDefault();
      handleUp(dir);
    });
  });

  return {
    isDown: key => downKeys.has(key),
    isPressed: key => pressedKeys.has(key),
    update: () => pressedKeys.clear(),
    destroy: () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    }
  };
}