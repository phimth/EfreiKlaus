const Packaging = require('./Packaging')
const Toy = require('./../Step1/Toy')
const GiftWrap = require('./GiftWrap')

class Elf {
    
    constructor(name){
       this.nickname = name
    }
    getNikname(){
        return this.nickname
    }
    setNickname(nouveau){
        this.nickname = nouveau
    }
    pack(pack, toy){
        if(pack.toy){
            console.log('Sorry this package is already filled')
        }
        else {
            if(pack.isOpen || pack instanceof GiftWrap){
                pack.insert(toy)
                console.log(`Yeaaaah! Just packing the toy ~~ ${pack.toy.getType()} ~~`)
            }
            else{
                console.log('Sorry this package is not open')
            }
        }
    }

    unpack(pack){
        if((pack.isOpen || !pack.toy)){
            console.log('Sorry this package is already empty')
        }
        else{
            let toys = pack.toy
            console.log(`Ooooooh! Just unpacking the toy ~~ ${pack.toy.getType()} ~~`)
            pack.toy = null
            return toys
        }
        return pack.toy
    }
}

module.exports = Elf;