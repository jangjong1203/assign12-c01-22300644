    

    Project Structure: App.jsx와 주요 Lab 컴포넌트의 역할

    App.jsx: 화면에 각 lab들이 렌더링 될수있게 해줍니다.
    lab1: 컴퍼넌트가 화면에 마운트 되면 자동을 카운트가 시작되고 언마운트시 정리됩니다.
    lab2: 타이머의 시작/정지/초기화 버튼을 누르면 각 버튼에 맞는 기능이 실행됩니다.
    lab3: 포커스를 누르면 입력창에 넘어가고, 클리어를 누르면 입력창이 비워집니다.
    lab4: lab2와 동일한 기능을 하지만 내부적으로 useRef를 사용하였습니다.
    
    useEffect: Effect, Dependency Array 및 Cleanup의 동작 원리
    Effect는 실행할 작업, Dependency Array는 재실행될 작업 Cleanup은 이전작업 정리로,
    Effect는 useEffect안에 실제 작동할 기능을 구현해주면 되고,  Dependency Array는
    useEffect끝에 []을 적고 비어있으면 처음 화면이 켜질때만 실행도고 값들이 바뀌어도 다시 실행하지않게 해주고 []안에 상태를 적어주면 해당 상태값이 변할때만 실행하게 해줍니다.
    Cleanup은 이전 작업을 끝내주는 코드 예를 들어 setInterval을 사용했다면clearInterval
    작성해서 return 시켜주면 화면이 꺼질때 자동으로 해당 코드를 실행시켜줘서 정리합니다.

    useRef: .current 속성과 useState의 차이
    useState는 해당 상태의 값을 변경하면 화면이 리렌더링 되면서 바로 화면에 반영되지만,
    useRef는 값이 바껴도 화면의 리레더링 되지않습니다. State 때문에 화면이 리레더링되더라도
    값은 날라가지않고 저장이 되며 화면에 출력은 필요하지는 않지만 필요한 값들을 저장할때 사용합니다.

    Code Analysis: useEffect와 useRef 관련 주요 코드 각 1개(5~15줄)를 선택하여 동작 원리 설명
    
    



useEffect의 Dependency Array가 필요한 이유는?

    Dependency Array가 없으면 켜질때 마다 매번 새로 실행이 되버려서 중복으로 작동을 하기 때문에
    자신이 원하는 시점에만 실행할수있게 필요합니다.

Cleanup을 사용하지 않으면 어떤 문제가 발생할 수 있는가?

    이전에 실행된 작업들이 사라지지 않아서 메모리 누수가 발생해서 오류가 날수도 있습니다.
    
useState와 useRef의 가장 중요한 차이는?

    useState는 값이 변경되면 리렌더링 되면 하면에 바로 반영이 되지만
    useRef는 값이 변경되더라도 화면이 리레더링 하지않습니다.

LAB 2와 LAB 4의 Timer 관리 방식은 어떻게 다른가?

    2는 State를 변경시키고 그 변경을 감지해 멈추고 시작하지만,
    4는 함수를 제작해 클릭시 해당 함수가 작동해서 타이머를 멈추고 시작합니다.





## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?
