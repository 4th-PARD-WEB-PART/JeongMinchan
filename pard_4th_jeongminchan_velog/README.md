# 블로그 애플리케이션

이 프로젝트는 React와 Recoil을 사용하여 구현된 간단한 블로그 애플리케이션입니다. 사용자는 회원가입, 로그인, 포스트 작성, 피드 확인 등의 기능을 이용할 수 있습니다.

## 기술 스택

- **React**: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
- **Recoil**: 전역 상태 관리를 위한 라이브러리
- **styled-components**: CSS-in-JS를 사용하여 스타일링

## 주요 기능

### 1. 회원가입 페이지 (`RegisterPage`)

- 사용자 이름, 이메일, 비밀번호 및 한 줄 소개를 입력하여 회원가입이 가능합니다.
- 이용 약관 및 개인정보 처리방침에 동의해야 회원가입이 완료됩니다.
- 입력한 데이터는 Recoil의 atom을 통해 전역 상태로 관리됩니다.

### 2. 피드 페이지 (`FeedPage`)

- 여러 개의 포스트가 카드 형식으로 표시됩니다.
- 각 포스트는 제목, 본문, 작성자, 좋아요 수, 작성 날짜, 댓글 수 등을 포함하고 있습니다.
- 사용자는 좋아요 기능을 통해 포스트에 반응할 수 있습니다.

### 3. 상세 페이지 (`DetailPage`)

- 특정 포스트의 세부 정보를 확인할 수 있습니다.
- 포스트 작성자 정보와 포스트 내용이 표시됩니다.
- 좋아요 기능이 포함되어 있습니다.

### 4. 수정 페이지 (`EditPage`)

- 사용자 정보(이름, 이메일, 비밀번호, 자기소개)를 수정할 수 있습니다.
- 수정 후 성공 알림이 표시됩니다.

### 5. 404 페이지 (`NotFound`)

- 존재하지 않는 페이지에 접근했을 때 404 페이지가 표시됩니다.

## Recoil 상태 관리

이 프로젝트는 Recoil을 사용하여 전역 상태를 관리합니다. 주요 atom은 다음과 같습니다:

- `myInfoname`: 사용자 이름
- `myInfoEmail`: 사용자 이메일
- `myInfoPassword`: 사용자 비밀번호
- `myInfoIntroduce`: 사용자 소개

## 설치 및 실행

### 1. 리포지토리 클론

```bash
git clone <레포지토리_URL>
cd <프로젝트_디렉토리>
