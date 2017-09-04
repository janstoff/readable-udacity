import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            <Button
              key={category.name}
              block className='category'
              value={category.name}
              onClick={(event) => this.props.dispatch(selectCategory(event.target.value))}
              >{category.name}
            </Button>
        )}
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



export default connect(mapStateToProps)(CategoryMenu);
