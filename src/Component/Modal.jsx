import React, { Component } from 'react'

export default class Modal extends Component {
    showCart = () => {
        return this.props.content.map((product) => {
            return <tr>
                <th  style={{textAlign:"center"}}>{product.id}</th>
                <td><img src={product.image} alt="" style={{width: '150px'}}/></td>
                <td>{product.name}</td>
               
                <td>{product.price} $</td>
            </tr>

        })
    }
    render() {
        // let {id,name,image, price} = this.props.content;
        return (
            <div><div>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">My cart</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">IMAGE</th>
                                            <th scope="col">PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.showCart()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">BUY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
