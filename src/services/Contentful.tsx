import { Product } from "../common/types";
import { Entry, EntryCollection, ContentfulClientApi } from "contentful";
const contentful = require("contentful");

class ContentfulImpl {
  client: ContentfulClientApi;

  constructor() {
    this.client = contentful.createClient({
      space: "2kv65giue9pw",
      accessToken: "nd15J23hdG9drmm4hmz7WqK5W7hq8-akCeXgLnEGh58",
    });
  }

  public getProducts(type: string): Promise<Entry<Product>[]> {
    return this.client
      .getEntries<Product>({
        content_type: type,
        limit: 300,
      })
      .then((response: EntryCollection<Product>) => {
        return response.items;
      })
      .catch((err: any) => {
        throw new Error(err.message);
      });
  }
}

export const ContentfulContent = new ContentfulImpl();
