import React, { Component } from 'react';
import './App.css';

import Course from './components/Course';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        {
          category: "Web Framework",
          name: "Django",
          image: "https://www.djangoproject.com/m/img/logos/django-logo-negative.png"
        },
      ]
    };
  }

  render() {
    const { state } = this;
    return (
      <div className='App'>
        <ul className='courses-list'>
          {
            state.courses.map(course => <Course course={course} />)
          }
        </ul>
      </div>
    );
  }
}

export default App;
