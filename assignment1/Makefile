all: data.png

data.csv: ../data/speech_sample/speech_sample/A_a.wav
	node index.js $< > $@

data.png: data.csv
	gnuplot -e filename='"$<"' plot.gnuplot > $@
