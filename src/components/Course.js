import React, { Component } from 'react';

class Course extends Component {
    static defaultProps = {
        course: {}
    }

    render() {
        const { props } = this,
            { course } = props;

        return (
            <li className='course'>
                <div>{course.category}</div>
                <button>X</button>
                <img src={course.image} />
                <div>{course.name}</div>
            </li>
        )
    }
}

export default Course;