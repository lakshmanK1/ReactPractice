import './ExpenseItem.css';

function ExpenseItem(){
    const No_Of_Items = {
        First : 'Item 1',
        Second : 'Item 2',
        Third : 'Item 3'
    }

    const items_list = {
        listOne : 'Food',
        listTwo : 'Petrol',
        listThree : 'Movies'
    }
    const items_price = {
        listOnePrice : 'Rs:100/-',
        listTwoPrice : 'Rs:180/-',
        listThreePrice : 'Rs:200/-'
    }

    const LocationOfExpenditure = {
        locaOne : 'kakinada-AndhraPradesh-India',
        locaTwo : 'amalapuram-AndhraPradesh-India',
        locaThree : 'rajamundry-AndhraPradesh-India'
    }


    return (
        <div>
        <div className='expense-item'>
            <div className='items'>{No_Of_Items.First}</div>
            <div className='expense-item__description'>
                <h2>{items_list.listOne}</h2>
                <h2>{LocationOfExpenditure.locaOne}</h2>
                <div className='expense-item__price'>{items_price.listOnePrice}</div>
            </div>
        </div>

        <div className='expense-item'>
            <div className='items'>{No_Of_Items.Second}</div>
            <div className='expense-item__description'>
                <h2>{items_list.listTwo}</h2>
                <h2>{LocationOfExpenditure.locaTwo}</h2>
                <div className='expense-item__price'>{items_price.listTwoPrice}</div>
            </div>
        </div>

        <div className='expense-item'>
            <div className='items'>{No_Of_Items.Third}</div>
            <div className='expense-item__description'>
                <h2>{items_list.listThree}</h2>
                <h2>{LocationOfExpenditure.locaThree}</h2>
                <div className='expense-item__price'>{items_price.listThreePrice}</div>
            </div>
        </div>
        </div>    
    );
}

export default ExpenseItem;
