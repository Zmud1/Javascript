
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
/*
  const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
      get energyLevel(){
        if (typeof this._energyLevel=="number") {return "ddd"} else {return "aaa"}
        }
      }  



    p(robot.energyLevel)
*/


// I create arrays including three types of dishes

const firstDishes = ['soup1','soup2','soup3','soup4','soup5']
const secondDishes = ["dish1","dish2","dish3","dish4","dish5"]
const desserts = ["d1","d2","d3","d4","d5"]
/*
  const meal = {
      _firstDish: "",
      _secondDish: "",
      _dessert: "", 
      randomize(arr1,arr2,arr3) {
        p(arr1[Math.floor(Math.random()*arr1.length)])
        }
      } 
      
      arr1[Math.floor(Math.random()*arr1.length)]

  console.log('d')

  meal.randomize(firstDishes,secondDishes,desserts)
*/
const menu = {
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[]
    },
  get appetizers() {
  },
  set appetizers(appetizerIn){
  },
  get mains() {
  },
  set mains(mainsIn){
  },
  get desserts() {
  },
  set desserts(dessertsIn){
  },
  get courses() {
    return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
    }
  }, 
  addDishToCourse(courseName,dishName,dishPrice) {
  if ((courseName === 'appetizers'||'mains'||'desserts') && (typeof dishName == ('string' || 'array')) && (typeof dishPrice ==='number')) {
    var dish = {
      dishName,
      dishPrice
    }
    this['_courses'][courseName].push(dish)
  }
  else {p('Something is wrong')}
  } 
  }
 let d
//menu.addDishToCourse('appetizers','d',5)
menu.addDishToCourse('mains','sajgonki',5)
//menu.addDishToCourse('desserts','lody kokosowe', 3)
p(menu._courses.appetizers)
p(menu._courses.mains)
p(menu._courses.desserts)