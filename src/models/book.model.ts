import { Schema, model } from 'mongoose';

export interface IBook {
  title: string,
  author: string,
  description: string,
  pages: number,
  tags: string[]
}

const BookSchema = new Schema<IBook>({
  title: String,
  author: String,
  description: String,
  pages: Number,
  tags: [String]
});

export const BookModel = model('Book', BookSchema);
