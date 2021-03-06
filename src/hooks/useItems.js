import { useEffect, useState } from "react";

const useItems = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('https://rapid-manufacturer.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);

    return [carts, setCarts];
}

export default useItems;

