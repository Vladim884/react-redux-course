import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label for="title">Заголовок поста</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <button type="submit" class="btn btn-success">Создать</button>
      </form>
    );
  }
}
