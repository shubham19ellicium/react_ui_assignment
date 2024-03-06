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


        formData: formData,
        setFormData: setFormData,

        circleFlagRef:circleFlagRef

    }



    return <DataContext.Provider value={contextObj}>
        {children}
    </DataContext.Provider>

}