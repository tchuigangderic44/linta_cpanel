//hook for change

import i18n from "../../../i18n";

const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
}

type Props = {}

export default function SwitchLanguage({ }: Props) {
    return (
        <div>
            <div>
                <button onClick={() => changeLanguage('fr')}>fr</button>
                <button onClick={() => changeLanguage('en')}>en</button>
                {/* <h1>{t('Welcome to React')}</h1> */}
            </div>
        </div>
    )
}

