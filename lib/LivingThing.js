'use strict';

class LivingThing {

  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }
  get name() {
    return this._name;
  }

  set name(theName) {
    this._name = theName;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(theBoolean) {
    this._uniCellular = theBoolean;
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(theBoolean) {
    this._uniCellular = !theBoolean;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(theBoolean) {
    this._trueNucleus = theBoolean;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(theBoolean) {
    this._trueNucleus = !theBoolean;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(theBoolean) {
    this._anaerobic = theBoolean;
  }

  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic(theBoolean) {
    this._anaerobic = !theBoolean;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(theBoolean) {
    this._asexual = theBoolean;
  }

  get sexual() {
    return !this._asexual;
  };

  set sexual(theBoolean) {
    this._asexual = !theBoolean;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(theBoolean) {
    this._mobile = theBoolean;
  }

  get immobile() {
    return !this._mobile;
  }

  set immobile(theBoolean) {
    this._mobile = !theBoolean;
  }


}

export default LivingThing;