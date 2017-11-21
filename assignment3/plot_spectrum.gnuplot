set term png
plot filename using (column(0)):(log10(($1*$1+$2*$2)/512.0)) with lines lc 3
