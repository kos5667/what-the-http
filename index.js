import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import pcap from 'pcap';

import { router } from './src/routes/HttpRouter.js';

const app = express();
const PORT = 3000;

// HttpRouter Binding.
app.use(router);

// 정적 파일 제공 (public 폴더 안의 파일을 클라이언트가 접근 가능)
// `__dirname` 대체 코드
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// 네트워크 인터페이스에서 IP 패킷 감지 (eth0는 네트워크 인터페이스 이름)
// const pcapSession = pcap.createSession('en0', 'ip');
// // 패킷 캡처 이벤트 리스너
// pcapSession.on('packet', (rawPacket) => {
//     const packet = pcap.decode.packet(rawPacket);
//     if (packet.link_type !== 'LINKTYPE_ETHERNET')
//         console.log('📡 패킷 캡처됨:', packet);
// });

// 기본 루트 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// HTTP 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
