import React from 'react';
import TodoAddComponent from "~/components/todo/addComponent";

function AddPage() {
    return (
        <div>
            <div className={'text-4xl'}>Add Page</div>
            <TodoAddComponent/>
        </div>
    );
}

export default AddPage;