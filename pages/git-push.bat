@echo off
echo ================================
echo    Git Auto Push
echo ================================

:: 변경사항 확인
git status

:: 커밋 메시지 입력
set /p msg="테스트 입니다.: "

:: add, commit, push 한번에
git add .
git commit -m "%msg%"
git pull origin main --rebase
git push origin main

echo ================================
echo    Push 완료!
echo ================================
pause
```

---

## 🚀 사용 방법

탐색기에서 `git-push.bat` **더블클릭** 하면:
```
커밋 메시지 입력: style: 반응형 웹 적용