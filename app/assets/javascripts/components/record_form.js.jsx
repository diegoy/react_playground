var RecordForm = React.createClass(
    {
      getInitialState: function() {
        return { title: '', date: '', amount: '' };
      },
      handleChange: function(e) {
        name = e.target.name
        obj = {}
        obj[name] = e.target.value
        this.setState(obj)
      },
      valid: function() {
        this.state.title && this.state.date && this.state.amount
      },
      handleSubmit: function(e) {
        e.preventDefault();
        var that = this;
        $.post('',
          { record: this.state },
          function(data) {
            that.props.handleNewRecord(data);
            that.setState(this.getInitialState());
          },
          'JSON');
      },
      render: function() {
        return <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Date"
                   name="date"
                   value={this.state.date}
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Title"
                   name="title"
                   value={this.state.title}
                   onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input type="number"
                   className="form-control"
                   placeholder="Amount"
                   name="amount"
                   value={this.state.amount}
                   onChange={this.handleChange}/>
          </div>
          <button type="submit"
                  className="btn btn-primary"
                  disabled={!this.valid}>
            Create Record
          </button>
        </form>
      }
    });
