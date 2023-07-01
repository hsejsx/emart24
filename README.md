# boilerplate

- 빠른 작업을 위한 초기 세팅 (SCSS)
- `git clone`후 `npm install`하면 된다. (익스텐션은 수동 설치해야 한다..!)
- 만약 npm install이 되지 않는다면..? 아래와 같이 수동 설치하자.

## SCSS

- VSC 익스텐션 `Live SASS Compiler` 설치
- `Ctrl + Shift + P`를 눌러 검색창에서 `Open User Settings(JSON)`클릭
- 아래 코드 붙여넣으면 설정 끝
- 우측 하단의 `Watch Sass`를 클릭하여 실행시킨다.

```json
"liveSassCompile.settings.formats": [

    {
      "format": "expanded", // 들여쓰기, 줄 바꿈이 포함된 가독성이 좋은 CSS를 생성함
      "extensionName": ".css", // 컴파일된 CSS 파일의 확장자를 .css로 지정
      "savePath": "/", // 컴파일된 css 파일이 저장될 경로
      "savePathReplacementPairs": null // 필요한 경우 컴파일된 CSS 파일의 저장 경로를 대체할 수 있는 설정
    }
  ],
```

## StyleLint

- 아래 명령어 이외에도 VSC 익스텐션 `Stylelint`도 설치해야 한다.
- 설치 후 reload 필수!

```
npm install -D stylelint stylelint-config-recess-order stylelint-config-standard stylelint-scss
```
