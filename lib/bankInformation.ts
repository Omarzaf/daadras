export interface BankAccount {
  name: string
  accountNumber: string
  iban: string
  title: string
  type: 'bank' | 'mobile'
}

export const bankAccounts: BankAccount[] = [
  {
    name: "Silk Bank Limited",
    accountNumber: "00732009302525",
    iban: "PK26SAUD0000732009302525",
    title: "Muhammad Asad Zaheer",
    type: "bank"
  },
  {
    name: "JazzCash",
    accountNumber: "03320044001",
    iban: "PK31JCMA0603923320044001",
    title: "FATEH MUHAMMAD GHAURI",
    type: "mobile"
  },
  {
    name: "EasyPaisa",
    accountNumber: "03320044001",
    iban: "PK37TMFB0000000033636749",
    title: "FATEH MUHAMMAD GHAURI",
    type: "mobile"
  }
]
