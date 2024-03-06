import { createContext, useState } from "react";

export const SelectPlainContext = createContext({
    // selectPlain: "",
    // selectPlainDuration: "",
    // selectPlainUI: "",
    // selectedPlainPrice: "",
    selectPlanObject: {
        selectPlain: "",
        selectPlainDuration: "",
        selectPlainUI: "",
        selectedPlainPrice: "",
    },
    setSelectPlanObject: () => { }
})

export default function SelectPlainProvider({ children }) {
    // const [selectPlain, setSelectPlain] = useState("");
    // const [selectPlainDuration, setSelectPlainDuration] = useState("monthly");
    // const [selectPlainUI, setSelectPlainUI] = useState(null);
    // const [selectedPlainPrice, setSelectedPlainPrice] = useState(0);

    const [selectPlanObject, setSelectPlanObject] = useState({
        selectPlain : "",
        selectPlainDuration : "monthly",
        selectPlainUI : null,
        selectedPlainPrice : 0
    })

    const selectContextObj = {
        selectPlanObject,
        setSelectPlanObject
        // selectPlain: selectPlain,
        // selectPlainDuration: selectPlainDuration,
        // selectPlainUI: selectPlainUI,
        // selectedPlainPrice: selectedPlainPrice,
        // setSelectPlain: setSelectPlain,
        // setSelectPlainDuration: setSelectPlainDuration,
        // setSelectPlainUI: setSelectPlainUI,
        // setSelectedPlainPrice: setSelectedPlainPrice,
    }

    return <SelectPlainContext.Provider value={selectContextObj}>
        {children}
    </SelectPlainContext.Provider>
}