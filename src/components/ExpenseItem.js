import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div>
        <div className='expense-item'>
            <div className='items'>Item 1</div>
            <div className='expense-item__description'>
                <h2>Food</h2>
                <div className='expense-item__price'>Rs:150/-</div>
            </div>
        </div>

        <div className='expense-item'>
            <div className='items'>Item 2</div>
            <div className='expense-item__description'>
                <h2>Petrol</h2>
                <div className='expense-item__price'>Rs:200/-</div>
            </div>
        </div>

        <div className='expense-item'>
            <div className='items'>Item 3</div>
            <div className='expense-item__description'>
                <h2>Movie</h2>
                <div className='expense-item__price'>Rs:400/-</div>
            </div>
        </div>
        </div>    
    );
}

export default ExpenseItem;
