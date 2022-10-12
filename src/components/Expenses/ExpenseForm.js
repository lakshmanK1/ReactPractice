import './ExpenseForm.css';
function ExpenseForm(){
    const consoleForm = (event) => {
        console.log(event.target.value);
    } 

    return(
        <div className="new-expense">
        <form onChange={consoleForm}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text'></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number'></input>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date'></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        </div>
    );
}
export default ExpenseForm;