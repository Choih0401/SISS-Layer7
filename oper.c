#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type, *charvar, *name; //type, charvar, name 선언
int intvar; // intvar 선언
float floatvar; //floatvar 선언

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
		ptr = strtok(NULL, "="); //=이 나올때까지 문자를 자름
		strcpy(&name, &ptr); //ptr을 name에 저장해줌
		printf("%s\n", name); //name을 print 해줌
	}
	else {
		printf("Error\n"); //ptr이 NULL이라면 Error을 print해줌
	}
	if (ptr != NULL) { //prt이 NULL이 아니라면
		ptr = strtok(NULL, ";"); //;이 나올 때까지 문자열을 자름
		if (ptr == NULL) { // ptr이 NULL이라면
			printf("Error\n"); //Error 출력
		}
		else if (!strncmp(type, "int", 3)) { //type이 int라면 문자라면
			intvar = atoi(ptr);//intvar에 ptr을 int형으로 바꿔서 넣어줌
			printf("%d\n", intvar);//intvar을 print 해줌
		}
		else if (!strncmp(type, "char", 4)) {//type가 char형이라면
			strcpy(charvar, ptr); //charvar에 ptr을 넣어줌
			printf("%s\n", charvar); //charvar을 print 해줌
		}
		else if (!strncmp(type, "float", 5)) { //tpye가 float라면
			floatvar = atof(ptr);//ptr을 float로 바꿔서 floatvar에 넣어줌
			printf("%f\n", floatvar); //floatvar을 print 해줌
		}
		else {
			printf("Error\n"); //Error 출력
		}
	}
	else {
		printf("Error\n"); //Error 출력
	}
}
