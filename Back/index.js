import express from 'express';
const app = express()

app.get('/',(req,res)=>{
    res.send('server is ready')
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server at  http://localhost${port}`)
});

app.get('/jokes' ,(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is Joke'
        },
        {
            id:2,
            title:'b joke',
            content:'it is Joke'
        },
        {
            id:3,
            title:'c joke',
            content:'the Joke'
        },
        {
            id:4,
            title:'E joke',
            content:'Those Joke'
        },
        {
            id:5,
            title:'F joke',
            content:'thors is Joke'
        }
    ];
    res.send(jokes)
})