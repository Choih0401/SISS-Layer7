#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type, *charvar, *data; //type, charvar, name ����

void vartype(char arr[]); //tpye ����

int main(int argc, char* argv[]) {
	char arr1[100]; //100�̶�� ũ���� arr1 �迭 ����
	gets(arr1); //arr1�� �Է��� ����
	vartype(arr1); //vartpye�Լ��� �Է� ���� ���� �־���
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