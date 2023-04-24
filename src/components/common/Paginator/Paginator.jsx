import React, {useState} from "react";
import css from './Paginator.module.css'
import cn from "classnames"

import left from './../../../assets/images/left.png'
import right from './../../../assets/images/right.png'

const Paginator = ({portionSize = 10, ...props}) => {
    console.log(props.totalUsersCount)
    // let pagesCount = 100;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={css.paginator}>
        {
            portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>

                <img src={left} alt="prev"/>
            </button>
        }
        {
            pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => {
                    return <span className={cn({
                        [css.selectedPage]: props.currentPage === page
                    }, css.pageNumber)}
                                 key={page}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                 }
                                 }>{page}</span>
                })
        }
        {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }
            }>
                <img src={right} alt="next"/>
            </button>}
        {/*{pages.map(page => {
            return (
                <span
                    className={props.currentPage === page && css.selectedPage}
                    onClick={() => {
                        props.onPageChanged(page);
                    }}>{page}<span> </span>
                           </span>
            )
        })}*/}
    </div>

}

export default Paginator;