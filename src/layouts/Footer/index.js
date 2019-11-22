import React from 'react';

import { Icon } from 'antd';

import { trans } from '@/util/i18n.js';

import styles from './index.less'

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.globalFooter}>
                <div className={styles.copyright}>
                    Copyright <Icon type="copyright" /> {trans('global.footer', '2018 杭州云谷学校')}
                </div>
                
            </footer>
            
        )
    }
}


export default Footer