import {observable, computed, action, configure} from "mobx";

class TemperatureAsyncExample {
    id = Math.random();
    @observable unit = "C";
    @observable temperatureCelsius = 25;
    @observable location = 'France FR';


    constructor(location) {
        this.location = location
    }

    @computed get temperatureKelvin() {
        return this.temperatureCelsius * (9 / 5) + 32;
    }

    @computed get temperatureFahrenheit() {
        return this.temperatureCelsius + 273.15;
    }

    @computed get temperature() {
        switch (this.unit) {
            case "K":
                return this.temperatureKelvin + "°K"
            case "F":
                return this.temperatureFahrenheit + "°F"
            case "C":
                return this.temperatureCelsius + "°C"
        }
    }

    @action setUnit(newUnit) {
        this.unit = newUnit;
    }

    @action setTemperatureCelsius(newTemperatureCelsius) {
        this.temperatureCelsius = newTemperatureCelsius;
    }

    @action setTemperatureCelsiusAndUnit(newTemperatureCelsius, newUnit) {
        this.setTemperatureCelsius(newTemperatureCelsius);
        this.setUnit(newUnit);
    }
}

