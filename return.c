#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type, *charvar; //type, charvar ����

void vartype(char arr[]); //tpye ����

int main(int argc, char* argv[]) {
	char arr1[100]; //100�̶�� ũ���� arr1 �迭 ����
	gets(arr1); //arr1�� �Է��� ����
	vartype(arr1); //vartpye�Լ��� �Է� ���� ���� �־���
	system("pause");
}

void vartype(char arr[]) {
	char *ptr = strtok(arr, " "); //���Ⱑ ���� �� ���� ���ڸ� ptr�� �����ϰ� ���⸦ NULL�� �ٲ�
	strcpy(&type, &ptr); //ptr�� tpye�� ������
	printf("%s\n", type); //tpye�� print��
	if (ptr != NULL) { //ptr�� NULL�� �ƴ϶��
		ptr = strtok(NULL, ";"); //;�� ���ö����� ���ڸ� �ڸ�
		strcpy(&charvar, &ptr); //ptr�� charvar�� ��������
		printf("%s\n", charvar); //charvar�� print ����
	}
	else
		printf("Error\n");
}

//���ϰ��� int ���̰ų� float�� ��ȯ��Ű�� �ʰ� �ϴ� char �� �״�� �����