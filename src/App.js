import React, { Component } from 'react';
import './App.css';

import Course from './components/Course';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        {
          id: 1,
          category: "Web Framework",
          name: "Django",
          image: "https://www.djangoproject.com/m/img/logos/django-logo-negative.png"
        },
      ]
    };

    this.remove = this.remove.bind(this);
  }

  remove(courseId) {
    const { courses } = this.state,
      courseIndex = courses.findIndex(course => course.id === courseId);

    courses.splice(courseIndex, 1);
    this.setState({ courses });
  }

  render() {
    const { state } = this;
    return (
      <div className='App'>
        <ul className='courses-list'>
          {
            state.courses.map(course => <Course course={course} onRemove={this.remove} />)
          }
        </ul>
      </div>
    );
  }
}

export default App;
