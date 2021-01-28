export interface IConfig {
  myProp1: {
    setting1: string
    setting2?: number
  }
  myProp2?: string
}

export type Environments = 'production' | 'dev'

export interface IRequestBody1 {
  data: string
  otherProp: string
  env: Environments
}

export interface IResponseBody1 {
  result: string
}
