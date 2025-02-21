import React from "react";

interface EntryProps {
  onSubmit: (ip: string, port: string, name: string) => void;
}

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
    this.props.onSubmit(this.state.ip, this.state.port, this.state.name);
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="ip">IP Address:</label>
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
        </div>
        <div>
          <label htmlFor="port">Port:</label>
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
        </div>
        <div>
          <label htmlFor="name">Name:</label>
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
        </div>
        <button
          type="submit"
          // onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
