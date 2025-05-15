import React, { useState } from 'react';
import { Trash2, Eye, Pencil } from 'lucide-react'; // use lucide-react for icons

const initialTransactions = [
  {
    id: 'TXN-341220',
    name: 'Ray C. Nichols',
    date: '05/01/2023',
    amount: '$13,987',
    method: 'Mastercard **** 3467',
    paymentType: 'Card Payment',
    agent: 'Michael A. Miner',
    property: 'W. straat 102 DK Deventer',
    status: 'Completed',
    img: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 'TXN-547891',
    name: 'Barbara A. Woods',
    date: '14/02/2023',
    amount: '$11,345',
    method: 'Visa card **** 4722',
    paymentType: 'Card Payment',
    agent: 'Theresa T. Brose',
    property: 'Isaac Tirionplein 100',
    status: 'Completed',
    img: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 'TXN-230477',
    name: 'Robert Mendoza',
    date: '23/03/2023',
    amount: '$16,789',
    method: 'Mastercard **** 7263',
    paymentType: 'Card Payment',
    agent: 'Walter L. Calab',
    property: '123 Maple St, 456 Oak Ave',
    status: 'Canceled',
    img: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 'TXN-674233',
    name: 'Lisa M. Turner',
    date: '01/04/2023',
    amount: '$9,876',
    method: 'PayPal',
    paymentType: 'Online Payment',
    agent: 'Nancy P. Klein',
    property: 'Sunset Blvd 450, LA',
    status: 'Pending',
    img: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 'TXN-982344',
    name: 'Tommy J. Andrews',
    date: '16/04/2023',
    amount: '$12,654',
    method: 'Visa card **** 5981',
    paymentType: 'Card Payment',
    agent: 'Steven R. Daniels',
    property: 'Greenwood Ave, NY',
    status: 'Completed',
    img: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 'TXN-120334',
    name: 'Emily R. Hayes',
    date: '29/04/2023',
    amount: '$8,230',
    method: 'Stripe',
    paymentType: 'Online Payment',
    agent: 'Jessica K. Potter',
    property: 'Palm Drive 88, FL',
    status: 'Pending',
    img: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    id: 'TXN-445921',
    name: 'Samuel D. Grant',
    date: '10/05/2023',
    amount: '$15,500',
    method: 'Mastercard **** 9834',
    paymentType: 'Card Payment',
    agent: 'Dennis E. Foster',
    property: 'Bakersfield 12, CA',
    status: 'Completed',
    img: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    id: 'TXN-778943',
    name: 'Jessica L. Clark',
    date: '19/05/2023',
    amount: '$10,770',
    method: 'Visa card **** 1248',
    paymentType: 'Card Payment',
    agent: 'Harold G. Sanders',
    property: 'Ocean Road 72, NJ',
    status: 'Canceled',
    img: 'https://randomuser.me/api/portraits/women/8.jpg'
  }
];


const TransactionsTable = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const handleDelete = (id) => {
    const updatedList = transactions.filter(txn => txn.id !== id);
    setTransactions(updatedList);
  };

  return (
    <div className="w-full p-4 overflow-x-auto">
      <h2 className="text-xl text-[#5D7186] font-semibold mb-4">All Transactions List</h2>
      <table className="min-w-full bg-white border rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-left text-sm">
          <tr className='text-[#5D7186]'>
            <th className="p-3">Transaction ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Payment Method</th>
            <th className="p-3">Agent</th>
            <th className="p-3">Invested Property</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-t text-[#323A46] hover:bg-gray-50 text-sm">
              <td className="p-3 text-[#604AE3] font-medium">{txn.id}</td>
              <td className="p-3 flex items-center gap-2">
                <img src={txn.img} alt={txn.name} className="w-8 h-8 rounded-full" />
                {txn.name}
              </td>
              <td className="p-3">{txn.date}</td>
              <td className="p-3">{txn.amount}</td>
              <td className="p-3">
                <div>{txn.method}</div>
                <div className="text-xs text-[#323A46]">{txn.paymentType}</div>
              </td>
              <td className="p-3">{txn.agent}</td>
              <td className="p-3">{txn.property}</td>
              <td className="p-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    txn.status === 'Completed'
                      ? 'bg-green-100 text-green-600'
                      : txn.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {txn.status}
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <button className="text-gray-600 hover:text-black">
                  <Eye size={16} />
                </button>
                <button className="text-purple-600 hover:text-purple-800">
                  <Pencil size={16} />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(txn.id)}
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
