// Content taken out of Courses page but I wanted to save it for reference.


        this.state ={course:{title: ""}
        };

this.onTitleChange =this.onTitleChange.bind(this);
this.onClickSave = this.onClickSave.bind(this);

onClickSave(){
    this.props.actions.createCourse(this.state.course);
}

onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
}

<h2>Add Course</h2>
<input
    type="text"
    onChange ={this.onTitleChange}
    value ={this.state.course.title} />

<input
    type ="submit"
    value ="Save"
    onClick ={this.onClickSave} />
