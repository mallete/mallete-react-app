/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';

const GenericTable = (props) => {
    /**
     * @tableData
     * tableData = {
     *  headers: [
     *      {
     *          displayName,
     *          codeName
     *      }
     *  ],
     *  rows:[
     *      {
     *          extraClass: ""
     *          columns:[
     *              {
     *                  propName: ""
     *                  content: "Text Or Component"
     *                  extraClass: "",
     *              }
     *          ]
     *      }
     *  ]
     */
    const { headers, rows } = props
    console.log({ headers, rows })
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </>
    );
}

export default GenericTable;