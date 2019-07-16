const Packaging = require('./Packaging')
const Toy = require('./../Step1/Toy')
const GiftWrap = require('./GiftWrap')

class Elf {
    
    constructor(name){
       this.nickname = name
       this.emballages=[]
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

    put(table,item){
        if(table.content.length<10){
            table.content.push(item)
        }
        else{
            console.log(`There are too much items on this table, can't add ${item}`)
        }
    }
    take(table,item){
        if(item){
            table.pick(item)
        }
        else{
            table.take()
        }

    }
    in(tapis){

    }
    out(tapis){

    }
    look(table){
        console.log('Table contains: ');
        
        for(var i = 0; i<table.content.length; i++){
            console.log(table.content[i].constructor.name)
        }
    }
}

module.exports = Elf;