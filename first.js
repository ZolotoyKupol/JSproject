class ElectroDevice {
    constructor(power, connected){
      this.power = power;
      this.connected = true
    }
    getConnected(){
      if (this.connected){
        return 'The device is already connected!'
      } else {
        return 'You need to connect this device!'
    }
    }
  }
      
  
  class Lamp extends ElectroDevice {
    constructor(name, color, size, light, power, connected){
        super(power, connected);
        this.name = name;
        this.color = color;
        this.size = size;
        this.light = light;
    }
  }
    
    
  
  class Computer extends ElectroDevice {
    constructor(name, color, model, power, connected){
        super(power, connected);
        this.name = name;
        this.color = color;
        this.model = model;
    }
  }  
    
  
  const lamp1 = new Lamp ('D303B', 'black', 'medium', 'white', 75)
  
  
  console.log(lamp1.getConnected())