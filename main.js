const dbz = require('./Step1/DragonBall')
const Figurine = require('./Step1/Figurine')
const Pony = require('./Step1/Pony')
const Toy = require('./Step1/Toy')
const Box = require('./Step2/Box')
const Elf = require('./Step2/Elf')
const GiftWrap = require('./Step2/GiftWrap')
const Packaging = require('./Step2/Packaging')

//STEP 1
console.log('--- STEP #1 ---')

let findus = new Pony()
let goku = new dbz.DragonBall(dbz.DBHeroes.SANGOKU)

findus.isMoved()
goku.isMoved()


//STEP 2
console.log('--- STEP #2 ---')

var majdi= new Elf('makiboto')
var box = new Box()
majdi.pack(box, goku)
box.open()
majdi.pack(box, goku)

var paper = new GiftWrap()
majdi.pack(paper, findus)
majdi.pack(paper, findus)

var toy = majdi.unpack(paper)
console.log(toy === findus)
var r = majdi.unpack(paper)
console.log((r == null))


