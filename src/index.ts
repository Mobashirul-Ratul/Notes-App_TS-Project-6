

const col = document.querySelector('.col') as HTMLDivElement;

(document.getElementById('btn') as HTMLButtonElement).addEventListener(`click`, () => {
  const div = document.createElement('div') as HTMLDivElement;
  const textarea = document.createElement('textarea') as HTMLTextAreaElement;

  div.classList.add('div_style');
  textarea.classList.add('textarea_style');

  div.appendChild(textarea);
  div.innerHTML += `<i class="fa-solid fa-copy my_copyIcon"></i><i class="fa-solid fa-trash my_icon"></i>
  `;

  col.appendChild(div);

  (document.querySelectorAll('.my_copyIcon') as NodeListOf<Element>).forEach(e => {

   (e as HTMLElement).addEventListener(`click`, (e) => {
   
     let target = e.target as HTMLElement;
      navigator.clipboard.writeText((target.previousElementSibling as HTMLInputElement).value);
      target.classList = 'fa-solid fa-check my_copyIcon';
      setTimeout(() => {
        target.classList = 'fa-solid fa-copy my_copyIcon';
      }, 1000);
    });
  });

  document.querySelectorAll('.my_icon').forEach(e =>
    e.addEventListener(`click`, e => {
      let target = e.target as HTMLElement;
      (target.parentElement as HTMLElement).remove();
    }),
  );
});

col.addEventListener(`click`, e => {
  let elements = document.querySelectorAll(`.div_style`) as NodeListOf<Element>;

    let target = e.target as HTMLElement;

  target.id = String(new Date().getTime());

  elements.forEach(x => {
    let target = e.target as HTMLElement;
   target.classList.add('color');
  });
});
