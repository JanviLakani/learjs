let item = prompt("please enter cloth & handloom cloth");
console.log(type);
let purchase = parseInt(prompt("please enter your purchase"))
console.log(purchase);

let discount;

switch (type) {
    case 'm':
    case 'M':
        if (purchase>0 && purchase <=100){
            discount=0;
        } else if ( purchase > 100 && purchase <=200) {
            discount=purchase*0.05;
        } else if ( purchase > 200 && purchase <=300) {
            discount=purchase*0.075;
        } else if ( purchase > 300) {
            discount=purchase*0.1;
        }

    break;

    case 'h':
    case 'H':
         if (purchase>0 && purchase <=100) {
            discount=purchase*0.05;
         } else if (purchase >100 && purchase <=200) {
            discount=purchase*0.075;
         } else if (purchase > 200 && purchase <= 300) {
            discount=purchase*0.1;
         } else if (purchase > 300) {
            discount=purchase*0.15;
         }
    break
    default:
        console.log("invalid input");
    break;
}

if (discount > 0) {
    console.log("valid for discount");
    
}



