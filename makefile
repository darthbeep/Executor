<<<<<<< HEAD
compile: semaphone.c writing.c
	gcc semaphone.c -o semaphone
	gcc writing.c -o writing

clean:
	rm -f rsctrl
	rm -f writing
	rm -rf *~ *out
=======
GCC = gcc -g

all: Execute.o
	$(GCC) -o Execute.out Execute.o

Execute.o: Execute.c
	$(GCC) -c Execute.c

run: Execute.out
	./Execute.out

clean:
	rm -f *~ *.out *.o *#
>>>>>>> 15589080100043b19ba4679262c7819a1d554ccd
