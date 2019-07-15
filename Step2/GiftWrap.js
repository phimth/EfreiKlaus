const Toy = require('./../Step1/Toy')
const Packaging = require('./Packaging')

class GiftWrap extends Packaging{
    
    constructor(){
        super()
        this.isOpen = false
        this.toy= null
    }
    open(){
        this.isOpen = true
    }
    insert(toy){
        this.toy = toy
        this.isOpen = false
    }
}

module.exports = GiftWrap;