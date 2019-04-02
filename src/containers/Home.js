import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";

export default class Home extends Component {
    
    async componentDidMount() {
  if (!this.props.isAuthenticated) {
    return;
  }

  try {
    const weeks = await this.weeks();
    this.setState({ weeks });
  } catch (e) {
    alert(e);
  }

  this.setState({ isLoading: false });
}

weeks() {
  return API.get("weeks", "/weeks");
}
    
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      weeks: []
    };
  }

  renderWeeksList(weeks) {
  return [{}].concat(weeks).map(
    (week, i) =>
      i !== 0
        ? <LinkContainer
            key={week.weekId}
            to={`/weeks/${week.weekId}`}
          >
            <ListGroupItem header={week.content.trim().split("\n")[0]}>
              {"Created: " + new Date(week.createdAt).toLocaleString()}
            </ListGroupItem>
          </LinkContainer>
        : <LinkContainer
            key="new"
            to="/weeks/new"
          >
            <ListGroupItem>
              <h4>
                <b>{"\uFF0B"}</b> Create a new week
              </h4>
            </ListGroupItem>
          </LinkContainer>
  );
}

  renderLander() {
    return (
      <div className="lander">
        <h1>PunchCardApp</h1>
        <p>An app for recording recording hours worked</p>
      </div>
    );
  }

  renderWeeks() {
    return (
      <div className="weeks">
        <PageHeader>Your Hours Worked</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderWeeksList(this.state.weeks)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderWeeks() : this.renderLander()}
      </div>
    );
  }
}