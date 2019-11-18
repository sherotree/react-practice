import React, { useState } from 'react'

const products = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
]
export function Step7() {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  function handleFilterTextChange(filterText) {
    setFilterText(filterText)
  }

  function handleInStockChange(inStockOnly) {
    setInStockOnly(inStockOnly)
  }

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}
function SearchBar(props) {
  function handleFilterTextChange(e) {
    props.onFilterTextChange(e.target.value)
  }

  function handleInStockChange(e) {
    props.onInStockChange(e.target.checked)
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />
        Only show products in stock.
      </p>
    </form>
  )
}

function ProductTable(props) {
  const { filterText, inStockOnly, products } = props
  const rows = []
  let lastCategory = null

  products.forEach(product => {
    if (product.name.indexOf(filterText) === -1) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      )
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function ProductCategoryRow(props) {
  const { category } = props
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  )
}

function ProductRow(props) {
  const product = props.product
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  )

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
