import React, {useState} from 'react'
import "./FormSection.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { UserTag } from '../ItemSection/ItemSectionElements';

const FormSection = () => {
    const [startDate, setStartDate] = useState(new Date());
    const userTags = ["Hello", "Bill", "Example"];

    

    return (
        <div className="form-background">
            <h1>Connor's TodoList!</h1>

            <form>
                <label>
                    Title: <input type="text" name="todoItemName" />
                </label>
                
                <label>
                    Tags: <input type="text" name="todoTags"/> <button>Create new tag</button>
                </label>
                <div className="todoTagsDisplayed">
                    {/* Here, I will use react to show the different tags */}
                    {userTags.map((value, index) => {
                        return (
                            <UserTag id={index}>{value}</UserTag>
                        )
                    })}
                </div>
                <label>
                    Due Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="mm/dd/yyyy"/>
                </label>
                
                <button type="submit">Create Item</button>
            </form>
        </div>
    )
}

export default FormSection;
