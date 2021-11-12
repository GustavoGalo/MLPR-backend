import { Request, Response, Router } from 'express';
import BookController from './controllers/book.controller';

const routes = Router();

routes.get('/api/books', async (req: Request, res: Response) => {
  let books;
  if (req.query.tag) {
    books = await BookController.instance.ListBooksByTag(String(req.query.tag));
  } else {
    books = await BookController.instance.ListAllBooks();
  }
  const statusCode = books.length ? 200 : 204;
  res.status(statusCode).send(books);
});

routes.post('/api/books', async (req: Request, res: Response) => {
  const body = req.body;
  const createdBook = await BookController.instance.RegisterNewBook(body);

  res.status(201).send(createdBook);
});

routes.delete('/api/books/:id', async (req: Request, res: Response) => {
  await BookController.instance.DeleteBookById(req.params.id);

  res.status(204).send();
});

export default routes;