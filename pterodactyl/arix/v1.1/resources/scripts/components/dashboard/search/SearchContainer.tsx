import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useEventListener from '@/plugins/useEventListener';
import SearchModal from '@/components/dashboard/search/SearchModal';
import Tooltip from '@/components/elements/tooltip/Tooltip';
import { Button } from '@/components/elements/button/index';
import { useTranslation } from 'react-i18next';

export default () => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation('arix/navigation');

    useEventListener('keydown', (e: KeyboardEvent) => {
        if (['input', 'textarea'].indexOf(((e.target as HTMLElement).tagName || 'input').toLowerCase()) < 0) {
            if (!visible && e.metaKey && e.key.toLowerCase() === '/') {
                setVisible(true);
            }
        }
    });

    return (
        <>
            {visible && <SearchModal appear visible={visible} onDismissed={() => setVisible(false)} />}
            <Tooltip placement={'bottom'} content={`${t('search')}`}>
                <Button.Text className={'!block'} onClick={() => setVisible(true)}>
                    <FontAwesomeIcon icon={faSearch} />
                </Button.Text>
            </Tooltip>
        </>
    );
};
