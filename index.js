const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 정적 파일 제공 (public 폴더 안의 파일을 클라이언트가 접근 가능)
app.use(express.static(path.join(__dirname, 'public')));

// 기본 루트 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
