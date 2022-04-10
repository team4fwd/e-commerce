import React from 'react'
import Category from './category';
let Categories = () => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Editing</th>
                </tr>
            </thead>
            <tbody>

               <Category/>
               
            </tbody>
        </table>
    )
}


export default Categories;