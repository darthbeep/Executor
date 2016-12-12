#include <stdio.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <sys/sem.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char* argv[]){
  int semid;
  int sc;
  int sem_id = 1;
  key_t key = ftok("makefile", 18);

  union semun {
    int val;
    struct semid_ds *buf;
    unsigned short int *array;
  };

  if (strncmp(argv[1], "-c", strlen(argv[1])) ==0){
    int fd = open("story.txt", O_TRUNC | O_APPEND | O_WRONLY);
    semid = semget(key, 1, IPC_CREAT | 0644);
    printf("Semaphore created: %d\n", semid);
    union semun su;
    su.val = 1;
    sc = semctl(semid, 0, SETVAL, su);
    printf("Value set: %d\n", sc);
    //write(fd, argv[1], sizeof(argv[1]))
    close(fd);
  }

  else if (strncmp(argv[1], "-r", strlen(argv[1])) ==0){
    semid = semget(key, 1, 0);
    //removing semaphore
    sc = semctl(semid, 0, IPC_RMID);
    printf("Semaphore removed: %d\n", sc);
    int fd = open("story.txt", O_RDONLY);
    int c;
    FILE *file;
    file = fopen("story.txt", "r");
    if (file){
      while ((c = getc(file)) != EOF)
	printf("%c",c);
      fclose(file);
    }
  }

  else if (strncmp(argv[1], "-v", strlen(argv[1])) ==0){
    int c;
    FILE *file;
    file = fopen("story.txt", "r");
    if (file){
      while ((c = getc(file)) != EOF)
	printf("%c",c);
      fclose(file);
    }
  }

  return 0;
}
