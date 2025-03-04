import React, {useEffect, useState} from 'react';
import Layout from './components/layout/Layout';
import Card from './components/ui/Card';
import TransactionForm from './components/blockchain/TransactionForm';
import NodeVisualizer from "./components/blockchain/NodeVisualizer";
import ResultDisplay from './components/blockchain/ResultDisplay';
import NodeCoin from './lib/models/NodeCoin';
import BlockChainNode from './lib/models/Node';
import Transaction from './lib/models/Transaction';
import {formatDateForDisplay} from "../src/lib/utils/dateFormatter";

function App() {
  const [nodeCoin] = useState(() => new NodeCoin());
  const [nodes, setNodes] = useState([]);
  const [result, setResult] = useState(null);
  const [animateNode, setAnimateNode] = useState(null);


  useEffect(() =>{
    updateNodes();
  }, []);

  const updateNodes = () => {
    setNodes(nodeCoin.getAll());
  };

  const handleSubmit = ({option,date,amount}) => {
    setResult(null);
    try {
      switch (option) {
        case '1':
          let node = nodeCoin.getNodeByDate(date);

          if(!node) {
            node = new BlockChainNode(date);
            nodeCoin.insert(node);
          }
          const transactionNum = node.transactionCounter;
          node.transactionCounter+=1;
          node.heap.insert(new Transaction(amount,transactionNum));

          setResult(`Transaction added: ${amount} NodeCoins (ID: ${transactionNum})`);
          setAnimateNode(date);
          break;

          case '2':
            node = nodeCoin.getNodeByDate(date);
            if (node&& !node.heap.isEmpty()) {
              const maxTransaction = node.heap.getMax();
              setResult(`Max Transaction ${maxTransaction.amount} NodeCoins (ID: ${maxTransaction.transactionNum})`);
              setAnimateNode(date);
            } else {
              setResult("No transaction found for this date");
            }
            break;

        case '3':
          const removeTransaction = nodeCoin.removeMaxTransaction(date);
          if (removeTransaction) {
            setResult(`Removed transaction ${removeTransaction.amount} NodeCoins (ID: ${removeTransaction.transactionNum})`);
            setAnimateNode(date);
          } else {
            setResult("No transaction found for this date");
          }
        case '4':
          const transactions = nodeCoin.getAllTransactions(date)
              if(transactions&& transactions.length > 0){
                setResult(
                    `All transactions removed for ${formatDateForDisplay(date)}: \n` + transactions.map(t=> `${t.amount} NodeCoins (ID: ${transactionNum}) `).join('\n')
                );
                setAnimateNode(date);
              }else {
                setResult("No transaction found for this date");
              }
              break;
        default:
          setResult('Invalid operation')
      }

      updateNodes();

      setTimeout(() =>{
        setAnimateNode(null);
      }, 1000);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }

  };

  return (
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/*{}*/}
          <div className="md:col-span-1">
            <Card title="Control Panel">
              <TransactionForm onSubmit={handleSubmit}/>
              <ResultDisplay result={result}/>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card title="Blockchain Visualization">
              <NodeVisualizer nodes={nodes} animateNodes={animateNode}/>
            </Card>
          </div>
        </div>
      </Layout>
  );

};

export default App;