// Generated by CoffeeScript 1.7.1
require(function() {
  var Equipment, Slots;
  Slots = {
    NORMAL: ['rightHand', 'leftHand', 'chest', 'head', 'boots', 'amulet', 'ring1', 'ring2']
  };
  return Equipment = (function() {
    Equipment.Slots = Slots;

    function Equipment(slotNames) {
      this.slotNames = slotNames;
      this.slots = {};
      if (this.slotNames == null) {
        this.slotNames = Slots.NORMAL;
      }
    }

    return Equipment;

  })();
});