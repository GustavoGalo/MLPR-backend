import { BookModel, IBook } from '../models/book.model';

class BookController {

  private constructor () {}

  private static _instance: BookController;

  static get instance(): BookController {
    if (!BookController._instance) {
      BookController._instance = new BookController;
    }
    return this._instance;
  }

  public async ListAllBooks(): Promise<IBook[]> {
    const books = await BookModel.find({});

    return books;
  }

  public async ListBooksByTag(tag: string): Promise<IBook[]> {
    const books = await BookModel.find({ tags: tag });

    return books;
  }

  public async ListBookByTitle(title: string): Promise<IBook[]> {
    const books = await BookModel.find({ title: new RegExp(title, 'gi') });

    return books;
  }

  public async RegisterNewBook(book: IBook): Promise<IBook> {
    const bookCreated = await BookModel.create(book);

    return bookCreated;
  }

  public async DeleteBookById(id: string): Promise<void> {
    await BookModel.findByIdAndDelete(id);
  }
}

export default BookController;