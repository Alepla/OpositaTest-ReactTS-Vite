import cleanNonSet from "../helpers/cleanNonSet"

export type JSONRecord = Record<string, unknown>
export default class SuperFetch {
  static async get(baseUrl: string, queryParams?: Record<string, string>): Promise<JSONRecord> {
    const endpoint: Endpoint = new Endpoint(baseUrl)
    endpoint.setQuery(queryParams)
    return await this.call("GET", endpoint.toUrl())
  }

  private static async call(method: string, endpoint: string): Promise<JSONRecord> {
    const response: Response = await fetch(endpoint, this.requestOptions(method))
    if (response.status >= 400) throw new Error()
    return await response.json()
  }

  private static requestOptions(method: string): JSONRecord {
    const options: JSONRecord = {
      method,
      headers: this.headers(),
    }
    return cleanNonSet(options)
  }

  private static headers(): Record<string, string> {
    const result: Record<string, string> = {
      "content-type": "application/json;charset=UTF-8",
    }
    return result
  }
}

class Endpoint {
  private readonly QUERY_SYMBOL: string = "?"
  private readonly QUERY_SEPARATOR: string = "&"
  private baseUrl: string
  private query: string = ""

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  setQuery(params?: Record<string, string>): void {
    let result: string = ""
    result += this.QUERY_SYMBOL
    for (const param in params) {
      result += `${param}=${params[param]}`
      result += this.QUERY_SEPARATOR
    }
    result = result.slice(0, -1)
    this.query = result
  }

  toUrl(): string {
    return encodeURI(this.baseUrl + this.query)
  }
}
