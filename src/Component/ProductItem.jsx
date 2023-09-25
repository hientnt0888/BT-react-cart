import React, { Component } from 'react'

export default class ProductItem extends Component {



    render() {
        let { id, image, name, shortDescription} = this.props.product
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{shortDescription}</p>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.props.setStateModal(id)}>Add to cart</button> 
                    
                </div>
            </div>
        )
    }
}
