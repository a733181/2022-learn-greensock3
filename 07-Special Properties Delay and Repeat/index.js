// delay延遲播放
// repeat重複 (-1為永久重複)
// yoyo 重複方向 (from => to)
gsap.to('.black', { duration: 1, x: 600, repeat: 3, yoyo: true });
gsap.to('.white', { duration: 1, x: 600, delay: 1 });
