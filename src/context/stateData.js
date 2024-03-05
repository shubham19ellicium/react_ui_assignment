import { createContext, useEffect, useRef, useState } from "react";

export const DataContext = createContext({
    name: "",
    phone: "",
    email: "",
})

export default function DataProvider({ children }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [stepNumber, setStepNumber] = useState(1);
    const [circleFlag, setCircleFlag] = useState({
        circl1: true,
        circl2: false,
        circl3: false,
        circl4: false,
    });

    const circleFlagRef = useRef({
        circl1: true,
        circl2: false,
        circl3: false,
        circl4: false,
    })
    

    const [selectScope, setSelectScope] = useState(1)

    const [noneFlag, setNonFlag] = useState(false)

    const handleStepChange = (target) => {
        if (selectScope >= parseInt(target)) {
            setStepNumber(target);
        }
    };

    const handleIncrementStepChange = (e) => {
        setStepNumber((prev) => prev + 1);
        setSelectScope((prev) => prev + 1)
    };

    const handleDecrementStepChange = (e) => {
        setStepNumber((prev) => prev - 1);
    };

    // useEffect(() => {
    //     console.log("TARGET :: ",stepNumber);
    //     switch (stepNumber) {
    //         case 1:
    //             circleFlagRef.current = {
    //                 circl1: true,
    //                 circl2: false,
    //                 circl3: false,
    //                 circl4: false,
    //             };
    //             console.log("---------------------------1 :: ",circleFlagRef.current);
    //             break;

    //         case 2:
    //             circleFlagRef.current = {
    //                 circl1: false,
    //                 circl2: true,
    //                 circl3: false,
    //                 circl4: false,
    //             };
    //             console.log("---------------------------2 :: ",circleFlagRef.current);
    //             break;

    //         case 3:
    //             circleFlagRef.current = {
    //                 circl1: false,
    //                 circl2: false,
    //                 circl3: true,
    //                 circl4: false,
    //             };
    //             console.log("---------------------------3 :: ",circleFlagRef.current);
    //             break;

    //         case 4:
    //             circleFlagRef.current = {
    //                 circl1: false,
    //                 circl2: false,
    //                 circl3: false,
    //                 circl4: true,
    //             };
    //             console.log("---------------------------4 :: ",circleFlagRef.current);
    //             break;

    //         default:
    //             break;
    //     }

    // }, [stepNumber]);

    const [selectPlain, setSelectPlain] = useState("");
    const [selectPlainDuration, setSelectPlainDuration] = useState("monthly");
    const [selectPlainUI, setSelectPlainUI] = useState(null);
    const [selectedPlainPrice, setSelectedPlainPrice] = useState({});

    const [formData, setFormData] = useState({
        onlineServices: false,
        largerStorage: false,
        customizableProfile: false,
    });

    const contextObj = {
        name: name,
        email: email,
        phone: phone,
        setName: setName,
        setEmail: setEmail,
        setPhone: setPhone,

        stepNumber: stepNumber,
        setStepNumber: setStepNumber,
        circleFlag: circleFlag,
        setCircleFlag: setCircleFlag,
        noneFlag: noneFlag,
        setNonFlag: setNonFlag,
        handleStepChange: handleStepChange,
        handleIncrementStepChange: handleIncrementStepChange,
        handleDecrementStepChange: handleDecrementStepChange,

        selectPlain: selectPlain,
        selectPlainDuration: selectPlainDuration,
        selectPlainUI: selectPlainUI,
        selectedPlainPrice: selectedPlainPrice,
        setSelectPlain: setSelectPlain,
        setSelectPlainDuration: setSelectPlainDuration,
        setSelectPlainUI: setSelectPlainUI,
        setSelectedPlainPrice: setSelectedPlainPrice,

        formData: formData,
        setFormData: setFormData,

        circleFlagRef:circleFlagRef

    }



    return <DataContext.Provider value={contextObj}>
        {children}
    </DataContext.Provider>

}