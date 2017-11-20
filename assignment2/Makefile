all: dft.png fft.png

dft: dft.c
	gcc -g -Wall $< -o $@

dft.tsv: dft ../data/speech_sample/speech_sample/A_a.dat
	./$< ../data/speech_sample/speech_sample/A_a.dat 0 512 > $@

dft.png: dft.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@

fft: fft.c
	gcc -g -Wall $< -o $@

fft.tsv: fft ../data/speech_sample/speech_sample/A_a.dat
	./$< ../data/speech_sample/speech_sample/A_a.dat 0 512 > $@

fft.png: fft.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@
