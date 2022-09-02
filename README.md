```javascript
AOS.init({
// 전역 설정:
disable: false, // 'phone', 'https', 'mobile', 부울, 식 또는 함수 값을 수락합니다.
startEvent: 'DOMContentLoaded', // AOS가 초기화해야 하는 문서에 발송된 이벤트 이름
initClassName: 'aos-init', // 초기화 후 적용된 클래스
animatedClassName: 'aos-animate', // 애니메이션에 적용된 클래스
useClassNames: false, // true이면 'data-aos'의 내용을 스크롤의 클래스로 추가합니다.
disableMutationObserver: false, // 자동 돌연변이의 탐지를 비활성화합니다(고급).
debounceDelay: 50, // 창 크기 조정 중 사용된 debounce 지연(고급)
throttleDelay: 99, // 페이지를 스크롤하는 동안 사용된 스로틀 지연(고급)


// 'data-aos-*' 속성으로 요소별로 재정의할 수 있는 설정:
offset: 120, // 원래 트리거 포인트에서 오프셋(단위: px)
delay: 0, // 0 ~ 3000 사이의 값, 스텝 50ms
duration: 400, // 0 ~ 3000 사이의 값, 50ms 단계 포함
easing: 'ease', // AOS 애니메이션을 위한 기본 easing
once: false, // 애니메이션이 한 번만 발생해야 하는지 여부 - 아래로 스크롤하는 동안
mirror: false, // 요소를 지나 스크롤하는 동안 요소가 애니메이션 아웃되어야 하는지 여부
anchorPosition: 'top-bottom', // 창과 관련하여 애니메이션을 트리거해야 하는 요소의 위치를 정의합니다.

});
```