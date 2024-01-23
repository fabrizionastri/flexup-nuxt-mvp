export interface LogData {
  id: string
  entityType: string // which type of entity is concerned by the log: order, product, commitment, ...
  entityId: string
  eventId: string // which status change or event is concerned by the log: order created, order updated, order deleted, ...
  date: Date
  description: string // a description of the event
  createdByMemberId: string // this tracks both the account and user who triggered the event
}
