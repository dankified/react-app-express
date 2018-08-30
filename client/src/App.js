import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      character: {}
    };
    this.getCharacter = this.getCharacter.bind(this);
	}
	
  async getCharacter(id) {
    id = id || Math.ceil(Math.random() * 10);
    let { data } = await axios(`/character/${id}`).catch(err =>
      console.log(err.message)
    );
    this.setState({ character: data });
  }

  componentDidMount() {
    this.getCharacter();
  }

  render() {
    return <Character character={this.state.character} />;
  }
}
