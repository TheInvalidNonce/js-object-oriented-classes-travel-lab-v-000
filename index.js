class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
  
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  
  }
  
  blocksTravelled() {
    this.vertical = Math.abs(this.endingLocation['vertical'] - this.beginningLocation['vertical'])
    this.horizontal = eastWest.indexOf(this.endingLocation[horizontal]) - eastWest.indexOf(beginningLocation['horizontal'])
  }
  
  estimatedTime() {
    
  }
  
  
}