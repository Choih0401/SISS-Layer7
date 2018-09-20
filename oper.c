#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *type, *charvar, *name;
int intvar;
float floatvar;

void vartype(char arr[]);

int main(int argc, char* argv[]) {
	char arr1[100];
	gets(arr1);
	vartype(arr1);
	system("pause");
}

void vartype(char arr[]) {
	char *ptr = strtok(arr, " ");
	strcpy(&type, &ptr);
	printf("%s\n", type);
	if (ptr != NULL) {
		ptr = strtok(NULL, "=");
		strcpy(&name, &ptr);
		printf("%s\n", name);
	}
	else {
		printf("Error\n");
	}
	if (ptr != NULL) {
		ptr = strtok(NULL, ";");
		if (ptr == NULL) {
			printf("Error\n");
		}
		else if (!strncmp(type, "int", 3)) {
			intvar = atoi(ptr);
			printf("%d\n", intvar);
		}
		else if (!strncmp(type, "char", 4)) {
			strcpy(charvar, ptr);
			printf("%s\n", charvar);
		}
		else if (!strncmp(type, "float", 5)) {
			floatvar = atof(ptr);
			printf("%f\n", floatvar);
		}
		else {
			printf("Error\n");
		}
	}
	else {
		printf("Error\n");
	}
}
