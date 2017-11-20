all: dft.png idft.png fft.png ifft.png

dft: dft.c
	gcc -g -Wall $< -o $@

dft.tsv: dft ../data/speech_sample/speech_sample/A_a.dat
	./$< ../data/speech_sample/speech_sample/A_a.dat 0 512 > $@

dft.png: dft.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@

idft: dft.c
	gcc -g -Wall $< -o $@ -DMODE_IDFT

idft.tsv: idft ../data/speech_sample/speech_sample/A_a.dat
	./$< ../data/speech_sample/speech_sample/A_a.dat 0 512 > $@

idft.png: idft.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@

fft: fft.c
	gcc -g -Wall $< -o $@

fft.tsv: fft ../data/speech_sample/speech_sample/A_a.dat
	./$< ../data/speech_sample/speech_sample/A_a.dat 0 512 > $@

fft.png: fft.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@

ifft: fft.c
	gcc -g -Wall $< -o $@ -DMODE_IFFT

ifft.tsv: ifft ../data/speech_sample/speech_sample/A_a.dat
	./$< ../data/speech_sample/speech_sample/A_a.dat 0 512 > $@

ifft.png: ifft.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@
