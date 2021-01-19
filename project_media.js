p = console.log.bind(console);

class Media{
    constructor(title){
        this._title = title
        this._isCheckedOut = false
        this._ratings = []
        this._averageRating = 0
    }

    getAverageRating(){
        this._averageRating = this._ratings.reduce((a,b) => a + b,0) / this._ratings.length
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut

    }
    addRating(rating){
        this._ratings.push(rating)
    }
}

class Book extends Media{
    constructor(title,author,pages){
        super(title)
        this._author = author
        this._pages = pages
    }
}

class Movie extends Media{
    constructor(title,director,runTime){
        super(title)
        this._director = director
        this._runTime = runTime
    }
}

class CD extends Media{    
    constructor(title,artist,songs){
    super(title)
    this._artist = artist
    this._songs = songs
    }
}

const b = new Book('Maskarada','Pratchett',300)
const m = new Movie('Mohikanin','Adam Malysz',120)
const c = new CD('Meteora','Linkin Park',['sss','dfsfsdf','aaaaa'])

p(c._isCheckedOut)
c.toggleCheckOutStatus()
p(c._isCheckedOut)
c.toggleCheckOutStatus()
p(c._isCheckedOut)