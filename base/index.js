const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');

const removeListItem = (e) => {
  const item = e.target;
  // item.style.display = 'none';
  item.remove();
};

//DOCUMENT LOAD
document
  .querySelectorAll('.list .list-item')
  .forEach((item) => (item.onclick = removeListItem));

addBtn.onclick = (e) => {
  const item = document.createElement('div');
  item.classList.add('list-item');
  item.innerHTML = 'List Item';
  addBtn.parentNode.insertBefore(item, addBtn);
  item.onclick = removeListItem;
};
