# Mirnamu.github.io

Mirnamu의 한국어 개인 소개·포트폴리오입니다.

- 웹사이트: https://mirnamu.github.io/
- 저장소: https://github.com/Mirnamu/Mirnamu.github.io

## 구성

- `index.html`: 소개 문구, 메뉴, 기본 프로젝트 카드, 검색·공유 메타데이터
- `assets/style.css`: 모바일 레이아웃과 밝은/어두운 테마
- `assets/main.js`: 테마 저장, 공개 GitHub 프로젝트 최대 6개 표시
- `assets/favicon.svg`: 사이트 아이콘
- `.nojekyll`: Jekyll 처리 없이 정적 파일 게시

빌드나 패키지 설치가 필요하지 않습니다. `index.html`을 브라우저로 열면 기본 페이지를 볼 수 있습니다. 공개 저장소 목록은 GitHub API에서 불러오므로 인터넷 연결이 필요합니다. API 오류·요청 제한·자바스크립트 비활성화 시에도 기본 프로젝트 카드와 GitHub 링크가 남습니다. 개인 연락처나 비공개 저장소는 표시하지 않습니다.

## 내용 수정

소개 문구와 제목은 `index.html`, 색상은 `assets/style.css`의 `:root`에서 수정합니다. 공개 프로젝트 목록은 페이지 방문 시 자동으로 불러옵니다. 포크와 보관된 저장소는 제외하고, 최근 코드 업데이트 순으로 표시합니다.

다른 계정에 재사용하려면 `index.html`의 이름·GitHub 주소·`og:url`과 `assets/main.js`의 `username`을 함께 바꾸세요.

## GitHub Pages

이 저장소의 기존 `main` 브랜치 게시 설정을 사용합니다. `main`에 변경 사항을 커밋하면 GitHub Pages의 빌드 및 배포가 실행됩니다. 설정은 **Settings → Pages → Deploy from a branch → main → / (root)** 입니다.

배포 상태는 저장소의 **Actions → pages build and deployment**에서 확인할 수 있습니다.

[GitHub Pages 공식 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
