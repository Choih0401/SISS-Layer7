#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>

char *input_, *inputed;


void madeinput(char arrinput[]);

int main(int argc, char* argv[]){
	char arrinput[100];
	gets(arrinput);
	madeinput(arrinput);
	system("pause");}

void madeinput(char arrinput[]){
	char *inputptr = strtok(arrinput," ");
	strcpy(&input_,&inputptr);	
	if (!strncmp(input_,"input",5)){
		    inputptr = strtok(NULL,";");
			strcpy(inputed,inputptr);
			printf("%s\n",inputed); 
	 }
	else {
		printf("Error\n");}
	}