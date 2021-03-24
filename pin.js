class Battery{
    constructor(_energy) {
        this.energy=_energy;
    }
    setEnergy(energy){
        this.energy=energy;
    }
    getEnergy(){
        return this.energy;
    }
    giampin(){
        this.energy--;
    }
}