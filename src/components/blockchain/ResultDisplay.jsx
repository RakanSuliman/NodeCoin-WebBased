import React from 'react';
import Card from '../ui/Card';

const ResultDisplay = ({result}) => {
    if(!result) return null;


    return (
        <Card className="mt-4 bg-background border-2 border-secondary">
            <h3 className="font-bold text-primary mb-1">Result:</h3>
            <pre className="whitespace-pre-wrap text-sm">{result}</pre>
        </Card>
    );
};

export default ResultDisplay;