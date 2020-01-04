# Assignment4_DataVisualization
- 데이터 시각화 과제4 - react.js를 활용해 데이터 시각화 웹 시스템 만들기 (Team Project)
- 과제2와 과제3를 토대로 시각화 웹 시스템 구성
  - LeeEunhyung 데이터 시각화 과제2 [LeeEunhyung/TrafficAccidentInKorea_DataVisualization](https://github.com/LeeEunhyung/TrafficAccidentInKorea_DataVisualization)
  - SSH1997 데이터 시각화 과제2 [SSH1997/Data_Visualization_HW2](https://github.com/SSH1997/Data_Visualization_HW2)
  - LeeEunhyung 데이터 시각화 과제3 [LeeEunhyung/TrafficAccidentInKorea_Map_DataVisualization](https://github.com/LeeEunhyung/TrafficAccidentInKorea_Map_DataVisualization)
  - SSH1997 데이터 시각화 과제3 [SSH1997/Data_Visualization_HW3](https://github.com/SSH1997/Data_Visualization_HW3)
  
### Environment
- OS : Windows 10 Pro
- Tool : Visual Studio Code, Putty
- Server : AWS EC2, nodejs, mySQL
- Language : html, React.js(JavaScript with __d3.js__), css

### Data Source 정보
- 도로교통공단_교통사고다발지역.csv : 2012년부터 2018년까지의 교통사고 발생 정보 (database : accident)   
  https://www.data.go.kr/dataset/15003493/fileData.do
- 지역별인구_및_인구밀도.csv : 2014년부터 2018년까지의 지역별인구 및 인구밀도 정보 (database : population)   
  http://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1007
- TL_SCCO_CTPRVN.json : 한국의 특별시, 광역시, 특별자치시, 도, 특별자체도 geoJSON 정보   
  https://neurowhai.tistory.com/350
- TL_SCCO_SIG.json : 전국 구 지역 단위의 geoJSON 파일 중 대구의 구 geoJSON 정보   
  https://neurowhai.tistory.com/350
- Chicago Crime Data : 미국 시카고 범죄 발생 정보  
  https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present-Dashboard/5cd6-ry5g
  
# Installation / Usage
1. 웹 서버 환경 구축 (AWS EC2 기준)   
    a. AWS에서 제공되는 EC2 서비스를 사용해 웹 서버를 생성합니다.   
    b. EC2 서비스의 인스턴스 Private 키를 발급받아 Putty와 연결 시킵니다.   
    c. Putty로 서버에 접속해 아래의 명령어를 입력해 필수 패키지를 설치합니다.      
    
    - nodejs, n, npm, yarn 설치 및 버전 업데이트   
    ```cmd
    sudo apt-get update  
    sudo apt-get install nodejs   
    sudo apt-get install npm   
    sudo npm cache clean -f   
    sudo npm install -g n   
    sudo n stable   
    sudo npm install -g npm latest   
    sudo npm install -g yarn   
    ```
    
    - create-react-app 설치   
    ```cmd
    sudo npm install -g create-react-app   
    ```
    
    - express, mysql, axios 설치   
    ```cmd
    sudo install express --save   
    sudo apt-get install mysql-server   
    sudo mysql_secure_installation   
    npm install mysql --save   
    npm install axios --save   
    ```
2. React App 생성 및 실행   
    a. 서버 상에서 아래의 명령어를 입력해 create-react-app 폴더를 생성한 후, 앱을 실행시켜 React 페이지를 확인합니다.
    ```
    sudo create-react-app [폴더 이름]
    cd [폴더 이름]
    yarn start
    ```
    
    b. LeeEunhyung/Assignment4_DataVisualization 을 서버에 다운 받아 __a.__ 에서 생성한 폴더에 적용시킨 후, 앱을 실행시켜 해당 페이지를 확인합니다.
    ```
    yarn start
    ```
    
# Screenshot   
- 상단 메인 메뉴에서 데이터를 선택할 수 있습니다.   

![캡처](https://user-images.githubusercontent.com/48666975/71764694-6ce26980-2f2e-11ea-85da-96196c8fb3cd.PNG)

- 네비 메뉴에서 시각화 표를 선택할 수 있고, 네비 메뉴는 데이터에 따라 각각 아래와 같이 다르게 보여줍니다.

![캡처1](https://user-images.githubusercontent.com/48666975/71764695-6ce26980-2f2e-11ea-961e-7c87f294d8cf.PNG)

![캡처3](https://user-images.githubusercontent.com/48666975/71764693-6ce26980-2f2e-11ea-8699-ac0f79d18c53.PNG)


# Team Info   
- [LeeEunhyung](https://github.com/LeeEunhyung)
- [SSH1997](https://github.com/SSH1997)
