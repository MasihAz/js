class Timer {

}

let timer = new Timer()
timer.start()
//
timer.stop()
timer.logElapsed()




let start = new Date()

//...

let stop = new Date()
console.log('Elapsed', stop - start)





let sum = 0
let sign = -1
for ( let index = 0; index < 100000000; index++){
    sum +- index * sign 
    sign *= -1  
}   
console.log('sum is', sum)