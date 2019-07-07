const movies = [
    {
        _id: "123",
        title: "Avengers",
        numberInStock: "300",
        price: "520"
    },
    {
        _id: "999",
        title: "3 idots",
        numberInStock: "10",
        price: "200"
    },
    {
        _id: "911",
        title: "X men",
        numberInStock: "400",
        price: "500"
    },
    {
        _id: "344",
        title: "Badla",
        numberInStock: "100",
        price: "200"
    }
]

export function getMovies(){
    return movies;
}