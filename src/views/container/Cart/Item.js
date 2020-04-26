import React from "react";


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: this.props
    };
  }

  render() {
    return (
      <tr>
        <td className="col-sm-8 col-md-6">
          <div className="">
            <img src={this.props.data.img} alt="" className="item-img" />
            <div className="media-body">
              <span>Status: </span>
              <span className="text-success">
                <strong>in cart</strong>
              </span>
            </div>
          </div>
        </td>
        <td className="col-sm-2 col-md-2">
          <strong>{this.props.data.title}</strong>
        </td>
        <td className="col-sm-1 col-md-1">
          <input
            type="number"
            className="form-control"
            min="1"
            value={this.props.data.count}
            onChange={e => this.props.handle.changeNumber(this.props.data.id, e)}
          />
        </td>

        <td className="col-sm-1 col-md-1 text-center">
          <strong>${this.props.data.price}</strong>
        </td>

        <td className="col-sm-1 col-md-1 text-center">
          <strong>${this.props.data.total}</strong>
        </td>

        <td className="col-sm-1 col-md-1">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.handle.removeItem(this.props.data.id)}
          >
            <span className="glyphicon glyphicon-remove" /> Remove
          </button>
        </td>
      </tr>
    );
  }
}
