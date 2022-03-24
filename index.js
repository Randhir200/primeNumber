var fac=1;
var n=53
var root_value=Math.sqrt(n);
var is_Prime = true;
for(var i=2;i<=root_value;i++){
  if(n%i==0){
    is_Prime = false;
  }
}

is_Prime?console.log("Yes"):console.log("No");