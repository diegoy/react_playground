this.Records = React.createClass({
  getInitialState: function() {
    return { records: this.props.data };
  },
  getDefaultProps: function() {
    return { records: [] };
  },
  addRecord: function(record) {
    records = this.state.records.slice();
    records.push(record);
    this.setState({records: records})
  },
  render: function() {
    return <div className="records">
             <h2 className="title"> Records </h2>
             <RecordForm handleNewRecord={this.addRecord}/>
             <hr/>
             <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.records.map(function(record, i){
                    return <Record record={record} key={i} />;
                  })}
                </tbody>
             </table>
           </div>
  }
});
