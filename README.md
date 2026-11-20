Project Information

     React기반의 useEffect, useRef 실습을 위한 4종류의 타이머를 구현한 프로젝트

Installation

    npm install
    npm run dev 
    실행후 나오는 주소로 접속

Source Code Exploration

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

    Code Analysis:

    lab2:

    useEffect(() => {
    const id=setInterval(()=>{

      if(!running)
        return;
        setCount(prev=>prev+1);
    },1000);

    return()=>clearInterval(id);
    }, [running]);

    !running:현재 실행상태가 아니면 종료
    아니면 setInterval와setCount로 1초마다 1식 count가 증가
    return()=>: 해당 탭이 꺼질시 clearInterval로 타이머를 정리합니다.
    [running]:Dependency Array로 running의 상태가 변경 될때마다 실행이 됩니다.


Lab Implementation: 4개 Lab 구현 내용 및 실행 결과

    LAB 1: useEffect와 setInterval로 1초마다 count가 증가하도록 구현했고,Dependency Array 와 Cleanup을 적용했습니다.

    LAB 2: running 상태를 Dependency Array에 넣어 Start,Stop,Reset 버튼으로 타이머를 제어하고 중복 실행을 막았습니다.

    LAB 3: inputRef에 입력창을 넣어 Focus 버튼 클릭 시 입력창으로 이동, Clear 버튼 클릭 시 입력창 초기화 후 입력창으로 이동을 구현했습니다.

    LAB 4: timerRef.current에 Timer ID를 넣어서 start,stop,reset 함수로 타이머를 제어하고, Cleanup을 적용했습니다.

Lab Comparison: STEP 3의 비교 분석 질문 4개에 대한 답변

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

Customizing: 수정 내용 및 파일명

    App.jsx: 상단의 제목을 변경
    App.css: 화면의 배경색과, 카운트의 숫자 색을 변경

    Lab1_EffectTimer.jsx: 초를 60으로 나눠서 분과 초로 나누는 함수를 추가해서 출력할때 사용해서 분 초로 출력 하게 변경.


Deployment: https://assign12-c01-22300644.vercel.app/


Weekly Review:

새롭게 배운 내용 3가지

    useffect의 3가지 요소 들에 대해 배우고 각 요소들을 어떤기능을 하는지 배웠습니다.
    useRef에 대해 배우고 이용해서 리렌더링없이 필요한 값들을 유지하는 법을 배웠습니다.
    count+1이 아니라 prev => prev + 1를 이용해서 최신값을 이용해 값을 증가시키는 법을 배웠습니다.


어려웠던 점과 해결 방법

    이번 과제는 관련 pdf내용에 상세히잘 나와있어 특별히 어려운 내용없이 공부를 한후 강의를 들으니 쉽게 할수 있었던것 같습니다.

AI 활용 내용 및 느낀 점

    AI를 pdf 내용 요약 및 공부를 위해 사용했습니다.
    이번에는 생각 보다 내용이 쉬워서 수월하게 과제를 진행했던 것 같습니다. 이번 과제를 진행하면 useState에 대한 이해도 조금는 것 같아서
    좋았습니다.


