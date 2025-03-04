import React from 'react';
import Card from "../ui/Card";
import {formatDateForDisplay} from "../../lib/utils/dateFormatter";

const NodeVisualizer = ({nodes, animateNodeDate}) => {
    if (nodes.length === 0) {
        return (
            <div className="flex items-center h-64 text-gray-500">
                No transactions found.
            </div>
        );
    }



    return (
        <div className="space-y-4">
            {nodes.map((node, index) => (
                <Card
                key={index}
                highlighted={node.date === animateNodeDate}
                className="bg-background"
                >
                    <div className="flex justify-between items-center" >
                        <div className="flex items-center space-x-3">
                            <div className="bg-primary-dark/50 text-primary px-2 py-1 rounded text-xs">
                                Node {index + 1}
                            </div>
                            <div className="font-bold text-white">
                                {formatDateForDisplay(node.date)}
                            </div>
                        </div>
                        <div className="text-sm text-gray-400">
                            {node.transactionCount} Transaction{node.transactionCount !== 1 ? 's' : ''}
                        </div>
                    </div>
                    {node.maxTransaction && (
                        <div className="mt-2 pt-2 border-t border-gray-700">
                            <div className="text-xs text-gray-500">Max Transactions:</div>
                            <div className="text-secondary font-bold">
                                {node.maxTransaction.amount} NodeCoins
                            </div>
                            <div className="text-xs text-gray-500">
                                ID: {node.maxTransaction.transactionNum}
                            </div>
                        </div>
                    )}
                </Card>
            ))}
        </div>
    );
};

export default NodeVisualizer;