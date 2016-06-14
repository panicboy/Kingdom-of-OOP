'use strict';

import LivingThing from './LivingThing';

class Eukaryota extends LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile, heterotroph) {
    super (name, uniCellular, trueNucleus, anaerobic, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(theBoolean) {
    this._heterotroph = theBoolean;
  }

  get autotroph() {
    return !this._heterotroph;
  }

  set autotroph(theBoolean) {
    this._heterotroph = !theBoolean;
  }

}

export default Eukaryota;