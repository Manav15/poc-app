import React from 'react';
import CollapsibleTable from './TabContent';
import styles from './Content.module.css'


export const ContentComponent = () => {
    return (
        <div>
            
            <div className={styles.Tables}>
                {CollapsibleTable()}
            </div>
        </div>
    )
}

