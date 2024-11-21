import React, { useState, useEffect } from "react";
import Counter from "./Counter";

const TicketsTable = ({ onTotalChange }) => {
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [seniorCount, setSeniorCount] = useState(0);

    useEffect(() => {
        const total = adultCount + childCount + seniorCount;
        onTotalChange(total);
    }, [adultCount, childCount, seniorCount, onTotalChange]);

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Adult</td>
                        <td>$3.88</td>
                        <td>
                            <Counter
                                counter={adultCount}
                                increment={() => setAdultCount(adultCount + 1)}
                                decrement={() => setAdultCount(adultCount - 1)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Child</td>
                        <td>$3.24</td>
                        <td>
                            <Counter
                                counter={childCount}
                                increment={() => setChildCount(childCount + 1)}
                                decrement={() => setChildCount(childCount - 1)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Senior</td>
                        <td>$3.24</td>
                        <td>
                            <Counter
                                counter={seniorCount}
                                increment={() => setSeniorCount(seniorCount + 1)}
                                decrement={() => setSeniorCount(seniorCount - 1)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h3>Total Tickets: {adultCount + childCount + seniorCount}</h3>
            </div>
        </div>
    );
}

export default TicketsTable;