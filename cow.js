// cow.js
(function(exports) {
  "use strict";

  function Cow(name) {
    this.name = name || "Anon cow";
    this.greets = function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target;
    }

    this.lateGreets = function(target, cb) {
      setTimeout(function(self) {
        try {
          cb(null, self.greets(target));
        } catch (err) {
          cb(err);
        }
      }, 1900, this);
    }
  }
  exports.Cow = Cow;
})(this);