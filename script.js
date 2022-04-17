const fnmap = {
  toggle: 'toggle',
  show: 'add',
  hide: 'remove',
};

const closeOthers = (openSection) => {
  const sections = Array.from(document.querySelectorAll('.close'));
  sections.forEach((section) => {
    if (section != openSection) {
      section.classList.remove('show');
    }
  });
};

const closer = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach((target) => {
    closeOthers(target);
    target.classList[fnmap[cmd]]('show');
  });
};

const listeners = () => {
  const triggers = Array.from(
    document.querySelectorAll('[data-toggle="close"]')
  );
  window.addEventListener(
    'click',
    (e) => {
      const elem = e.target;
      if (triggers.includes(elem)) {
        const selector = elem.getAttribute('data-target');
        closer(selector, 'toggle');
      }
    },
    false
  );
};
listeners();
