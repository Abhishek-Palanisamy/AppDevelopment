import React, { useState } from 'react';

function DateDifference() {
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [difference, setDifference] = useState('');

    const calculateDifference = () => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const diff = Math.abs(d1 - d2);
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setDifference(diffDays);
    };

    return (
        <div>
            <input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
            <input type="date" value={date2} onChange={e => setDate2(e.target.value)} />
            <button onClick={calculateDifference}>Calculate Difference</button>
            {difference && <p>The difference is {difference} days</p>}
        </div>
    );
}

export default DateDifference;
