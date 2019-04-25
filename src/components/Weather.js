import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        {
            this.props.city && <p className="weather__key">Location:
            <span className="weather__value">  {this.props.city}</span>
            </p>
        }
        {
            this.props.country && <p className="weather__key">Country:
            <span className="weather__value">  {this.props.country}</span>
            </p>
        }
        {
            this.props.temperature && <p className="weather__key">Temperature: 
            <span className="weather__value">  {this.props.temperature}</span>
            </p>
        }
        {
            this.props.humidity && <p className="weather__key">Humidity: 
            <span className="weather__value">  {this.props.humidity} g/kg</span>
            </p>
        }
        {
            this.props.description && <p className="weather__key">Condition: 
            <span className="weather__value">  {this.props.description}</span>
            </p>
        }      
        {
            this.props.error && 
            <h4 className="weather__key">
            <span>{this.props.error}</span>
            </h4>
            }  
      </div>
    )
  }
}
