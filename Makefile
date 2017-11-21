SUBDIRS := practice2 assignment1 assignment2 assignment3 assignment4

all: $(SUBDIRS)

clean:
	git clean -fdX

data/speech_sample.zip:
	mkdir -p data
	curl http://www.gavo.t.u-tokyo.ac.jp/~mine/jikken/speech_interface/speech_sample.zip -o $@

data/speech_sample: data/speech_sample.zip
	mkdir -p $@
	unzip -d $@ $<

node_modules:
	npm install

$(SUBDIRS): data/speech_sample node_modules
	$(MAKE) -C $@ -B

.PHONY: all clean $(SUBDIRS)
