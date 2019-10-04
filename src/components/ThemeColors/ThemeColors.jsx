import React, { Component } from 'react';
import styles from './ThemeColors.module.css';

class ThemeColors extends Component{
    constructor(props){
        super(props)

    this.state = {
    images: ['images/autumnthemeicon.png', 
            'images/forestthemeicon.png', 
            'images/glacierthemeicon.png',
            'images/lavenderthemeicon.png',
            'images/rainbowthemeicon.png',
            'images/MoodMountain.png'
            ],
    backgroundColors: ['#C32F27', '#646165', '#0E6BA8', '#DDCAD9', '#9BC53D', '#75F4F4'],
    themeIcon: 'images/MoodMountain.png',
    themeBackground: '#75F4F4'
    }
    this.autumnTheme = this.autumnTheme.bind(this)
    this.forestTheme = this.forestTheme.bind(this)
    this.glacierTheme = this.glacierTheme.bind(this)
    this.lavenderTheme = this.lavenderTheme.bind(this)
    this.rainbowTheme = this.rainbowTheme.bind(this)
    this.defaultTheme = this.defaultTheme.bind(this)
}
autumnTheme(){
    var autumn = this.state.images[0]
    var autumnBackground = this.state.backgroundColors[0]
    this.setState({themeIcon:autumn})
    this.setState({themeBackground:autumnBackground})
}

forestTheme(){
    var forest = this.state.images[1]
    var forestBackground = this.state.backgroundColors[1]
    this.setState({themeIcon:forest})
    this.setState({themeBackground:forestBackground})
}
glacierTheme(){
    var glacier = this.state.images[2]
    var glacierBackground = this.state.backgroundColors[2]
    this.setState({themeIcon:glacier})
    this.setState({themeBackground:glacierBackground})
}
lavenderTheme(){
    var lavender = this.state.images[3]
    var lavenderBackground = this.state.backgroundColors[3]
    this.setState({themeIcon:lavender})
    this.setState({themeBackground:lavenderBackground})
}
rainbowTheme(){
    var rainbow = this.state.images[4]
    var rainbowBackground = this.state.backgroundColors[4]
    this.setState({themeIcon:rainbow})
    this.setState({themeBackground:rainbowBackground})
}
defaultTheme(){
    var defaultTheme = this.state.images[5]
    var defaultBackground = this.state.backgroundColors[5]
    this.setState({themeIcon:defaultTheme})
    this.setState({themeBackground:defaultBackground})
}

handleClickAutumn(){
    this.autumnTheme()
}

handleClickForest(){
    this.forestTheme()
}

handleClickGlacier(){
    this.glacierTheme()
}

handleClickLavender(){
    this.lavenderTheme()
}

handleClickRainbow(){
    this.rainbowTheme()
}

handleClickDefault(){
    this.defaultTheme()
}


render() {
    return (
    <div className="theme" style={{background: this.state.themeBackground}}>
        <img src={this.state.themeIcon} alt=""/>
        <h2>Select A Theme:</h2>
        <div className="themeSelections1">
        <div>
            <button onClick={() => this.handleClickAutumn()}><img className="btn" src="images/autumnthemeicon.png" alt="" /></button>
            <h3>Autumn</h3>
        </div>    
        <div>
            <button onClick={() => this.handleClickForest()}><img className="btn" src="images/forestthemeicon.png" alt="" /></button>
            <h3>Forest</h3>
        </div> 
        <div>
            <button onClick={() => this.handleClickGlacier()}><img className="btn" src="images/glacierthemeicon.png"  alt="" /></button>
            <h3>Glacier</h3>
        </div> 
        </div>
        <div className="themeSelections2">
        <div>
            <button onClick={() => this.handleClickLavender()}><img className="btn" src="images/lavenderthemeicon.png" alt="" /></button>
            <h3>Lavender</h3>
        </div> 
        <div>
            <button onClick={() => this.handleClickRainbow()}><img className="btn" src="images/rainbowthemeicon.png" alt="" /></button>
            <h3>Rainbow</h3>
        </div> 
        <div>
            <button onClick={() => this.handleClickDefault()}><img className="btn" src="images/MoodMountain.png"alt="" /></button>
            <h3>Sunset</h3>
        </div> 
        </div>
    </div>
    )
    }
}

export default ThemeColors