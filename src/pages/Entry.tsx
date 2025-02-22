import React from "react";
import "./entry.css";

interface EntryProps {}

interface EntryState {
  ip: string;
  port: string;
  name: string;
}

export default class Entry extends React.Component<EntryProps, EntryState> {
  constructor(props: EntryProps) {
    super(props);
    this.state = {
      ip: "",
      port: "",
      name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(this.state.ip);
    console.log(this.state.port);
    console.log(this.state.name);
  }

  render(): React.ReactNode {
    return (
      <div className="container">
        <div className="left">
          <div className="form-container">
            <form className="form" onSubmit={this.handleSubmit}>
              <label htmlFor="ip">IP Address</label>
              <input
                type="text"
                id="ip"
                name="ip"
                value={this.state.ip}
                onChange={(e) =>
                  this.setState({
                    ip: e.target.value,
                  })
                }
              />

              <label htmlFor="port">Port</label>
              <input
                type="text"
                id="port"
                name="port"
                value={this.state.port}
                onChange={(e) =>
                  this.setState({
                    port: e.target.value,
                  })
                }
              />

              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={(e) =>
                  this.setState({
                    name: e.target.value,
                  })
                }
              />

              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}
