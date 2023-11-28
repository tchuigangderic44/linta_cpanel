import { useEffect, useState } from 'react'

type Props = {
    nextToken?: string,
    onNext: Function,
    onPrevious: Function,
    searchParams?: Object,
    onclearPagination: Function,
}

export default function Pagination({ nextToken, onNext, onPrevious, searchParams, onclearPagination }: Props) {
    const [page, setpage] = useState<number>(1);
    const [maxpage, setmaxpage] = useState<number>(1);

    useEffect(() => {
        console.log('searchParams',searchParams);
        clearPagination();
    }, [searchParams])

    function clearPagination() {
        setpage(1);
        setmaxpage(1);
        onclearPagination(1);
    }

    function handlePrevious() {
        onPrevious(page - 1);
        setpage(page - 1);
    }
    function handleNext() {
        onNext(page + 1)
        setpage(page + 1);
        if((page + 1)>maxpage){
            setmaxpage(page + 1);
        }
    }

    return (
        <div className='pagination flex items-center justify-center gap-5 my-10'>
            <button type="button" disabled={page == 1} className='dark:bg-boxdark rounded-full hover:dark:bg-white cursor-pointer disabled:bg-0 disabled:hover:dark:bg-transparent disabled:dark:bg-transparent' onClick={handlePrevious}>
                <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F" />
                </svg>
            </button>
            <span><span className='text-bold'>Page {page}</span></span>
            <button type="button" disabled={!nextToken && page==maxpage} className='dark:bg-boxdark rounded-full hover:dark:bg-white cursor-pointer disabled:bg-0 disabled:hover:dark:bg-transparent disabled:dark:bg-transparent' onClick={handleNext}>
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F" />
                </svg>
            </button>
        </div>
    )
}