.PHONY: all clean
all: A_a.cepstrum.ifft.png
clean:
	git clean -fdX

%.dat.tsv: ../data/speech_sample/speech_sample/%.wav
	node index.js $< > $@

%.spectrum.tsv: fft %.dat.tsv
	./$< $(word 2,$^) 0 512 > $@

fft: fft.c
	gcc -g -Wall $< -o $@

ifft: fft.c
	gcc -g -Wall $< -o $@ -DMODE_IFFT

%.png: %.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@

%.cepstrum.tsv: fft %.spectrum.tsv
	./$< $(word 2,$^) 0 512 > $@
