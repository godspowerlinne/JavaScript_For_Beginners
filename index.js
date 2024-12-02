const list = document.querySelector('.slider .list');
const listItem = document.querySelectorAll('.slider .list .item');
const dots = document.querySelectorAll('.slider .dots li');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const firstItem = document.querySelector('#1');
const secondItem = document.querySelector('#2');
const thirdItem = document.querySelector('#3');
const forthItem = document.querySelector('#4');
const fifthItem = document.querySelector('#5');
const sixthItem = document.querySelector('#6');
const seventhItem = document.querySelector('#7');
const eighthItem = document.querySelector('#8');
myItemArray = [
  firstItem,
  secondItem,
  thirdItem,
  forthItem,
  fifthItem,
  sixthItem,
  seventhItem,
  eighthItem,
];

nextBtn.addEventListener('click', () => {
  const currentItemIndex = myItemArray.indexOf(list.querySelector('.dot li.active'));
  if (currentItemIndex < myItemArray.length - 1) {
    // list.querySelector('.dot li.active').classList.remove('.dot li.active');
    // myItemArray[currentItemIndex + 1].classList.add('.dot li.active');
    // dots[currentItemIndex + 1].classList.add('.dot li.active');
  }
});
