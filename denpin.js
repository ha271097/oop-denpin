class flash{
    constructor(battery) {
        this.status=false;
        this.battery=battery;
    }
    setBattery(battery){
        this.battery=battery;
    }
    getBatteryInfor(){
        return this.battery;
    }
    light(){
        console.log("ting ting")


    }
    on(){
        this.light();
        this.status=true;
        this.battery.giampin();
    }
    of(){
        this.status=false;
    }

}