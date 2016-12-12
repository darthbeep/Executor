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
  //setting the semaphore
  int semid = semget(ftok("makefile", 115), 1, IPC_CREAT | 0644);
  struct sembuf buf = {0, -1, SEM_UNDO}; //dec the sem, then inc when terminated
  printf("Waiting for other users to finish...\n");

  printf("Semaphore: %d\n", semid);
  semop(semid, &buf, 1);

  //setting the shared memory
  int sd = shmget(ftok("makefile", 3), sizeof(int), IPC_CREAT | 0644);
  //mem values
  int * len = shmat(sd, 0, 0);
  printf("Memory: %d\n", sd);

  if (*len){
    int fd = open("story.txt", O_RDONLY);
    if (!fd) {
      printf("File does not exist.\n");
      exit(1);
    }
    lseek(fd, -(*len), SEEK_END); //goes back one length in the file
    char *prev = calloc(*len + 1, sizeof(char));
    read(fd, prev, *len + 1);
    close(fd); //finished reading the file
    printf("Previous line: %s\n", prev);
  } else {
    printf("Starting new story\n");
  }

  //reads stdin and appends it to file
  //outputs the previous line to the file
  char input[256];
  printf("Next line: ");
  fgets(input, 256, stdin);  
  int fd = open("story.txt", O_APPEND | O_WRONLY);
  if (!fd) {
    printf("File does not exist.\n");
    exit(1);
  }
  write(fd, input, strlen(input));
  close(fd);

  //  printf("Next line: ");

  //  printf("%s\n", input);


  *len = strlen(input);
  shmdt(len);
  close(fd);

  //releases semaphore
  //  buf.sem_op = 1;
  //semop(semid, &buf, 1);

  return 0;
}
