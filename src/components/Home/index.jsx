import "./styles.css";

// import { RootState } from "../../Store"
import { decrement, increment } from "../../Store/Stock/Stock.reducer";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch()
  const stock = useSelector(state => state.stock)

  return (
    <div className="App">
      <h1>Redirecionado</h1>
      <h2>consegui enviar o email</h2>
      <br />
      {stock}
      <br />
      <button onClick={() => dispatch(increment())} >Somar</button>
      <br />
      <button onClick={() => dispatch(decrement())} >Subitrair</button>
    </div>
  );
}