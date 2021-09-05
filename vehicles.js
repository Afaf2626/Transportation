class Vehicle{
    constructor(id , name , company) {
        this.id = id;
        this.name = name;
        this.company = company;
    }
}

class Car extends Vehicle{
    constructor(id , name , company , car_type) {
        super([id ,name,company ]);
        this.car_type = car_type;
    }
}

class Plane extends Vehicle{
    constructor(id , name , company , plan_type) {
        super([id ,name,company ]);
        this.plan_type = plan_type;
    }
}

class Employee{
    constructor(id , name , date_of_birth) {
        this.id = id;
        this.date_of_birth = date_of_birth;
        this.date_of_birth = date_of_birth;
    }
}

class Driver extends Employee{
    constructor(id , name , date_of_birth , licenseID) {
        super([id ,name,date_of_birth ]);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee{
    constructor(id , name , date_of_birth , licenseID) {
        super([id ,name,date_of_birth ]);
        this.licenseID = licenseID;
    }
}

class Reserved {
    constructor(reservationDate ,employeeID ,vehicleID ,reservationID ) {
        this.reservationDate = reservationDate;
        this.employeeID = employeeID;
        this.vehicleID = vehicleID;
        this.reservationID = reservationID;
    }
}

let car1 = new Car(1,'car1',"BMW","gas");
let car2 = new Car(2,'car2',"FIAT","gas");
let car3 = new Car(3,'car3',"Audi","electric");

let plane1 = new Plane(4,'plane1',"ُEgypt Air","solar");
let plane2 = new Plane(5,'plane2',"ُEgypt Air","solar");

let driver1 =new Driver(1 , "Mohamed" , "1980-06-12" , 123455);
let driver2 =new Driver(2 , "Mostafa" , "1990-03-25" , 123456);
let driver3 =new Driver(3 , "Hassa" , "1993-06-30" , 123457);

let pilot1 =new Pilot(4 , "Ibrahim" , "1980-06-12" , 123455);
let pilot2 =new Pilot(5 , "Omar" , "1990-03-25" , 123456);

const cars = [car1.id,car2.id,car3.id];
const planes = [plane1.id,plane2.id];

const drivers = [driver1.id,driver2.id,driver3.id];
const pilots = [pilot1.id,pilot2.id];

let reservation = [];
function check(employeeID ,vehicleID ){
    let employeeType = '';
    let employee , vehicle;
    let vehicleType = '';
    for (let i =0 ;i<drivers.length;i++){
       if(drivers[i].includes(employeeID)) {
           employeeType = 'driver';
           employee = drivers[i] ;
       }
    }
    for (let i =0 ;i<pilots.length;i++){
        if(pilots[i].includes(employeeID)) {
            employeeType = 'pilot';
            employee = pilots[i] ;
        }
    }

    for (let i =0 ;i<cars.length;i++){
        if(cars[i].includes(vehicleID)) {
            vehicleType = 'car';
            vehicle = cars[i];
        }
    }
    for (let i =0 ;i<planes.length;i++){
        if(planes[i].includes(vehicleID)) {
            vehicleType = 'plan';
            vehicle = planes[i];
        }
    }

    if(vehicleType == 'plan' && employeeType == 'pilot' || vehicleType == 'car' && employeeType == 'driver'){
        let reservate = new Reserved("2021-09-12" ,employee ,vehicle ,1 );
        reservation.push(reservate);
    }else{
        alert('The employee and the vehicle are incompatible\n');
    }
}

check(4,5);
check(1,3);
check(4,4);
check(2,2);

let result = reservation.map( reservation=>{
    return "Reservation Date : "+reservation.reservationDate
            + ' -- Employee Name : ' +reservation.employeeID[1]
            + ' -- vehicle : ' + reservation.vehicleID[1];
    }

);
console.log(result);