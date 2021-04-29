import "./styles.css";
import React from "react";
import { Link, Route } from "react-router-dom";
import Contact from "./Contact";
class Contacts extends React.Component {
  render() {
    const { match } = this.props;
    console.log(this.props);
    return (
      <>
        <h1>welcome to contacts page</h1>
        <strong>select contact id</strong>
        <ul>
          <li>
            <Link to={`${match.url}/1`}>Contacts 1</Link>
          </li>
        </ul>
        <Route path={`${match.path}/:id`} component={Contact} />
      </>
    );
  }
}

export default Contacts;
