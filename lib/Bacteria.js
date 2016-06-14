'use strict';

import LivingThing from './LivingThing';

class Bacteria extends LivingThing {
  constructor(name) {
    super(name, true, false, true, true, false);
  }
}

export default Bacteria;