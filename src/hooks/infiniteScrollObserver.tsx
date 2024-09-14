import React, {useRef, useEffect} from 'react'

type Props = {
    referencedVariable  : any,
    fetchData : any,
    targetId : string
}

const InfiniteScrollObserver : React.FC<Props> = ({referencedVariable, fetchData , targetId }) => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if(entries[0].isIntersecting){
                    fetchData();
                }
            },
            {
                root : document.querySelector(targetId),
                threshold : 1,
                rootMargin : "20px"
            }
        );

        if(referencedVariable.current){
            observer.observe(referencedVariable.current);
        }

        return () => {
            if(referencedVariable.current){
                observer.unobserve(referencedVariable.current);
            }
        }
        
    }, [referencedVariable])

    return <div></div>

}

export default InfiniteScrollObserver;