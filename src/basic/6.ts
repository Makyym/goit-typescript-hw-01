interface IUSer {
    name: string;
    ahe: number;
    email: string;
    address?: object;
}

const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};