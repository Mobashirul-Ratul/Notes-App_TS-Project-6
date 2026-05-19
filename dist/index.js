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
        e.addEventListener(`click`, (e) => {
            let target = e.target;
            navigator.clipboard.writeText(target.previousElementSibling.value);
            target.classList = 'fa-solid fa-check my_copyIcon';
            setTimeout(() => {
                target.classList = 'fa-solid fa-copy my_copyIcon';
            }, 1000);
        });
    });
    document.querySelectorAll('.my_icon').forEach(e => e.addEventListener(`click`, e => {
        let target = e.target;
        target.parentElement.remove();
    }));
});
col.addEventListener(`click`, e => {
    let elements = document.querySelectorAll(`.div_style`);
    let target = e.target;
    target.id = String(new Date().getTime());
    elements.forEach(x => {
        let target = e.target;
        target.classList.add('color');
    });
});
export {};
//# sourceMappingURL=index.js.map