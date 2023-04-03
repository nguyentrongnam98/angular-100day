export interface Author {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  gender: string,
  ipAddress: string,
}

export const listAuthor : Author[] = [
  {
    id: 1,
    firstName: 'Flora',
    lastName: 'Twell',
    email: 'ftwell0@phoca.cz',
    gender: 'Female',
    ipAddress: '99.180.237.33',
  },
  {
    id: 2,
    firstName: 'Priscella',
    lastName: 'Signe',
    email: 'psigne1@berkeley.edu',
    gender: 'Female',
    ipAddress: '183.243.228.65',
  }
]
