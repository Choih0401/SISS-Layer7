#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type, *charvar, *data, *data2; //type, charvar, name 선언

void vartype(char arr[]); //tpye 선택

int main(int argc, char* argv[]) {
	char arr1[100]; //100이라는 크기의 arr1 배열 선언
	gets(arr1); //arr1에 입력을 받음
	vartype(arr1); //vartpye함수에 입력 받은 값을 넣어줌
	system("pause");
}

void vartype(char arr[]) {
	char *ptr = strtok(arr, "("); //(가 나올 때 까지 문자를 ptr에 저장하고 띄어쓰기를 NULL로 바꿈
	strcpy(&type, &ptr); //ptr을 tpye에 복사함
	printf("%s\n", type); //tpye를 print함
	if (ptr != NULL) { //ptr이 NULL이 아니라면
		ptr = strtok(NULL, "<"); //)이 나올때까지 문자를 자름
		strcpy(&data, &ptr); //ptr을 name에 저장해줌
		printf("%s\n", data); //name을 print 해줌
	}
	else {
		printf("Error\n"); //ptr이 NULL이라면 Error을 print해줌
	}
	if (ptr != NULL) {
		ptr = strtok(NULL, ")");
		strcpy(&data2, &ptr);
		printf("%s\n", data2);
	}
	else {
		printf("Error\n");
	}
}