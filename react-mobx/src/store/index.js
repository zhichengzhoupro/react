import {observable, computed, action, configure} from "mobx";

//configure({enforceActions: true})

class Counter {

    name = 'Counter APP';

    @observable count = 100;

    @observable todos = [
        {title: "Spoil tea", completed: true},
        {title: "Make coffee", completed: false}
    ];

    @computed get doubleCount() {
        return this.count * 2
    }

    @action.bound increment() {
        this.count += 1;
    }

    @action  decrement = () => {
        this.count -= 1;
    }
}

const counter = new Counter();

const todos = observable([
    {id: 1,title: "Spoil tea", completed: true},
    {id:2, title: "Make coffee", completed: false}
]);


const appState = observable({
    count: 0
});

appState.increment = function () {
    this.count++
}

appState.decrement = function () {
    this.count--
}


class Temperature {
    id = Math.random();

    @observable unit = "C";
    @observable temperatureCelsius = 25;

    constructor(unit, temperatureCelsius) {
        this.unit = unit;
        this.temperatureCelsius = temperatureCelsius;
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

const t = new Temperature();

// 第二种写法 运用构造函数
const t2 = observable(
    {
        unit: "C",
        temperatureCelsius: 25,
        temperatureKelvin: function () {
            return this.temperatureCelsius * (9 / 5) + 32;
        },
        temperatureFahrenheit: function () {
            return this.temperatureCelsius + 273.15;
        },

        temperature: function () {
            switch (this.unit) {
                case "K":
                    return this.temperatureKelvin + "°K"
                case "F":
                    return this.temperatureFahrenheit + "°F"
                case "C":
                    return this.temperatureCelsius + "°C"
            }
        }
    }
);
const temps = observable({
    list:[]
});
temps.addTemp = function (unit, temperature) {
    this.list.push(new Temperature(unit, temperature))
};


export  default Temperature;

export {
    counter,
    todos,
    appState,
    t,
    temps
} ;