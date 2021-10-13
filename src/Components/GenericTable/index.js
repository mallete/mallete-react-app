/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'

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
      <Table className="table-responsive-sm table table-striped">
        <thead className="tab-header">
          <tr>
              {
                  headers &&
                  headers.map( ({displayName,codeName}, index) => {
                    return (<th data-header-codename={codeName}>{displayName}</th>)
                  })
              }
          </tr>
        </thead>
        <tbody>
            {
                rows && 
                rows.map( (row,index) => {
                    return (
                        <tr>
                            {
                                row.map( (column,index) => {
                                    return (
                                        <td data-column-name={column.propName} data-column-name-data={""}>
                                            {
                                            column.content
                                            }
                                        </td>
                                    )
                                } )
                            }
                        </tr>
                    )
                })
            }
        </tbody>
      </Table>
    </>
  )
}

export default GenericTable
