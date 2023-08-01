import Icon from './Icon';

import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import { StyledSearchInput, StyledSearchWrapper } from './Search.styles';

const Search = forwardRef(({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref: Ref<HTMLInputElement>): JSX.Element => {
    return (
        <StyledSearchWrapper>
            <Icon id="search-icon" className="search-icon" />
            <StyledSearchInput {...props} ref={ref} />
        </StyledSearchWrapper>
    );
});

Search.displayName = 'Search';

export default Search;
