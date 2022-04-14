class Props{
  constructor(width,height){
    this.stepSize = 4;
    this.state = 0;
    this.num = 1;
    this.turnCounter = 1;
    this.numSteps = 1;
    this.x = width/2;
    this.y = height/2;
  } 

  init() {
    const defaultValues = {};
    for(let prop in this){
      if(this.hasOwnProperty(prop) && prop != "defaultValues") {
        defaultValues[prop] = this[prop];
      }
    }
    this.defaultValues = defaultValues;
  }

  reset() {
    for (let prop in this.defaultValues) {
      this[prop] = this.defaultValues[prop];
    }
  }   
}

export { Props };
