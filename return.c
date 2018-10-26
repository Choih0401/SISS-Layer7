#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type, *charvar; //type, charvar 선언

void vartype(char arr[]); //tpye 선택

int main(int argc, char* argv[]) {
	char arr1[100]; //100이라는 크기의 arr1 배열 선언
	gets(arr1); //arr1에 입력을 받음
	vartype(arr1); //vartpye함수에 입력 받은 값을 넣어줌
	system("pause");
}

void vartype(char arr[]) {
	char *ptr = strtok(arr, " "); //띄어쓰기가 나올 때 까지 문자를 ptr에 저장하고 띄어쓰기를 NULL로 바꿈
	strcpy(&type, &ptr); //ptr을 tpye에 복사함
	printf("%s\n", type); //tpye를 print함
	if (ptr != NULL) { //ptr이 NULL이 아니라면
		ptr = strtok(NULL, ";"); //;이 나올때까지 문자를 자름
		strcpy(&charvar, &ptr); //ptr을 charvar에 저장해줌
		printf("%s\n", charvar); //charvar을 print 해줌
	}
	else
		printf("Error\n");
}

//리턴값이 int 형이거나 float로 변환시키지 않고 일단 char 형 그대로 출력함