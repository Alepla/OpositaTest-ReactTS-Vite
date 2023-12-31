import SuperFetch from "../../src/infraestructure/superFetch"
import { vi } from "vitest"
import { InfraestructureFixture } from "../fixtures/infraestructure"

describe("SuperFetch", () => {
  it("should call the endpoint with the correct method and URL", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      status: 200,
      json: vi.fn().mockResolvedValue(InfraestructureFixture.aResponse),
    })
    global.fetch = mockFetch

    const result = await SuperFetch.get(
      InfraestructureFixture.anUrl,
      InfraestructureFixture.aQueryParams
    )

    expect(mockFetch).toHaveBeenCalledWith(InfraestructureFixture.anExpectedUrl, expect.anything())
    expect(result).toEqual(InfraestructureFixture.aResponse)
  })

  it("should throw an error if the response status is 400 or higher", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      status: 400,
    })
    global.fetch = mockFetch

    await expect(SuperFetch.get(InfraestructureFixture.anUrl)).rejects.toThrow(Error)
  })
})
