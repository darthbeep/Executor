//Include stuff
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

int main() {
	//set up variables
	char str[1000];
	char * strP = str;
	char *command [1000];
	char *p = (char *) malloc(sizeof(char));
	printf("Please enter a command: ");
	fgets (strP, 1000, stdin); //Why did no one tell me fgets includes a newline
	//Removes the newline
	int rem = strlen(str)-1;
	str[rem] = 0;
	//Loads p into command
	int i = 0;
	while (p != 0){
		p = strsep(&strP, " ");
		command[i] = p;
		i++;
	}
	//And run!
	execvp(command[0], command);
	return 0;
}
