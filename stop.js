#!/usr/bin/env node

// 포트 7893을 사용하는 프로세스 종료 스크립트
// Stop process using port 7893

const { exec } = require('child_process');
const os = require('os');

console.log('포트 7893을 사용하는 프로세스를 종료하고 있습니다...');
console.log('Stopping process using port 7893...\n');

if (os.platform() === 'win32') {
  // Windows
  exec('netstat -ano | findstr :7893', (error, stdout, stderr) => {
    if (error || !stdout.trim()) {
      console.log('포트 7893을 사용하는 프로세스가 없습니다.');
      console.log('No process found using port 7893.');
      process.exit(0);
    }

    const lines = stdout.trim().split('\n');
    lines.forEach(line => {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      
      if (pid && !isNaN(pid)) {
        console.log(`PID ${pid} 프로세스를 종료하고 있습니다...`);
        console.log(`Terminating PID ${pid}...`);
        
        exec(`taskkill /PID ${pid} /F`, (error, stdout, stderr) => {
          if (!error) {
            console.log(`✓ PID ${pid} 종료 완료`);
            console.log(`✓ PID ${pid} terminated successfully`);
          } else {
            console.log(`✗ PID ${pid} 종료 실패: ${stderr}`);
            console.log(`✗ Failed to terminate PID ${pid}: ${stderr}`);
          }
        });
      }
    });
  });
} else {
  // macOS/Linux
  exec("lsof -ti :7893 | xargs kill -9 2>/dev/null", (error) => {
    if (!error) {
      console.log('✓ 포트 7893의 프로세스를 종료했습니다.');
      console.log('✓ Process on port 7893 terminated.');
    } else {
      console.log('포트 7893을 사용하는 프로세스가 없습니다.');
      console.log('No process found using port 7893.');
    }
    process.exit(0);
  });
}
