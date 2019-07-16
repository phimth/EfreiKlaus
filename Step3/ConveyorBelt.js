const Furniture = require('./Furniture')

class ConveyorBelt extends Furniture{
    
    constructor(){
        super()
        this.isBusy = false
    }
    take(){
        this.isBusy = false
    }
    put(){
        this.isBusy = true
    }
}

module.exports = ConveyorBelt;