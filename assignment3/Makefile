.PHONY: all clean

all: A_aiueo1.spectrum.lpf.png \
     A_aiueo2.spectrum.lpf.png \
     A_aiueo3.spectrum.lpf.png \
     A_aiueo4.spectrum.lpf.png \
     A_aiueo5.spectrum.lpf.png

clean:
	git clean -fdX

%.dat.tsv: ../data/speech_sample/speech_sample/%.wav
	node index.js $< > $@

%.spectrum.tsv: fft %.dat.tsv
	./$< $(word 2,$^) 0 512 > $@

fft: fft.c
	gcc -g -Wall $< -o $@

fft_spec: fft.c
	gcc -g -Wall $< -o $@ -DMODE_SPEC

ifft: fft.c
	gcc -g -Wall $< -o $@ -DMODE_IFFT

%.spectrum.lpf.png: %.spectrum.lpf.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@

%.png: %.tsv
	gnuplot -e filename='"$<"' plot_spectrum.gnuplot > $@

%.cepstrum.tsv: fft_spec %.spectrum.tsv
	./$< $(word 2,$^) 0 512 > $@

%.cepstrum.lpf.tsv: lpf.js %.cepstrum.tsv
	node lpf.js $(word 2,$^) > $@

%.spectrum.lpf.tsv: ifft %.cepstrum.lpf.tsv
	./$< $(word 2,$^) 0 512 > $@
