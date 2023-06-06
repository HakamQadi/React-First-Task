import React from 'react'

const PrimeNum = (props) => {
    let myLimit = props.limit;

    function printPrimesUntil(limit) {
        function isPrime(num) {
            if (num <= 1) {
                return false;
            }
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        const primes = [];
        for (let i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes.join(', ');
    }

    const primeNumbers = printPrimesUntil(myLimit);

    return (
        <div>
            <h1>Prime numbers until limit = ({myLimit})</h1>
            <p>{primeNumbers}</p>
        </div>
    )
}

export default PrimeNum
