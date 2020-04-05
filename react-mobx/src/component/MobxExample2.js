import React, {Component} from 'react';
import {observer} from "mobx-react";
import {computed, observable} from "mobx";
import MbButton from "./MbButton";
import Temperature from "../store";



const TemperatureComponent = observer(({temperature})=> {
    return (
        <div>
            {temperature.temperature}
        </div>
    )
});

@observer
class ItemView extends Component {
    render() {
        const t = this.props.temperature
        return (
            <div key={t.id}>
                {t.temperature} <MbButton click={this.addTemp}>+</MbButton><MbButton click={()=> {t.setTemperatureCelsius(t.temperatureCelsius-1)}}>-</MbButton>

            </div>
        )
    }

    addTemp = (t) => {
        this.props.temperature.setTemperatureCelsius(this.props.temperature.temperatureCelsius +1)
    }
}


const TemperaturesComponent = observer(({temperatures})=> {
    return (
        <div>
            <MbButton click={()=> {temperatures.addTemp('C', 20)}}>+</MbButton>
            {

                temperatures.list.map(t=> {
                   return (
                       <ItemView key={t.id} temperature={t}></ItemView>
                   )
                })
            }
        </div>
    )
});


export {
    TemperatureComponent,
    TemperaturesComponent
} ;
