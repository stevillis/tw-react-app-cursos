import React, { Component } from 'react';
import './App.css';

import { CourseService } from './services/CourseService';

import Course from './components/Course';
import NewCourseForm from './components/NewCourseForm';

class App extends Component {
  static defaultProps = {
    onSubmit: () => { }
  }

  constructor(props) {
    super(props);

    this.state = {
      courses: [

      ]
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.startData = this.startData.bind(this);

    this.startData();
  }

  async startData() {
    const courses = await CourseService.list();
    this.setState({ courses });
  }

  async add(course) {
    const { courses } = this.state,
      newCourse = await CourseService.create(course);

    courses.push(newCourse);
    this.setState({ courses });
  }

  async remove(courseId) {
    const { courses } = this.state,
      courseIndex = courses.findIndex(course => course.id === courseId);

    await CourseService.remove(courseId);

    courses.splice(courseIndex, 1);
    this.setState({ courses });
  }

  render() {
    const { state } = this;
    return (
      <div className='App'>
        <NewCourseForm onSubmit={this.add} />
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
