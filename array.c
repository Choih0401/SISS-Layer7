#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type1, *charvar1[100], *name1; //type, charvar, name 識情
int intvar1; // intvar 識情
char chvar1;//chvar 識情

void array(char arr[]); //tpye 識澱

int main(int argc, char* argv[]) {
	char arr1[100];
	gets(arr1); 
	array(arr1);
	system("pause");
}

void array(char arr[]) {
	char *ptr = strtok(arr, " "); 
	strcpy(&type1, &ptr);
	printf("%s\n", type1); 
	if (ptr != NULL) { 
		ptr = strtok(NULL, "["); 
		strcpy(&name1, &ptr);
		printf("%s\n", name1); 
	}
	else {
		printf("Error\n"); 
	}
	if (ptr != NULL) { 
		ptr = strtok(NULL, "]"); 
		if (ptr == NULL) {
			printf("Error\n"); 
		}
		else if (!strncmp(type1, "int", 3)) { 
			intvar1 = atoi(ptr);
			printf("%d\n", intvar1);
		}
		else if (!strncmp(type1, "char", 4)) {
			strcpy(charvar1, ptr); 
			printf("%s\n", charvar1); 
		}
		else {
			printf("Error\n"); 
		}
	}
	else {
		printf("Error\n");
	}
}