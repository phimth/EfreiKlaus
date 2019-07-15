const DragonBall = require('./Step1/DragonBall')
const Figurine = require('./Step1/Figurine')
const Pony = require('./Step1/Pony')
const Toy = require('./Step1/Toy');

console.log('--- STEP #1 ---')
let findus = new Pony()
let goku = new DragonBall.DragonBall(DragonBall.DBHeroes.SANGOKU)

findus.isMoved()
goku.isMoved()
