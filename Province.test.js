import { Province, sampleProvinceData } from './Province'

describe('province', () => {
  let asia
  beforeEach(() => {
    asia = new Province(sampleProvinceData())
  })
  it('shortfall', () => {
    expect(asia.shortfall).toEqual(5)
  })

  it('profit', () => {
    expect(asia.profit).toEqual(230)
  })
})
