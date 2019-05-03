import axios from 'axios';
import md5 from 'md5';

import config from '../config';
import { Hero } from '../types/hero';

const IMAGE_VARIANTS = {
  small: 'standard_small',
  large: 'detail'
};

export class MarvelService {

  private getAuthParams() {
    const ts = Math.round(Date.now() / 1000);

    return {
      ts,
      apikey: config.marvel.publicKey,
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

    const result: any = await this.request(url);

    return result.data.results;
  }

  public async getHero(id: string): Promise<Hero> {
    const url = config.marvel.server + config.marvel.endpoints.heroes.getById;

    const result: any = await this.request(url.replace(':id', id));

    return result.data.results[0];
  }

  public static imageUrl(hero: Hero, format: keyof (typeof IMAGE_VARIANTS)): string {
    return `${hero.thumbnail.path}/${IMAGE_VARIANTS[format]}.${hero.thumbnail.extension}`;
  }
}

export const marvelService = new MarvelService();
