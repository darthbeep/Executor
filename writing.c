#include <stdio.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <sys/sem.h>
#include <sys.shm.h>
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>
#include "semaphone.c"

int main(){
  int sd;
  char * line = "";
  scanf("%s", line);
  sd = shmget(2400, 1024, IPC_CREAT | 0644);
  
  return 0;
}
