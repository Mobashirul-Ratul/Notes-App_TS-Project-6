const container = document.querySelector('.container');
const col = document.querySelector('.col');

document.getElementById('btn').addEventListener(`click`, () => {
  const div = document.createElement('div');
  const textarea = document.createElement('textarea');

  div.classList.add('div_style');
  textarea.classList.add('textarea_style');

  div.appendChild(textarea);
  div.innerHTML += `<i class="fa-solid fa-copy my_copyIcon"></i><i class="fa-solid fa-trash my_icon"></i>
  `;

  col.appendChild(div);


  document.querySelectorAll('.my_copyIcon').forEach(e => {
    e.addEventListener(`click`, e => {
      navigator.clipboard.writeText(e.target.previousElementSibling.value);
      e.target.classList = 'fa-solid fa-check my_copyIcon';
      setTimeout(() => {
        e.target.classList = 'fa-solid fa-copy my_copyIcon';
      }, 1000);
    });
  });

  document.querySelectorAll('.my_icon').forEach(e =>
    e.addEventListener(`click`, e => {
      e.target.parentElement.remove();
    }),
  );
});




document.querySelector(`.col`).addEventListener(`click`, e => {
  let elements = document.querySelectorAll(`.div_style`);
 
  e.target.id = new Date().getTime();

  elements.forEach(x => {
    console.log(e.target);
    console.log(x);
    e.target.classList.add('color');
    
  });

});



