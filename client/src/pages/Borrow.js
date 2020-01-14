import React from 'react';
import { Route } from 'react-router-dom';
import { BorrowWrapper } from 'components/Regibooks';
import { Borrowbooks, Regibooks } from 'containers/Regi';


const Borrow = () => (
    <BorrowWrapper>
        <Route path="/main/borrow/:id" component={Borrowbooks} />
    </BorrowWrapper>
);

export default Borrow;