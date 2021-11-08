import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0) // javascriptの分割代入, countを制御できる関数、自由に編集できる

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    const increment2 = () => setCount(previousCount => previousCount + 1)
    const decrement2 = () => setCount(previousCount => previousCount - 1)

    const reset = () => setCount(0)
    const double = () => setCount(count * 2)
    const devide3 = () => setCount(count % 3 === 0 ? count / 3 : count)

    return (
        <>
            <div>count: {count}</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
            <div>
                <button onClick={increment2}>+1</button>
                <button onClick={decrement2}>-1</button>
            </div>
            <div>
                <button onClick={increment2}>+1</button>
                <button onClick={decrement2}>-1</button>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
                <button onClick={double}>x2</button>
                <button onClick={devide3}>3の倍数なら3で割る</button>
            </div>
        </>
    );
}

export default App
