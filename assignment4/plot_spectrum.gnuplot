set term png
set xrange[0:8000]
plot filename using (column(0) / 256 * 8000):(log10(($1*$1+$2*$2)/512.0)) with lines lc 3
