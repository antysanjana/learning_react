import React from "react";
import ReactDOM from 'react-dom/client';
import Button from './Button';

class Clock extends React.Component {
    //using bind method
    constructor(props){
        super(props);
        this.state = { date: new Date(), locale: "bn-BD" };
        this.handleClick = this.handleClick.bind(this);
    }

    //state declaration when props are not being used
    /*state = { date: new Date(), locale: "bn-BD" };*/

    componentDidMount(){
        this.clockTimer = setInterval(() => {this.tick()}, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    //using arrow function
    /*handleClick = () => {
        this.setState({
            locale: "en-US",
        })
    }*/

    handleClick= (locale) =>{
        this.setState({
            locale,
        })
    }

    //preventing the default behavior of elements
   /* handleClick(e){
        e.preventDefault();
        console.log("The button was clicked");
    }*/

    tick(){
        this.setState({
            date: new Date(),
        })
    }

    //for parameter passing and solving 'this' related problem directly 
    /*render(){
        const { date,locale } = this.state;
        return (
            <>
            <h1 className="heading">
                <span className="text">
                    {date.toLocaleTimeString(locale)}
                </span>
            </h1>
            <button type="button" onClick={this.handleClick.bind(this, 'en-US')}>Click me</button>
            </>
        );
    }*/

    //another method for passing parameter
    /*render(){
        const { date,locale } = this.state;
        console.log('Clock componet renedered');
        return (
            <>
            <h1 className="heading">
                <span className="text">
                    {date.toLocaleTimeString(locale)}
                </span>
            </h1>
            <Button change={this.handleClick.bind(this, 'en-US')}>Click Here</Button>
            </>
        );
    }*/

    //the best practice for preventing button component re-rendering continuously
    /*render(){
        let button;
        const { date,locale } = this.state;

        //changing button based upon locale using if else
        if(locale === 'bn-BD'){
            button = <Button change={this.handleClick} locale="en-US">Click Here</Button>
        }else{
            button = <Button change={this.handleClick} locale="bn-BD">Click Here</Button>
        }

        return (
            <>
            <h1 className="heading">
                <span className="text">
                    {date.toLocaleTimeString(locale)}
                </span>
            </h1>
            {button}
            </>
        );
    }*/

    //changing language using ternary operator
    render(){
        let button;
        const { date,locale } = this.state;

        return (
            <>
            <h1 className="heading">
                <span className="text">
                    {date.toLocaleTimeString(locale)}
                </span>
            </h1>
            {/* using enable as props for conditional rendering of component */}
            {locale === 'bn-BD'? <Button change={this.handleClick} locale="en-US" show={false} enable={false}/>:
                <Button change={this.handleClick} locale="bn-BD" show enable/>
        }
            </>
        );
    }
}
export default Clock
