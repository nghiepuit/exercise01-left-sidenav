import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChildren: false
    };
    this.toggleChildren = this.toggleChildren.bind(this);
  }

  toggleChildren() {
    this.setState({
      showChildren: !this.state.showChildren
    });
  }

  renderArrow() {
    const { showChildren } = this.state;
    const { route } = this.props;
    let xhtml = null;
    if (route.children) {
      xhtml = (
        <i
          className={`fas fa-angle-right list-item__icon-arrow ${
            showChildren ? "list-item__icon-rotate-90" : ""
          }`}
        />
      );
    }
    return xhtml;
  }

  renderChildren() {
    const { route, level } = this.props;
    let xhtml = null;
    if (route && route.children && route.children.length > 0) {
      xhtml = route.children.map((child, index) => {
        return <ListItem route={child} key={index} level={level + 1} />;
      });
    }
    return xhtml;
  }

  render() {
    const { showChildren } = this.state;
    const { route, level } = this.props;
    return (
      <>
        <div
          className={`list-item list-item__level-${level} ${
            showChildren ? "list-item__show-children" : ""
          }`}
          onClick={this.toggleChildren}
        >
          <span>{route.text}</span>
          {this.renderArrow()}
        </div>
        <div
          className={`list-item__wrapper-list-children ${
            showChildren ? "list-item__wrapper-list-children-show-children" : ""
          }`}
        >
          {this.renderChildren()}
        </div>
      </>
    );
  }
}

ListItem.propTypes = {};

ListItem.defaultProps = {
  level: 1
};

export default ListItem;
