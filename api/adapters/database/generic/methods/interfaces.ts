import type { Entity, EntityName } from 'lib/entities/entity'

export interface CreateGetById {
  <T extends Entity>(entityName: EntityName): (id: string) => Promise<T | undefined>
}

export interface CreateGetByProperties {
  <T extends Entity>(
    entityName: EntityName
  ): (
    property1: keyof T,
    value1: unknown,
    property2: keyof T,
    value2: unknown,
    andOr?: 'and' | 'or'
  ) => Promise<T[]>
}

export interface CreateGetByProperty {
  <T extends Entity>(entityName: EntityName): (property: keyof T, value: unknown) => Promise<T[]>
}

export interface CreateGetBySelectedProperties {
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T,
    property2: keyof T,
    andOr?: 'and' | 'or'
  ): (value1: unknown, value2: unknown) => Promise<T[]>
}

export interface CreateGetBySelectedProperty {
  <T extends Entity>(entityName: EntityName, property: keyof T): (value: unknown) => Promise<T[]>
}

export interface CreateGetOneByProperty {
  <T extends Entity>(
    entityName: EntityName
  ): (property: keyof T, value: unknown) => Promise<T | undefined>
}

export interface CreateGetOneBySelectedProperties {
  <T extends Entity>(
    entityName: EntityName,
    property1: keyof T,
    property2: keyof T,
    andOr: 'and' | 'or'
  ): (value1: unknown, value2: unknown) => Promise<T | undefined>
}

export interface CreateGetOneBySelectedProperty {
  <T extends Entity>(
    entityName: EntityName,
    property: keyof T
  ): (value: unknown) => Promise<T | undefined>
}

export interface AdapterMethods {
  createGetById: CreateGetById
  createGetByProperties: CreateGetByProperties
  createGetByProperty: CreateGetByProperty
  createGetBySelectedProperties: CreateGetBySelectedProperties
  createGetBySelectedProperty: CreateGetBySelectedProperty
  createGetOneByProperty: CreateGetOneByProperty
  createGetOneBySelectedProperties: CreateGetOneBySelectedProperties
  createGetOneBySelectedProperty: CreateGetOneBySelectedProperty
}
