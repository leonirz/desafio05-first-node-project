import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface createTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}



class TransactionsRepository {
  private transactions: Transaction[];
  //private balance : Balance;

  constructor() {
    this.transactions = [];

  }

  
  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }


  public getBalance(): Balance {
    // TODO
    const { income, outcome } = this.transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'income') {
          accumulator.income += transaction.value;
        } else {
          accumulator.outcome += transaction.value;
        }
        return accumulator;
      },
      { income: 0, outcome: 0 },
    );

    const total = income - outcome;

    return { income, outcome, total };

  }

  public create({ title, value, type } : createTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({title,value,type});

    this.transactions.push(transaction);
   
    return transaction;
  }
}

export default TransactionsRepository;
