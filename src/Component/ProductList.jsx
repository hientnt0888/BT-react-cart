import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    showProducts = () => {
        return this.props.productData.map((sp) => {
            return <div className="col-3" key={`Shoe${sp.id}`}>
                <ProductItem product={sp} setStateModal={this.props.setStateModal} />
            </div>

        })
    }
    render() {
        return (
            <div className='row'>
                {this.showProducts()}
            </div>
        )
    }
}
