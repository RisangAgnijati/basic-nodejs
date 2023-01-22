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

module.exports = Vehicle;