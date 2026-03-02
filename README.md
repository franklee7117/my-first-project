# my-first-project
test project01

## Run locally

This is a static website. You can open `index.html` directly in a browser, or run a local static server.

- Quick (Python built-in server):

```powershell
````markdown
# my-first-project
test project01

## 로컬에서 실행하기

이 프로젝트는 정적 웹사이트입니다. 브라우저에서 `index.html`을 직접 열거나 로컬 정적 서버로 서빙할 수 있습니다.

- 간단 실행 (Python 내장 서버):

```powershell
cd "d:\\my-first-project"
python -m http.server 8000
```

- Node/npm 사용 (`npx serve`를 이용하는 스크립트 포함):

```powershell
cd "d:\\my-first-project"
npm start
```

- 또는 VS Code의 Live Server 확장으로 `index.html`을 엽니다.

원하시면 `npm install` 흐름을 추가하거나 `serve`를 dev dependency로 설치해 드립니다.

## 서버: 시작 / 중지

### 시작
- `npm`으로 시작 (포트 7893 고정):

```powershell
cd "d:\\my-first-project"
npm start
```

- Python 내장 서버 사용 (예: 포트 8000):

```powershell
cd "d:\\my-first-project"
python -m http.server 8000
```

서버를 시작한 후 브라우저에서 http://localhost:7893 (또는 서버가 표시한 포트)로 접속합니다.

### 중지
- 서버를 실행한 터미널에서 `Ctrl+C` 를 눌러 종료합니다.

### 터미널에 접근할 수 없을 때 (강제 종료)
- 포트로 실행 중인 프로세스 ID(PID)를 찾은 후 종료합니다:

```powershell
# Windows에서 해당 포트를 사용하는 PID 찾기
netstat -ano | findstr :7893

# 예: PID가 1234라면 강제 종료
taskkill /PID 1234 /F

# 또는 PowerShell에서:
Get-Process -Id <PID> | Stop-Process
```

메모:
- `npm start`는 `serve` 패키지를 사용합니다. 첫 실행 시 프롬프트 없이 자동 설치를 원하면 `npm install --save-dev serve`로 설치하세요.
- 원하시면 `README.md`에 별도 섹션으로 추가하거나 `npm run stop` 같은 자동화 스크립트를 만들어 드리겠습니다.

````
