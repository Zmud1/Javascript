
p = console.log.bind(console);
/*
const robot = {
  _energyLevel: 100,
  kal: 11,
  pipa: 333,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};


const robot1 = Object.create(robot)

robot1.cipa=5 

robot1.recharge()
*/
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if (typeof this._energyLevel=="number") {return "ddd"} else {return "aaa"}
    }
  }  




p(robot.energyLevel)
