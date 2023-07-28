const listItems = document.querySelectorAll('.list-item');

function calculateHeightOfListContainer() {
  const firstListItem = listItems[0];
  let heightOfListItem = firstListItem.clientHeight;
  const styleTag = document.createElement('style');
  document.body.prepend(styleTag);
  styleTag.innerHTML = `.list-container.show {
    height: ${heightOfListItem}px;
  }`;
  // 컨테이너에도 전환 효과 적용(공간 확보용)
  // setTimeout으로 감씨지 않으면 로드되는 순간 (높이를 가지게 되면서) 전환 효과가 적용됨
  setTimeout(function () {
    styleTag.innerHTML += `.list-container {
      transition: all 0.6s ease-out;
    }`;
  }, 0);
}
calculateHeightOfListContainer();

const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');
function removeListItem(e) {
  let container = e.target;
  // 이벤트 전파 이용
  while (!container.classList.contains('list-container')) {
    container = container.parentElement;
  }
  container.classList.remove('show');
  const listItem = container.querySelector('.list-item');
  listItem.classList.remove('show');
  // 전환효과 종료후, DOM에서 완전 제거
  container.ontransitionend = function(){
    container.remove();
  }
}
// DOCUMENT LOAD
document.querySelectorAll('.list .list-container').forEach(function(container) {
  container.onclick = removeListItem;
});

addBtn.onclick = function (e) {
  const container = document.createElement('li');
  container.classList.add('list-container');
  container.setAttribute('role', 'listitem');
  const listItem = document.createElement('div');
  listItem.classList.add('list-item');
  listItem.innerHTML = 'List Item';
  container.append(listItem);
  addBtn.parentNode.insertBefore(container, addBtn);
  container.onclick = removeListItem;
  // 전환 전 초기 스타일을 인지시켜, 요소가 어떤 속성을 전환시켜야 하는 지 알게 함
  setTimeout(function () {
    container.classList.add('show');
    listItem.classList.add('show');
  }, 15);
};
