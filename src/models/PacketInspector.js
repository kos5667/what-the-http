import os from 'os';

export class PacketInspector {
    /**
     * Network Interface 정보 조회.
     * 네트워크 인터페이스
     *  - lo0 (Loopback 인터페이스)
     *  - en0 (유선 또는 Wi-Fi 네트워크)
     *  - awdl0 (Apple Wireless Direct Link)
     *  - llw0 (Low Latency Wireless)
     *  - utunX (VPN 또는 터널링 인터페이스)
     *
     * Fields
     * {
     *      address	해당 인터페이스의 IP 주소
     *      netmask	서브넷 마스크
     *      family	IPv4 또는 IPv6 정보
     *      mac	MAC(물리) 주소
     *      internal	내부 루프백 주소(true)인지 외부 네트워크(false)인지
     *      cidr	CIDR 표기법(예: 192.168.0.4/24)
     *      scopeid	IPv6의 경우, 네트워크 인터페이스 범위를 나타내는 값
     * }
     */
    static getPacket(req, res, next) {
        // 네트워크 인터페이스 정보 조회
        const networkInterfaces = os.networkInterfaces();
        // console.log(networkInterfaces);
        console.info('IP Packet ------------------------------')
        // console.log(req);
        console.info('----------------------------------------')
        next();
    }
}
