import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../Home/Home'


class App extends Component {
  state = {
    moods: ['Euphoric', 'Elevated', 'Neutral', 'Tense', 'Low'],
    euphoric: ['Manic', 'Grandiose', 'Impulsive'],
    elevated: ['Happy', 'Motivated', 'Excited'],
    neutral: ['Calm', 'Unsure', 'Disassociated'],
    tense: ['Anxious', 'Stressed', 'Angry'],
    low: ['Sad', 'Lonely', 'Depressed'],
    themes: {
    riverbed: ['#D0EFB1', '#B3D89C', '#9DC3C2', '#77A6B6', '#4D7298'],
    rainbow: ['#FDE74C', '#9BC53D', '#FA7921', '#E55934', '#5BC0EB'],
    glacier: ['#A6E1FA', '#0E6BA8', '#0A2472', '#001C55', '#00072D'],
    lavenderFields:['#EAFDF8', '#E5E9EC',' #DDCAD9', '#D1B1CB', '#7C616C'],
    autumn: ['#C32F27', '#D8572A', '#DB7C26', '#F7B538', '#780116'],
    forest: ['#DDFCAD', '#C8E087',' #95A472', '#82846D', '#646165']
    },
    getTheme: function(){
      var themez = this.themes[Math.floor(Math.random() * this.themes.length)]
      return {themez: this.themes}
    },
    applyTheme: function(){
      console.log(this.getTheme())
      return this.getTheme()
      
    }
  }
  render () {
    return (
      <Switch>
         
      <div className="App">
      <Route exact path='/' render={() =>
      <>
        <ul>{this.state.moods}</ul>
        <form className="add-form">
          <input 
          type="text" 
          onChange={this.handleOnChange} 
          value={this.state.moodInput} 
          autoComplete="off" 
          />
          <input type="submit" />
			<div style={{background: this.state.applyTheme()}}>
      <Link className='btnHome' to='/home'>Home</Link>
				<button onClick={this.state.getTheme()}>Make change</button>
			</div>
        </form>
        </>
      } />
        <Route exact path='/home' render={() => 
          <Home />
          } />
          
      </div>
     </Switch>
    )
  }
}

export default App;

