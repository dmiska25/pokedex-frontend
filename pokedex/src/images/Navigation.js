import { Link } from 'react-router-dom';
import {base} from '../App';
import {css} from 'react';

const Navigation = ({meta, queryString, offset}) => {
    const params = new URLSearchParams(queryString);
    const searchString = params.get('name') || '';
    const {current_page, last_page} = meta;
    const link = [
        base,
        searchString!=='' || current_page+offset>1?'?':'', // question mark
        searchString!==''?'name='+searchString:'', // search term
        searchString!=='' && current_page+offset>1?'&':'', // and
        current_page+offset>1?'page='+(current_page+offset):'', // page number
    ].join('');
    
    return (
        <div className='navigation-link'>
            { current_page+offset>0 && current_page+offset<last_page+1 &&
                <Link 
                    to={link}
                >
                    <input 
                        className='navigation-button'
                        alt='navigation button'
                        type='image'
                        src={`${offset>0?'right':'left'}_arrow.png`}
                        css={css`
                            width: 15%;
                            height: auto;
                        `}
                    />
                </Link>
            }
        </div>
    );
};

export default Navigation;
