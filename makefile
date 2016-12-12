compile: semaphone.c writing.c
	gcc semaphone.c -o semaphone
	gcc writing.c -o writing

clean:
	rm -f rsctrl
	rm -f writing
	rm -rf *~ *out