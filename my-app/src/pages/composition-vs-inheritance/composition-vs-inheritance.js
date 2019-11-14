import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {addtodo} from '../../store/action/firstAction'

class FancyBorder extends Component{
    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <div className={'FancyBorder FancyBorder-' + this.props.color}>
                {this.props.children}
                {this.props.left}
            </div>
        )
    }
    
}

class WelcomeDialog extends Component{
    constructor(props){
        super(props)
        this.handclick = this.handclick.bind(this)
    }
    componentDidMount(){
      this.props.onClick()
      console.log(this.props, '-------')
    }
    handclick(){
        this.props.history.goBack()
    }
    render() {
        return (
            <FancyBorder color="blue" left={<div>left</div>}>
                <h1 className="Dialog-title">
                    Welcome
                </h1>
                {/* <button onClick={onClick}>dispatch</button> */}
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
                <NavLink to='/context'>context</NavLink>
                <div onClick={this.handclick}>返回</div>
            </FancyBorder>
        )
    }
}
// function WelcomeDialog() {
//     const { match, location, history } = this.props;
//     return (
//         <FancyBorder color="blue" left={<div>left</div>}>
//             <h1 className="Dialog-title">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>
//             <p>You are now at {location.pathname}{match}{history}</p>
//             <NavLink to='/context'>context</NavLink>
//         </FancyBorder>
//     )
// }

const mapmapStateToProps = (state, ownProps) => {
  return {
    whl: 'saqw'
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addtodo('add more'))
    }
  }
}

export default connect(mapmapStateToProps, mapDispatchToProps)(WelcomeDialog);