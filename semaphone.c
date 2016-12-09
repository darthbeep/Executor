#include <stdio.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <sys/sem.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>

int mainH(int argc, char* argv[]){
  int sem;
  int sc;
  int sem_id = 1;
  key_t key;

  key = ftok("makefile", 1);
  sem = semget(key, 1, IPC_CREAT);

  struct sembuf semopinc = {
    .sem_num = 0,
    .sem_op = 1,
    .sem_flg = 0
  };

  struct sembuf semopdec = {
    .sem_num = 0,
    .sem_op = -1,
    .sem_flg = 1
  };

  //union semun su = (union semun) malloc(sizeof(union semun));

  if (strncmp(argv[1], "-c", strlen(argv[1])) ==0){
    int fd = open("story.txt", O_TRUNC | O_APPEND | O_WRONLY);
    semop(sem, &semopdec, 1);
    //write(fd, argv[1], sizeof(argv[1]))
    //sc = semctl(sem, 18, SETVAL, su);
    close(fd);
  }

  else if (strncmp(argv[1], "-r", strlen(argv[1])) ==0){
    semop(sem, &semopinc, 1);
    //sc = semctl(sem, 1, IPC_RMID);
    int fd = open("story.txt", O_RDONLY);
    int c;
    FILE *file;
    file = fopen("story.txt", "r");
    if (file){
      while ((c = getc(file)) != EOF)
	putchar(c);
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
