data/speech_sample.zip:
	mkdir -p data
	curl http://www.gavo.t.u-tokyo.ac.jp/~mine/jikken/speech_interface/speech_sample.zip -o $@

data/speech_sample: data/speech_sample.zip
	mkdir -p $@
	unzip -d $@ $<