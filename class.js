class Vehicle{
    constructor(licenseNumber, color, manufacture){
        this.licenseNumber = licenseNumber;
        this.color = color;
        this.manufacture = manufacture;
    }

    drive(speed){
        console.log('Driving at speed ', speed);
    }

    reverse(){
        console.log('reverse');
    }
}

function main(){
    let myVehicle = new Vehicle('B 1234 ABC', 'Black', 'BMW');
    console.log('my vehicle`s license number is ', myVehicle.licenseNumber);
    console.log('my vehicle`s color is ', myVehicle.color);
    console.log('my vehicle`s manufacture is ', myVehicle.manufacture);

    myVehicle.reverse();
    myVehicle.drive(2);
}

main();