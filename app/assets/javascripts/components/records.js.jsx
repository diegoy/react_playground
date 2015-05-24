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
    this.setState({records: records});
  },
  credits: function() {
    var credits = this.state.records.filter(function(val) { return val.amount >=0 });
    return credits.reduce(function(prev, curr) {
      return prev + parseFloat(curr.amount);
    }, 0);
  },
  debits: function() {
    debits = this.state.records.filter(function(val) { return val.amount < 0 });
    return debits.reduce(function(prev, curr) {
      return prev + parseFloat(curr.amount);
    }, 0);
  },
  balance: function() {
    return this.debits() + this.credits()
  },
  render: function() {
    return <div className="records">
             <h2 className="title"> Records </h2>
             <div className="row">
              <AmountBox type="success" amount={this.credits()} text="Credit"/>
              <AmountBox type="danger" amount={this.debits()} text="Debit"/>
              <AmountBox type="info" amount={this.balance()} text="Balance"/>
              <RecordForm handleNewRecord={this.addRecord}/>
             </div>
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
