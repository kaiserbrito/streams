import React from "react";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
};

export default StreamList;
