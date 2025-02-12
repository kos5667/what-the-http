# Network Load(네트워크 부하)
네트워크 인프라(라우터, 스위치, 서버, 링크 등)가 처리할 수 있는 용량을 초과하는 데이터 트래픽이 발생하는 상황을 의미.
부하가 증가하면 패킷 손실, 지연(latency), 속도 저하 등의 문제가 발생.
결국 패킷 단위로 데이터를 전송하는 것은 네트워크 부하를 최소화하고, 안정적으로 데이터를 전달하기 위한 핵심 기술이다.
고로 네트워크 인프라가 처리할 수 있는 용량을 초과하면 성능 저하와 패킷 손실이 발생하므로, 이를 방지하기 위해 다양한 방법들이 활용되고 있다.

## Network Load(네트워크 부하)가 증가하면?
- 패킷 손실(Packet Loss): 네트워크 장비가 감당할 수 없는 패킷을 삭제(drop)함.
- 지연(Latency 증가): 데이터가 전송되는 시간이 길어짐.
- 속도 저하(Bandwidth Saturation): 실제 전송 속도가 낮아짐.
- 연결 불안정(Connection Timeouts): 연결이 끊기거나 요청 시간이 초과됨.

## Network Load(네트워크 부하) 원인
1. 대량의 데이터 전송.
   - 한 번에 너무 큰 데이터를 보내면 네트워크 장비가 이를 처리하는 데 부담.
   - 1GB 데이터를 단일 패킷으로 보내려고 하면 네트워크 장비가 이를 받아들이지 못하고, 전송 실패나 네트워크 정체가 발생할 수 있음.

2. 과도한 동시 접속
    - 많은 사용자가 동시에 네트워크를 사용하면 네트워크 자원이 부족해져 부하 발생.
    - 예) 한번쯤 백화점 1층에서 명품관에 들어가려면 대기를 걸어두었던 경험이 있을 수 있다.
      - 명품관 수용인원은 10명이고 이미 10명이 채워진 상태이다.
      - 20명 정도가 대기를 걸어뒀다.
      - 20명은 직원이 빠르게 명품관 안에 있는 손님을 안내하고 빠지게 하기 전까지 대기한다.
      - 직원은 많은 손님을 정신없이 받기 시작한다. 쉬는시간 없지 일을하니 부하가 온다.
      - 20명중 너무 오래기다려 기다리는 것을 포기한다(유실)

3. Qos(Quality of Service) 미적용
    - 네트워크에서는 비디오 스트리밍, 파일 다운로드, 웹 브라우징 등 다양한 트랙이 섞여 있다.
    - 특정 트래픽(예: 대용량 파일 다운로드)이 우선순위 없이 전송되면, 지연에 민감한 트래픽(예: 화상회의, VoIP 통화)이 영향을 받아 품질이 저하될 수 있다.

4. 라우터 및 스위치의 성능 한계
    - 네트워크 장비(라우터, 스위치, 방화벽 등)는 처리할 수 있는 패킷 수와 속도에 한계가 있다.
    - 예) 기업용 라우터는 초당 수십만개의 패킷을 처리할 수 있지만, 가정용 공유기는 이보다 훨씬 적은 패킷을 처리한다.

5. 네트워크 병목(Bottleneck)
    - 특정 구간에서 대역폭()이 부족하거나 트래픽이 몰려 병목현상이 발생하는 것.
    - 예) 회사 내부망의 속도는 10Gbps인데, 인터넷 회선이 1Gbps라면 인터넷으로 나가는 트래픽이 병목 현상을 겪을 수 있다.

6. Dos/DDos 공격
    - 공격자가 대량의 패킷을 네트워크에 보내 과부하를 유발하는 경우.
    - 정상적인 사용자 트래픽까지 차단되거나 속도가 느려질 수 있다.
      - 최근 DDos 좀비 PC에 대한 언론 이슈가 많았다. 이 또한 좀비(죽어있는 컴퓨터를) Client를 A Network로 대량 전송하면서 방대한 트래픽이 한번에 발생하여 부하가 발생하는 것.

## 네트워크 부하를 줄이는 방법.

### 패킷 단위 전송 및 흐름 제어(TCP 활용)
- TCP는 윈도우 크기 조절 및 흐름 제어를 통해 네트워크 부하를 조절함.
- 패킷을 나누어 보내면 네트워크 장비가 무리 없이 처리할 수 있음.

### QoS(Quality of Service) 설정
- 화상회의, VoIP 같은 중요한 트래픽에 우선순위를 부여하고, 대용량 다운로드의 우선순위를 낮춤.


### 로드 밸런싱(Load Balancing)
- 여러 네트워크 경로로 트래픽을 분산시켜 부하를 줄임.


### 대역폭 관리 및 제한
- 특정 애플리케이션(예: 토렌트, 대량 다운로드) 사용을 제한하여 네트워크 과부하 방지.


### 네트워크 장비 업그레이드
- 고성능 라우터, 스위치, 방화벽 등을 사용해 더 많은 트래픽을 처리할 수 있도록 함.


### CDN(Content Delivery Network) 활용
- 웹사이트 및 콘텐츠를 여러 서버에 분산하여 특정 서버에 과부하가 걸리는 것을 방지.

