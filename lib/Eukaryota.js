'use strict';

import LivingThing from './LivingThing';

class Eukaryota extends LivingThing {
  constructor() {
    this.trueNucleus = true;
    this.anaerobic = false;
    var _heterotroph = null;
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