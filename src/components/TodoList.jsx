import React from "react"
import FormSection from "./FormSection/FormSection";
import ItemSection from "./ItemSection/ItemSection";
import SorterSection from "./SorterSection/SorterSection";

function TodoList() {
    return (
        <>
            <FormSection />
            <SorterSection />
            <ItemSection />
        </>
    );
}

export default TodoList;