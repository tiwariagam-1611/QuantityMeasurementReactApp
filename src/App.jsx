import { useState, useEffect } from "react";
import { operate, getHistory } from "./services/api";

import TypeSelector from "./components/TypeSelector";
import ActionSelector from "./components/ActionSelector";
import InputSection from "./components/InputSection";
import Operator from "./components/Operator";
import Result from "./components/Result";
import History from "./components/History";

import "./styles/main.scss";
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 

gsap.registerPlugin(useGSAP);

function App() {
    
    const container = useRef();
    useGSAP(() => {
		gsap.from('.box', {x:-1000,duration:2}); 
	},{ scope: container });

    const [type, setType] = useState("LENGTH");
    const [action, setAction] = useState("COMPARISON");

    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");

    const [fromUnit, setFromUnit] = useState("KM");
    const [toUnit, setToUnit] = useState("M");

    const [operator, setOperator] = useState("+");

    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        const data = await getHistory();
        setHistory(data);
    };

    const handleCalculate = async () => {
        if (!fromValue) return;

        const payload = {
        thisQuantityDTO: {
            value: parseFloat(fromValue),
            unit: fromUnit,
            measurementType: type,
        },
        thatQuantityDTO: {
            value: parseFloat(toValue || 0),
            unit: toUnit,
            measurementType: type,
        },
        };

        const opMap = {
        CONVERSION: "CONVERT",
        COMPARISON: "COMPARE",
        ARITHMETIC: operator === "+" ? "ADD" :
                    operator === "-" ? "SUBTRACT" :
                    operator === "*" ? "MULTIPLY" : "DIVIDE"
        };

        const finalOp = opMap[action] || action;

        const res = await operate(finalOp, payload);

        setResult(res.resultValue || res.resultString);
        loadHistory();
    };

    return (
        <div className="app" ref={container}>
        <h1 className="header box">Quantity Measurement</h1>

        <TypeSelector type={type} setType={setType} />
        <ActionSelector action={action} setAction={setAction} />

        <InputSection
        type={type}
        fromValue={fromValue}
        setFromValue={setFromValue}
        toValue={toValue}
        setToValue={setToValue}
        fromUnit={fromUnit}
        setFromUnit={setFromUnit}
        toUnit={toUnit}
        setToUnit={setToUnit}
        action={action}
        />

        {action === "ARITHMETIC" && (
            <Operator operator={operator} setOperator={setOperator} />
        )}

        <button className="btn" onClick={handleCalculate}>
            Calculate
        </button>

        <Result result={result} />
        <History history={history} />
        </div>
    );
}

export default App;