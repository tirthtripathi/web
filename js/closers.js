function outerfunction(outerargument){
   return function inerfunction(innerargument){
        console.log(outerargument);
        console.log(innerargument);
    }
}

const newfunc = outerfunction("outer");
newfunc('Inner')