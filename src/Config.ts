import { Environments, IConfig } from './typings'

const Config: Record<Environments, IConfig> = {
  dev: {
    myProp1: {
      setting1: 'devValue1',
      setting2: 2,
    },
  },
  production: {
    myProp1: {
      setting1: 'productionValue1',
    },
    myProp2: 'productionValue2',
  },
}

export default Config
