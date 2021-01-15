
p = console.log.bind(console);
  
// I create arrays including three types of dishes

const firstDishes = ['soup1','soup2','soup3','soup4','soup5']
const secondDishes = ["dish1","dish2","dish3","dish4","dish5"]
const desserts = ["d1","d2","d3","d4","d5"]

const menu = {
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[]
    },
  get courses() {
    return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
    }
  }, 
  
  addDishToCourse(courseName,dishName,dishPrice) {
    if ((courseName === 'appetizers'||courseName ==='mains'||courseName ==='desserts') && (typeof dishName =='string' || typeof dishName == 'array') && (typeof dishPrice ==='number')) {
    var dish = {
      dishName,
      dishPrice
    }
    this._courses[courseName].push(dish)   
  }
  else {p('Something is wrong')}
  },

  getRandomDishFromCourse(courseName) {
    return this._courses[courseName][Math.floor(Math.random()*this._courses[courseName].length)]
  },

  getRandomMeal() {
    var appetizer = menu.getRandomDishFromCourse('appetizers')
    var main = menu.getRandomDishFromCourse('mains')
    var dessert = menu.getRandomDishFromCourse('desserts')

    p("Our proposition for todays appetizer is: " + appetizer.dishName + ' price - '+appetizer.dishPrice+' PLN')
    p("Our proposition for todays main is: " +  main.dishName + ' price - '+main.dishPrice+' PLN')
    p("Our proposition for todays dessert is: "  + dessert.dishName + ' price - '+dessert.dishPrice+'PLN')
    p('The total cost of your meal is: ' + (appetizer.dishPrice+main.dishPrice+dessert.dishPrice)+' PLN')
  }
 }

var setOfAppetizers1=[
  app1={dishName: 'chleb',dishPrice:3},app2={dishName:'tatar',dishPrice:10},app3={dishName: 'zupa',dishPrice: 7}
]
var setOfMains1=[
  app1={dishName: 'kurczak',dishPrice:3},app2={dishName:'mielone',dishPrice:10},app3={dishName: 'schab',dishPrice: 7}
]
var setOfDesserts1=[
  app1={dishName: 'lody',dishPrice:3},app2={dishName:'budyń',dishPrice:10},app3={dishName: 'ciasto',dishPrice: 7}
]
menu._courses.appetizers=setOfAppetizers1
menu._courses.mains=setOfMains1
menu._courses.desserts=setOfDesserts1

menu.addDishToCourse('appetizers','deska serow',8)
menu.addDishToCourse('mains','sajgonki',5)
menu.addDishToCourse('desserts','lody kokosowe', 3)
//p(menu._courses.appetizers)
//p(menu._courses.mains)
//p(menu._courses.desserts)

//p(menu.getRandomDishFromCourse('appetizers'))

menu.getRandomMeal()


