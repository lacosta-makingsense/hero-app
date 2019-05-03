import axios from 'axios';
import md5 from 'md5';

import config from '../config';
import { Hero } from '../types/hero';

export class MarvelService {

  private getAuthParams() {
    const ts = Math.round(Date.now() / 1000);

    return {
      ts,
      apiKey: config.marvel.publicKey,
      hash: md5(`${ts}${config.marvel.privateKey}${config.marvel.publicKey}`)
    };
  }

  private async request<T>(url: string, params = {}): Promise<T> {
    params = { ...params, ...this.getAuthParams() };

    const test = await axios.get<T>(url, { params });

    return test.data;
  }

  // TODO: Add support for pagination and search
  public async getHeroes(): Promise<Hero[]> {
    const url = config.marvel.server + config.marvel.endpoints.heroes.get;

    return this.request(url);
  }

  public async getHero(id: string): Promise<Hero> {
    const url = config.marvel.server + config.marvel.endpoints.heroes.getById;

    return this.request(url.replace(':id', id));
  }
}

export const marvelService = new MarvelService();
