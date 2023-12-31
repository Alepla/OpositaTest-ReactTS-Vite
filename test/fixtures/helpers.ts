export class HelpersFixture {
  private static readonly aName: string = "a name"
  private static readonly anId: string = "an id"
  private static readonly aText: string = "a text"
  private static readonly anotherText: string = "another text"

  static readonly anError: string = this.aText
  static readonly aMessage: string = this.anotherText

  static readonly aValidObject: { id: string; name: string } = { id: this.anId, name: this.aName }
  static readonly anInvalidObject: { id: undefined; name: string } = {
    id: undefined,
    name: this.aName,
  }
  static readonly aCleanedObject: { name: string } = { name: this.aName }

  static readonly aUnsortedArray: Array<{ liked: boolean }> = [
    { liked: false },
    { liked: true },
    { liked: false },
    { liked: true },
    { liked: true },
  ]

  static readonly aSortedArray: Array<{ liked: boolean }> = [
    { liked: true },
    { liked: true },
    { liked: true },
    { liked: false },
    { liked: false },
  ]
}
