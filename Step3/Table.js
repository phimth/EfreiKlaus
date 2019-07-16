const Furniture = require('./Furniture')

class Table extends Furniture{
    
    constructor(){
        super()
        this.content = []
    }
    take(){
        this.content.pop()
    }
    pick(item){
        var index = this.content.indexOf(item)
        this.content.splice(index,1)
    }
}

module.exports = Table;