
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';


const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))

// listen to the declarative route
app.post('/', (req: Request, res: Response) => {
    console.log(req.body.data);
    res.status(200).send('OK');
});
app.listen(80, () => console.log('Listening on port 80!'))