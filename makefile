GCC = gcc -g

all: Execute.o
	$(GCC) -o Execute.out Execute.o

Execute.o: Execute.c
	$(GCC) -c Execute.c

run: Execute.out
	./Execute.out

clean:
	rm -f *~ *.out *.o *#
