import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../MainPage.css';

import { fetchCategories, selectCategory } from './categoriesActions';



class CategoryMenu extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCategories())
  }


  render() {

    return (
      <div className="categoryMenu">
        {this.props.categories && this.props.categories.map((category) =>
          <Link to={category.name} className="btn" key={category.name}>
            <Button
              block className='category'
              value={category.name}
              onClick={(event) => this.props.dispatch(selectCategory(event.target.value))}
              >{category.name}
            </Button>
          </Link>
        )}
        <Link to="/" className="btn btn-secondary" onClick={(event) => this.props.dispatch(selectCategory(" "))}>all</Link>
      </div>
    )
  }
}



function mapStateToProps({ categories, selectedCategory }) {
  return {
    categories: categories.categories.categories
  }
}

//alternatively:

//function mapDispatchToProps(dispatch) {
//  return { loadCategories: () => fetchCategories() }
//}



export default withRouter(connect(mapStateToProps)(CategoryMenu));
