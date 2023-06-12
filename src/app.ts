import cors from 'cors'
import express, { Application, Request, Response } from 'express'
// import routes from './app/routes';
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
// app.use('/api/v1', routes);

//Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing Error logger')
// })

//global error handler
// app.use(globalErrorHandler);

//main route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running...')
})

export default app
