import React, { Component } from 'react'
import {connect} from 'react-redux';
import {activateTarget,closeTarget} from './redux'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2> {this.props.target.title || "Hello!!!"} </h2>
        {this.props.target.title ? (
          <button onClick={this.props.closeTarget} > Exit Target
          </button>
        ) : (
          <button onClick={() =>
            this.props.activateTarget({ title:"I'm your Target dude!" })} > Activate Target
          </button>
        ) }
      </div>
    )
  }
 }
 // AppContainer
 const mapStateToProps = (state) => ({
  target: state.target
 })
 const madDispatchToProps = {
  activateTarget,
  closeTarget
 }
 export const AppContainer = connect (
  mapStateToProps,
  madDispatchToProps
 )(App)