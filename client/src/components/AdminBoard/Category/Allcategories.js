import React from 'react'
import Category from './category';
import { Link } from 'react-router-dom';
import "../prodAndCteg-List.scss"

let Categories = () => {
    return (
        <div className='prodAndCteg-List'>
            <div className='prodAndCteg-List__titleContainer'>
                <h3 className='prodAndCteg-List__title'>Category List</h3>
                <Link to='addCategory'>
                    <button className='prodAndCteg-List__add-btn'>Add category</button>
                </Link>
            </div>
            <div className='prodAndCteg-List__table'>
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Editing</th>
                        </tr>
                    </thead>
                    <tbody>

                        <Category />

                    </tbody>
                </table>
            </div></div>
    )
}


export default Categories;