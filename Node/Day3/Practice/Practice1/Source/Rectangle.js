var rectanglle={
        area:function (a,b){
            res = a*b;
            console.log("Area of Rectangle is " + res);
        },
        peri:function(c,d){
            e = parseFloat(c) + parseFloat(d);
            resl = 2*e;
            console.log("Perimeter of Rectangle is " + resl);
        }
       
}

module.exports = rectanglle;