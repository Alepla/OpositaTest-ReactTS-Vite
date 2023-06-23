export class HelpersFixture {
  private static readonly aName: string = "a name"
  private static readonly anId: string = "an id"

  static readonly aValidObject: { id: string; name: string } = { id: this.anId, name: this.aName }
  static readonly anInvalidObject: { id: undefined; name: string } = {
    id: undefined,
    name: this.aName,
  }
  static readonly aCleanedObject: { name: string } = { name: this.aName }
}
