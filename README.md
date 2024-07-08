# Mingle

![mingle](https://github.com/designsoo/mingle/assets/77719310/a4ff80e4-713c-4226-a59e-2db924d0e6ca)

# 프로젝트 소개

Mingle 프로젝트는 [Rolling](https://github.com/designsoo/Rolling) 프로젝트를 리팩터링한 프로젝트입니다.\
서비스 일관성을 위해 Mingle Design System을 구축하였으며, 프로젝트에 사용되는 공용 컴포넌트는 npm을 통해 배포된 [mingle-ui](https://github.com/designsoo/mingle-ui) 컴포넌트를 사용합니다.


## 1차 리팩터링
### 리팩터링 기간
- 2023년 12월 23일 - 2023년 12월 30일(1주)

### 개발 환경
- React, SCSS, JavaScript

### 개선 업무
- 최신글 New 배지 추가(이틀 후 삭제)
- Modal: 작성자 리스트 모달, 삭제 확인 모달, 공용 모달
- LinkButton 및 EditButton 추가
- Landing 페이지: 절대 경로 일괄 수정, container SCSS 수정, helmet 추가
- ListPage: 검색바, 전체 검색어 수정, Card UI 개선, hover 전환, 미디어 쿼리 추가
- Detail, Edit 페이지 통합
- Sidebar 미디어 쿼리 개선

## 2차 리팩터링
### 리팩터링 기간
- 2024년 6월 16일 - 진행 중

### 개발 환경
- React, Tailwind, TypeScript, react-query, zod, react-hook-form, react-modal

### 개선 업무
- 공통: TypeScript 마이그레이션, Tailwind 적용, 전체 UX/UI 개선, cloudflare CDN, Cloudflare Image
- 6월 16일\
  : react-query 적용, eslint, husky, tailwind, mingle-ui 패키지 설치 및 설정
- 6월 19일\
  : 이미지 업로드 개선  (imgBB → Cloudflare Images 사용), 카드 미리보기 제공 (name, backgroundImage)
- 6월 23일\
  : 리액션 추가 및 조회 쿼리 훅 적용, 반응형 이모지 리스트 구현 (lg 이하 최대 7개, lg 이상 최대 3개)
- 6월 26일\
  : 반응형 Card List 컴포넌트 구현, 이모지 리스트 반응형 개선
- 6월 27일\
  : 수정하기 페이지 구현, 삭제 쿼리 적용, 비밀번호 유효성 검사, react-modal 설정
- 7월 2일\
  : 카드 리스트 무한 스크롤 구현
- 7월 7일\
  : skeleton UI 구현, 삭제 확인 모달, 비밀번호 확인 모달 구현
- 7월 8일\
  : Empty UI 구현, 검색 기능 추가, 리스트 페이지 구현
