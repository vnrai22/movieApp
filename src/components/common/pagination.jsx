import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);

    if(pagesCount === 1 ) return null;
    const pages = _.range(1, pagesCount + 1);

    console.log(pages);

    return <nav>
        <ul className="pagination">
        {
            pages.map(page => (
                <li key = {page} className="pag-item">
                    <a  
                    onClick = {()=> onPageChange(page)}
                    className="page-link">{page}</a>
                </li>
        ))}
            
        </ul>
    </nav>;
}
 
export default Pagination;