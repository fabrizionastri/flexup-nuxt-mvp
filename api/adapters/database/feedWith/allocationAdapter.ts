import { AllocationInstance } from 'entities/allocation'

export class AllocationAdapter {
  private _allocations: AllocationInstance[]
  constructor() {
    this._allocations = []
  }
  feedWith(allocations: AllocationInstance[]) {
    this._allocations = allocations
  }
  get(): AllocationInstance[] {
    return this._allocations
  }
  getForAccountAndDate(accountId: string, referenceDate: Date): AllocationInstance[] {
    return this._allocations.filter((allocation) => {
      return allocation.accountId === accountId && allocation.referenceDate <= referenceDate
    })
  }
}
