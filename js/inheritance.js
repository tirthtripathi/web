class Monster{
    constructor(name){
        this.name = name;
    }

    Attack(){
        console.log(`${this.name} Attack`);
    }

    Walk(){
        console.log(`${this.name} Walk`)
    }
}

class Flyingmonster extends Monster {
    Fly(){
        console.log(`${this.name} Fly`);
    }
}
class Swimmingmonster extends Monster {
    Swim(){
        console.log(`${this.name} Fly`);
    }
}

const animal = new Monster('animal');
animal.Attack()
animal.Walk()

const bird = new Flyingmonster('bird');
bird.Attack()
bird.Walk()
bird.Fly()

const fish = new Swimmingmonster('fish');
fish.Attack()
fish.Walk()
fish.Swim()
