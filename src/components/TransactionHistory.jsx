import PropTypes from 'prop-types';
export  default function TransactionHistory({items}) {
  return (
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency})=>(
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
  // id — унікальний ідентифікатор транзакції
id: PropTypes.string,
// type — тип транзакції
type: PropTypes.string,
// amount - сума транзакції
amount: PropTypes.number,
// currency - тип валюти
currency: PropTypes.string,
}