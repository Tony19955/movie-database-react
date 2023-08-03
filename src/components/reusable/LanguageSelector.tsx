import { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

import Icon from './Icon';

import { LANGUAGE_EN, LANGUAGE_SK } from '../../constants';
import { StyledLanguageButton, StyledLanguageSelectorWrapper } from './LanguageSelector.styles';

const LanguageSelector = (): JSX.Element => {
    const { i18n } = useTranslation();
    const activeLanguage = i18n.language;

    const handleSelectLanguage = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        i18n.changeLanguage(e.currentTarget.value);
    };

    return (
        <StyledLanguageSelectorWrapper>
            <StyledLanguageButton active={activeLanguage === LANGUAGE_EN} value={LANGUAGE_EN} onClick={handleSelectLanguage}>
                <Icon id="united-kingdom-icon" className="united-kingdom-icon" />
            </StyledLanguageButton>
            <StyledLanguageButton active={activeLanguage === LANGUAGE_SK} value={LANGUAGE_SK} onClick={handleSelectLanguage}>
                <Icon id="slovakia-icon" className="slovakia-icon" />
            </StyledLanguageButton>
        </StyledLanguageSelectorWrapper>
    );
};

export default LanguageSelector;
