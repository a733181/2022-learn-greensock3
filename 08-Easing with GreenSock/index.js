// delay延遲播放
// repeat重複 (-1為永久重複)
// yoyo 重複方向 (from => to)
// ease 移動速度
gsap.to('.black', {
  duration: 1,
  x: 600,
  repeat: 3,
  yoyo: true,
  ease: 'linear',
});
// ease => https://greensock.com/docs/v3/Eases
// 最後彈
// gsap.to('.white', { duration: 1, x: 600, delay: 1, ease: 'bounce' });
// 一開始彈
// gsap.to('.white', { duration: 1, x: 600, delay: 1, ease: 'bounce.in' });
// 開始跟最後都彈
// gsap.to('.white', { duration: 1, x: 600, delay: 1, ease: 'bounce.inOut' });
// 類似橡皮筋效果
// gsap.to('.white', { duration: 1, x: 600, delay: 1, ease: 'elastic' });
// 超過後回彈 back(數字) 數字這邊是指要超過多少
gsap.to('.white', { duration: 1, x: 600, delay: 1, ease: 'back(5)' });
