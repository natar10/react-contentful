import { Profile } from "../common/types";
import { Entry, EntryCollection, ContentfulClientApi } from "contentful";
import { CONTENTFUL_CREDENTIALS } from "../common/constants";
const contentful = require("contentful");

class ContentfulImpl {
  client: ContentfulClientApi;

  constructor() {
    this.client = contentful.createClient({
      space: CONTENTFUL_CREDENTIALS.space,
      accessToken: CONTENTFUL_CREDENTIALS.accessToken,
    });
  }

  public getProfiles(type: string): Promise<Entry<Profile>[]> {
    return this.client
      .getEntries<Profile>({
        content_type: type,
        limit: 300,
      })
      .then((response: EntryCollection<Profile>) => {
        return response.items;
      })
      .catch((err: any) => {
        throw new Error(err.message);
      });
  }
}

export const ContentfulContent = new ContentfulImpl();
