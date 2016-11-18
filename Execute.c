/*Class Notes*/

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

int main() {
	char str[1000];
	char * strP = str;
	char *command [1000];
	char *p;

	printf("Please enter a command: ");
	gets (str);

	int i = 0;
	while (p != 0){
		p = strsep(&strP, " ");
		command[i] = p;
		//printf("\nPrint: %s", command[i]);
		//printf("test %d", i);
		i++;
	}

	execvp(command[0], command);




	return 0;
}

/*Notes
*/
