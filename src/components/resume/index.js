import React, { Component } from 'react';
import resume from '../../images/resume.pdf';

class Resume extends Component {
    render() {
        return (
            <a href={resume} target="_blank">Download Resume</a>
        );
    }
}

export default Resume;