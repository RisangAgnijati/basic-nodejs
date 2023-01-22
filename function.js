function Vehicle(licenseNumber, color, manufacture){
    this.licenseNumber = licenseNumber;
    this.color = color;
    this.manufacture = manufacture;
}

Vehicle.prototype.drive = function (speed){
    console.log('Driving at speed ', speed);
}

Vehicle.prototype.reverse = function (){
    console.log('reverse');
}

function main(){
    let myVehicle = new Vehicle('B 1234 ABC', 'Black', 'BMW');
    console.log('My Vehicle`s license number is ', myVehicle.licenseNumber);
    console.log('My Vehicle`s color is ', myVehicle.color);
    console.log('My Vehicle`s manufacturer is ', myVehicle.manufacture);

    myVehicle.reverse();
    myVehicle.drive(2);
}

main();