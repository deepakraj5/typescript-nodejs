import express from 'express'

const app = express()


const someFunction = (a: number, b: number): number => {
    return a + b
}


app.get('/', (req, res) => {

    const number: number = someFunction(8, 8)

    res.send({ number })
})


app.listen(3000, () => console.log('server upon port 3000'))