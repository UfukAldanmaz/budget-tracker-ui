import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import ExpenseItem from '../../components/expense/ExpenseItem';
import Popup from '../../components/expense/Popup';
const options = [

    { value: 'Ev', label: 'Ev' },
    { value: 'Elektrik Faturası', label: 'Elektrik Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
    { value: 'Su Faturası', label: 'Su Faturası' },
]
function NewExpense() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [input, setInput] = useState("");
    const [expense, setExpense] = useState([]);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({ label: "Kategori Seçiniz" });
    const [filteredOptions, setFilteredOptions] = useState(options);

    function handleChange(e) {

        const newValue = e.target.value;
        setInput(newValue);
    }

    function addExpense() {
        setExpense(prevExpense => {
            return [...prevExpense, input];
        });
        setInput("");
    }

    function deleteExpenseItem(id) {
        setExpense(prevExpense => {
            return prevExpense.filter((item, index) => {
                return index !== id;
            })
        })
    }

    function filterOptions(searchTerm) {

        setFilteredOptions(
            options.filter((option) => {
                if (searchTerm == "") {
                    return option
                } else if (option.label.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return option
                }
            }))
    }


    return (
        <div className='new-input'>
            <div className="grid-container">

                <label className="form-group" ><strong>Harcama Bilgisi</strong></label>
                <br />
                <div className="grid-item">
                    <input onChange={handleChange} className="form-style" type="number" /></div>
                <div>
                    <button onClick={() => setButtonPopUp(true)}>{selectedCategory.label}</button>
                </div>

                <div className="grid-item">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker value={selectedDate} onChange={handleDateChange} />
                    </MuiPickersUtilsProvider>
                </div>

                <div className="submit">
                    <button onClick={addExpense}>Kaydet</button>
                </div>
                <div>
                    <ul>
                        {expense.map((expenseItem, index) => (
                            <ExpenseItem
                                key={index}
                                id={index}
                                text={expenseItem}
                                onChecked={deleteExpenseItem}
                            />
                        ))}
                    </ul>
                </div>
                <div className="row">
                    <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                        <h3>Kategoriler</h3>
                        <div>

                        </div>
                        <div >
                            <input type='text' placeholder='Search a category' onChange={e => { filterOptions(e.target.value) }}></input>
                            {filteredOptions.length > 0 &&
                                (filteredOptions.map((option, index) => (
                                    <div className="column" key={index}>
                                        <button type='button' className='simple'
                                            onClick={() => { setSelectedCategory(option); setButtonPopUp(false) }}>{option.label}

                                        </button>
                                    </div>

                                )))}
                            {filteredOptions.length <= 0 && (<button>Yeni Kategori Oluştur</button>)}
                        </div>

                    </Popup>
                </div>
            </div>

        </div>

    );
}


export default NewExpense;

/* hookform /  */


