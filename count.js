function getCount(){

  var count = 365;
  while (count > 30){
    console.log("My bday is so far away, oh no...");
    count = count - 1;
  }while (count < 31 && count > 4){
    console.log("Cool, it's only" + count + " days until my birthday!");
    count = count - 1;
  }while (count < 5 && count > 1){
    console.log("HOLY CRAP, my birthday's only " + count + " days away!");
    count = count - 1;
  }while (count === 1){
    console.log("HOLY CRAP, my birthday's only" + count + " day away!");
    count = count - 1;
  }while (count === 0){
    console.log("PARTY TIME, oh god I'm old...");
    count = count - 1;
  }
}
getCount();
