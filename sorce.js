function response(room, msg, sender, isGroupChat, replier, ImageDB) {
    if (msg == "/����") {
        var day = new Date();
        replier.reply("������ " + (day.getMonth() + 1) + "�� " + day.getDate() + "�� �Դϴ�.");
    }
    if (msg == "/�ð�") {
        var day = new Date();
        replier.reply("������ " + day.getHours() + "�� " + day.getMinutes() + "�� " + day.getSeconds() + "���Դϴ�.");
    }
    if(msg == "/�ڸ�"){
        var arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];
        var arr2 = shuffle(arr);
        replier.reply(arr2[0] + " " + arr2[1] + "    "  + arr2[2] + " " +arr2[3] + "    " + arr2[4] + " " +arr2[5] + "\n" +arr2[6] + " " + arr2[7] + "    "  + arr2[8] + " " +arr2[9] + "    " + arr2[10] + " " +arr2[11] + "\n" + arr2[12] + " " + arr2[13] + "    "  + arr2[14] + " " +arr2[15] + "    " + arr2[16] + " " +arr2[17] + "\n" + arr2[18] + " " + arr2[19] + "    "  + arr2[20] +  " " +arr2[21] + "    " + arr2[22] + " "+arr2[23] + "\n" + arr2[24] + " " + arr2[25]);
    }
if(msg == "/�ð�ǥ"){
var aa = new Date()
var year = aa.getFullYear()
var month = aa.getMonth()+1
var date = aa.getDate()
var dayLabel = aa.getDay()

var a1=['����', '����', 'âü' ,'��� �ǰ�', '��ǻ�� ��Ʈ��ũ' , '����A',  '�������Ϲ�'];
var a2=['����A', '����', '����','��ǻ�ͱ���', '���α׷���', '���α׷���', '���ջ�ȸB'];
var a3=['��ǻ�ͽý����Ϲ�','��ǻ�ͽý����Ϲ�','����A','���ջ�ȸC','�������Ϲ�','����A','���Ƹ�'];
var a4=['����B', '��ǻ�ͱ���','���α׷���','���α׷���','���ջ�ȸA','����B','��� �ǰ�'];
var a5=['��ǻ�� ��Ʈ��ũ', '��ǻ�� ��Ʈ��ũ', '��ǻ�� �ý��� �Ϲ�', '��ǻ�� �ý��� �Ϲ�', '����'];
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
replier.reply("�ð�ǥ�� �����ϴ�");
}
}
if(msg == "/���� �ð�ǥ"){
var aa = new Date()
var year = aa.getFullYear()
var month = aa.getMonth()+1
var date = aa.getDate()
var dayLabel = aa.getDay() + 1

var a1=['����', '����', 'âü' ,'��� �ǰ�', '��ǻ�� ��Ʈ��ũ' , '����A',  '�������Ϲ�'];
var a2=['����A', '����', '����','��ǻ�ͱ���', '���α׷���', '���α׷���', '���ջ�ȸB'];
var a3=['��ǻ�ͽý����Ϲ�','��ǻ�ͽý����Ϲ�','����A','���ջ�ȸC','�������Ϲ�','����A','���Ƹ�'];
var a4=['����B', '��ǻ�ͱ���','���α׷���','���α׷���','���ջ�ȸA','����B','��� �ǰ�'];
var a5=['��ǻ�� ��Ʈ��ũ', '��ǻ�� ��Ʈ��ũ', '��ǻ�� �ý��� �Ϲ�', '��ǻ�� �ý��� �Ϲ�', '����'];
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
replier.reply("�ð�ǥ�� �����ϴ�");
}
}
if(msg == "/����"){
replier.reply("���� ���� �����");
}
if(msg == "/����"){
replier.reply("http://github.com/Choih0401/C_Calculator");
}
  if(msg == "/����"){
var peo = [];
var peo2 = shuffle(peo);
  replier.reply("??? : ������ " + peo2[0]);
}
if(msg == "Layer7" || msg == "����"){
replier.reply("http://layer7.kr");
}
if(msg == "Unifox" || msg == "��������"){
replier.reply("http://unifox.kr");
}
if(msg == "Teamlog" || msg == "���α�"){
replier.reply("http://teamlog.kr")
}
if(msg == "Nefus" || msg == "��ǻ��"){
replier.reply("http://nefus.kr");
}
if(msg == "Layer7 ctf" || msg == "���� ����"){
replier.reply("http://ctf.layer7.kr")
}
if(msg == "Emotion" || msg == "�̸��"){
replier.reply("http://ernotion.kr");
}
if(msg == "������Ű"){
replier.reply("http://sunrinwiki.layer7.kr");
}
if(msg == "������Ű"){
replier.reply("http://namu.wiki");
}
if(msg == "/����"){
replier.reply("���簳����");
}
  if(msg == "/����"){
replier.reply("/�ð�ǥ �� �Է��ϸ� ������ �ð�ǥ�� ��½��ѵ帳�ϴ�." + "\n" + "\n" + "/�ڸ� �� �Է��ϸ� �ڸ� ��ġǥ�� �������� ��½��ѵ帳�ϴ�." + "\n" + "\n" + "/���� �� �Է��ϸ� ������ ������ �˷��帳�ϴ�." + "\n" + "\n" + "/���� �� �Է��ϸ� ������ �˷��帳�ϴ�.");
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