# SlideDownCSSAnimation
### 목적
  - 아래 블록에 포커스했을 때, 위의 블록이 스르르 사라지고 아래의 블록들이 위로 스무스하게 올라오는 효과를 구현하고 싶다. 그리고 올라온 상태에서는 아래로 드래그 하여도 위의 블록이 나타나면 안된다.
  - 아래 블록의 포커스를 해제 했을 때 사라졌던 위의 블록이 다시 스르르 나타나고 아래 블록은 아래로 스무스하게 내려가야한다.
### 결과
- 결과 gif   
  ![결과 gif](https://github.com/skyler-dev/problemSolving/assets/132126027/2f5d3cb6-0bea-4dc0-a040-989f27b2246e)   
  - 참고 문헌
    - <https://css-tricks.com/animation-techniques-for-adding-and-removing-items-from-a-stack/>
  - 우여곡절이 궁금하시다면... notion에 메모해두었습니다. 아래 링크를 참고해주세요.
    - [동적 DOM event에 순수 CSS 애니메이션 적용 과정 memo](https://skyler-dev.notion.site/DOM-event-CSS-memo-b84a8fb61f534c9c83fb25f3d45495c2?pvs=4)
### 활용
- 적용 gif
  - 코드를 변형해서 기존에 만들었던 [YelpCamp의 new-branch](https://github.com/skyler-dev/YelpCamp/tree/new-branch)에 적용 했다.
  ![YelpCamp에 적용 gif](https://github.com/skyler-dev/problemSolving/assets/132126027/e98d7db5-1731-4ad9-8d35-c2c96f33b85d)   
