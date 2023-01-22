const Vehicle = require('./vehicle');

function main(){
    let myVehicle = new Vehicle('B 1234 ABC', 'Black', 'BMW');
    console.log('My vehicle`s license number is ', myVehicle.licenseNumber);
    console.log('My vehicle`s color is ', myVehicle.color);
    console.log('My vehicle`s manufacturer is ', myVehicle.manufacture);

    myVehicle.reverse();
    myVehicle.drive(2);
}

main();