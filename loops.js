function forLoop(arr){
  for (let i=0;i<25;i++){
    if (i===1){
      arr.push(`I am 1 strange loop.`)

    }
    else {
      arr.push(`I am ${i} strange loops.`)
    }

  }
  return arr
}

function whileLoop(num){
  while (num>0){
    console.log(num)
    num-=1;
  }
  return 'done'
}


function doWhileLoop(integer){
  function incrementVariable(){
    integer+=1;
    return integer
  }
  do {
    console.log("I run once regardless.")
  } while (incrementVariable()<integer)
}
