import React from 'react';
import ExcelJS from 'exceljs';
import { useDispatch } from 'react-redux';
import { ExcelDataAct } from '../../Store/Actions/GeneralStates';

function ExcelReader({columnData, gridData}) {

  const dispatch = useDispatch()

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const workbook = new ExcelJS.Workbook();
      
      try {
        await workbook.xlsx.load(arrayBuffer);

        const result = [];
        workbook.eachSheet((worksheet, sheetId) => {
          worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
              const rowData = {};
              row.eachCell((cell, colNumber) => {
                const filValue = worksheet.getRow(1).getCell(colNumber).value
                const sheetName = worksheet._name;
                const gridId = gridData.filter((fil)=>{return fil.gridName == sheetName})[0].gridId
                const columnName = columnData.filter((fil)=>{
                  return (fil.fieldName == filValue)&&(fil.gridId == gridId)
                })[0].accessor
                rowData[columnName] = cell.value;
                rowData['GRID_ID'] = gridId
              });
              result.push(rowData);
            }
          });
        });
        dispatch(ExcelDataAct(result)); // You can set the result in the component state or perform any other necessary operations
      } catch (error) {
        console.error('Error loading the Excel file:', error);
      }
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      {/* <input type="file"  accept=".xlsx" onChange={handleFileUpload} /> */}
      <div>
        <input type="file" accept=".xlsx"  id="uploadBtn" onChange={handleFileUpload} />
        <label htmlFor="uploadBtn" className='uploadLabel'><i className='bi bi-upload'> Upload file</i></label>
      </div>
    </div>
  );
}

export default ExcelReader;
