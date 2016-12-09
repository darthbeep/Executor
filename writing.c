#include <stdio.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <sys/sem.h>
#include <sys/shm.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>

int main(){
  int sd;
  int semid;
  int sc;
  key_t key = ftok("makefile", 13);

  union semun {
    int val;
    struct semid_ds *buf;
    unsigned short int *array;
  };

  semid = semget(key, 1, IPC_CREAT | 0644);
  union semun su;
  su.val = 1;
  sc = semctl(semid, 0, SETVAL, su);

  int fd = open("story.txt", O_TRUNC | O_APPEND | O_RDWR);
  write(fd, &line, sizeof(&line))
  close(fd);

  sd = shmget(2400, 1024, IPC_CREAT | 0644);
  char * line = shmat(sd, 0, 0);
  printf("%s", &line);

  scanf("%s", &line);



  return 0;
}
