#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *print_, *printed;

void madeprint(char arrprint[]);

int main(int argc, char* argv[]){
	char arrprint[100];
	gets(arrprint);
	madeprint(arrprint);
	system("pause");}

void madeprint(char arrprint[]){
	char *printptr = strtok(arrprint," ");
	strcpy(&print_,&printptr);	
	if (!strncmp(print_,"print",5)){
		    printptr = strtok(NULL,";");
			strcpy(printed,printptr);
			printf("%s\n",printed); 
	 }
	else {
		printf("Error\n");}
	}