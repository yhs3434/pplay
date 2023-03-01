import {isObject} from '@/utils/object';
import {getI18n} from 'react-i18next';
import Config from 'react-native-config';

export type AxiosOptionsType = {
  method?: string;
};

export type TParamsProperties = {
  query?: Record<string, any>;
  body?: Record<string, any>;
};

export class HTTPError extends Error {
  private statusCode: string;
  private key: string;

  constructor(statusCode: string, key: string, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.key = key;
    this.name = 'HTTPError';
  }

  public getStatusCode() {
    return this.statusCode;
  }

  public getKey() {
    return this.key;
  }
}

export class ApiClient {
  [index: string]: any;

  constructor() {
    //
  }

  public get<T extends TParamsProperties>(
    path: string,
    params: T,
    options: Record<string, any>,
  ) {
    return this.call(path, params, {
      ...options,
      method: 'GET',
    });
  }

  public post<T extends TParamsProperties>(
    path: string,
    params: T,
    options: Record<string, any>,
  ) {
    return this.call(path, params, {
      ...options,
      method: 'POST',
    });
  }

  public put<T extends TParamsProperties>(
    path: string,
    params: T,
    options: Record<string, any>,
  ) {
    return this.call(path, params, {
      ...options,
      method: 'PUT',
    });
  }

  public delete<T extends TParamsProperties>(
    path: string,
    params: T,
    options: Record<string, any>,
  ) {
    return this.call(path, params, {
      ...options,
      method: 'DELETE',
    });
  }

  private async call<T extends TParamsProperties>(
    path: string,
    params: T,
    options: {
      headers?: Record<string, any>;
      useHmac?: boolean;
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    },
  ) {
    path = `${Config.API_BASE_URL}/${path}`;

    const headers = options.headers ?? {};
    headers['Content-Type'] = 'application/json';
    headers['Accept-Language'] = getI18n().language;

    // dev (for pending ui)
    await new Promise(r =>
      setTimeout(() => {
        r(true);
      }, 1000),
    );

    return fetch(
      isObject(params?.query)
        ? `${path}?${this.queryBuilder(params.query)}`
        : path,
      {
        method: options.method,
        body: JSON.stringify(params?.body),
        headers,
      },
    );
  }

  private queryBuilder(query: Record<string, string> | undefined | null) {
    if (isObject(query)) {
      const queryParams = new URLSearchParams();

      Object.keys(query ?? {}).forEach(key => {
        queryParams.append(key, query?.[key] ?? '');
      });

      return `${queryParams}`;
    } else {
      return null;
    }
  }
}
