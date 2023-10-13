import { CommitmentAdapter } from './commitment.adapter'

describe('Commitment primary adapter', () => {
  let adapter: CommitmentAdapter

  beforeEach(() => {
    adapter = new CommitmentAdapter()
  })

  it('should return an instance of CommitmentAdapter', () => {
    expect(adapter).toBeInstanceOf(CommitmentAdapter)
  })
})
