interface BasicOption {
  label: string
  value: string
}

type SelectOption = BasicOption

type TabOption = BasicOption

interface BasicUserInfo {
  avatar: string
  birthday: string
  deptId: number
  email: string
  gender: number
  homePath?: string
  industryId?: string
  nickName: string
  password: string
  permissionList: string[]
  phone: string
  realName: string
  roles?: any[]
  status: boolean
  tenantId: string
  tenantName: string
  userId: string
  username: string
}

type ClassType = Array<object | string> | object | string

export type { BasicOption, BasicUserInfo, ClassType, SelectOption, TabOption }
