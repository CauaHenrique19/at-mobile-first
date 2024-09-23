import { useState, useEffect } from "react";
import "./ShoppingList.css";

const ShoppingList = () => {
  const [items] = useState([
    { id: 1, name: "Maçã", price: 1.5, quantity: 3 },
    { id: 2, name: "Banana", price: 0.8, quantity: 5 },
    { id: 3, name: "Laranja", price: 1.2, quantity: 2 },
  ]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCost = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalCost);
  }, [items]);

  return (
    <div className="shopping-list">
      <h1>Carrinho de Compra</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="shopping-item">
            <span>{item.name}</span>
            <span>Preço Unitário: ${item.price.toFixed(2)}</span>
            <span>Quantidade: {item.quantity}</span>
            <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="shopping-summary">
        <h2>Resumo</h2>
        <span>Itens: {items.length}</span>
        <span>Total: ${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ShoppingList;
