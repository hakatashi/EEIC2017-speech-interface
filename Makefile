data/speech_sample.zip:
	mkdir -p data
	curl http://www.gavo.t.u-tokyo.ac.jp/~mine/jikken/speech_interface/speech_sample.zip -o $@

data/speech_sample: data/speech_sample.zip
	mkdir -p $@
	unzip -d $@ $<

practice2/data.csv: data/speech_sample/speech_sample/A_a.wav
	node practice2/index.js $< > $@

practice2/data.png: practice2/data.csv
	gnuplot -e filename='"$<"' practice2/plot.gnuplot > $@

assignment1/data.csv: data/speech_sample/speech_sample/A_a.wav
	node assignment1/index.js $< > $@

assignment1/data.png: assignment1/data.csv
	gnuplot -e filename='"$<"' assignment1/plot.gnuplot > $@

.PHONY: assignment2
assignment2:
	$(MAKE) -C $@ -B
