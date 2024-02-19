function Swimmer({name}){
    return{
        Swim : () => console.log(`${name} Swim`)
    }
}

function Flyer({name}){
    return{
        Fly : () => console.log(`${name} Fly`)
    }
}

function AttackerandWalker({name}){
    return{
        Attack : () => console.log(`${name} Attacked`),
        Walk : () => console.log(`${name} Waker`)
    }
}

function Swimmingmonster(name){
     const Monster = {name : name}

     return {
        ...Monster,
        ...AttackerandWalker(Monster),
        ...Swimmer(Monster)
     }
}

function FlyingandSwimmingmonster(name){
    const Monster = {name : name}
    return {
        ...Monster,
        ...Flyer(Monster),
        ...AttackerandWalker(Monster),
        ...Swimmer(Monster)
     }
}


const obj =  FlyingandSwimmingmonster('monster')
obj.Attack()
obj.Walk()
obj.Swim()
obj.Fly()