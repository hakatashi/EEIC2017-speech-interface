.PHONY: all clean

all: \
	A_a.spectrum.png \
	A_a.autocorrelation.spectrum.png

clean:
	git clean -fdX

%.dat.tsv: ../data/speech_sample/speech_sample/%.wav
	node window.js $< > $@

%.spectrum.tsv: fft %.dat.tsv
	./$< $(word 2,$^) 0 512 > $@

%.autocorrelation.tsv: %.dat.tsv
	node autocorrelation.js $< > $@

%.autocorrelation.spectrum.tsv: fft %.autocorrelation.tsv
	./$< $(word 2,$^) 0 512 > $@

fft: fft.c
	gcc -g -Wall $< -o $@

fft_spec: fft.c
	gcc -g -Wall $< -o $@ -DMODE_SPEC

%.autocorrelation.png: %.autocorrelation.tsv
	gnuplot -e filename='"$<"' plot.gnuplot > $@

%.png: %.tsv
	gnuplot -e filename='"$<"' plot_spectrum.gnuplot > $@
