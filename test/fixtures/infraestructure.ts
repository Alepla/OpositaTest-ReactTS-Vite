export class InfraestructureFixture {
  private static readonly aText: string = "test"
  private static readonly aParam: string = "value1"
  private static readonly aSecondParam: string = "value2"

  static readonly anUrl: string = "https://example.com/api"
  static readonly aQueryParams: { param1: string; param2: string } = {
    param1: "value1",
    param2: "value2",
  }
  static readonly anExpectedUrl: string = `${this.anUrl}?param1=${this.aParam}&param2=${this.aSecondParam}`
  static readonly aResponse: { data: string } = { data: this.aText }
}
