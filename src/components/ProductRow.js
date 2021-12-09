import React from 'react';

export default class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span>
                {product.name}
            </span>;
        return (
        <div>
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        </div>
        );
    }
}