p=console.log.bind(console)
/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
*/

function Fighter(name, health, damagePerAttack) {
  this.name = name
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let i=1
  if (fighter2==firstAttacker) {
  while (fighter1.health>0 && fighter2.health>0) {
    p('Round ' + i)
    fighter1.health -= fighter2.damagePerAttack
    if (fighter1.health <= 0) {p(fighter2.name); return}
    fighter2.health -= fighter1.damagePerAttack
    if (fighter2.health <= 0) {p(fighter1.name); return}
    p("Fighter1:  " + fighter1.health)
    p("Fighter2:  " +fighter2.health)
    i++ 
    }
  }
  else {
    while (fighter1.health>0 && fighter2.health>0) {
      p('Round '+i)
      fighter2.health -= fighter1.damagePerAttack
      if (fighter2.health <= 0) {p(fighter1.name); return}
      fighter1.health -= fighter2.damagePerAttack
      if (fighter1.health <= 0) {p(fighter2.name); return}
      p("Fighter1:  " +fighter1.health) 
      p("Fighter2:  " + fighter2.health)
      i++
      }

  }

}

f1 = new Fighter('Fighter 1',10,2)
f2 = new Fighter('Fighter 2',5,4)

declareWinner(f1,f2,f2)
p('---------------------')