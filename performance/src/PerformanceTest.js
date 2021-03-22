import React, {useState} from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import { testCode } from './performanceHelpers';

export const PerformanceTest = () => {
    const [code, setCode] = useState("");
    const [results, setResults] = useState([]);

    const runTests = () => {
        const results = [];
        for (let loop = 0; loop < 11; loop++) {
            results.push(testCode(code));
            setResults(results);
        };
    };

    return (
        <div className="PerformanceTest">
            <TextField
                id="code-input"
                label="Code"
                variant="outlined"
                fullWidth={true}
                multiline
                rows={12}
                value={code}
                onChange={event => setCode(event.target.value)}
            />
            <Box m={2}> 
                <Button variant="contained" color="primary" onClick={() => runTests()}>Submit</Button>
            </Box>
            <strong>{`Average: ${(results.reduce((a, b) => (a + b)) / results.length).toFixed(4)} milliseconds to generate.`}</strong>
            {results.map((result, index) => {
                if (index === 0) {
                    return <del><p key = {index}>{`Run ${index} took ${result.toFixed(4)} milliseconds to generate.`}</p></del>
                } 
                return <p key = {index}>{`Run ${index} took ${result.toFixed(4)} milliseconds to generate.`}</p>
            })}
        </div>
    );
} 
