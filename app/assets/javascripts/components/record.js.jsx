var Record = React.createClass({
  handleDelete: function(e) {
    e.preventDefault();
    that = this;
    $.ajax({
      method: "DELETE",
      url: "/records/" + this.props.record.id,
      dataType: "JSON",
      success: function() {
        that.props.handleDeleteRecord(that.props.record)
      }
    });
  },
  render: function() {
    return <tr>
              <td> {this.props.record.date} </td>
              <td> {this.props.record.title} </td>
              <td> {amountFormat(this.props.record.amount)} </td>
              <td>
                <a className="btn btn-danger"
                   onClick={this.handleDelete}>Delete</a>
              </td>
           </tr>
  }
});
