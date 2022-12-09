/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import type { Bread } from '../../models';


const Breadcrumb = (props: any) => {
    return (
        <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">{props.bread.title}</h4>
                <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href="javascript: void(0);">{props.bread.subtitle}</a></li>
                        <li className="breadcrumb-item active">{props.bread.page}</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb