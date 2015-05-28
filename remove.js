var Gaffa = require('gaffa'),
    actionType = "remove";

function Remove(){}
Remove = Gaffa.createSpec(Remove, Gaffa.Action);
Remove.prototype.type = actionType;
Remove.prototype.trigger = function(action, scope, event){

    this.gaffa.model.remove(this.target.binding, this, null, scope);
};
Remove.prototype.target = new Gaffa.Property();

module.exports = Remove;