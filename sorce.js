function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    if (msg == "/오늘") {
        var day = new Date();
        replier.reply("오늘은 " + (day.getMonth() + 1) + "월 " + day.getDate() + "일 입니다.");
    }
    if (msg == "/시간") {
        var day = new Date();
        replier.reply("지금은 " + day.getHours() + "시 " + day.getMinutes() + "분 " + day.getSeconds() + "초입니다.");
    }
    if(msg == "/자리"){
        var arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];
        var arr2 = shuffle(arr);
        replier.reply(arr2[0] + " " + arr2[1] + "    "  + arr2[2] + " " +arr2[3] + "    " + arr2[4] + " " +arr2[5] + "\n" +arr2[6] + " " + arr2[7] + "    "  + arr2[8] + " " +arr2[9] + "    " + arr2[10] + " " +arr2[11] + "\n" + arr2[12] + " " + arr2[13] + "    "  + arr2[14] + " " +arr2[15] + "    " + arr2[16] + " " +arr2[17] + "\n" + arr2[18] + " " + arr2[19] + "    "  + arr2[20] +  " " +arr2[21] + "    " + arr2[22] + " "+arr2[23] + "\n" + arr2[24] + " " + arr2[25]);
    }
if(msg == "/시간표"){
var aa = new Date()
var year = aa.getFullYear()
var month = aa.getMonth()+1
var date = aa.getDate()
var dayLabel = aa.getDay()

var a1=['수학', '음악', '창체' ,'운동과 건강', '컴퓨터 네트워크' , '영어A',  '디자인일반'];
var a2=['국어A', '수학', '보건','컴퓨터구조', '프로그래밍', '프로그래밍', '통합사회B'];
var a3=['컴퓨터시스템일반','컴퓨터시스템일반','영어A','통합사회C','디자인일반','국어A','동아리'];
var a4=['국어B', '컴퓨터구조','프로그래밍','프로그래밍','통합사회A','영어B','운동과 건강'];
var a5=['컴퓨터 네트워크', '컴퓨터 네트워크', '컴퓨터 시스템 일반', '컴퓨터 시스템 일반', '수학'];
if(dayLabel == 1){
replier.reply(a1[0] + "\n" + a1[1] + "\n" + a1[2] + "\n" + a1[3] + "\n" + a1[4] + "\n" + a1[5] + "\n" +  a1[6]);
}else if(dayLabel == 2){
replier.reply(a2[0] + "\n" + a2[1] + "\n" + a2[2] + "\n" + a2[3] + "\n" + a2[4] + "\n" + a2[5] + "\n" + a2[6]);
}else if(dayLabel == 3){
replier.reply(a3[0] + "\n" + a3[1] + "\n" + a3[2] + "\n" + a3[3] + "\n" + a3[4] + "\n" + a3[5] + "\n" + a3[6]);
}else if(dayLabel == 4){
replier.reply(a4[0] + "\n" + a4[1] + "\n" + a4[2] + "\n" + a4[3] + "\n" + a4[4] + "\n" + a4[5] + "\n" + a4[6]);
}else if(dayLabel == 5){
replier.reply(a5[0] + "\n" + a5[1] + "\n" + a5[2] + "\n" + a5[3] + "\n" + a5[4] );
}else{
replier.reply("시간표가 없습니다");
}
}
if(msg == "/내일 시간표"){
var aa = new Date()
var year = aa.getFullYear()
var month = aa.getMonth()+1
var date = aa.getDate()
var dayLabel = aa.getDay() + 1

var a1=['수학', '음악', '창체' ,'운동과 건강', '컴퓨터 네트워크' , '영어A',  '디자인일반'];
var a2=['국어A', '수학', '보건','컴퓨터구조', '프로그래밍', '프로그래밍', '통합사회B'];
var a3=['컴퓨터시스템일반','컴퓨터시스템일반','영어A','통합사회C','디자인일반','국어A','동아리'];
var a4=['국어B', '컴퓨터구조','프로그래밍','프로그래밍','통합사회A','영어B','운동과 건강'];
var a5=['컴퓨터 네트워크', '컴퓨터 네트워크', '컴퓨터 시스템 일반', '컴퓨터 시스템 일반', '수학'];
if(dayLabel == 1){
replier.reply(a1[0] + "\n" + a1[1] + "\n" + a1[2] + "\n" + a1[3] + "\n" + a1[4] + "\n" + a1[5] + "\n" +  a1[6]);
}else if(dayLabel == 2){
replier.reply(a2[0] + "\n" + a2[1] + "\n" + a2[2] + "\n" + a2[3] + "\n" + a2[4] + "\n" + a2[5] + "\n" + a2[6]);
}else if(dayLabel == 3){
replier.reply(a3[0] + "\n" + a3[1] + "\n" + a3[2] + "\n" + a3[3] + "\n" + a3[4] + "\n" + a3[5] + "\n" + a3[6]);
}else if(dayLabel == 4){
replier.reply(a4[0] + "\n" + a4[1] + "\n" + a4[2] + "\n" + a4[3] + "\n" + a4[4] + "\n" + a4[5] + "\n" + a4[6]);
}else if(dayLabel == 5){
replier.reply(a5[0] + "\n" + a5[1] + "\n" + a5[2] + "\n" + a5[3] + "\n" + a5[4] );
}else{
replier.reply("시간표가 없습니다");
}
}
if(msg == "/숙제"){
replier.reply("프밍 계산기 만들기");
}
if(msg == "/계산기"){
replier.reply("http://github.com/Choih0401/C_Calculator");
}
  if(msg == "/빌런"){
var peo = [];
var peo2 = shuffle(peo);
  replier.reply("??? : 빌런은 " + peo2[0]);
}
if(msg == "Layer7" || msg == "레쎄"){
replier.reply("http://layer7.kr");
}
if(msg == "Unifox" || msg == "유니폭스"){
replier.reply("http://unifox.kr");
}
if(msg == "Teamlog" || msg == "팀로그"){
replier.reply("http://teamlog.kr")
}
if(msg == "Nefus" || msg == "네퓨즈"){
replier.reply("http://nefus.kr");
}
if(msg == "Layer7 ctf" || msg == "레쎄 씨텝"){
replier.reply("http://ctf.layer7.kr")
}
if(msg == "Emotion" || msg == "이모션"){
replier.reply("http://ernotion.kr");
}
if(msg == "선린위키"){
replier.reply("http://sunrinwiki.layer7.kr");
}
if(msg == "나무위키"){
replier.reply("http://namu.wiki");
}
if(msg == "/현우"){
replier.reply("윾사개발자");
}
  if(msg == "/도움말"){
replier.reply("/시간표 를 입력하면 오늘의 시간표를 출력시켜드립니다." + "\n" + "\n" + "/자리 를 입력하면 자리 배치표를 랜덤으로 출력시켜드립니다." + "\n" + "\n" + "/빌런 을 입력하면 빌런이 누군지 알려드립니다." + "\n" + "\n" + "/날씨 를 입력하면 날씨를 알려드립니다.");
}
}

function shuffle(arr){
 if(arr instanceof Array)
 {
  var len = arr.length;
  if(len == 1) return arr;
  var i = len * 2;
  while(i > 0)
  {
   var idx1 = Math.floor(Math.random()* len);
   var idx2 = Math.floor(Math.random()* len);
   if(idx1 == idx2) continue;
   var temp = arr[idx1];
   arr[idx1] = arr[idx2];
   arr[idx2] = temp;
   i--;
  }
 }
 return arr;
}