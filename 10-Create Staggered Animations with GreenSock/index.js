// stagger 補間、交錯
// each 每個

// gsap.to('img', { x: 100, stagger: 0.1 });

// amount 每個元件平均分配時間 單位秒
// (例如有五個元件，時間為一秒，一秒時間平均分配給每一個元件)
// gsap.to('img', {
//   x: 100,
//   stagger: {
//     amount: 1,
//   },
// });

// each 每個
// from 從何開始
// (end => 尾端)
// (center => 中間)
// (edges => 從兩旁到中間)
gsap.to('img', {
  x: 100,
  stagger: {
    each: 0.2,
    from: 'edges', // end,center,edges
  },
});
