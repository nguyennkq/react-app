import React from "react"

function ProductItem(props) {
  return <li>{props.brand}</li>
}

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: [
        {
          id: 1,
          name: "sony"
        },
        {
          id: 2,
          name: "iphone"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.productList.map((item) => (
            <ProductItem key={item.id} brand={item.name}></ProductItem>
          ))}
        </ul>
      </div>
    )
  }
}

export default ProductList
