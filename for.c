#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type, *charvar, *data, *charvar2, chari; //type, charvar, name ����
int *size, *size2;

void vartype(char arr[]); //tpye ����

int main(int argc, char* argv[]) {
	char arr1[100]; //100�̶�� ũ���� arr1 �迭 ����
	gets(arr1); //arr1�� �Է��� ����
	vartype(arr1); //vartpye�Լ��� �Է� ���� ���� �־���
	system("pause");
}

void vartype(char arr[]) {
	char *ptr = strtok(arr, "("); //(�� ���� �� ���� ���ڸ� ptr�� �����ϰ� ���⸦ NULL�� �ٲ�
	strcpy(&type, &ptr); //ptr�� tpye�� ������
	printf("%s\n", type); //tpye�� print��
	if (ptr != NULL) { //ptr�� NULL�� �ƴ϶��
		ptr = strtok(NULL, "="); //)�� ���ö����� ���ڸ� �ڸ�
		strcpy(&data, &ptr); //ptr�� name�� ��������
		printf("%s\n", data); //name�� print ����
	}
	else {
		printf("Error\n"); //ptr�� NULL�̶�� Error�� print����
	}
	if (ptr != NULL) {
		ptr = strtok(NULL, ";");
		size = ptr;
		printf("%d\n", size);
	}
	else {
		printf("Error\n");
	}
	if (ptr != NULL) {
		ptr = strotk(NULL, "<");
		strcpy(&charvar2, &ptr);
		printf("%s\n", charvar2);
	}
	else {
		printf("Error\n");
	}
	if (ptr != NULL) {
		ptr = strtok(NULL, ";");
		size2 = ptr;
		printf("%d\n", size2);
	}
	else {
		printf("Error\n");
	}
	if (ptr != NULL) {
		ptr = strtok(NULL, ")");
		strcpy(&chari, &ptr);
		printf("%s\n", chari);
	}
	else {
		printf("Error\n");
	}
}