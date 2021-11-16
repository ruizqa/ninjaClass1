function Ninja(name){
    this.name= name;
    this.health = 100;
    var speed =3;
    var strength =3;
    this.getSpeed = function() {
        return speed;
    } 
    this.setSpeed = function(number){
        speed = number;
    }

    this.getStrength = function() {
        return strength;
    } 
    this.setStrength = function(number){
        strength = number;
    }

    this.sayName = function(){
        console.log(`My ninja name is ${this.name}`)
    }
    this.showStats = function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.getSpeed()}, Strength: ${this.getStrength()}`)
    }
    
    this.drinkSake = function(){
        this.health += 10;
    }

}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
