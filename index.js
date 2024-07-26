var car ={
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons: [
            {maker: "bmw01"},
            {maker: "bmw03"}
        ]
    },
    drive: function(){ return "drive";}

};

var array = [
    "string",
    100,
    [ "embed", 200],
    { car: "ford"},
    function(){ return "drive";}
];

console.log( car.make);


function name1( fullname ){
    return fullname.firstname + fullname.lastname;
}

console.log( name1( {firstname:"dhananjaya", lastname:"deshan" }));

function name2 (fullname1){
    return fullname1();
}

console.log(
    name2( function(){return "deshan";}))

    //xxxxxxx