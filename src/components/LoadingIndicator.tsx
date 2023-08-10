import React, { useEffect, useState } from 'react'


const LoadingIndicator = () => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // Start loading
        setIsLoading(true);

        // Simulate an API call
        fetch('https://jsonplaceholder.typicode.com/')
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
            })
            .catch(error => {
                console.error('Error fetching API:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading && <div className='spinner-border'></div>}
        </div>
    )

}

export default LoadingIndicator
function setData(apiData: any) {
    throw new Error('Function not implemented.');
}

