import type { Commitment } from 'entities/commitment'

export const commitment1: Commitment = {
  id: '1',
  trancheId: '1',
  level: 'primary',
  nature: 'main',
  status: 'active',
  principal: 100,
  priority: 'flex',
  dueDate: new Date('2020-03-31'),
  createDate: new Date('2020-01-01'),
  activeDate: new Date('2020-01-12')
}
