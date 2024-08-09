
let linkDrop = document.querySelector('.link-drop');
let dropDownLst = document.querySelector('.drop-down-lst');


linkDrop.addEventListener('click', () => {
    dropDownLst.classList.toggle('show');
});