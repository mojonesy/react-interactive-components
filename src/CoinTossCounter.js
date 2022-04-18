import React, { useState } from "react";

function CoinTossCounter() {
    const [results, setResults] = useState([]);
    const [counts, setCounts] = useState({ H: 0, T: 0 });
    const handleClick = (value) => {
        setResults([...results, value]);
        setCounts({ ...counts, [value]:counts[value] + 1 });
    }
    console.log(results);
    console.log(counts);

    const handleDeleteLast = () => {
        const last = results[results.length - 1];
        const list = results.slice(0, -1); 
        /* A negative integer refers to an offset from the end of the array,
         so -1 refers to the last element in the array. */
        setResults(list);
        if (last) {
            setCounts({
                ...counts, [last]:counts[last] - 1,
            });
        }
    };

    const lis = results.map((result, index) => (
        <li key={`toss-${index}`}>
            {result === "H" ? "Heads" : "Tails"}
        </li>
    ));
    return (
        <section>
            <div style={{margin:"20px"}}>
                <button onClick={() => handleClick("H")}>Heads</button>
                <button onClick={() => handleClick("T")}>Tails</button>
                <button onClick={handleDeleteLast}>Delete Last Toss</button>
            </div>
            <ul>
                <li>Heads: {counts["H"]}</li>
                <li>Tails: {counts["T"]}</li>
            </ul>
            <ul>{lis}</ul>
        </section>
    );
}

export default CoinTossCounter;