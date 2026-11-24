# Research Portfolio

대학원생을 위한 간결한 개인 포트폴리오입니다.

- 웹사이트: https://mirnamu.github.io/
- 배포: GitHub Pages, `main` 브랜치의 `/ (root)`
- 별도 빌드, 패키지 설치, JavaScript 실행 없이 표시됩니다.

## 내용 수정

**`index.html` 파일 하나에서 내용과 디자인을 수정합니다.**

한양대학교 전기공학과 석박통합과정과 지능형시스템제어 연구실(UNICON Lab) 소속 정보를 반영했습니다. 연구실 링크는 https://unicon.hanyang.ac.kr/ 입니다. 이름 표시와 연구 관심 분야는 공란입니다. 학력 및 경력은 한양대학교 산업과학연구소 연구원(2026–현재), UTK 방문연구원(2026.03–2026.09), 한양대학교(2025–현재), 인천대학교(2024–2025), 안양대학교(2018–2024)의 최신순으로 표시합니다. 비어 있는 위치의 한국어 HTML 주석을 검색해서 채울 수 있습니다.

| 수정할 내용 | 검색할 문구 |
| --- | --- |
| 이름 | `이름: 아래 p 태그` |
| 프로필 사진 | `profile.jpg`를 새 사진으로 교체 |
| 소속·전공·연구실·이메일 | `profile-details` 아래의 HTML |
| 자기소개 | `소개: 아래 문장` |
| 학력·경력·기간 | `학력 및 경력: 기간` |
| 연구 관심 분야 | `연구 분야: 아래` |
| 프로젝트 기관·프로젝트명·기간·역할 | `프로젝트: 아래 article` |
| 논문 제목·저자·게재지·날짜·역할·DOI | `논문 기록: 각 publication` |

예를 들어 `<p class="profile-name" aria-label="이름"></p>`의 태그 사이에 이름을 입력합니다. 공란의 `<dd>` 안에 있는 주석을 실제 정보로 바꾸면 해당 내용이 표시됩니다. 입력한 내용은 공개되므로 공개할 정보만 기재하세요.

프로젝트 영역은 GitHub 저장소 목록을 불러오지 않고, 직접 작성한 내용만 표시합니다. 기존 예시 프로젝트는 비워 두었습니다. 논문 기록에는 노션에 정리한 게재 기록 7건을 저널 1편과 컨퍼런스 6편으로 나누어 반영했습니다.

## 학력 및 경력 직접 수정

1. `index.html`에서 `학력 및 경력: 기간`을 검색합니다.
2. 각 `<li>` 안의 `education-date`에는 기간을, `education-detail`에는 소속·전공·과정 또는 직책을 입력합니다.
3. 학력이나 경력을 추가할 때는 아래 `<li>` 블록을 복사해 `<ul class="education-list" role="list">` 안에 최신순으로 넣습니다. 날짜와 내용은 각각의 열에 자동 정렬되므로 공백으로 간격을 맞출 필요가 없습니다.
4. `Commit changes`로 저장하면 자동 배포됩니다.

```html
<li>
  <span class="education-date">2026.03 ~ 2026.09</span>
  <span class="education-detail">University of Tennessee, Knoxville(UTK) 방문연구원</span>
</li>
```

## 프로젝트 직접 작성

1. `index.html`에서 `프로젝트: 아래 article`을 검색합니다.
2. 각 `<dd>` 태그 안의 주석을 실제 내용으로 바꿉니다.
   - `<!-- 기관명 -->`: 기관
   - `<!-- 프로젝트 제목 -->`: 프로젝트명
   - `<!-- 프로젝트 수행 기간 -->`: 시작·종료 시점
   - `<!-- 본인이 담당한 역할 -->`: 역할
3. 여러 프로젝트를 넣으려면 `<article class="project" aria-label="프로젝트">`부터 `</article>`까지 복사해 같은 섹션 안에 추가합니다.
4. GitHub에서 `Commit changes`로 저장하면 자동 배포됩니다.

사이트 화면의 공란은 내용을 표시하는 자리이며 입력 폼은 아닙니다. GitHub의 `index.html` 편집 화면에서 작성하세요.

## 논문 기록 직접 수정

1. `index.html`에서 `논문 기록: 각 publication`을 검색합니다.
2. 각 `<li class="publication">` 안의 제목, 저자 명단, 게재지, 날짜, 역할, DOI 링크를 수정합니다. 저자 이름은 게재된 순서를 유지하고, 본인 이름은 `<strong>`으로 강조합니다.
3. 논문을 추가할 때는 `<li class="publication">`부터 `</li>`까지 복사합니다. 저널 또는 컨퍼런스 그룹에 게재 기록을 최신순으로 넣습니다.
4. `Commit changes`로 저장하면 자동 배포됩니다.

원본: [노션 논문 기록](https://app.notion.com/p/3deecb174d2a8056b6b6cfd6a97f6ba9). 2026-11-24에 내용을 반영했으며, 노션 변경사항이 사이트에 자동 동기화되지는 않습니다.

## 논문 저자 확인 근거

2026-11-24에 공개된 학회 프로그램, 논문집 목차, 대학·연구실 자료의 저자 명단을 확인해 게재 순서로 반영했습니다. 영문 논문은 확인 자료의 영문 이름 표기를 따릅니다.

| 논문 | 확인 자료 |
| --- | --- |
| 자율 이동 및 협력형 폐기물 이송 로봇 | [한양대학교 ScholarWorks](https://hanyang.scholarworks.kr/item/e399a565-e155-4ff4-be9f-7be88882e05a) |
| Hierarchical 6D Pose Estimation Strategy for Mobile Manipulator | [ICAIIC 2026 공식 프로그램 P3-2](https://www.manuscriptlink.com/society/kics/conference/icaiic2026/programBook) |
| Dual BLDC Motor 유성기어를 위한 Sliding Mode Control | [ICROS 2025 공식 프로그램 TA06-1](https://sigongji25a.icros.org/admin/proceedings/TableOfContents_web_2.asp) |
| Integration of MediaPipe and L2CS-Net for Driver Drowsiness Detection and Gaze Tracking | [ICEIC 2025 논문집 목차, PDF 7쪽](https://www.proceedings.com/content/079/079014webtoc.pdf) |
| UWB 센서와 Depth 카메라를 이용한 파티클 필터 기반의 객체 위치 추정 | [한국자동차공학회 2024 추계학술대회 자료](https://www.ksae.org/journal_list/search_index.php?gubun=2&issue=0&kwon_title=JUVDJUI2JTk0JUVBJUIzJTg0JUVEJTk1JTk5JUVDJTg4JUEwJUVCJThDJTgwJUVEJTlBJThD&mode=list&month=11&number=0&page=36&year=2024) |
| MediaPipe와 L2CS-Net을 활용한 운전자 졸음 감지 시스템 설계 | [한국자동차공학회 2024 추계학술대회 자료](https://www.ksae.org/journal_list/search_index.php?gubun=2&issue=0&kwon_title=JUVDJUI2JTk0JUVBJUIzJTg0JUVEJTk1JTk5JUVDJTg4JUEwJUVCJThDJTgwJUVEJTlBJThD&mode=list&month=11&number=0&page=36&year=2024) |
| 자율주행 모빌리티를 위한 Ultra-Wideband 기반 객체 추종 알고리즘 | [UNICON 연구실 공식 학술대회 목록](https://unicon.hanyang.ac.kr/publications?cpage=4&ctab=Domestic&cyear=all&jpage=1&jtab=SCIE&jyear=2021) |

「자율 이동 및 협력형 폐기물 이송 로봇」의 저자는 공식 연구성과 자료에서 9명으로 확인되어, 이전 노션 기록의 `2/8` 표기를 전체 저자 9명의 명단으로 교체했습니다.

## 디자인 및 파일

- 흰 배경, 남색 제목 영역, 왼쪽 프로필, 오른쪽 본문
- 소개 / 학력 및 경력 / 연구 관심 분야 / 프로젝트 / 논문 기록
- 모바일에서는 한 열로 표시
- `index.html` 안의 `<style>`에 모든 스타일 포함
- `profile.jpg`는 프로필 사진이며, 원본 비율을 유지하여 표시
- `.nojekyll`은 정적 페이지 배포용 파일
- 기존 `assets/` 파일은 이전 버전 리소스이며 현재 페이지에서는 사용하지 않음

`index.html`을 브라우저에서 직접 열어 확인할 수 있습니다. GitHub에서 파일을 수정하고 `main`에 커밋하면 자동 배포됩니다. 배포 결과는 저장소의 **Actions → pages build and deployment**에서 확인하세요.
