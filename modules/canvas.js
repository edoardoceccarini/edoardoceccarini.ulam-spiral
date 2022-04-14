class Canvas {
  constructor() {
    try{
      this.canvas = document.querySelector('#canvas'); 
    }catch(error){
      throw(error);  
    }
    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
  }

  render() {
    this.context.fillStyle= "rgba(0,0,0,0.9)";
    this.context.fillRect(0,0,this.width,this.height);
  }

  clear() {
    this.context.clearRect(0,0,this.width,this.height);
  }
}

export { Canvas };