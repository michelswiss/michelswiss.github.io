import React from 'react';
import './styles/Page.css';
/**
 * @design
 * for transition design eachof paper pages.
 * if your finger has strong!!!? update this section
 */
function Page({ children }){
    return <section className={'page'}>{children}</section>
}
export default Page;