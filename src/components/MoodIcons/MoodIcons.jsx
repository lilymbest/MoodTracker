import React, { Component } from 'react';
import './MoodIcons.css'
import { Link } from 'react-router-dom';

class MoodIcons extends Component{
    render() {
        return(

            <div className="mood-icons">
                <header className='feelingToday'>How are you today?</header>
        
                <div className="moodSelector">
                    <div className="mood">
                        <img className="moodIcon" src={this.props.euphoricIcon} alt=""/>
                        <h3 className="moodLabel">Euphoric</h3>
                        </div> 
                    <div className="mood">
                        <img className="moodIcon" src={this.props.happyIcon} alt=""/>
                        <h3 className="moodLabel">Elevated</h3>
                        </div> 
                    <div className="mood">
                        <img className="moodIcon" src={this.props.neutralIcon} alt=""/>
                        <h3 className="moodLabel">Neutral</h3>
                        </div> 
                     <div className="mood">
                        <img className="moodIcon" src={this.props.tenseIcon} alt=""/>
                        <h3 className="moodLabel">Tense</h3>
                        </div> 
                    <div className="mood">
                        <img className="moodIcon" src={this.props.sadIcon} alt=""/>
                        <h3 className="moodLabel">Low</h3>
                        </div> 
                    </div>

                    <div className="addMood">
                        <Link className='btnMood' to='/MoodInput'>Add Mood</Link>
                        </div>
            </div>
        )
    }
}

export default MoodIcons;