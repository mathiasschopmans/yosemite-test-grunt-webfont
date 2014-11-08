#Basic test.

As mentioned in [#189](https://github.com/sapegin/grunt-webfont/issues/189) I had problems to compile fonts on Yosemite. There are no errors on 10.9 or even on 10.10 with the [fontcusotm](https://github.com/FontCustom/fontcustom) gem.


## Steps to reproduce
Verify it's working with fontcustom: `fontcustom compile`

Just run `grunt`. Should stuck on yosemite.
If you remove `svg/search-defect.svg` it works fine.

**Don't forget to kill all fontforge processes with `pkill -f fontforge` before running again.**
