export interface GroupingData {
  id: string
  name: string
  creationDate: Date
  description?: string
}

export interface Grouping extends GroupingData {
  label: string
}
