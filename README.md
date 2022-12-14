# 🧮 계산기

기본적인 연산이 되는 계산기를 구현한 프로젝트입니다.

## 📖 기능

기본적인 ios 내장기능을 따르지만, 아래와 같은 두 가지는 다릅니다.

- 다중연산이 되지 않습니다(`-1 + 3 + 5 * 2 = 12`) 가 아니라 마지막 두 개의 숫자 (`5 * 2 = 10`)만 계산합니다.
- ios 내장 계산기는 연산자를 누르면 이전에 눌렀던 값들이 계산이 되지만, 현 계산기는 `=` 가 눌러질 때까지 값이 계산이 되지 않습니다.

## 📍 문제정의 및 해결방안

> 안내요건에 나와있는 요건사항을 구현해야함

- 해결계획: 요건사항을 꼼꼼히 확인하고 내장 계산기를 사용하면서 어떻게 구현되어야 할지 그림을 그려볼 예정
- 해결방법: 요건사항을 종종 확인하며 계산기를 구현해 나갔음

> UI에 대해서 나와 있는 기능을 구현해 줄 수 있는 로직을 구현해야함

- 해결계획: 화면에 나와있는 간단한 연산을 해줄 모듈을 만들고 그에 맞는 테스트 케이스를 짠다(순수함수로 짜서 사이드이펙트 줄이기)
- 해결방법: jest를 활용하여 각 연산에 맞는 유닛 테스트를 작성하여 주었음

> View는 평가대상이 아님

- 해결계획: 가장 못생긴 mvp 화면을 그려서 기능만 다 먼저 동작시킬 것임
- 해결방법: ios 계산 UI를 찾아보다가, 비슷하게 생긴게 있어서 그냥 끌어다썼음

> 관심사 분리를 어떻게 할 것인지

- 해결계획: 앱 로직과 뷰는 분리를 무조건 시킬 것. 그런데 이 두개를 컨트롤러로 이어줄지 아니면 그냥 뷰 생성시 넣어줄지는 미정
- 해결방법: 뷰를 생성할 때 앱 로직 인스턴스도 같이 넣어주어서 뷰안에서 다 처리를 할 수 있게 처리하여 주었음

> 다중 연산은 어떻게 할 것인지

- 해결계획: 일단 다중 연산을 해야되는 것인지 부터 물어본다.
- 해결방법: 계산기는 이미 프로그램으로 짜여진 것들이 많을테니 다중연산 알고리즘을 한 번 보고 자바스크립트에 적용시킨다.
  **EDIT: 다중 연산을 해야함. 하지만 시간이 안된다면 일단 단일 연산이라도 되게 하라고 피드백을 주심.**

> 상태는 어떻게 가져갈 것인지

- 해결계획: 대충의 상태는 생각을 해 볼 것인데...어떻게 가져가야 되는게 정답인지 모르니, 통합 테스트를 열심히 짜고 코드 내부를 계속 개선해 나갈 수 있도록 작업 방향을 잡을 것
- 해결방법: 실제로 상태값에 대해서는 크게 많이 생각을 하지는 않았고 기본적으로 필요하다고 생각되는 값들만 정의를 시작하고 통합 테스트 케이스를 작성해나가며 상태값을 추가 혹은 수정을 하며 맞추어 나갔다.(**나로써 할 수 있는 최선의 선택이었지만 조금 경험이 풍부했더라면 처음 상태구조를 어떻게 가져갈 것인지에 대해서 조금 깊게 생각해본다음 쉽게 작업을 해 나갈 수 있었을 것 같음**)

## 📚 사용한 라이브러리

- jest (유닛 테스트와 통합 테스트를 진행하기 위해서 테스트러너로 jest를 썼습니다)
- babel (jest 환경에서 ECMAScript 모듈 `import`을 사용하기 위해 썼습니다)
- webpack (코드의 관심사를 분리하고 조금 더 모듈화시키기 위해서 모듈번들러로 웹팩을 썼습니다)

## 🏃‍♂️ 실행하는 방법

사용을 하기 위해서는 아래의 링크로 가서 사용을 하실 수 있습니다.

- [프로젝트 라이브 페이지](https://daegudude.github.io/iamdt-calculator/)

로컬에서 사용을 하시기 위해서는 아래와 같은 두 가지 옵션이 있습니다.

Git 레포지터리를 로컬에 클론 후,

- `dist/index.html` 을 열어서 사용
- `npm install` -> `npm run start` 후 `localhost:8080` 에서 사용
- `npm run test` 실행 시 테스트를 실행시킬 수 있음

## 🧠 추가로 해야할 작업

- 다중연산 지원(stack 자료 구조를 활용하여 다중연산을 지원 ex. `-1 + 3 + 5 * 2 = 12`)

## 📩 Contact

- 이름: 김상학
- 이메일: k3hppk@gmail.com
