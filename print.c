#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type, *charvar, *data; //type, charvar, name 선언

void vartype(char arr[]); //tpye 선택

int main(int argc, char* argv[]) {
	char arr1[100]; //100이라는 크기의 arr1 배열 선언
	gets(arr1); //arr1에 입력을 받음
	vartype(arr1); //vartpye함수에 입력 받은 값을 넣어줌
	system("pause");
}

void vartype(char arr[]) {
	char *ptr = strtok(arr, " "); 
	strcpy(&type, &ptr); 
	printf("%s\n", type); 
	if (ptr != NULL) {
		ptr = strtok(NULL, ";"); 
		strcpy(&data, &ptr); 
		printf("%s\n", data); 
	}
	else {
		printf("Error\n"); 
	}
}